<template>
  <div class="footer fixed pin-b w-full flex h-12">
    <!-- <div 
      contenteditable="true"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="onSubmit"
      class="flex w-4/5 p-1 p-4 wrap" />
    <button 
      v-on:click="onSubmit"
      class="bg-blue hover:bg-blue-dark text-white py-2 px-4 rounded">
      Submit
    </button> -->

    
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
    onSubmit(event, value) {
      if (!this.$props.value || this.$props.value.trim().length === 0) return;
      this.$emit("submit");
    }
  }

}
</script>