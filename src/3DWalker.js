// DepthBuffer.js (c) 2012 matsuda
// Vertex shader program

var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute vec4 a_Color;\n' +
    'attribute vec2 a_TexCoord;\n' +
    'attribute vec4 a_Normal;\n' +
    'uniform mat4 u_MvpMatrix;\n' +
    'uniform mat4 u_ModelMatrix;\n' +

    'varying vec4 v_Position;\n' +
    'varying vec4 v_Color;\n' +
    'varying vec2 v_TexCoord;\n' +
    'varying vec4 v_Normal;\n' +
    'void main() {\n' +
    '  gl_Position = u_MvpMatrix * a_Position;\n' +
    '  v_Position = u_ModelMatrix * a_Position;\n'+
    '  v_Color = a_Color;\n' +
    '  v_TexCoord = a_TexCoord;\n' +
    '  v_Normal = a_Normal;\n'+
    '}\n';

// Fragment shader program
var FSHADER_SOURCE =
    '#ifdef GL_ES\n' +
    'precision mediump float;\n' +
    '#endif\n' +
    'uniform bool u_IsTexture;\n' + // is a texture or not

    'uniform mat4 u_NormalMatrix;\n' +
    'uniform vec3 u_Ambient;\n' +           // 环境光
    'uniform vec3 u_DirectionLight;\n' +    // 平行光方向
    'uniform vec3 u_PointLight;\n' +        // 点光源颜色
    'uniform vec3 u_LightPosition;\n' +     // 点光源位置
    'uniform vec3 u_EyePoint;\n' +          // 眼睛位置
    'uniform sampler2D u_Sampler;\n' +
    'varying vec4 v_Position;\n' +
    'varying vec4 v_Color;\n' +
    'varying vec2 v_TexCoord;\n' +
    'varying vec4 v_Normal;\n' +
    'void main() {\n' +
    '  vec4 color;\n'+
    '  if (u_IsTexture) {\n' + //  Draw in red if mouse is pressed
    '    color = texture2D(u_Sampler, v_TexCoord);\n' +
    '  } else {\n' +
    '    color = v_Color;\n' +
    '  }\n' +
    '  vec3 eyeVec = normalize(vec3(u_EyePoint - v_Position.xyz));\n'+
    '  vec3 normal = normalize(vec3(u_NormalMatrix * v_Normal));\n' +
    // 平行光
    '  vec3 lightVec1 = normalize(u_DirectionLight);\n'+
    '  vec3 halfVec1 = normalize(lightVec1 + eyeVec);\n'+
    '  float nDoth1 = pow(max(dot(normal, halfVec1), 0.0), 32.0);\n'+
    '  vec3 specular1 = color.rgb * nDoth1;\n'+
    '  float nDotL1 = max(dot(normal, lightVec1), 0.0);\n' +
    '  vec3 diffuse1 = color.rgb * nDotL1;\n' +
    // 点光源
    '  vec3 lightVec2 = normalize(vec3(u_LightPosition - v_Position.xyz));\n'+
    '  vec3 halfVec2 = normalize(lightVec2 + eyeVec);\n'+
    '  float nDoth2 = pow(max(dot(normal, halfVec2), 0.0), 32.0);\n'+
    '  vec3 specular2 = color.rgb * u_PointLight * nDoth2;\n'+
    '  float nDotL2 = max(dot(normal, lightVec2), 0.0);\n' +
    '  vec3 diffuse2 = color.rgb * u_PointLight * nDotL2;\n' +

    '  vec3 ambient = u_Ambient*color.rgb;\n;'+
    '  gl_FragColor = vec4(ambient+diffuse1+specular1+diffuse2+specular2 , color.a);\n' +
    '}\n';



//debug信息输出

function printMessage(message){
    var mb = document.getElementById("messageBox");
    mb.innerHTML = "message:\t"+ message;
}

var canvas;

// Get the rendering context for WebGL
var gl;

//initTexObj(gl);

//shaders program
var program;

//相机位置
var eye = new Vector3(CameraPara.eye);
var at = new Vector3(CameraPara.at);
var up = new Vector3(CameraPara.up);
var front = VectorMinus(at, eye).normalize();
var right = VectorCross(front, up);

