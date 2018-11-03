<template>
  <div>{{ message.text }}</div>
</template>

<script>
export default {
  name: "user-speech-bubble",
  props: {
    message: {
      required: true,
      default: ""
    }
  }
}
</script>
