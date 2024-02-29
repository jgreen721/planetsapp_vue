<script>
import {ref,computed} from "vue";
import { serializeObjToArr } from "../helpers/serializeObjToArr"
export default {
    props:["currPlanet","currCategory"],
    
    setup(props){
        const currPlanet = computed(()=>props.currPlanet);
        const currCategory = computed(()=>props.currCategory);
        // console.log(currPlanet.value,currCategory.value)



        return {
            currPlanet,
            currCategory
        }
    }
}
</script>


<template>
    <div class="planet-img-div">
        <img :src="currPlanet[currCategory].img" alt="img" class="planet-img"/>
    
    </div>
</template>


<style scoped>

.planet-img-div{

}

@media screen and (max-width:650px){
    .planet-img{
        max-width:300px;
        max-height:300px;
    }
}
    
</style>