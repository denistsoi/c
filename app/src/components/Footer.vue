<template>
  <div class="footer fixed pin-b">
    <div class="w-full flex bg-grey-light">
      <input 
        :value="value"
        @input="$emit('input', $event.target.value)"
        @keyup.enter="onSubmit"
        class="flex w-4/5 p-1" />
      <button 
        v-on:click="onSubmit"
        class="bg-blue hover:bg-blue-dark text-white py-2 px-4 rounded">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "talker",
  props: {
    value: {
      required: true,
    }
  },
  methods: {
    onSubmit() {
      this.$emit("submit");
    }
  }

}
</script>