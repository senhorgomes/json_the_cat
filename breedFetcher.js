const request = require('./node_modules/request');
//allows you to search it through the terminal. Automatically sets the breed name as breedName
//const arg = process.argv
//const breedName = arg[2]
const fetchBreedDescription = function(breedName, callback) {
  //Website is hardcoded as it is a constant, only thing that changes is the breed name
  const websiteUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
  request(websiteUrl, (error, response, body) => {
    //If an error occurs, run an error message and cancels program, else it continues with search
    if (error) {
      callback (error, desc)
    } else {
      //Converts string into an object
      const data = JSON.parse(body);
      //checks if the body was able to be parsed, and successfully turned into an object within an
      if (data[0]) {
        // Prints out only the description of the breed"
         let desc = data[0].description
         callback (error, desc)
      //} else {
      //  //If the breed name isnt found, log a message saying that it could not be found.
      //  console.log(`Sorry, could not find ${breedName}. Please try again.`)
      }
    }
  })
};

module.exports = { fetchBreedDescription };