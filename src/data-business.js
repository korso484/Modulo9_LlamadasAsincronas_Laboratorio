import axios from "axios";

function getCharacters() {
  return axios
    .get("https://www.breakingbadapi.com/api/characters")
    .then((response) => {
      const myPromise = new Promise((resolve) => {
        resolve(response.data);
      });
      return myPromise;
    });
}

export { getCharacters };
