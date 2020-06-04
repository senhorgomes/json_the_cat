const request = require('./node_modules/request');
const arg = process.argv
const breedName = arg[2]
const breedFetcher = (breedName, callback) => {
  const websiteUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
  request(websiteUrl, (error, response, body) => {
    if (error) {
      callback (`Error, failure to search. ${error}. Please try again.`)
    }
    const data = JSON.parse(body);
    if (breedName) {
      console.log(data[0].description);
    }
  })
};

breedFetcher(breedName);