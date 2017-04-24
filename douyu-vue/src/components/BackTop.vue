<template>
    <div class="backTop" v-if="scroll" @click="backTop">
            <i class="icon-arrow-up"></i>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                 scroll:false
            }
        },
        methods:{
             backTop(){
                var top=document.body.scrollTop;
                var speed=30;
                var time=setInterval(()=>{
                    top-=speed;
                    if(top<=0){
                        top=0;
                        clearInterval(time);
                    }
                    document.body.scrollTop=top;
                },30)
                this.scroll=false;
            }
        },
        mounted(){
            var $this=this;
            window.onscroll=function(){
                var top=document.body.scrollTop || document.documentElement.scrollTop;
                if(top>300){
                    $this.scroll=true;
                }else{
                    $this.scroll=false;
                }
            }
        }
    }
</script>
<style>
  .backTop{position:fixed;bottom:40px;right:20px;}
  .backTop i{font-size:20px;display:inline-block;padding:10px;border:1px solid #ccc;color:#ccc;border-radius:50%;}
</style>