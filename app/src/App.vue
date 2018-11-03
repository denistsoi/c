<template>
  <div id="app">
    <header-nav />
    <dialog-view
      :dialogue="dialogue"
      />
    <!-- <talker 
      v-model="value"
      @submit="addToDialog"
      @click="addToDialog"
      /> -->
    

    <div 
      v-if="!onboarded"
      class="flex content-center items-center justify-center h-12"
      v-on:click="start"
      >
      <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0L13.0622 6.75H0.937822L7 0Z" fill="#4C4C4C"/>
      </svg>
      <span class="ml-1">How can I help?</span>
    </div>

    <microphone />
  </div>
</template>

<script>
import HeaderNav from './components/Header.vue';
import DialogView from './components/DialogView.vue';
import Microphone from "./components/Microphone.vue";
// import Talker from './components/Footer.vue';

import createMessage from './utils/message';

export default {
  name: 'app',
  components: {
    DialogView,
    HeaderNav,
    Microphone,
    // Talker,
  },
  data() {
    return {
      value: "",
      onboarded: false,
      dialogue: [],
    }
  },
  methods: {
    addToDialog() {
      const comment = this.value;

      // send this comment via axios / request
      const message = {
        "text": comment.trim(),
        "type": "user",
        createdAt: new Date().toISOString()
      }

      this.dialogue.push(message);
      this.value = "";
    },
    start() {

      const message = createMessage({ 
        text: "Hello. How can I help you with today?",
        type: "cx",
        name: "Annie",
        profileImage: "avatarBot@3x.png",
      });

      this.onboarded = true;
      
      this.dialogue.push(message);
    }
  }
}
</script>

<style>
@import "./style.css";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