var texObjList = [];
var modelObjList = [];

var loadingImg = 2;
var loadingModel = 6;

var TextureObject = function () {
    this.img;
    this.texture;
    this.vertexBuffer;
    this.normalBuffer;
    this.indexBuffer;
    this.texCoordBuffer;
    this.translate;
    this.scale;
    this.num;
}

var ModelObject = function() {
    this.model;  	 //a model contains some vertex buffer
    this.filePath;   //obj file path
    this.objDoc;
    this.drawingInfo;
    this.transform;
    this.valid = 0;
}

var modelMatrix = new Matrix4(); // Model matrix
var viewMatrix = new Matrix4();  // View matrix
var projMatrix = new Matrix4();  // Projection matrix
var mvpMatrix = new Matrix4();   // Model view projection matrix
var normalMatrix = new Matrix4();

var pointLight = new Vector3();

var dbgmsg = "";

function main() {
    canvas = document.getElementById('webgl')
    // Retrieve <canvas> element
    gl = getWebGLContext(canvas);
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }
    // Specify the color for clearing <canvas>
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Enable depth test
    gl.enable(gl.DEPTH_TEST);

    loadTexObj(gl);
    loadModelObj(gl);

    program = createProgram(gl, VSHADER_SOURCE, FSHADER_SOURCE);
    if (!program) {
        console.log('Failed to intialize shaders.');
        return;
    }

    program.a_Position = gl.getAttribLocation(program, 'a_Position');
    program.a_Color = gl.getAttribLocation(program, 'a_Color');
    program.a_Normal = gl.getAttribLocation(program, 'a_Normal');
    program.a_TexCoord = gl.getAttribLocation(program, 'a_TexCoord');
    program.u_IsTexture = gl.getUniformLocation(program, 'u_IsTexture');
    program.u_MvpMatrix = gl.getUniformLocation(program, 'u_MvpMatrix');
    program.u_ModelMatrix = gl.getUniformLocation(program, 'u_ModelMatrix');
    program.u_NormalMatrix = gl.getUniformLocation(program, 'u_NormalMatrix');
    program.u_Ambient = gl.getUniformLocation(program, 'u_Ambient');
    program.u_DirectionLight = gl.getUniformLocation(program, 'u_DirectionLight');
    program.u_PointLight = gl.getUniformLocation(program, 'u_PointLight');
    program.u_LightPosition = gl.getUniformLocation(program, 'u_LightPosition');
    program.u_EyePoint = gl.getUniformLocation(program, 'u_EyePoint');
    program.u_Sampler = gl.getUniformLocation(program, 'u_Sampler');
    if(program.a_Position<0 ||program.a_Color<0 ||program.a_TexCoord<0 ||program.a_Normal<0 ||!program.u_IsTexture ||!program.u_ModelMatrix
        ||!program.u_MvpMatrix ||!program.u_NormalMatrix ||!program.u_Ambient ||!program.u_DirectionLight || !program.u_PointLight
        || !program.u_LightPosition ||!program.u_EyePoint || !program.u_Sampler){
        console.log('Failed to get the storage location of attribute or uniform variable');
        return;
    }

    gl.useProgram(program);
    var tick = function() {
        animate();
        render();
        printMessage(dbgmsg);
        requestAnimationFrame(tick); // Request that the browser calls tick
    };

    var animationId;
    var check = function () {
        animationId = requestAnimationFrame(check);
        if(loadingImg == 0 && loadingModel == 0) {
            cancelAnimationFrame(animationId);
            tick();
        }
    }
    check();
}


