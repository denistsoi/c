<template>
  <div class="header b-color w-full pin-t">
    
    <div class="p-3">
      <h2>Instant Feedback</h2>
    </div>
    <!-- icons -->
    <div class="flex justify-center p-2">
      <div class="flex w-full p2">
        <div 
          class="w-1/3"
          v-for="(user, i) in users" 
          :key="user.name + i" 
        >
          <img :src="`image/${user.profileImage}`" class="h-10" />
          <div v-if="!spoken">
            <span class="text-xs leading-none">{{ user.name }}</span> <br />
            <span class="text-xs leading-none">{{ user.role }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="p-2" v-if="!spoken">
      <span class="text-xs leading-none">We’re here to solve the problems during your journey.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-navigation",
  props: {
    spoken: {
      required: true,
      default: false
    }
  },
  data() {
    return {
      users: [
        {
          name: "Annie",
          role: "CX Concierge",
          profileImage: "avatarBot@3x.png"
        },
        {
          name: "Bonnie",
          role: "Customer Service",
          profileImage: "avatarCS1@3x.png"
        },
        {
          name: "Cindy",
          role: "Head of CS",
          profileImage: "avatarCS2@3x.png"
        },        
      ]
    }
  }
}
</script>
