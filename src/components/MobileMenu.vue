<script>
import {useStore} from "vuex"
import {computed} from "vue"
import {chevronIcon} from "../const"



export default {

    setup(){
        const store = useStore();
        const planetNames = computed(()=>store.state.planetNames)
        const showMenu = computed(()=>store.state.showMobileMenu);
        // const countVal = computed(()=>store.state.count);
        

        // console.log("STOREEEE",planetNames,store.state.planetNames);

  
  onresize=()=>{
      if(innerWidth > 550){
          store.commit("toggleMenu",false);
          console.log("Close window!!")
      }
  }

  const setPlanetInfo=(planet)=>{
        store.dispatch("PLANET_INFO",planet);
        store.commit('toggleMenu',false);
  }




        return {
            planetNames,
            showMenu,
            setPlanetInfo,
            chevronIcon
        }
    }

    
}



</script>

<template>

<nav :class="showMenu ? 'mobile-menu mobile' : 'mobile-menu hide-menu mobile'">
<ul class="mobile-items">
   <li @click="setPlanetInfo(planetName)" class="mobile-item" v-for="planetName in planetNames" :key="planetName.id">
       <div class="mobile-item-column">
            <div :class="'dot ' + planetName.name.toLowerCase()"></div>
            <h2 class="uppercase mobile-item-text">{{planetName.name}}</h2>
        </div>
        <div class="mobil-arrow-div">
            <img class="arrow-icon" :src="chevronIcon" alt="icon">
        </div>
    
</li>
</ul>



</nav>
</template>

<style scoped>

.mobile-menu{
    position:absolute;
    width:100%;
    height:100%;
    color:var(--white);
    z-index:5;
    background:var(--darkblue);
    /* border:5px solid white; */
    overflow:auto;
    transition:.5s ease;
    transform-origin:top;
    padding:0rem 2rem;
    padding-top:2rem;
    font-family:var(--antonioFont);
  
}

.hide-menu{
    transform:scaleY(0);
}

.dot{
    width:3rem;
    height:3rem;
    /* background:blue; */
    border-radius:50%;
}

.mobile-items{
    display:flex;
    flex-direction:column;
    height:100%;
}

.mobile-item{
    width: 100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    border-bottom:2px solid grey;
    padding:2rem 0rem;
    cursor:pointer;
    transition:.3s ease;
    /* border:3px solid red; */
}

.mobile-item:hover{
    transform:scale(1.1);
}

.mobile-item-column{
    display:flex;
    align-items:center;
    gap:1.5rem;
}

.mobile-item-text{
    letter-spacing:.25rem;
    font-weight:200;

}

.arrow-icon{
    height:1rem;
}

@media screen and (min-width:550px){
    .mobile-menu{
        display:none;
    }
}


</style>
