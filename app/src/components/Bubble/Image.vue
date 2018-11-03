<template>
  <div>
    <img v-if="message.type === 'cx/gif-apology'" 
      src="image/gifSorry.gif"
      />
  </div>
</template>

<script>
export default {
  name: "image",
  props: {
    message: {
      required: true
    }
  }
}
</script>

<style scoped>
  img {
    width: 80px;
  }
</style>

