function arrayToObj(inputArray) {
   
   const outputArray = {};
   inputArray.map(pairObj => {
      director = pairObj[0];
      movie = pairObj[1];
      outputArray[director] = movie;
   })
   return outputArray;
}

module.exports = arrayToObj;