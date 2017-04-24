<template>
    <div class="mr-root">
        <back-header><p class="title">{{$route.params.gameName}}</p></back-header>
        <div class="mr-content">
            <div class="room-infor" v-for="(value,index) in roomlist" :key="index">
                <router-link :to="'/play/'+value.room_id+'/'+value.room_name">
                  <img :src="value.room_src" alt="">
                </router-link>
                <div class="room-title">
                    <div class="room-name">{{value.room_name}}</div>
                    <div class="nickname">
                        <i class="icon-user"></i>
                        <span>{{value.nickname}}</span>
                    </div>
                    <div class="online">
                        <i class="icon-group"></i>
                        <span>{{value.online | number}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>   
<script>
import BackHeader from "../components/BackHeader"
 export default{
     data(){
        return {
            roomlist:[]
        }
     },
     components:{
         BackHeader
     },
     created(){
         this.axios.get(`/douyuapi/RoomApi/live/${this.$route.params.roomId}?offset=0&limit=20`).then(data=>{
             this.roomlist=this.roomlist.concat(data.data.data);
         }).catch(error=>{
            console.log(error)
         });
     }
 }
</script>    
<style scoped>
 .mr-content{padding:44px 15px;margin-top:10px;}
 .room-infor{height:3rem;margin-bottom:10px;}
 .room-infor  img{width:5rem;height:3rem;float:left;border-radius:5px;}
 .room-title{float:right;width:3.8rem;font-size:14px;}
 .room-name{color:#000;line-height:20px;}
 .nickname{margin:15px 0;}
</style>    