function loadTexObj(gl) {

    var obj = new TextureObject();
    var texture = gl.createTexture();
    if (!texture) {
        console.log('Failed to create the texture object');
        return false;
    }

    var image = new Image();
    image.onload = function(){
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);  // Flip the image's y axis
        // Activate texture unit0
        gl.activeTexture(gl.TEXTURE0);
        // Bind the texture object to the target
        gl.bindTexture(gl.TEXTURE_2D, texture);

        // Set the texture parameter
        //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        // Set the image to texture
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_NEAREST);
        //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER,gl.LINEAR_MIPMAP_NEAREST);//gl.LINEAR_MIPMAP_LINEAR
        gl.generateMipmap(gl.TEXTURE_2D);

        gl.bindTexture(gl.TEXTURE_2D, null);
        obj.texture = texture;
        loadingImg--;
    };
    // Tell the browser to load an Image
    image.src = floorRes.texImagePath;
    var normal = [
        0.0, 1.0, 0.0,  0.0, 1.0, 0.0,  0.0, 1.0, 0.0,  0.0, 1.0, 0.0,
    ];

    obj.vertexBuffer = initArrayBufferForLaterUse(gl, new Float32Array(floorRes.vertex), 3, gl.FLOAT);
    obj.texCoordBuffer = initArrayBufferForLaterUse(gl, new Float32Array(floorRes.texCoord), 2, gl.FLOAT);
    obj.normalBuffer = initArrayBufferForLaterUse(gl, new Float32Array(normal), 3, gl.FLOAT);
    obj.indexBuffer = initElementArrayBufferForLaterUse(gl, new Uint16Array(floorRes.index), gl.UNSIGNED_SHORT);

    obj.translate = floorRes.translate;
    obj.scale = floorRes.scale;
    obj.num = floorRes.index.length;
    texObjList.push(obj);


    var obj2 = new TextureObject();
    var texture2 = gl.createTexture();
    if (!texture2) {
        console.log('Failed to create the texture object');
        return false;
    }

    var image2 = new Image();
    image2.onload = function(){
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);  // Flip the image's y axis
        // Activate texture unit0
        gl.activeTexture(gl.TEXTURE0);
        // Bind the texture object to the target
        gl.bindTexture(gl.TEXTURE_2D, texture2);

        // Set the texture parameter
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        // Set the image to texture
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image2);

        obj2.texture = texture2;
        loadingImg--;
    };
    // Tell the browser to load an Image

    var length = 1 / Math.sqrt(3);
    image2.src = boxRes.texImagePath;
    var normal2 = [
        length, length, length,   -length, length, length,   -length,-length, length,   length,-length, length,
        length, length, length,    length,-length, length,    length,-length,-length,   length, length,-length,
        length, length, length,    length, length,-length,   -length, length,-length,  -length, length, length,
       -length, length, length,   -length, length,-length,   -length,-length,-length,  -length,-length, length,
       -length,-length,-length,    length,-length,-length,    length,-length, length,  -length,-length, length,
        length,-length,-length,   -length,-length,-length,   -length, length,-length,   length, length,-length,
    ];


    obj2.vertexBuffer = initArrayBufferForLaterUse(gl, new Float32Array(boxRes.vertex), 3, gl.FLOAT);
    obj2.texCoordBuffer = initArrayBufferForLaterUse(gl, new Float32Array(boxRes.texCoord), 2, gl.FLOAT);
    obj2.normalBuffer = initArrayBufferForLaterUse(gl, new Float32Array(normal2), 3, gl.FLOAT);
    obj2.indexBuffer = initElementArrayBufferForLaterUse(gl, new Uint16Array(boxRes.index), gl.UNSIGNED_SHORT);

    obj2.translate = boxRes.translate;
    obj2.scale = boxRes.scale;
    obj2.num = boxRes.index.length;

    texObjList.push(obj2);

}

