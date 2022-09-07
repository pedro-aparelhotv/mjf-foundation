uniform vec3 uColor;
uniform float uOpacity;

varying vec2 vUv;

void main() {
  float strength = distance(vUv.xy - vec2(0.5), vec2(0.0)) * 2.0;

  gl_FragColor = vec4(uColor, (1.0 - strength) * uOpacity);
}
