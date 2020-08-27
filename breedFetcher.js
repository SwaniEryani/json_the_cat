const request = require('request');
const catName = process.argv[2];


request(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, (error, response, body) => {
  //console.log('error:', error); 
  if (error) {
    console.log("There is an Error");
  } else {
    const data = JSON.parse(body);
    //console.log(data);
    if (data.length > 0) {
      console.log(data[0].description);
    } else {
      console.log("There is no such name! please try again")
    }
  }
});