function loadModelObj(gl) {
    for(var i =0; i<ObjectList.length; i++){
        var e = ObjectList[i];
        var obj = new ModelObject();
        // Prepare empty buffer objects for vertex coordinates, colors, and normals
        obj.model = new Object();
        obj.valid = 1;
        obj.kads= e.kads;
        obj.transform = e.transform;
        obj.objFilePath = e.objFilePath;
        obj.color = e.color;
        //补齐最后一个alpha值
        if(obj.color.length ==3 ){
            obj.color.push(1.0);
        }
        // Start reading the OBJ file
        readOBJFile(obj, gl, 1.0, true);

        //压入物体列表中
        modelObjList.push(obj);
    }
    bird = modelObjList[1];
    bird.transform.push({type:"rotate", content:[0,0,0,0]});
}

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    viewMatrix.setLookAt(eye.elements[0],eye.elements[1],eye.elements[2],
        at.elements[0],at.elements[1],at.elements[2],
        up.elements[0],up.elements[1],up.elements[2]
    );
    projMatrix.setPerspective(CameraPara.fov, canvas.width/canvas.height, CameraPara.near, CameraPara.far);

    gl.uniform3fv(program.u_DirectionLight, sceneDirectionLight);
    gl.uniform3fv(program.u_LightPosition, eye.elements);
    gl.uniform3fv(program.u_PointLight, pointLight.elements);
    gl.uniform3fv(program.u_EyePoint, eye.elements);
    gl.uniform3fv(program.u_Ambient, sceneAmbientLight);

    renderModels();
    renderTextures();

    dbgmsg = "<br>position: "+eye.elements[0].toFixed(2)+", "+eye.elements[1].toFixed(2)+", "+eye.elements[2].toFixed(2)+"<br>"+
        "look at: "+at.elements[0].toFixed(2)+", "+at.elements[1].toFixed(2)+", "+at.elements[2].toFixed(2);
}

function renderModels(){

    gl.uniform1i(program.u_IsTexture, 0);  // Pass true to u_Clicked

    for(var i=0;i<modelObjList.length;i++){
        var obj = modelObjList[i];

        modelMatrix.setIdentity();
        for(var k = 0; k< obj.transform.length; k++) {
            if(obj.transform[k].type == "translate")
                modelMatrix.translate(obj.transform[k].content[0],obj.transform[k].content[1],obj.transform[k].content[2]);
            else if(obj.transform[k].type == "scale")
                modelMatrix.scale(obj.transform[k].content[0],obj.transform[k].content[1],obj.transform[k].content[2]);
            else if(obj.transform[k].type == "rotate")
                modelMatrix.rotate(obj.transform[k].content[0],obj.transform[k].content[1],obj.transform[k].content[2],obj.transform[k].content[3]);
        }

        gl.uniformMatrix4fv(program.u_ModelMatrix, false, modelMatrix.elements);

        mvpMatrix.set(projMatrix).multiply(viewMatrix).multiply(modelMatrix);
        gl.uniformMatrix4fv(program.u_MvpMatrix, false, mvpMatrix.elements);

        normalMatrix.setInverseOf(modelMatrix);
        normalMatrix.transpose();
        gl.uniformMatrix4fv(program.u_NormalMatrix, false, normalMatrix.elements);

        initAttributeVariable(gl, program.a_Position, obj.model.vertexBuffer);  // Vertex coordinates
        initAttributeVariable(gl, program.a_Normal, obj.model.normalBuffer);    // Normal
        initAttributeVariable(gl, program.a_Color, obj.model.colorBuffer);// Texture coordinates

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, obj.model.indexBuffer);
        // Draw
        gl.drawElements(gl.TRIANGLES, obj.drawingInfo.indices.length, gl.UNSIGNED_SHORT, 0);
    }
    gl.disableVertexAttribArray(program.a_Color);
}


function renderTextures() {

    gl.uniform1i(program.u_IsTexture, 1);  // Pass true to u_Clicked

    for(var i = 0; i<texObjList.length; i++) {
        var obj = texObjList[i];

        modelMatrix.setIdentity();
        modelMatrix.translate(obj.translate[0],obj.translate[1],obj.translate[2]);
        modelMatrix.scale(obj.scale[0],obj.scale[1],obj.scale[2]);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, obj.texture);
        gl.uniform1i(program.u_Sampler, 0);


        gl.uniformMatrix4fv(program.u_ModelMatrix, false, modelMatrix.elements);

        mvpMatrix.set(projMatrix).multiply(viewMatrix).multiply(modelMatrix);
        gl.uniformMatrix4fv(program.u_MvpMatrix, false, mvpMatrix.elements);

        normalMatrix.setInverseOf(modelMatrix);
        normalMatrix.transpose();
        gl.uniformMatrix4fv(program.u_NormalMatrix, false, normalMatrix.elements);

        initAttributeVariable(gl, program.a_Position, obj.vertexBuffer);  // Vertex coordinates
        initAttributeVariable(gl, program.a_Normal, obj.normalBuffer);    // Normal
        initAttributeVariable(gl, program.a_TexCoord, obj.texCoordBuffer);// Texture coordinates

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, obj.indexBuffer);

        gl.drawElements(gl.TRIANGLES, obj.num, gl.UNSIGNED_SHORT, 0);
    }
    gl.disableVertexAttribArray(program.a_TexCoord);
}


