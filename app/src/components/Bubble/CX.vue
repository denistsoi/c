<template>
  <div>
    <div class="flex justify-start">
      <img 
        class="h-6 w-6 border-black border border-solid rounded-full"
        :src="`image/${message.profileImage}`">
      <span class="ml-1">{{ message.name }}</span>
    </div>
    <div>{{ message.text }}</div>
  </div>
</template>

<script>
export default {
  name: "cx-speech-bubble",
  props: {
    message: {
      required: true,
      default: ""
    }
  }
}
</script>

<style scoped>

</style>
