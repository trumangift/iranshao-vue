<template>
    <view class="content-card-container">
        
    </view>    
</template>
<script>
import UserCard from '../user-card';
export default {
    props: {
        item: {
            required: true,
            type: Object
        },
        type: {
            required: true,
            type: String
        }
    },
    components: {
        UserCard
    }
}
</script>