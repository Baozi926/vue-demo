<template>
  <div id="app">
    <Navigator class="navi" />
    <div class="view">
      <transition name="slide-fade" mode="out-in">
        <router-view class="child-view" />
      </transition>

    </div>

  </div>
</template>

<script>
import Navigator from '@/components/Navigator'

export default {
  name: 'app',
  components: { Navigator }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  overflow: hidden;
  position: absolute;
}

h1,
h2,
h3,
h4 {
  margin: 0
}
</style>
<style scoped>
.navi {
  width: 200px;
}

.view {
  flex: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}

.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(50px);
  opacity: 0;
}

</style>

