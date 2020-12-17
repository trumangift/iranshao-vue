<template>
    <view class="content-card-container">
        <user-card
            :item="item"
            :type="type"
        >
        </user-card>
        <view>
            <topic-tag v-if="item.utopic" :topicMsg="item.utopic" :type="type" :action="item.action"></topic-tag>
            <normal-text v-if="action === 'status'" :text="bodyCopy" :fullTextFlag="fullTextFlag" :detailId="id"></normal-text>
            <normal-text v-if="action === 'create_race_review'" :text="bodyCopy" :fullTextFlag="fullTextFlag" :detailId="referable_id" type='RaceReview'></normal-text>
            <normal-text v-if="action === 'create_gear_comment'" :text="bodyCopy" :fullTextFlag="fullTextFlag" :detailId="referable_id" type='GearComment'></normal-text>
            <article-text
            v-if="action === 'create_diary' || action === 'create_article'"
            :h1Body="h1Body"
            :bodyText="bodyText"
            :articleId="referable_id"
            :type="referable_type"
            ></article-text>

            <view v-if="action === 'create_article' || action === 'create_diary'" class="photo-container">
                <iran-image :url="item.photo_url" mode="aspectFill" className="cover-image">
                </iran-image>    
            </view>
            <manifesto v-if="action === 'create_participation'" :text="bodyCopy" participationId={referable_id}></manifesto>
            <gallery v-if="item.photos.length > 0 && !['create_article', 'create_diary'].includes(action)" :photos="item.photos || []"></gallery>
            <competition-link :data="item.payload"></competition-link>
        </view>    
    </view>      
</template>
<script>
import UserCard from '../user-card';
import TopicTag from '../topicTag';
import NormalText from '../normal-text';
import ArticleText from '../article-text';
import IranImage from '@/components/image/index.vue';
import Manifesto from '@/pageComponents/manifesto';
import gallery from '@/pageComponents/gallery';
import competitionLink from '@/pageComponents/competition-link';
import './index.scss';
export default {
    created() {
       const {
            action,
            body,
            payload,
            payloads,
            photo_url,
            photos = [],
            user,
            utopic,
            action_text,
            published_at,
            shares_count,
            likes_count,
            replies_count,
            referable_id,
            referable_type,
            liked_by_me,
            favored_by_me,
            posted_by_current_user,
            id
       } = (this.item || {});

        let bodyCopy =  body ? body : ''
        // 截取字符串，body中如果含有<h1></h1>标签，截取出h1标签中的内容h1Body, 截取出h1标签外的内容bodyText
        const h1LastIndex =  bodyCopy.indexOf('</h1>')
        let h1Body = ''
        let bodyText = ''
        let fullTextFlag = false // 标志全文是否显示
        // 如果是日记（文章、资讯）
        if(h1LastIndex !== -1) {
            h1Body = bodyCopy.substring(4, h1LastIndex)
            bodyText = bodyCopy.substring(h1LastIndex+5)
            if (bodyText.length > 88) {
               bodyText = `${bodyText.substring(0, 120)}`
            }
            bodyText = bodyText ? `${bodyText} ...` : '';
        }else { // 如果是用户发的动态
            // 如果太长了，截取一部分显示，再显示"全文"
            if (bodyCopy.length > 88) {
                bodyCopy = `${bodyCopy.substring(0, 88)}...`
                fullTextFlag = true
            }
        }
        this.bodyCopy = bodyCopy;
        this.action = action;
        this.fullTextFlag = fullTextFlag;
        this.id = id;
        this.referable_id = referable_id;
        this.h1Body = h1Body;
        this.bodyText = bodyText;
        this.referable_type = referable_type;
    },
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
    data() {
        return {
           bodyCopy: '',
           fullTextFlag: false,
           action: '',
           id: '',
           referable_id: '',
           h1Body: '',
           bodyText: '',
           referable_type: ''
        }
    },
    components: {
        UserCard,
        TopicTag,
        NormalText,
        ArticleText,
        IranImage,
        Manifesto,
        gallery,
        competitionLink
    }
}
</script>