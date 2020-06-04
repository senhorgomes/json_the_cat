const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log((`Error, failure to search.\nPlease try again.\nReport:\n${error}`));
  } else {
    console.log(desc);
  }
});