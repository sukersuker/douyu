<template>
    <header>
        <i class="icon-reorder" @click="showSide"></i>
        <slot></slot>
        <i class="icon-user"></i>
    </header>
</template>
<script>
    import bus from "../bus"
    export default{
        methods:{
            showSide(e){
                bus.$emit("sideShow");
            }
        }
    }
</script>
<style scoped>
     header{height:44px;background:#333;position:fixed;left:0;right:0;top:0;padding:0 15px;color:#fff;line-height:44px;font-size:16px;z-index:100;}
     .title{font-size:15px;display:inline-block;margin-left:15px;}
     .icon-user{float:right;line-height:44px;}
</style>