<script>
import {useStore} from "vuex"
import {computed} from "vue";
import PlanetImage from "./PlanetImage.vue"
import PlanetInfo from "./PlanetInfo.vue"
import BottomRow from "./BottomRow.vue"
import MobileCategoryRow from "./MobileCategoryRow.vue"

export default {
    components:{
        PlanetImage,
        PlanetInfo,
        BottomRow,
        MobileCategoryRow
    },
    setup(){
const store = useStore();
const currPlanet = computed(()=>store.state.currPlanet);
const currCategory = computed(()=>store.state.currCategory);


return{
    currPlanet,
    currCategory
} 

    }




}

</script>

<template>
    <div v-if="currPlanet?.name" class="main-display-container">
        <MobileCategoryRow :currCategory="currCategory" :currPlanet="currPlanet"/>
        <div  class="main-row">
            <div class="main-display-column">
                <PlanetImage :currCategory="currCategory" :currPlanet="currPlanet.data"/>
            </div>
            <div class="main-display-column">
                <PlanetInfo :currCategory="currCategory" :currPlanet="currPlanet"/>
            </div>
        </div>
        <div class="bottom-main-row">
<BottomRow :currPlanet="currPlanet"/>
        </div>
    </div>
</template>

<style>
    .main-display-container{
        /* border:3px solid red; */
        height:100%;
        color:var(--white);
        padding:0rem var(--mainPaddingX);
        padding-top:14rem;
        font-family:var(--antonioFont);
        transform:scale(0);
        animation:scalegrow 1s 1s forwards;
    }

    

    .main-row{
        display:flex;
        gap:4.5rem;
        /* border:3px solid red; */
    }

    .main-display-column{
        flex:1;
        /* border:2px solid blue; */
        display:flex;
        align-items:center;
        justify-content: center;

    }

    @media screen and (max-width:1050px){
        .main-row{
            padding:3rem;
            flex-direction:column;
        }
    }



    @media screen and (max-width:650px){
        .main-display-container{
        padding:0rem;
    }
 
    }
</style>