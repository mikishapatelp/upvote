<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Upvote from './components/Upvote.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Upvote
  }
}
</script>
