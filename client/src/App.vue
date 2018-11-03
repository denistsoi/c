
<template>
  <div id="app">
    <vue-qr :text="url" :callback="test"></vue-qr>
  </div>
</template>

<script>
/* eslint-disable */
import VueQr from 'vue-qr';
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    VueQr
  },
  data() {
    return {
      url: "http://2000d943.ngrok.io"
    }
  },
  methods: {
    test(data, id) {
      console.log(data, id); 
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