var bird;
var x_angle = -90;
var y_angle = 180;
var ANGLE_STEP = 90;

var eye_move_front = 0;   // 1: 前  -1：后
var eye_move_right = 0;   // 1: 右  -1：左
var at_rotate_up = 0;   // 1: 上  -1：下
var at_rotate_right = 0;   // 1: 右  -1：左
var MOVE_STEP = 30;
var ROTATE_STEP = 60;
var DISTANCE = 5;
var last = Date.now(); // Last time that this function was called
function animate() {
    var now = Date.now();   // Calculate the elapsed time
    var elapsed = now - last;
    last = now;
    // Update the current rotation angle (adjusted by the elapsed time)
    x_angle = (x_angle + (ANGLE_STEP * elapsed) / 1000.0) % 360;
    y_angle = (y_angle + (ANGLE_STEP * elapsed) / 1000.0) % 360;
    bird.transform[0].content = [10*Math.sin(x_angle/180*Math.PI), 6+4*Math.sin(x_angle/180*Math.PI), 10*Math.cos(x_angle/180*Math.PI)-5];
    bird.transform[2].content = [x_angle,0,1,0];

    var front_distance = eye_move_front * (MOVE_STEP * elapsed) / 1000.0;
    var right_distance = eye_move_right * (MOVE_STEP * elapsed) / 1000.0;
    var moveVec = VectorAdd(VectorMultNum(front, front_distance), VectorMultNum(right, right_distance));
    eye = VectorAdd(eye, moveVec);

    var up_angle = (at_rotate_up * (ROTATE_STEP * elapsed) / 1000.0) % 360;
    var right_angle = (at_rotate_right * (ROTATE_STEP * elapsed) / 1000.0) % 360;
    if(up_angle == 90)
        front = up;
    else
        front = VectorAdd(front, VectorMultNum(up, Math.tan(up_angle/180*Math.PI))).normalize();
    up = VectorCross(right, front);
    if(right_angle/90 == 1 || right_angle/90 == -1)
        front = VectorMultNum(right, right_angle/90);
    else
        front = VectorAdd(front, VectorMultNum(right, Math.tan(right_angle/180*Math.PI))).normalize();
    right = VectorCross(front, up);

    at = VectorAdd(eye, VectorMultNum(front, DISTANCE));
}

// 处理键盘按下事件
document.onkeydown = function(e) {
    var press = [0, 0, 0, 0, 0, 0, 0, 0];   // 用来处理几个键同时按下的情况，如w何s键同时按下
    if (e.keyCode == 87) {         // W
        eye_move_front = 1;
        press[0] = 1;
    }
    else if (e.keyCode == 83) {    // S
        eye_move_front = -1;
        press[1] = 1;
    }
    else if (e.keyCode == 65) {    // A
        eye_move_right = -1;
        press[2] = 1;
    }
    else if (e.keyCode == 68) {    // D
        eye_move_right = 1;
        press[3] = 1;
    }
    else if (e.keyCode == 73) {    // I
        at_rotate_up = 1;
        press[4] = 1;
    }
    else if (e.keyCode == 75) {   // K
        at_rotate_up = -1;
        press[5] = 1;
    }
    else if (e.keyCode == 74) {    // J
        at_rotate_right = -1;
        press[6] = 1;
    }
    else if (e.keyCode == 76) {    // L
        at_rotate_right = 1;
        press[7] = 1;
    }
    else if (e.keyCode == 70)     // F
        pointLight.elements = scenePointLightColor;


    document.onkeyup = function (et) {
        if (et.keyCode == 87) {          // W
            press[0] = 0;
            if(press[1] == 1)
                eye_move_front = -1;
            else
                eye_move_front = 0;
        }
        else if (et.keyCode == 83) {    // S
            press[1] = 0;
            if(press[0] == 1)
                eye_move_front = 1;
            else
                eye_move_front = 0;
        }
        else if (et.keyCode == 65) {    // A
            press[2] = 0;
            if(press[3] == 1)
                eye_move_right = 1;
            else
                eye_move_right = 0;
        }
        else if(et.keyCode == 68) {    // D
            press[3] = 0;
            if(press[2] == 1)
                eye_move_right = -1;
            else
                eye_move_right = 0;
        }
        else if(et.keyCode == 73) {    // I
            press[4] = 0;
            if(press[5] == 1)
                at_rotate_up = -1;
            else
                at_rotate_up = 0;
        }
        else if(et.keyCode == 75) {    // K
            press[5] = 0;
            if(press[4] == 1)
                at_rotate_up = 1;
            else
                at_rotate_up = 0;
        }
        else if(et.keyCode == 74) {    // J
            press[6] = 0;
            if(press[7] == 1)
                at_rotate_right = 1;
            else
                at_rotate_right = 0;
        }
        else if(et.keyCode == 76) {    // L
            press[7] = 0;
            if(press[6] == 1)
                at_rotate_right = -1;
            else
                at_rotate_right = 0;
        }
        else if(et.keyCode == 70)     // F
            pointLight.elements = [0,0,0];
    }
}




