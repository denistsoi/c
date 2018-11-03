
<template>
  <div id="app">
    <vue-qr :text="url" :callback="test"></vue-qr>
  </div>
</template>

<script>
/* eslint-disable */
import VueQr from 'vue-qr';

export default {
  name: 'app',
  components: {
    VueQr
  },
  data() {
    return {
      url: "https://cx-app.now.sh"
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
