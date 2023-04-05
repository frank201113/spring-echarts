import vue from 'rollup-plugin-vue'

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
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**'
  },
  plugins: [
    vue(),
  ]
};
