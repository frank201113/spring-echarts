import vue from 'rollup-plugin-vue'
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/Echarts.vue',
  output: {
    file: 'dist/spring-echarts.js',
    format: 'es',
  },  
  external: [
    'echarts',
    'lodash/debounce',
    'resize-detector'
  ],
  plugins: [
    vue(),
    terser()
  ]
};
