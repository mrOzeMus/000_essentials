# Web Gl and shaders

(tuto utile:
https://www.youtube.com/watch?v=_ZQOUQsw_YI
)

# Basic setup pour Browser:


        const canvas = document.createElement("canvas");
        document.body.appendChild(canvas);

        canvas.width = 400;
        canvas.height = 400;

        const gl = canvas.getContext("webgl");

        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        gl.clearColor(1.0, 0.8, 0.1, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        const vertShaderSource = `
          attribute vec2 position;

          varying vec2 texCoords;

          void main(){
            texCoords = (position + 1.0)/2.0;
            gl_Position = vec4(position, 0, 1.0);
          }
        `;

        const fragShaderSource = `
          precision highp float;

          varying vec2 texCoords;

          void main(){
            gl_FragColor = vec4(texCoords, 1.0, 1.0);
          }
        `;

        const vertShader = gl.createShader(gl.VERTEX_SHADER);
        const fragShader = gl.createShader(gl.FRAGMENT_SHADER);

        gl.shaderSource(vertShader, vertShaderSource);
        gl.shaderSource(fragShader, fragShaderSource);

        gl.compileShader(vertShader);
        gl.compileShader(fragShader);

        const program = gl.createProgram();
        gl.attachShader(program, vertShader);
        gl.attachShader(program, fragShader);

        gl.linkProgram(program);

        gl.useProgram(program);

        const vertices = new Float32Array([-1, -1, -1, 1, 1, 1, -1, -1, 1, 1, 1, -1]);

        const vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, "position");

        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(positionLocation);

        gl.drawArrays(gl.TRIANGLES, 0, 6);


# Kode Life Basic setup

Vertex:


        uniform vec2 resolution;
        attribute vec4 a_position;
        varying vec2 uv;

        void main(void)
        {
            uv = a_position.xy;
            uv *= resolution.x /resolution.y;
            gl_Position = vec4(uv, 0.0,1.0);

        }

Frag:

        #ifdef GL_ES
        precision highp float;
        #endif

        uniform float time;
        uniform vec2 resolution;

        varying vec2 uv;

        void main(void)
        {
            gl_FragColor = vec4(uv ,.0,1.0);
        }