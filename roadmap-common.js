// GDPU GAMEDEV · 数媒技自学指南 共享脚本（WebGL 点阵背景，与主站同款）
function initWebGLBackground() {
  const canvas = document.getElementById("webgl-bg-canvas");
  if (!canvas) return;
  const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    gl.viewport(0, 0, width, height);
  });

  let mouseX = width / 2;
  let mouseY = height / 2;
  let targetMouseX = mouseX;
  let targetMouseY = mouseY;

  window.addEventListener("mousemove", (e) => {
    targetMouseX = e.clientX;
    targetMouseY = height - e.clientY;
  });

  window.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches.length > 0) {
      targetMouseX = e.touches[0].clientX;
      targetMouseY = height - e.touches[0].clientY;
    }
  }, { passive: true });

  const vsSource = `
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  const fsSource = `
    precision highp float;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;

    void main() {
      vec2 st = gl_FragCoord.xy / min(u_resolution.x, u_resolution.y);
      vec2 mouse = u_mouse / min(u_resolution.x, u_resolution.y);

      vec2 grid = fract(st * 16.0) - 0.5;
      float lineDist = min(abs(grid.x), abs(grid.y));
      float gridLine = smoothstep(0.04, 0.0, lineDist);

      float mDist = length(st - mouse);
      float mouseWave = sin(mDist * 18.0 - u_time * 2.5) * exp(-mDist * 2.8);

      float scan = sin(st.x * 3.0 + st.y * 4.0 - u_time * 0.8);
      float scanLine = smoothstep(0.96, 1.0, scan) * 0.35;

      vec3 bgColor = vec3(0.945, 0.961, 0.976);
      vec3 gridColor = vec3(0.81, 0.85, 0.89);
      vec3 cyberBlue = vec3(0.145, 0.388, 0.922);
      vec3 amberGlow = vec3(0.976, 0.451, 0.086);

      vec3 col = mix(bgColor, gridColor, gridLine * 0.45);
      col = mix(col, cyberBlue, (gridLine * 0.7 + scanLine) * exp(-mDist * 1.8) * 0.45);
      col = mix(col, amberGlow, smoothstep(0.2, 0.0, mDist) * (0.12 + mouseWave * 0.08));

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) return;

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  gl.useProgram(program);

  const positionLocation = gl.getAttribLocation(program, "a_position");
  const resLocation = gl.getUniformLocation(program, "u_resolution");
  const mouseLocation = gl.getUniformLocation(program, "u_mouse");
  const timeLocation = gl.getUniformLocation(program, "u_time");

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW
  );

  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  let startTime = performance.now();

  function render() {
    const now = performance.now();
    const elapsed = (now - startTime) * 0.001;

    mouseX += (targetMouseX - mouseX) * 0.08;
    mouseY += (targetMouseY - mouseY) * 0.08;

    gl.uniform2f(resLocation, width, height);
    gl.uniform2f(mouseLocation, mouseX, mouseY);
    gl.uniform1f(timeLocation, elapsed);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(render);
  }

  render();
}

window.addEventListener("DOMContentLoaded", initWebGLBackground);

// ===== 岗位细分树交互：点父级展开详细框，点框标题展开详情 =====
document.addEventListener("click", function (e) {
  var toggle = e.target.closest(".pos-tree-toggle");
  if (toggle) {
    var children = toggle.parentElement.querySelector(".pos-tree-children");
    if (!children) return;
    var open = children.classList.toggle("open");
    var arrow = toggle.querySelector(".pos-tree-arrow");
    if (arrow) arrow.textContent = open ? "▲ 收起" : "▾ 展开细分";
    return;
  }
  var head = e.target.closest(".pos-child-head");
  if (head) {
    var child = head.closest(".pos-child");
    var isOpen = child.classList.toggle("open");
    var a = head.querySelector(".pos-child-arrow");
    if (a) a.textContent = isOpen ? "−" : "+";
  }
});
