<template>
    <div class="pro-content">
        <div v-for="item in items">
            <p class="p1">{{item.goodsName}}</p>
            <p class="p2">￥{{item.price}}<span>已购：{{item.buynumber}}件</span></p>
            <p>折扣：{{item.discount}}</p>          
            <p class="p3">{{item.detail}}</p>           
            <img class="newsImg" src="https://m.360buyimg.com/mobilecms/s528x180_jfs/t3208/247/6270757246/214756/73dcfa1c/58a27dfdN602a0a22.png" alt="" width="100%">
            <div key="index" v-for="(l_img2,index) in JSON.parse(item.goodsBenUrl)" class="imgs"><img :src="l_img2"></div>
        </div>
        <div class="footer" v-for="item in items">
            <ul>
                <li>关注</li>
                <li>购物车</li>
                <li @click="popCart">加入购物车</li>
                <li @click="popCart">立即购买</li>                
            </ul>
            <mt-popup
                v-model="popupVisible"
                position="bottom"
                popup-transition="popup-fade"
            >
               <div class="mtPopup">
                    <div class="imges">
                        <img :src="item.goodsListImg">
                        <p>{{item.goodsName}}</p>
                        <span>￥{{item.price}}</span>
                    </div>
                    <div class="seled colored">
                        <span>已选</span>
                    </div>
                    <div class="colored">
                        <span>颜色</span>
                        <a>白色</a>
                        <a>红色</a>
                        <a>玫瑰红</a>
                        <a>黄色</a>
                    </div>
                    <div class="sized colored">
                        <span>尺码</span>
                        <a>XS</a>
                        <a>S</a>
                        <a>M</a>
                        <a>L</a>
                        <a>XL</a>
                        <a>2XL</a>                       
                    </div>
                    <div class="counted">
                        <span>数量</span>
                        <a>-</a>
                        <input type="text" value="0">
                        <a>+</a>
                    </div>
                    <mt-button class="mtColor">加入购物车</mt-button>
                    <mt-button class="buyColor">立即购买</mt-button>
               </div>                   
            </mt-popup>            
        </div>       
    </div>
</template>

<script>
export default {
    name: 'pro-content',
    props: [ 'items' ],
    data () {
        return {
            popupVisible: false
        }
    },
    methods: {
        popCart:function () {
            this.popupVisible=true
        }
    }
}
</script>

<style lang="scss" scoped>
    .pro-content {
        font-size: 14px;
        p, span {
            font-size: 14px;
            margin-left: 20px;
            color: #666;
        }
        .p1 {
            width: 380px;           
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .p2 {
            color: #f00;
            font-size: 18px;
            font-weight: 600;
        }
        span {
            font-weight: 100;
            margin-left: 180px;
        }
        .p3 {
            line-height: 25px;
            text-indent: 2em;
        }
        .newsImg {
            margin-top: 20px;
        }
        .imgs img {
            width: 100%;
            margin-top: 20px;
        }
        
        .footer {
            width: 100%;
            height: 50px;
            background: #fff;
            position: fixed;
            left:0;
            bottom:0;

            ul li {
                float: left;
                text-align: center;
                line-height: 50px;
                font-size: 15px;
            }
            ul li:nth-child(1) {
                width: 15%;
            }
            ul li:nth-child(2) {
                width: 25%;
            }
            ul li:nth-child(3) {
                width: 30%;
                background: #ffb03f;
                color: #fff;
            }
            ul li:nth-child(4) {
                width: 30%;
                background: #f23030;
                color: #fff;
            }
            .mtPopup {
                width: 414px;
                height: 460px;
                color: #333;
                position: relative;

                div {
                    margin-top: 10px;
                }
                .imges{
                    height: 86px;
                    border-bottom: 1px solid #e3e5e9;

                    img {
                        width: 100px;
                        height: 100px;
                        border-radius: 5px;
                        position: absolute;
                        left: 20px;
                        top: -30px;

                    }
                    p{
                        width: 260px;
                        margin-left: 140px;
                        margin-bottom: 10px;
                        font-size: 14px;
                    }
                    span {
                        color: red;
                        font-weight: 600;
                        font-size: 16px;
                        margin-left: 140px;
                    }
                }                 
            }
            .colored {
                height: 50px;

                span {
                    display: block;
                    float: left;
                    margin-left: 20px;
                    line-height: 50px;
                }
                a {
                    display: block;
                    float: left;
                    padding: 5px;
                    border: 1px solid #e3e5e9;
                    border-radius: 5px;
                    text-align: center;
                    line-height: 20px;
                    margin: 10px 0 0 10px;
                }
            }
            .counted {
                height: 50px;
                span {
                    float: left;
                    margin-left: 20px;
                    line-height: 50px;
                }
                a {
                    display: block;
                    float: left;
                    width: 20px;
                    height: 20px;
                    text-align: center;
                    line-height: 20px;
                    border: 1px solid #e3e5e9;
                    margin-top: 13px;
                    background-color: #eee;
                }
                a:nth-child(2){
                    margin-left: 10px;
                }
                input {
                    float: left;
                    width: 50px;
                    height: 18px;
                    text-align: center;
                    border: 0;
                    border: 1px solid #e3e5e9;
                    margin: 13px 5px 0 5px;
                }
            }
            .mtColor {
                width: 50%;
                background: #ffb03f;
                color: #fff;
                border-radius: 0;
                position: absolute;
                left: 0;
                bottom: 0;   
                font-size: 14px;            
            }
            .buyColor {
                width: 50%;
                background: #f23030;
                color: #fff;
                border-radius: 0;
                position: absolute;
                right: 0;
                bottom: 0;   
                font-size: 14px;
            }
            
        }
    }
</style>