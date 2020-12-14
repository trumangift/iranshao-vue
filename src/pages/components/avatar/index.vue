<template>
    <view class="avatar-and-certification">
       <iran-images 
       :url="user ? user.avatar_normal : ''"
       className='user-avatar'
       >
       </iran-images>
       <AtIcon v-if="user.role === 'admin'" class='certification-icon' prefixClass='fa' value='iconsCertification' size='12' color='#ff3a00'></AtIcon>
       <AtIcon v-if="user.role === 'organizer'" class='certification-icon' prefixClass='fa' value='iconsCertification' size='12' color='#537d8f'></AtIcon>
    </view>    
</template>
<script>
import IranImages from '@/components/image/index.vue';
import { AtIcon } from 'taro-ui-vue'
import './index.scss';
export default {
    components: {
         IranImages,
         AtIcon
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
        type: {
            type: String,
            required: true,
        }
    },
    computed: {
    }
}
</script>