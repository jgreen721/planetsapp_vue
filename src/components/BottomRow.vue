<script>
    import {computed} from "vue";
     import {serializeObjToArr} from "../helpers/serializeObjToArr.js";

export default {
    props:["currPlanet"],

    setup(props){

         const planetInfoArray = computed(()=>serializeObjToArr(props.currPlanet,["revolution","radius","rotation","temperature"]))

    
        console.log("BottomPlanetInfo",planetInfoArray.value)



        return {
             planetInfoArray
        }
       
    }
}
</script>

<template>
    <div class="bottom-row-parent">
        <ul class="planet-info-list">
            <li class="planet-info-item" v-for="planetInfo in planetInfoArray" :key="planetInfo.id">
                <h5 class="uppercase thin muted my-1">{{planetInfo.name}}</h5>
                <h2>{{planetInfo.value}}</h2>
            </li>
        </ul>
    </div>
</template>

<style>
.bottom-row-parent{
    margin:5rem 0;
}
.planet-info-list{
    display:flex;
    font-family:var(--antonioFont);
    justify-content: space-between;
    gap:1.5rem;
}

.planet-info-item{
    flex:1;
    /* border:2px solid rgba(255,255,255,.5); */
    padding:1.5rem;
    border-radius:.5rem;
    position:relative;
    overflow:hidden;
}

.planet-info-item::after{
    content:"";
    width:100%;
    height:100%;
    background:rgba(255,255,255,.5);
    opacity:35%;
    position:absolute;
    inset:0;
    filter:blur(70px);
}


@media screen and (max-width:650px){
    .bottom-row-parent{
        padding:2rem;
        margin:2.5rem 0;
    }
    .planet-info-list{
        flex-direction:column;
    }
}

    
</style>