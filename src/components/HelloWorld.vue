<template>
  <div class="list" v-for="(item, index)  in $store.state.items" :key="index">
    <div class="list-items">
      <Upvote v-for="vote in item" v-bind:selected="vote.selected" v-bind:index="index" @clicked="onClickChild" />
    </div>
    <div class="list-action">
      <span @click="$store.dispatch('add',index)" class="list-btn">+</span>
    </div>
  </div>
</template>

<script>
import Upvote from "./Upvote.vue";
import store from '../store';
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      items: [
        [{ selected: false },{ selected: false },{ selected: false }],
        [{ selected: false }],
        [{ selected: false },{ selected: false },{ selected: false }],
      ],
    };
  },
  components: {
    Upvote,
  },
  methods: {
  onClickChild: function(value){
    store.dispatch('selectedRow',value)
  }
}
};
</script>
<style>
.list{
  display: flex;
}
.list-items {
  width: 90%;
  border: 3px solid #eee;
  border-radius: 10px;
  padding :5px;
  margin: 10px;
  text-align:left;
}
Upvote{
  margin : 0 5px;
}
.list-action {
  padding: 20px 10px 10px;
  margin: 10px;
}
.list-btn{
  padding:10px 20px;
  display: inline-block;
  border-radius:10px;
  font-size: 30px;
  font-weight: bold;
  background-color:#f4f6f8;
  color:#333;
}
</style>