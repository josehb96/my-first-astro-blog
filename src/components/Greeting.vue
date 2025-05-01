<script lang="ts" setup>
  
  import {ref} from 'vue'

  const {messages} = defineProps<{
    messages: string[]
  }>()

  const greeting = ref(messages[0]) 

  const setRandomGreeting = () => {
    greeting.value = messages[Math.floor(Math.random() * messages.length)];
  }

</script>

<template>
  <div>
    <h3>{{ greeting }}! Thank you for visiting!</h3>
    <button @click="setRandomGreeting">New Greeting</button>
  </div>
</template>