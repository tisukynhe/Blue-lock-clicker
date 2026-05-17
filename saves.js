// =========================
// SAVE SYSTEM
// =========================

const SAVE_KEY =
"blue_lock_save";


function saveGame(){

const data={

egoPoints,
kickPower,
autoPower,
rebirths,
rebirthPrice,

flowPoints,
flowActive,

awakening,

selectedCharacter:
selectedCharacter.name

};

localStorage.setItem(

SAVE_KEY,

JSON.stringify(data)

);

}


function loadGame(){

const save=

localStorage.getItem(
SAVE_KEY
);

if(!save){

return;

}

const data=

JSON.parse(save);


// DADOS PRINCIPAIS

egoPoints=

data.egoPoints || 0;

kickPower=

data.kickPower || 1;

autoPower=

data.autoPower || 0;

rebirths=

data.rebirths || 0;

rebirthPrice=

data.rebirthPrice || 1000;

flowPoints=

data.flowPoints || 0;

flowActive=

data.flowActive || false;

awakening=

data.awakening || false;


// PERSONAGEM

const foundCharacter=

characters.find(

c=>

c.name===

data.selectedCharacter

);

if(foundCharacter){

selectedCharacter=

foundCharacter;

}

}


// =========================
// AUTO SAVE
// =========================

// salva a cada 5s

setInterval(()=>{

saveGame();

},5000);


// salva ao sair

window.addEventListener(

"beforeunload",

saveGame

);


// carrega ao abrir

loadGame();