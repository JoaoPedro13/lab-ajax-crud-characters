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
    const button = document.getElementById('delete-one');
    
    charactersAPI.deleteOneRegister(characterId)
    .then(() => {
      button.style.backgroundColor = 'green';
    })
    .catch(error => {
      button.style.backgroundColor = 'red';
      console.log("error deleteOneRegister ", error);
    })
  });
  
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const characterId = document.querySelector('[name=chr-id]').value;
    const button = document.getElementById('send-data');
    charactersAPI.updateOneRegister(characterId, {
      "name": document.querySelector('#edit-character-form input[name="name"]').value,
      "occupation": document.querySelector('#edit-character-form input[name="occupation"]').value,
      "weapon": document.querySelector('#edit-character-form input[name="weapon"]').value,
      "cartoon": document.querySelector('#edit-character-form input[name="cartoon"]').checked
    })
    .then(() => {
      button.style.backgroundColor = "green";
     })
     .catch(error => {
       button.style.backgroundColor = "red";
      console.log('error updateOneRegister', error);
     });
  });
  
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const button = document.getElementById('send-data');
    charactersAPI.createOneRegister({   
      "id": charactersAPI.length + 1,
      "name": document.querySelector('#new-character-form input[name="name"]').value,
      "occupation": document.querySelector('#new-character-form input[name="occupation"]').value,
      "weapon": document.querySelector('#new-character-form input[name="weapon"]').value,
      "cartoon": document.querySelector('#new-character-form input[name="cartoon"]').checked
    })
    .then(() => {
     button.style.backgroundColor = "green";
    })
    .catch(error => {
      button.style.backgroundColor = "red";
     console.log('error createOneRegister', error);
    });
  });
});
