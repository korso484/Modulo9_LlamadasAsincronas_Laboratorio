const createCharacterRow = (character) => {
  const element = document.createElement("div");
  const avatar = createAvatar(character);
  element.appendChild(avatar);
  const link = createRowText(character);
  element.appendChild(link);
  element.className = "character-row";
  return element;
};

const createAvatar = (character) => {
  const element = document.createElement("img");
  element.width = 150;
  element.className = "thumbnail";
  element.src = character.img;
  return element;
};

const createRowText = (character) => {
  const element = document.createElement("span");
  element.append(character.name);
  return element;
};

const createAvatarDetail = (character) => {
  const element = document.createElement("img");
  element.width = 350;
  element.src = character.img;
  return element;
};

const showCharacter = (character) => {
  console.log("character", character);
  const characterDetail = document.getElementById("character-detail");
  characterDetail.innerHTML = "";
  characterDetail.appendChild(createAvatarDetail(character));
  characterDetail.appendChild(createParagraph("Name: " + character.name));
  characterDetail.appendChild(
    createParagraph("Birthday: " + character.birthday)
  );
  characterDetail.appendChild(
    createParagraph("Nickname: " + character.nickname)
  );
};

const createParagraph = (text) => {
  const element = document.createElement("p");
  element.append(text);
  return element;
};

const createEpisodeRowText = (episode) => {
  const element = document.createElement("span");
  element.append(episode.episode_id + " ");
  element.append(episode.title);
  return element;
};

const createEpisodeRow = (episode) => {
  const element = document.createElement("div");
  const link = createEpisodeRowText(episode);
  element.appendChild(link);
  element.className = "episode-row";
  return element;
};

const showEpisode = (episode) => {
  console.log("episode", episode);
  const episodeDetail = document.getElementById("episode-detail");
  episodeDetail.innerHTML = "";
  episodeDetail.appendChild(createParagraph("Title: " + episode.title));
  episodeDetail.appendChild(createParagraph("Season: " + episode.season));
  episodeDetail.appendChild(createParagraph("Air Date: " + episode.air_date));
};

export { createCharacterRow, showCharacter, createEpisodeRow, showEpisode };
