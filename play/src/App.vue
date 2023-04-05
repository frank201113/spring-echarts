<template>
  <div id="app">
    <div class="bar">
      <SpringEcharts
        :options="bar"
        :init-options="{renderer: 'canvas'}"
        :age="20"
        ref="bar"
        theme="dark"
        autoresize
        @zr:click="handleZrClick"
        @click="handleClick"
      />
    </div>
    <div class="pie">
      <SpringEcharts
        :options="pie"
        :init-options="{renderer: 'svg'}"
        ref="pie"
        autoresize
      />
    </div>

  </div>
</template>

<script>
import SpringEcharts from 'spring-echarts'
import getBar from './data/bar'
import pie from './data/pie'

export default {
  name: 'App',
  components: {
    SpringEcharts
  },
  data() {
    return {
      bar: getBar(),
      pie,
    }
  },
  methods: {
    handleClick () {
      console.log('click from echarts')
    },
    handleZrClick () {
      console.log('click from zrender')
    },
  },
  mounted() {
    const bar = this.$refs.bar
    console.error('mounted  play  ', bar.width)

    let dataIndex = -1
    const pie = this.$refs.pie
    // 通过 Ref 可以获取子组件的 Props
    const dataLen = pie.options.series[0].data.length
    console.error({initOptions: pie.initOptions})

    setInterval(() => {
      pie.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex
      })
      dataIndex = (dataIndex + 1) % dataLen
      pie.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex
      })
      // 显示 tooltip
      pie.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex
      })
    }, 1000)    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.spring-echarts {
  width: 500px;
  height: 500px;
}

.pie {
  margin-top: 20px;
}
</style>
