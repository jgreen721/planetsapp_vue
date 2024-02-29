export const reformatPlanetArr = (arr) => {
  arr = arr.map((planet) => {
    let planetData = {};
    (planetData.geology = {
      // category: "geology",
      content: planet.geology.content,
      source: planet.geology.source,
      img: planet.images.geology,
    }),
      (planetData.overview = {
        // category: "geology",
        content: planet.overview.content,
        source: planet.overview.source,
        img: planet.images.planet,
      }),
      (planetData.structure = {
        // category: "geology",
        content: planet.structure.content,
        source: planet.structure.source,
        img: planet.images.internal,
      });

    // planetData.push({
    //   id: planetData.length + 1,
    //   category: "overview",
    //   content: planet.overview.content,
    //   source: planet.overview.source,
    //   img: planet.images.overview,
    // });
    // planetData.push({
    //   id: planetData.length + 1,
    //   category: "structure",
    //   content: planet.structure.content,
    //   source: planet.structure.source,
    //   img: planet.images.structure,
    // });
    delete planet.geology;
    delete planet.overview;
    delete planet.structure;
    delete planet.images;
    planet.data = planetData;
    return planet;
  });
  // console.log("newArr", arr);
  return arr;
};
