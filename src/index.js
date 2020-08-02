import "./styles.css";
import * as DataBusiness from "./data-business.js";
import * as Utils from "./utils.js";

DataBusiness.getCharacters().then((characters) => {
  const rows = [];

  for (let character of characters) {
    const row = Utils.createCharacterRow(character);
    row.onclick = function () {
      Utils.showCharacter(character);
    };
    rows.push(row);
  }

  for (let row of rows) {
    document.getElementById("root").append(row);
  }
});
