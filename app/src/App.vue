<template>
  <div id="app">
    <header-nav 
      :spoken="this.stage.spoken"
    />
    <dialog-view
      :dialogue="dialogue"
      :spoken="this.stage.spoken"
      ref="dialog"
      />
    

    <div 
      class="footer-wrapper items-end w-full flex-wrap"
      :class="[
      { 'h-32': this.stage.followup },
      { 'h-24': !this.stage.followup }
      ]"
      >
      <div 
        v-if="!this.stage.followup"
        class="footer flex content-center items-center justify-between h-16 bg-white w-full">
        <div 
          class="flex items-center px-4 w-full h-full"
          >
          <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0L13.0622 6.75H0.937822L7 0Z" fill="#4C4C4C"/>
          </svg>
          <span class="ml-2">How can I help?</span>
        </div>

        <div 
          class="flex wrap h-full p-2 text-white microphone-icon" 
          v-on:click="speak"
          >
          <div class="bg bg-brand"></div>
          <img class="mic rounded-full p-2" src="image/VoiceIcon@3x.png" />
        </div>
      </div>
      <div class="w-full" v-if="this.stage.followup"><follow-up /></div>
    </div>

    
  </div>
</template>

<script>
/* eslint-disable */
import HeaderNav from './components/Header.vue';
import DialogView from './components/DialogView.vue';
import FollowUp from './components/FollowUp.vue';

import createMessage from './utils/message';

export default {
  name: 'app',
  components: {
    DialogView,
    HeaderNav,
    FollowUp
  },
  data() {
    return {
      value: "",
      stage: {
        onboarded: false,
        spoken: false,
        followup: false,
      },
      dialogue: [createMessage({ 
        date: "Just now",
        text: "Hello. How can I help you with today?",
        type: "cx",
        name: "Annie",
        profileImage: "avatarBot@3x.png",
      })],

      timers: [{
        type: 'audio',
        time: 5000
      }, {
        type: 'response-audio-1',
        time: 9000
      }, { 
        type: 'response-audio-2',
        time: 12000
      }, {
        type: 'response-landing',
        time: 18000
      }, {
        type: 'response-apology',
        time: 20000
      }, { 
        type: 'response-resolution',
        time: 40000
      }]
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
    speak() {
      
      if (!this.stage.spoken) {
        this.stage.spoken = true;
        setTimeout(() => {
          const audio = createMessage({
            type: "user/audio",
          })
          this.dialogue.push(audio);
        }, this.timers[0].time)


        // during inflight
        const during = [{ 
          text: "Hello Charlotte! Thank you for your feedback. My name is Annie. I’m your personal concierge for this case and I’ll be following your case closely now. I will contact you immediately once our flight has touched down. Please make sure you have access to wifi or data connection after you have touched down so that we could continue our conversation.",
          type: "cx",
          name: "Annie",
          profileImage: "avatarBot@3x.png",
        }, {
          text: "If you have any other things that would like to let us know, please do message me here. We are here to listen to your voice. ",
          type: "cx",
          name: "Annie",
          profileImage: "avatarBot@3x.png",
        }];

        during.map(async(item, i) => {
          setTimeout(() => {
            const message = createMessage(item);
            this.dialogue.push(message);

            const { dialog } = this.$refs;
            dialog.$el.scrollTop = dialog.$el.scrollHeight;
          }, this.timers[1+i].time);
        })
      }

      // after landing
      setTimeout(() => {
        const afterlanding = createMessage({
          date: "3 hours later",
          text: `Hello Charlotte, I’m deeply sorry to hear your uncomfortable flight experience. We have routed your experience to our catering facility. Please give us some time for us to conduct further investigation into your food poisoning. \n\nI’ll be here to support you should you have any questions and will continuously update you. Let’s keep in touch here.`,
          type: "cx",
          name: "Annie",
          profileImage: "avatarBot@3x.png",
        });

        this.dialog.push(afterlanding);

        const { dialog } = this.$refs;
        dialog.$el.scrollTop = dialog.$el.scrollHeight;
      }, this.timers[3].time);

      setTimeout(() => {
        const apology = createMessage({
          type: "cx/gif-apology",
        })

        this.dialog.push(apology);
        const { dialog } = this.$refs;
        dialog.$el.scrollTop = dialog.$el.scrollHeight;
      }, this.timers[4].time)
        

      // epilogue
      setTimeout(() => {
        const epilogue = createMessage({
          date: "2 days later",
          text: "Hello Charlotte, we are investigating now. We need further details from you. When did you start feeling sick? Was it after your lounge visit, or inflight supper or after your breakfast meal?",
          type: "cx",
          name: "Annie",
          profileImage: "avatarBot@3x.png",
        });

        this.dialogue.push(epilogue)
        const { dialog } = this.$refs;
        dialog.$el.scrollTo = dialog.$el.scrollHeight;
      }, this.timers[5].time)

      setTimeout(() => {
        const follow = createMessage({
          text: "Please select one of the follow up channels below so that we may continue our investigation into your situation.",
          type: "cx",
          name: "Annie",
          profileImage: "avatarBot@3x.png",
        });

        this.dialogue.push(follow);
        const { dialog } = this.$refs;
        dialog.$el.scrollTo = dialog.$el.scrollHeight;

        this.stage.followup = true;
      }, this.timers[5].time + 1000)
    },
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
  max-width: 768px;
  margin: auto;
}

@font-face {
  font-family: 'cathay';
  src: url('./assets/cathaysans.ttf');
}

body {
  --brand-color: #005B59;
  --font-color: #fff;
}

.footer {
  position: absolute;
  bottom: 0;
}

.footer-wrapper {
  position: relative;
  overflow: hidden;
  background: #E5E5E5;
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

.microphone-icon {
  /* transition: .2s background-color linear; */
}
.microphone-icon:hover {
  transition: .3s background-color linear;
  cursor: pointer;
  background: var(--brand-color);
}

.microphone-icon:hover .bg {
  background: var(--brand-color);
  height: 64px;
  width: 64px;
  position: absolute;
  right: 0;
  top: 0;

  transition: .3s transform linear .3s border-radius linear;
  border-radius: 50%;
  transform: scale(2)
}
.mic {
  background: #005B59;
  width: auto;
  z-index: 2;
}
</style>
