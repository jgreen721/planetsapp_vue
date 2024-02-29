import { createStore } from "vuex";
import { reformatPlanetArr } from "./helpers/reformatPlanetArr";
// Create a new store instance.

export const store = createStore({
  state() {
    return {
      planetNames: [],
      planetData: [], // holds all our data
      currPlanet: null,
      currCategory: "overview",
      showMobileMenu: false,
    };
  },
  mutations: {
    toggleMenu(state, status = null) {
      // console.log("toggleMenuFired, Status:", status);
      if (status == null) {
        state.showMobileMenu = !state.showMobileMenu;
      } else {
        state.showMobileMenu = status;
      }
    },
    setPlanetNames(state, planetNames) {
      // console.log(planetNames);
      state.planetNames = planetNames;
    },

    setPlanetData(state, planetData) {
      // console.log(planetData);
      state.planetData = planetData;
    },

    setPlanetInfo(state, planetInfo) {
      // console.log("settingCurrPlanet", planetInfo);
      state.currPlanet = planetInfo;
    },

    changeCategory(state, newCategory) {
      console.log("NewCategory", newCategory);
      state.currCategory = newCategory;
    },
  },

  actions: {
    FETCH_DATA(commit) {
      fetch("data.json")
        .then((res) => res.json())
        .then((res) => {
          // console.log(res);
          let formattedData = reformatPlanetArr(res.data);
          let planetNames = res.data.map((planet, idx) => ({
            id: idx + 1,
            name: planet.name,
          }));
          commit.commit("setPlanetNames", planetNames);
          commit.commit("setPlanetData", formattedData);
          commit.commit("setPlanetInfo", formattedData[0]);
        });
    },

    PLANET_INFO(commit, planet) {
      // console.log(planet.name);
      // let currPlanet = commit.state.planetData;
      let planetInfo = commit.state.planetData.filter(
        (p) => p.name == planet.name
      )[0];
      // console.log(planetInfo);
      commit.commit("setPlanetInfo", planetInfo);
    },
  },
});
