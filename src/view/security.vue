<template>
  <div class="cards">
    <div class="card" v-for="card in cards" :key="card.id">
      <!-- <div class="header">
        <span>{{card.name}}</span>
      </div> -->
      <div class="item">
        <component v-bind:is="card.component" />
      </div>

    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import HelloWorld from '@/components/HelloWorld'
import MyMap from '@/components/MyMap'
import MyEChart from '@/components/MyEChart'


export default {
  components: { HelloWorld, MyMap, MyEChart },
  data() {
    return {
      cardStyle: 'height:50%;width:50%;border:0;float:left',
      cards: [
        { id: 1, name: "server", component: 'MyEChart' },
        { id: 2, name: "portal", component: 'HelloWorld' },
        { id: 3, name: "machine", component: 'MyEChart' },
        { id: 4, name: "common", component: 'HelloWorld' }
      ]
    }
  }
  // components: { HelloWorld }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards {
  height: 100%;
}

.item {
  /* height: calc(100% - 20px); */
  margin: 0;
  border: 0;
  display: block
}

.header {
  height: 20px;
  margin: 0;
  border: 0;
}

.card {
  height: 50%;
  width: 50%;
  border: 0;
  float: left;
  margin: 0;
  border: 0;
  display: block
}

.clear {
  clear: both;
  height: 0;
  line-height: 0;
  font-size: 0
}
</style>
