<script>
import MobileMenu from "./MobileMenu.vue"
import {useStore} from "vuex"
import {computed} from "vue";
import {burgerIcon} from "../const"

export default {
   components:{
       MobileMenu,
       
   },


   setup(){
       const store = useStore();
       const pNames = computed(()=>store.state.planetNames)
       const currPlanet = computed(()=>store.state.currPlanet);




  

     const setPlanetInfo=(planetName)=> {
         console.log("planetName",planetName.name);
            store.dispatch("PLANET_INFO", planetName);
        }

    const toggleMobileMenu = ()=>{
        store.commit("toggleMenu");
    }

      



         return {
           pNames,
           currPlanet,
           setPlanetInfo,
           toggleMobileMenu,
           burgerIcon,
         
       }
   },


}

</script>

<template>
<nav class="nav">
    <h2 :class="currPlanet?.name.toLowerCase() + '-shadow nav-header uppercase'">The Planets</h2>
    <ul class="nav-links">

        <li @click="setPlanetInfo(planetName)" :style="'--i:' + (index/4) + 's'" class="nav-link-item" v-for="(planetName, index) in $store.state.planetNames" :key="planetName.id">
            <h5>{{planetName.name}}</h5>
        </li>
    </ul>
    <div class="mobile">
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
            <img class="burger-icon" :src="burgerIcon" alt="icon">
        </button>
    </div>
</nav>
</template>

<style scoped>
.nav{
    display:flex;
    align-items:center;
    justify-content: space-between;
    color:var(--white);
    font-family:var(--antonioFont);
    padding:3rem;
    border-bottom:3px solid rgba(255,255,255,.3);
    width:100%;
    /* border:2px solid green; */
}

.nav-header{
    letter-spacing:.25rem;
    animation:fadein 1s forwards;
    position:relative;
}

.nav-header::after{
    content:"The Planets";
    text-transform:uppercase;
    position:absolute;
    inset:0;
    filter:blur(3px)hue-rotate(90deg);
}

.mercury-shadow{
    position:relative;
}

.mercury-shadow::before{
     content:"The Planets";
    text-transform:uppercase;
    position:absolute;
    color:var(--mercury);
    inset:0;
}

.venus-shadow{
    position:relative;
}

.venus-shadow::before{
     content:"The Planets";
    text-transform:uppercase;
    position:absolute;
    color:var(--venus);
    inset:0;
}

.earth-shadow{
    position:relative;
}

.earth-shadow::before{
     content:"The Planets";
    text-transform:uppercase;
    position:absolute;
    color:var(--earth);
    inset:0;
}

.mars-shadow{
    position:relative;
}

.mars-shadow::before{
     content:"The Planets";
    text-transform:uppercase;
    position:absolute;
    color:var(--mars);
    inset:0;
}

.jupiter-shadow{
    position:relative;
}

.jupiter-shadow::before{
     content:"The Planets";
    text-transform:uppercase;
    position:absolute;
    color:var(--jupiter);
    inset:0;
}

.saturn-shadow{
    position:relative;
}

.saturn-shadow::before{
     content:"The Planets";
    text-transform:uppercase;
    position:absolute;
    color:var(--saturn);
    inset:0;
}

.uranus-shadow{
    position:relative;
}

.uranus-shadow::before{
     content:"The Planets";
    text-transform:uppercase;
    position:absolute;
    color:var(--uranus);
    inset:0;
}

.neptune-shadow{
    position:relative;
}

.neptune-shadow::before{
     content:"The Planets";
    text-transform:uppercase;
    position:absolute;
    color:var(--neptune);
    inset:0;
}


.nav-links{
    display:flex;
    align-items:center;
    gap:2rem;
}

.nav-link-item{
    transition:.3s ease;
    cursor:pointer;
    opacity:75%;
    transform:scale(0);
    animation:scalegrow .5s var(--i) forwards;
}


.nav-link-item:hover{
    transform:translateY(-.5rem);
    transition:.2s ease;
    opacity:100%;
    text-shadow:1px 1px 1px var(--white),
    0px 0px 10px var(--white);


}

.mobile{
    display:none;
}


.burger-icon{
    cursor:pointer;
    transition:.3s ease;
}

.burger-icon:hover{
    opacity:50%;
}

.mobile-menu-btn{
    border:none;
    background:transparent;
}

@media screen and (max-width:1050px){
    .nav{
        flex-direction:column;
        gap:2rem;
    }
}

@media screen and (max-width:550px){
    .nav{
        flex-direction:row;
    }
    .nav-links{
        display:none;
    }

    .mobile{
        display:block;
    }

 
}

</style>
