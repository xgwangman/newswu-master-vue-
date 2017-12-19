<template>
  <div class="home-view has-header">
    <sub-nav mold="quickNav"></sub-nav>
    <router-link :to="{name: 'ProEchartsView'}">
      <mt-button class="echartBtn" type="primary" size="normal">echarts图表展示</mt-button>
    </router-link>
    <list mold="thumbnail" :items="events"></list>
    <infinite-loading @infinite="onInfinite" ref="infiniteLoading">
      <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import InfiniteLoading from 'vue-infinite-loading'
import SubNav from '../components/SubNav'
import List from '../components/List'
import Loading from '../components/Loading'

export default {
  name: 'home-view',
  components: { SubNav, List, InfiniteLoading, Loading },
  data () {
    return {}
  },
  computed: {
    // Getting Vuex State from store/modules/activities
    ...mapState({
      events: state => state.activities.events
    })
  },
  methods: {
    // Using vue-infinite-loading
    onInfinite () {
      setTimeout(() => {
        this.loadMore()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    },
    // Dispatching Actions
    ...mapActions([
      'loadMore'
    ])
  }
}
</script>

<style lang="scss" scoped>
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}
.mint-button {
    margin: 10px 0 10px 129px;
  }
</style>
