import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/assets/js/index.js',
  output: [
    {
      file: 'build/assets/js/index.js',
      format: 'es',
      sourcemap: true,
      plugins: [terser()]
    }
  ]
}
