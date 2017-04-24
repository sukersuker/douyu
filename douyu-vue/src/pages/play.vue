<template>
    <div class="mr-root">
        <back-header><p class="title">{{$route.params.roomname}}</p></back-header>
        <div class="mr-content">
            <div class="playitem">
                <div class="img"><img :src="roomInfo.room_thumb" alt=""></div>
                <div class="status">{{roomInfo.room_status}}</div>
                <div class="time">{{roomInfo.start_time}}</div>
                <div class="status">{{roomInfo.owner_name}}</div>
                <img :src="roomInfo.owner_avatar ">
                <img :src="r.mimg" v-for="r in gifts">
            </div>
        </div>
    </div>
</template>
<script>
import BackHeader from "../components/BackHeader"  //折是个js的文件，他的里面是两个模板，所以用混入的方法吧这个模板加入到components里面去
export default{
    data(){
      return {
          roomInfo:{},
          gifts:[]
      }  
    },
    components:{
        BackHeader
    },
    created(){
        //有路由传递的参数在this.$route.params里面，可以有次得到每个参数
        this.axios.get("/douyuapi/RoomApi/room/"+this.$route.params.roomid).then(data=>{
           this.roomInfo=data.data.data;
           this.gifts=this.roomInfo.gift;
        }).catch(error=>{
            console.log(error)
        })
    }
}
</script>
<style scoped>
.mr-content{padding:44px 15px;margin-top:10px;}
.playitem .img{text-align:center;}
.playitem .img img{border-radius:5px;}
</style>