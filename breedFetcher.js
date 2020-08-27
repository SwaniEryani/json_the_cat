const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    
    if (error !== null) {
      callback("there is an Error with url", null);
      //console.log("There is an Error");
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        callback(null,data[0].description);
        //console.log(data[0].description);
      } else {
        callback("There is no such breed!", null);
        // console.log("There is no such breed! or there is no input!.please try again")
      }
    }
  });
};

module.exports = { fetchBreedDescription };