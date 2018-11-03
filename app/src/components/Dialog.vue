<template>
  <div>
    {{ dialogue.length }}
  </div>
</template>

<script>
import CXBubble from "./BubbleCX";
import UserBubble from "./BubbleUser";

export default {
  name: "dialog",
  components: {
    CXBubble,
    UserBubble
  },
  props: {
    dialogue: {
      required: true,
      default: () => {}
    }
  }
}
</script>
