<script>
import {computed} from "vue"
import {useStore} from "vuex"

export default {
    props:["currCategory","currPlanet"],

    setup(props){
  const currCategory = computed(()=>props.currCategory);
  const currPlanet = computed(()=>props.currPlanet);
  const store = useStore();
  
  

 const changeCategory = (newCategory)=>{
  store.commit("changeCategory",newCategory)
}

  return {
      currCategory,
      currPlanet,
      changeCategory
  }

    }
}
  </script>


<template>
    <div>
           <div class="mobile mobile-category-row category-selection-row">
            <button @click="changeCategory('overview')" :class="currCategory == 'overview' ? 'category-mobile-btn uppercase' : 'category-mobile-btn muted uppercase'">
                <h5 :class="currCategory == 'overview' ?  currPlanet.name.toLowerCase() + '-underline mobile-btn-h5' : 'mobile-btn-h5'">Overview</h5>
            </button>
            <button @click="changeCategory('structure')" :class="currCategory == 'structure' ? 'category-mobile-btn uppercase flex-center' : 'category-mobile-btn muted uppercase flex-center'">
                                <h5 :class="currCategory == 'structure' ?  currPlanet.name.toLowerCase() + '-underline mobile-btn-h5' : 'mobile-btn-h5'">Structure</h5>

            </button>
            <button @click="changeCategory('geology')" :class="currCategory == 'geology' ? 'category-mobile-btn uppercase flex-end' : 'category-mobile-btn muted uppercase flex-end'">
                                <h5 :class="currCategory == 'geology' ?  currPlanet.name.toLowerCase() + '-underline  mobile-btn-h5' : 'mobile-btn-h5'">Geology</h5>

            </button>
          </div>
    </div>
</template>

<style>
.mobile-category-row{
    display:none;
}

   .category-mobile-btn{
        flex:1;
        /* font-size:2rem; */
        color:var(--white);
        background:transparent;
        outline:none;
        border:none;
        cursor:pointer;
    }

    .mobile-btn-h5{
        width:fit-content;
        font-size:1.4rem;
    }

    
.mercury-underline{
   position:relative;
  
}

.mercury-underline::after{
    content:"";
    position:absolute;
    bottom:-2rem;
    left:0rem;
    width:100%;
    border:4px solid var(--mercury);
    animation:growline .5s forwards;

}



.venus-underline{
       position:relative;

}

.venus-underline::after{
    content:"";
    position:absolute;
    bottom:-2rem;
    left:0rem;
    width:100%;
    border:4px solid var(--venus);
    animation:growline .5s forwards;


}

.earth-underline{
       position:relative;

}

.earth-underline::after{
    content:"";
    position:absolute;
    bottom:-2rem;
    left:0rem;
    width:100%;
    border:4px solid var(--earth);
    animation:growline .5s forwards;


}

.mars-underline{
       position:relative;

}

.mars-underline::after{
    content:"";
    position:absolute;
    bottom:-2rem;
    left:0rem;
    width:100%;
    border:4px solid var(--mars);
    animation:growline .5s forwards;


}

.jupiter-underline{
       position:relative;

}

.jupiter-underline::after{
    content:"";
    position:absolute;
    bottom:-2rem;
    left:0rem;
    width:100%;
    border:4px solid var(--jupiter);
    animation:growline .5s forwards;


}

.saturn-underline{
       position:relative;

}
.saturn-underline::after{
    content:"";
    position:absolute;
    bottom:-2rem;
    left:0rem;
    width:100%;
    border:4px solid var(--saturn);
    animation:growline .5s forwards;


}

.uranus-underline{
       position:relative;

}

.uranus-underline::after{
    content:"";
    position:absolute;
    bottom:-2rem;
    left:0rem;
    width:100%;
    border:4px solid var(--uranus);
    animation:growline .5s forwards;


}

.neptune-underline{
       position:relative;
}

.neptune-underline::after{
    content:"";
    position:absolute;
    bottom:-2rem;
    left:0rem;
    width:100%;
    border:4px solid var(--neptune);
    animation:growline .5s forwards;


}

@keyframes growline{
    0%{
        transform:scale(0)
    }
      50%{
        transform:scale(1.2)
    }
    100%{
        transform:scale(1);
        
    }
}







@media screen and (max-width:650px){

    .mobile-category-row{
        display:flex;
        align-items:center;
        width:100%;
        border-bottom:2px solid rgba(255,255,255,.6);
        padding:2rem;
    }

 

}
    
</style>