<template>
  <div 
    class="w-full bg-dialog pt-2"
    :class="[{
      'not-spoken': !spoken,
      'spoken':     spoken,
    }]"
    >
    <div 
      class="p-2 flex"
      :class="[
        {'justify-end':   message.type === 'user/text' || message.type === 'user/audio'},
        {'justify-start': message.type === 'cx'}
      ]"
      v-for="(message, i) in dialogue" 
      :key="`type${i}`">

      <user-speech-bubble 
        class="w-4/5 bg-user-comment rounded-lg rounded-tr p-2"
        v-if="message.type === 'user/text'" 
        :message="message"
        />

      <user-audio-bubble 
        class="w-3/8 bg-user-comment rounded-lg rounded-tr p-2 h-12"
        v-if="message.type === 'user/audio'" 
        :message="message"
        />

      <cx-speech-bubble   
        class="w-4/5 bg-white rounded-lg rounded-tl p-2"
        v-else-if="message.type === 'cx'" 
        :message="message"
        />
      
      <cx-image-bubble   
        class="w-4/5 bg-white rounded-lg rounded-tl p-2"
        v-else-if="message.type === 'cx/gif-apology'" 
        :message="message"
        />
    </div>
  </div>
</template>

<script>
import CXSpeechBubble from "./Bubble/CX.vue";
import CXImageBubble from "./Bubble/Image.vue";
import UserSpeechBubble from "./Bubble/User.vue";
import UserAudioBubble from "./Bubble/Audio.vue";

export default {
  name: "dialog-view",
  components: {
    "cx-speech-bubble":   CXSpeechBubble,
    'cx-image-bubble':    CXImageBubble,
    "user-speech-bubble": UserSpeechBubble,
    "user-audio-bubble":  UserAudioBubble,
  },
  props: {
    dialogue: {
      required: true,
      default: () => {}
    },
    spoken: {
      required: true
    }
  }
}
</script>

<style scoped>
.bg-dialog {
  background: #E5E5E5;
  padding-bottom: 64px;
  overflow-y: scroll;
}

.not-spoken {
  height: calc(100vh - (198px + 96px));
}

.spoken {
  height: calc(100vh - (110px + 96px));
}

.bg-user-comment {
  background: #005B59;
}
</style>
