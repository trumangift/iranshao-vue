<template>
<view class="iranshao-scroll-view" :style="{height}">
    <mescroll-vue  ref="mescroll" @init="mescrollInit" :up="mescrollUp" :down="mescrollDown">
      <slot name="content">
      </slot> 
    </mescroll-vue>
</view>   
</template>
<script>
import MescrollVue from 'mescroll.js/mescroll.vue'
import './index.scss'
export default {
    components: {
		MescrollVue
	},
    props: {
        height: {
            type: String,
            required: true
        },
        loadMore: {
             type: Function,
             required: true,
        }
    },
    data() {
        return {
            mescroll: null, // mescroll实例对象
            mescrollUp: { // 上拉加载的配置.
                callback: this.upCallback,
            },
            mescrollDown: {
                callback: this.downCallback,
                auto: false
            }
        }
    },
    methods: {
	    // mescroll组件初始化的回调,可获取到mescroll对象
        mescrollInit (mescroll) {
            this.mescroll = mescroll  // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
        },
        upCallback (page, mescroll) {
            this.loadMore(page.num).then(d => {
                mescroll.endSuccess(d.statuses.length)
            }).catch(e => {
                mescroll.endErr();
            })
        },
        downCallback() {
            console.log(arguments);
            this.loadMore(1, 'init').then(d => {
                this.mescroll.endSuccess(d.statuses.length)
            }).catch(e => {
                this.mescroll.endErr();
            });
        }
    }       
}
</script>
