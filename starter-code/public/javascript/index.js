const charactersAPI = new APIHandler('http://localhost:8000');
const $characterContainer = document.querySelector('.characters-container');




window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {    
    
    charactersAPI.getFullList()
    .then(characters => {
      $characterContainer.innerHTML = "";
      //console.log(characters)
      for (let character of characters) {
        $characterContainer.innerHTML += 
        `<div class="character-info">
        <div class="name">Character Name:  ${character.name}</div>
        <div class="occupation">Character Occupation:  ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon?:  ${character.cartoon}</div>
        <div class="weapon">Character Weapon:  ${character.weapon}</div>
        </div>`;
      }
    })
    .catch(error => {
      console.log("error getFullList ", error);
    })
  });  
  
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterId = document.querySelector('[name=character-id]').value;
    charactersAPI.getOneRegister(characterId)
    .then(character => {
      //console.log(characterId)
      $characterContainer.innerHTML = "";
      $characterContainer.innerHTML = 
        `<div class="character-info">
          <div class="name">Character Name:  ${character.name}</div>
          <div class="occupation">Character Occupation:  ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon?:  ${character.cartoon}</div>
          <div class="weapon">Character Weapon:  ${character.weapon}</div>
        </div>`;
      })
    .catch(error => {
      console.log("error getOneRegister ", error);
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterId = document.querySelector('[name=character-id-delete]').value;
    charactersAPI.deleteOneRegister(characterId)
    .catch(error => {
      console.log("error deleteOneRegister ", error);
    })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
