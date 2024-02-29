export const serializeObjToArr = (obj, desiredKeys) => {
  // console.log("Object", obj);

  console.log("SERIALIZE");
  let arr = [];
  for (let key in obj) {
    if (desiredKeys.indexOf(key) !== -1) {
      arr.push({
        id: arr.length + 1,
        name: key,
        value: obj[key] == Object ? { ...obj[key] } : obj[key],
      });
    }
  }

  return arr;
};
