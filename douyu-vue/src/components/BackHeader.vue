<template>
     <header>
        <i class="icon-arrow-left" @click="back"></i>
        <slot></slot>
    </header>
</template>
<script>
    export default{
        methods:{
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style scoped>
     header{height:44px;background:#333;position:fixed;left:0;right:0;top:0;padding:0 15px;color:#fff;line-height:44px;font-size:16px;z-index:100;}
     .title{font-size:15px;display:inline-block;margin-left:15px;}
</style>