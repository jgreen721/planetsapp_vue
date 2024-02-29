<script>
import Navbar from "./components/Navbar.vue"
import MainDisplay from "./components/MainDisplay.vue"
import MobileMenu from "./components/MobileMenu.vue"
import {onMounted} from "vue"
import {useStore} from "vuex"

export default {
  
  components:{
    Navbar,
    MainDisplay,
    MobileMenu
  },

  setup(){
const store = useStore();

  

onMounted(()=>{
  // console.log("onMounted fired!",store.state.count)
  store.dispatch("FETCH_DATA")

})

  }

}
</script>

<template>
    <div class="app">
      <div class="app-overlay"></div>
      <div class="app-content">
      <Navbar/>
        <main class="main-section">
          <MobileMenu/>
          <MainDisplay/>
        </main>
        </div>
    </div>
</template>

<style scoped>

.app{
  max-width:144rem;
  margin:0 auto;
  /* border:2px solid white; */
  min-height:100vh;
  position:relative;

  overflow:hidden;
  
}

.app-overlay{
  position:absolute;
  inset:0;
  background-image:url("/images/background-stars.svg");

   animation:spacefloating 25s linear infinite 


}

@keyframes spacefloating{

  100%{
    transform:translateX(-91.5vw);
  }
}

.app-overlay::after{
  content:"";
  inset:0;
  width:100%;
  position:absolute;
  background:var(--darkblue);
  background-image:url("/images/background-stars.svg");
  transform:translateX(10vw);
  /* border:3px solid pink; */

}

.app-overlay::before{
  content:"";
  inset:0;
  width:100%;
  position:absolute;
  background:var(--darkblue);
  background-image:url("./images/background-stars.svg");
  transform:translateX(100vw);
  z-index:10;
    /* border:3px solid green; */



}

.app-content{
  position:relative;
  z-index:50;
  width:100%;
  height:100%;
  min-height:100vh;
  display:flex;
  align-items:center;
  flex-direction:column;
  /* border:5px solid blue; */
}



.main-section{
  /* border:4px solid blue; */
  width:100%;
  flex-grow:1;
  position:relative;
}

</style>
