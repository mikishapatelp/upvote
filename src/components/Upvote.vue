<template>
  <span class="vote" @click="onClickButton" :class="{ active: selected, normal: !selected }" > &#8593;</span>
</template>

<script>
export default {
  name: 'Upvote',
  props: {
    selected: Boolean,
    index: Number
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
     onClickButton () {
         this.$emit('clicked', {selected: !this.selected, index: this.index})
     }
   }
}
</script>
<style>
button {
  background-color: red;
}
.vote{
  padding:10px 20px;
  display: inline-block;
  border-radius:10px;
  font-size: 30px;
  font-weight: bold;
  margin:5px;
}
.active{
  background-color:#e5e8fd;
  color:#263df2;
}
.normal{
  background-color:#f4f6f8;
  color:#333;
}
</style>