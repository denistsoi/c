<template>
  <div id="app">
    <header-nav />
    <talker class="fixed pin-b w-full" />
  </div>
</template>

<script>
import HeaderNav from './components/Header.vue';
import Talker from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Talker,
    HeaderNav
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@font-face {
  font-family: 'cathay';
  src: url('./assets/cathaysans.ttf');
}

body {
  --brand-color: #005B59;
  --font-color: #fff;
}

*, p, h1, h2, span, button {
  font-family: "cathay";
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
}

.bg-teal-darkest {
  background: var(--brand-color);
}

.b-color {
  background: var(--brand-color);
  color: var(--font-color);
  /* background: #005B59; */
}

</style>
