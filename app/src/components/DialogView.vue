<template>
  <div class="w-full flex bg-dialog pt-2">
    <div 
      class="p-2"
      v-for="(message, i) in dialogue" 
      :key="`type${i}`">

      <user-speech-bubble 
        class="content-end bg-user-comment rounded-lg rounded-tr p-2"
        v-if="message.type === 'user'" 
        :message="message"
        />
      <cx-speech-bubble   
        class="content-start bg-white rounded-lg rounded-tl p-2"
        v-else-if="message.type === 'cx'" 
        :message="message"
        />
    </div>
  </div>
</template>

<script>
import CXSpeechBubble from "./Bubble/CX.vue";
import UserSpeechBubble from "./Bubble/User.vue";

export default {
  name: "dialog-view",
  components: {
    "cx-speech-bubble":   CXSpeechBubble,
    "user-speech-bubble": UserSpeechBubble
  },
  props: {
    dialogue: {
      required: true,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.bg-dialog {
  background: #E5E5E5;
  height: calc(100vh - (198px + 48px));
}

.bg-user-comment {
  background: #005B59;
}
</style>
