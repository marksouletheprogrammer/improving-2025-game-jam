// WebGL Counter Game

class WebGLCounterGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.gl = this.canvas.getContext('webgl');
        this.score = 0;
        this.particles = [];
        this.time = 0;
        
        if (!this.gl) {
            console.error('WebGL not supported');
            return;
        }
        
        this.init();
        this.setupEventListeners();
        this.gameLoop();
    }
    
    init() {
        const gl = this.gl;
        
        // Vertex shader source
        const vertexShaderSource = `
            attribute vec2 a_position;
            attribute vec3 a_color;
            uniform vec2 u_resolution;
            uniform float u_time;
            varying vec3 v_color;
            
            void main() {
                vec2 zeroToOne = a_position / u_resolution;
                vec2 zeroToTwo = zeroToOne * 2.0;
                vec2 clipSpace = zeroToTwo - 1.0;
                
                gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
                v_color = a_color;
            }
        `;
        
        // Fragment shader source
        const fragmentShaderSource = `
            precision mediump float;
            varying vec3 v_color;
            uniform float u_time;
            
            void main() {
                float pulse = sin(u_time * 3.0) * 0.1 + 0.9;
                gl_FragColor = vec4(v_color * pulse, 1.0);
            }
        `;
        
        // Create shaders
        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
        
        // Create program
        this.program = createProgram(gl, vertexShader, fragmentShader);
        
        // Get attribute and uniform locations
        this.positionAttributeLocation = gl.getAttribLocation(this.program, 'a_position');
        this.colorAttributeLocation = gl.getAttribLocation(this.program, 'a_color');
        this.resolutionUniformLocation = gl.getUniformLocation(this.program, 'u_resolution');
        this.timeUniformLocation = gl.getUniformLocation(this.program, 'u_time');
        
        // Create buffers
        this.positionBuffer = gl.createBuffer();
        this.colorBuffer = gl.createBuffer();
        
        // Initialize background elements
        this.createBackgroundElements();
        
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    }
    
    createBackgroundElements() {
        // Create floating geometric shapes for visual appeal
        this.backgroundShapes = [];
        for (let i = 0; i < 20; i++) {
            this.backgroundShapes.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 30 + 10,
                speed: Math.random() * 0.5 + 0.1,
                color: [
                    Math.random() * 0.5 + 0.3,
                    Math.random() * 0.5 + 0.4,
                    Math.random() * 0.5 + 0.6
                ]
            });
        }
    }
    
    setupEventListeners() {
        const button = document.getElementById('counterButton');
        const scoreElement = document.getElementById('scoreValue');
        
        button.addEventListener('click', () => {
            this.score++;
            scoreElement.textContent = this.score;
            scoreElement.classList.add('score-animate');
            
            // Create particle effect
            this.createParticleEffect();
            
            // Remove animation class after animation completes
            setTimeout(() => {
                scoreElement.classList.remove('score-animate');
            }, 300);
        });
    }
    
    createParticleEffect() {
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        
        for (let i = 0; i < 10; i++) {
            this.particles.push({
                x: centerX + (Math.random() - 0.5) * 100,
                y: centerY + (Math.random() - 0.5) * 100,
                vx: (Math.random() - 0.5) * 5,
                vy: (Math.random() - 0.5) * 5,
                life: 1.0,
                decay: Math.random() * 0.02 + 0.01,
                size: Math.random() * 8 + 4,
                color: [
                    Math.random() * 0.5 + 0.5,
                    Math.random() * 0.3 + 0.4,
                    Math.random() * 0.5 + 0.5
                ]
            });
        }
    }
    
    updateParticles() {
        this.particles = this.particles.filter(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life -= particle.decay;
            particle.vy += 0.1; // gravity
            return particle.life > 0;
        });
    }
    
    render() {
        const gl = this.gl;
        
        resizeCanvasToDisplaySize(this.canvas);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        
        // Clear canvas
        gl.clearColor(0.05, 0.05, 0.1, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        
        // Use shader program
        gl.useProgram(this.program);
        
        // Set uniforms
        gl.uniform2f(this.resolutionUniformLocation, gl.canvas.width, gl.canvas.height);
        gl.uniform1f(this.timeUniformLocation, this.time);
        
        // Render background shapes
        this.renderBackgroundShapes();
        
        // Render particles
        this.renderParticles();
    }
    
    renderBackgroundShapes() {
        const gl = this.gl;
        const positions = [];
        const colors = [];
        
        this.backgroundShapes.forEach(shape => {
            // Update position
            shape.y += shape.speed;
            if (shape.y > this.canvas.height + shape.size) {
                shape.y = -shape.size;
                shape.x = Math.random() * this.canvas.width;
            }
            
            // Create triangle
            const x = shape.x;
            const y = shape.y;
            const size = shape.size;
            
            positions.push(
                x, y - size,
                x - size, y + size,
                x + size, y + size
            );
            
            // Add colors for each vertex
            for (let i = 0; i < 3; i++) {
                colors.push(...shape.color);
            }
        });
        
        if (positions.length > 0) {
            // Update position buffer
            gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.DYNAMIC_DRAW);
            gl.enableVertexAttribArray(this.positionAttributeLocation);
            gl.vertexAttribPointer(this.positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
            
            // Update color buffer
            gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);
            gl.enableVertexAttribArray(this.colorAttributeLocation);
            gl.vertexAttribPointer(this.colorAttributeLocation, 3, gl.FLOAT, false, 0, 0);
            
            // Draw
            gl.drawArrays(gl.TRIANGLES, 0, positions.length / 2);
        }
    }
    
    renderParticles() {
        const gl = this.gl;
        const positions = [];
        const colors = [];
        
        this.particles.forEach(particle => {
            const x = particle.x;
            const y = particle.y;
            const size = particle.size * particle.life;
            
            positions.push(
                x, y - size,
                x - size, y + size,
                x + size, y + size
            );
            
            const alpha = particle.life;
            for (let i = 0; i < 3; i++) {
                colors.push(
                    particle.color[0] * alpha,
                    particle.color[1] * alpha,
                    particle.color[2] * alpha
                );
            }
        });
        
        if (positions.length > 0) {
            gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.DYNAMIC_DRAW);
            gl.enableVertexAttribArray(this.positionAttributeLocation);
            gl.vertexAttribPointer(this.positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
            
            gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);
            gl.enableVertexAttribArray(this.colorAttributeLocation);
            gl.vertexAttribPointer(this.colorAttributeLocation, 3, gl.FLOAT, false, 0, 0);
            
            gl.drawArrays(gl.TRIANGLES, 0, positions.length / 2);
        }
    }
    
    gameLoop() {
        this.time += 0.016; // Approximate 60 FPS
        
        this.updateParticles();
        this.render();
        
        requestAnimationFrame(() => this.gameLoop());
    }
}

// Initialize game when page loads
window.addEventListener('load', () => {
    new WebGLCounterGame();
});
