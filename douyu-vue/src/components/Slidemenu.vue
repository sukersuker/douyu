<template>
    <div class="side" @click="sideHide">
           <ul>
               <router-link tag="li" v-for="item in list" :to="item.uri">
                    {{item.name}}
                    <i class="icon-chevron-right"></i>
               </router-link>
           </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                list:[
                    {name:"首页",uri:"/"},
                    {name:"全部分类",uri:"/category"},
                    {name:"推荐",uri:"/recommend"},
                    {name:"个人中心",uri:"/user"}
                ]
            }
        },
        methods:{
            sideHide(){
                this.$emit("hide")
            }
        }
    }
</script>

<style scoped>
    .side{background:rgba(10,10,10,.3);height:100%;position:fixed;width:100%;padding-top:44px;z-index:100}
    .side ul{width:70%;background:#333;height:100%;border-top:1px solid #222;}
    .side ul li{height:50px;line-height:50px;border-bottom:1px  dashed #ccc;font-size:16px;padding:0 10px;color:#9a9a9a;}
    .side ul li i{float:right;line-height:50px;}
</style>