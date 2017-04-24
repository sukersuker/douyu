<template>
    <div class="mr-root">
        <public-header><p class="title">斗鱼TV</p></public-header>
        <loading v-if="showloading"></loading>
        <div class="mr-content">
            <home-item v-for="item in roomlist" :r="item"></home-item>
            <p v-if="error">不好意思，加载失败！</p>
        </div>
        <p class="loadmore clear" @click="loadmore" v-if="more">加载更多</p>
        <back-top></back-top>
    </div>
</template>
<script>
    import Public from "../public"
    import HomeItem from "../components/HomeItem"
    import BackTop from "../components/BackTop"
    export default{
        data(){
            return {
                showloading:true,
                roomlist:[],
                error:false,
                page:0,
                more:false
            }
        },
        mixins:[Public],
        components:{
            HomeItem,
            BackTop
        },
        methods:{
            loadmore(){
                this.page++;
                this.load(this.page);
            },
            load(page){
                this.axios.get("/douyuapi/RoomApi/live?offset="+page+"&limit=20").then(data=>{
                    this.error=false;
                    this.roomlist=this.roomlist.concat(data.data.data);
                    setTimeout(()=>{
                        this.showloading=false;
                        this.more=true;
                    },1000)
                }).catch(error=>{
                    this.error=true;
                    setTimeout(()=>{
                        this.showloading=false;
                    },2000)
                })
            }
        },
        created(){
            this.load(this.page);
        }
    }
</script>
<style scoped>
  .mr-content{padding:44px .4rem 0px .4rem;overflow:hidden;}
  .loadmore{width:80%;height:0.7rem;background:#333;color:#fff;text-align:center;line-height:0.7rem;margin:1rem auto;font-size:16px;border-radius:5px;}
  
</style>
