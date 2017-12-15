/* eslint-disable */
<template>
  <div class="hello">
        <h1>{{ msg }}</h1>
    <h2 v-on:click="increment">{{ countAlias }}</h2>
    <h2>{{ countPlusLocalState }}</h2>
    <h2>{{ id }}</h2>
    <el-time-picker v-model="value2" :picker-options="{
          selectableRange: '18:30:00 - 20:30:00'
        }" placeholder="Arbitrary time">
    </el-time-picker>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
  props: ['id'],
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,
    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',
    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState(state) {
      return state.count + this.localCount
    }
  }),
  name: 'HelloWorld',
  data() {
    return {
      value2: new Date(2016, 9, 10, 18, 40),
      localCount: 1,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
    ])
    // ...mapMutations([
    //   'increment' // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    // ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