//################################################################
//		buffer初始化部分
//################################################################

// create empty buffer
function initArrayBufferForLaterUse(gl, data, num, type) {
    // Create a buffer object
    var buffer = gl.createBuffer();
    if (!buffer) {
        console.log('Failed to create the buffer object');
        return null;
    }
    // Write date into the buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

    // Store the necessary information to assign the object to the attribute variable later
    buffer.num = num;
    buffer.type = type;

    return buffer;
}

function initElementArrayBufferForLaterUse(gl, data, type) {
    // Create a buffer object
    var buffer = gl.createBuffer();
    if (!buffer) {
        console.log('Failed to create the buffer object');
        return null;
    }
    // Write date into the buffer object
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.STATIC_DRAW);

    buffer.type = type;

    return buffer;
}

// Assign the buffer objects and enable the assignment
function initAttributeVariable(gl, a_attribute, buffer) {
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(a_attribute, buffer.num, buffer.type, false, 0, 0);
    gl.enableVertexAttribArray(a_attribute);
}

//################################################################
//		obj配置物体初始化部分
//################################################################

// Read a file
function readOBJFile(obj, gl, scale, reverse) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status !== 404) {
            onReadOBJFile(request.responseText, obj, gl, scale, reverse);
        }
    }
    request.open('GET', obj.objFilePath, true); // Create a request to acquire the file
    request.send();                      // Send the request
}

// OBJ File has been read
function onReadOBJFile(fileString, obj, gl, scale, reverse) {
    var objDoc = new OBJDoc(obj.filePath);  // Create a OBJDoc object
    objDoc.defaultColor = obj.color;
    var result = objDoc.parse(fileString, scale, reverse); // Parse the file
    if (!result) {
        obj.objDoc = null; obj.drawingInfo = null;
        console.log("OBJ file parsing error.");
        return;
    }
    obj.objDoc = objDoc;
    obj.drawingInfo = onReadComplete(gl, obj.model, obj.objDoc);

}

// OBJ File has been read compreatly
function onReadComplete(gl, model, objDoc) {
    // Acquire the vertex coordinates and colors from OBJ file
    var drawingInfo = objDoc.getDrawingInfo();

    model.vertexBuffer = initArrayBufferForLaterUse(gl, drawingInfo.vertices, 3, gl.FLOAT);
    model.normalBuffer = initArrayBufferForLaterUse(gl, drawingInfo.normals, 3, gl.FLOAT);
    model.colorBuffer = initArrayBufferForLaterUse(gl, drawingInfo.colors, 4, gl.FLOAT);
    model.indexBuffer = initElementArrayBufferForLaterUse(gl, drawingInfo.indices, gl.UNSIGNED_SHORT);

    loadingModel--;

    return drawingInfo;
}
