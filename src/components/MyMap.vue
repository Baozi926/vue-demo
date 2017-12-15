<template>
  <div :id="mapDivId" :class="[mapClass, mapStateClass]">
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

import CMap from '@/core/CMap'
import { mapState } from 'vuex'

const mapDivId = 'view_' + new Date().getTime().toString(16);


export default {
  components: {},
  computed: mapState({
    // 箭头函数可使代码更简练
    mapStateClass(state) {
      return state.mapState.loaded ? '' : 'loading'
    },
    loading: (state) => !state.mapState.loaded
  }
  ),
  data() {
    return {
      mapClass: 'mapContainer',
      mapDivId: mapDivId
    }
  },
  mounted() {
    CMap.createMap(mapDivId, {});
  },
  beforeDestroy() {
    this.$store.commit('mapDestroyed');
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mapContainer {
  height: 100%;
  width:100%;
  margin: 0;
  border: 0
  /* background:red; */
}
</style>
