<script>
import {ref,computed} from "vue"
import {sourceIcon} from "../const";
import {useStore} from "vuex";
export default {
    props:["currPlanet","currCategory"],

    setup(props){
        const currPlanet = computed(()=>props.currPlanet);
        const currCategory = computed(()=>props.currCategory);
        const store = useStore()

// console.log(currPlanet.value)

const changeCategory = (newCategory)=>{
  store.commit("changeCategory",newCategory)
}

        return {
            sourceIcon,
            currPlanet,
            currCategory,
            changeCategory,
        }
    }
    
}
</script>

<template>
    <div class="planet-info-parent">
        <div class="planet-info-content" v-if="currPlanet?.name">
       
        <div class="planet-info-child-column">
        <h1 class="uppercase">{{currPlanet.name}}</h1>
        <h5 class="thin muted formal-font">{{currPlanet.data[currCategory].content}}</h5>
        <div class="source-div">
            <h5 class="thin muted">Source:</h5>
            <a class="wiki-link muted thin" :href="currPlanet.data[currCategory].source" target="_blank">Wikipedia
            <img :src="sourceIcon" alt="icon">
            </a>
        </div>
        </div>
        <div class="planet-info-child-column desktop">
            <button @click="changeCategory('overview')" :class="currCategory == 'overview' ? currPlanet.name.toLowerCase() + '-btn' + ' no-hover info-btn uppercase' : 'info-btn uppercase'"><span class="muted">01</span> Overview</button>
             <button @click="changeCategory('structure')" :class="currCategory == 'structure' ? currPlanet.name.toLowerCase() + '-btn' + ' no-hover  info-btn uppercase' : 'info-btn uppercase'"><span class="muted">02</span>  Internal Structure</button>
            <button @click="changeCategory('geology')" :class="currCategory == 'geology' ? currPlanet.name.toLowerCase() + '-btn' + ' no-hover info-btn uppercase' : 'info-btn uppercase'"><span class="muted">03</span>  Surface Geology</button> 
        </div>
        </div>
        <!-- <div v-if="!currPlanet">
            <h1>Loading...</h1>
        </div> -->
    </div>
</template>

<style scoped>

.planet-info-parent{
   
}

.planet-info-content,
.planet-info-child-column{
    display:flex;
    align-items:flex-start;
    flex-direction:column;
    gap:2rem;
    width:100%;
}

.source-div{
    display:flex;
    align-items:center;
    gap:1rem;
    font-family:var(--spartanFont);
}

.wiki-link{
    color:var(--white);
    opacity:75%;
    padding-right:1rem;
    display:flex;
    align-items:center;
    gap:2rem;
    transition:.5s ease;
    font-size:1.3rem;
    letter-spacing:.15rem;
    font-weight:400;
}

.wiki-link:hover{
  opacity:1;
  text-shadow:1px 1px 1px white, 0px 0px 10px white;
}



.info-btn{
    background:transparent;
    border:3px solid rgba(255,255,255,.5);
    padding:2rem;
    color:var(--white);
    display:block;
    width:100%;
    cursor:pointer;
    transition:.5s;
    font-size:2rem;
    text-align:start;
    white-space: nowrap;
}

.info-btn:hover{
  background:white;
  color:var(--darkblue);
}

.mercury-btn{
  background: var(--mercury);
}

.venus-btn{
  background: var(--venus);
}

.earth-btn{
  background: var(--earth);
}

.mars-btn{
  background: var(--mars);
}

.jupiter-btn{
  background: var(--jupiter);
}

.saturn-btn{
  background: var(--saturn);
}

.uranus-btn{
  background: var(--uranus);
}

.neptune-btn{
  background: var(--neptune);
}




@media screen and (max-width:1050px){
    .planet-info-content{
        flex-direction:row;
        align-items:center;
        justify-content: center;
        /* border:3px solid blue; */
    }
}

@media screen and (max-width:650px){
    .desktop{
      display:none;
    }

    .planet-info-child-column{
      align-items:center;
      text-align:center;
    }
}
    
</style>