const request = require('./node_modules/request');
const arg = process.argv
//allows you to search it through the terminal. Automatically sets the breed name as breedName
const breedName = arg[2]
const breedFetcher = (breedName) => {
  //Website is hardcoded as it is a constant, only thing that changes is the breed name
  const websiteUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
  request(websiteUrl, (error, response, body) => {
    //If an error occurs, run an error message and cancels program, else it continues with search
    if (error) {
      console.log(`Error, failure to search.\nPlease try again.\nReport:\n${error}`)
      return
    } else {
      //Converts string into an object
      const data = JSON.parse(body);
      //checks if the body was able to be parsed, and successfully turned into an object within an
      if (data[0]) {
        // Prints out only the description of the breed"
        console.log(data[0].description);
      } else {
        //If the breed name isnt found, log a message saying that it could not be found.
        console.log(`Sorry, could not find ${breedName}. Please try again.`)
      }
    }
  })
};

breedFetcher(breedName);