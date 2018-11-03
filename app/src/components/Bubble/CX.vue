<template>
  <div>
    <div class="flex justify-start">
      <img 
        class="h-6 w-6 border-brand border border-solid rounded-full"
        :src="`image/${message.profileImage}`">
      <span class="ml-1 color-brand">{{ message.name }}</span>
    </div>
    <div class="flex justify-start text-left">{{ message.text }}</div>
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
.border-brand { 
  border-color: #005B59;
}
.color-brand {
  color: #005B59;
}
</style>
