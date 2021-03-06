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

function getEpisodes() {
  return axios
    .get("https://breakingbadapi.com/api/episodes")
    .then((response) => {
      const myPromise = new Promise((resolve) => {
        resolve(response.data);
      });
      return myPromise;
    });
}

export { getCharacters, getEpisodes };
