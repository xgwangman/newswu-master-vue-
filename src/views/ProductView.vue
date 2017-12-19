<template>
  <div class="product-view has-header">
    <mt-cell title="服装"></mt-cell>   
    <dl v-for="item in events">
      <router-link :to="'proDetail/' + item.classID">
        <dt><img :src="item.goodsListImg" alt=""></dt>
        <dd>{{item.goodsName}}</dd>
        <dd class="price">￥{{item.price}}</dd>
      </router-link>
    </dl>  
    <infinite-loading @infinite="onInfinite" ref="infiniteLoading">
      <loading slot="spinner"></loading>
    </infinite-loading> 
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import Loading from '../components/Loading'

export default {
  name: 'product-view',
  components: { InfiniteLoading, Loading },
  data () {
    return {
      
    }
  },
  computed:{
    ...mapState({
      events: state => state.product.eventList
    })
  },
  methods: {
    onInfinite () {
      setTimeout(() => {
        this.getProducts()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    },
    // Dispatching Actions
    ...mapActions([
      'getProducts'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .product-view {
    dl {
      float: left;
      width: 50%;
      height: 230px;
      font-size: 16px;      
      dt {
        float: left;
        width: 100%;   
        margin-bottom: 10px;    
        img {
          display: block;
          width: 160px;
          height: 160px;
          margin: 0 auto;
        }
      }
      dd {
        float: left;               
        width: 160px;
        -webkit-margin-start: 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-left: 23.5px;
        color: #666;
      }
      .price {
        font-size: 18px;
        font-weight: 600;
        color: red;
        margin-top: 10px;
      }
    } 
    
  } 
</style>
