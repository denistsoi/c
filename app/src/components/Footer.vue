<template>
  <div class="footer ">
    <input :value="value" class="w-full " />
    <button class="bg-blue hover:bg-blue-dark text-white py-2 px-4 rounded" >Button</button>
  </div>
</template>

<script>
export default {
  name: "talker",

  data() {
    return {
      value: ""
    }
  },


}
</script>