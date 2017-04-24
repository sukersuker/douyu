<template>
    <div class="mr-root">
            <public-header><p class="title">全部分类</p></public-header>
            <loading v-if="loading"></loading>
            <div class="mr-content">
                <ul>
                    <li is="game-item" v-for="(value,index) in gameList" :key="index" :game="value">
                    </li>
                    <!--在加载模板的时候，子组件导入的只有文件，这个文件是一个组件，起来一个名字，我们用组件
                        有几个table  ul select 里面写入模板是不行的，要借助is属性来加载模板
                    -->
                </ul>
            </div>
            <back-top></back-top>
    </div>
</template>
<script>
    import Public from "../public.js"
    import GameItem from "../components/gameItem"
    import BackTop from "../components/BackTop"
    export default{
        data(){
            return {
                gameList:[],
                loading:true
            }
        },
        mixins:[Public],
        components:{
            GameItem,
            BackTop
        },
        created(){
            this.axios.get("/douyuapi/RoomApi/game").then(data=>{
                this.gameList=data.data.data;
                setTimeout(()=>{
                    this.loading=false;
                },1000)
            }).catch(error=>{
              setTimeout(()=>{
                this.loading=true;
              },2000)
            });
        }
    }
</script>
<style scoped>
  .mr-content{padding:44px 0 0 0}
  .mr-content ul{display:flex;flex-wrap:wrap;}

</style>