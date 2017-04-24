<template>
  <div id="app">
    <transition name="side">
      <slide-menu v-show="show" @hide="hide"></slide-menu>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
import bus from "./bus"
import SlideMenu from "./components/Slidemenu";
export default{
   data(){
     return {
       show:false
     }
   },
   components:{
     SlideMenu
   },
   mounted(){
     bus.$on("sideShow",this.side);
   },
   methods:{
     side(){
       this.show=!this.show;
     },
     hide(){
       this.show=!this.show;
     }
   }
}
</script>

<style>
  .side-enter,.side-leave-active{
       /*transform:translateX(-100%);*/
       opacity:0;
  }
  .side-enter-active,.side-leave-active{
      transition:all 0.6s;
  }
  .side-enter ul,.side-leave-active ul{
    transform:translateX(-100%);
   
  }
  .side-enter-acitve ul,.side-leave-active ul{
    transition:all 0.5s linear
  }
  
</style>
