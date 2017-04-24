<template>
    <div class="mr-item">
        <router-link :to="'/room/'+r.room_id">
            <img :src="r.room_src" alt="">
            <div class="room-info">
                    <span class="nickname">{{r.nickname | name}}</span>
                    <span class="count">
                        <i class="icon-group"></i>
                        {{r.online | number}} 
                    </span>
            </div>
            <div class="room-title">
                    <i class="icon-desktop"></i>
                    {{r.room_name | message}}
            </div>
        </router-link>
    </div>
</template>
<script>
    export default{
        props:{
            r:{
               type:Object
            }
        }
    }
</script>
<style scoped>
    .mr-item{margin-top:10px;float:left;width:4.4rem;margin-right:.4rem;position:relative;}
    .mr-item:nth-child(even){margin-right:0;}
    .mr-item img{width:100%;border-radius:5px;height:2.6rem}
    .room-info{
        position:absolute;bottom:32px;color:#fff;padding:0 5px;left:0;right:0;background:rgba(10,10,10,.5);line-height:24px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;
    }
    .room-info .count{
        float:right;
    }
    .room-title{
        line-height:26px;
    }
</style>