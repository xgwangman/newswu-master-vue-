<template>
    <div class="pro-detail has-header">
        <mt-swipe key="index" v-for="(item,index) in eventDetail" :auto="4000">
            <mt-swipe-item key="index" v-for="(l_img1,index) in JSON.parse(item.imgsUrl)" class="mt-img"><img :src="l_img1"></mt-swipe-item>
        </mt-swipe>
        <pro-content :items="eventDetail"></pro-content>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ProContent from '../components/ProContent'
export default {
    name: 'pro-detail',
    components: { ProContent },
    data () {
        return {

        }
    },
    computed: {
        ...mapState({
            eventDetail: state => state.product.eventDetail
        })
    },
    created: function created () {
        const id = this.$route.params.id;
        console.log(id)
        this.$store.dispatch({
           type: 'getProDetail',
           id: id
        })
    }
}
</script>

<style lang="scss" scoped>
    .pro-detail {
        height: 260px;

        .mt-img img {
            width:100%;
            height:260px;
        }
    }
</style>