// =========================
// DADOS
// =========================

let egoPoints = 0;
let kickPower = 1;
let autoPower = 0;

let rebirths = 0;
let rebirthPrice = 1000;

let awakening = false;

let flowPoints = 0;
let flowActive = false;


// =========================
// ELEMENTOS
// =========================

const pointsElement =
document.getElementById("points");

const rebirthCount =
document.getElementById("rebirth-count");

const flowText =
document.getElementById("flow-text");

const flowBar =
document.getElementById("flow-bar");

const kickButton =
document.getElementById("kick-button");

const kickUpgrade =
document.getElementById("kick-upgrade");

const autoUpgrade =
document.getElementById("auto-upgrade");

const rebirthButton =
document.getElementById("rebirth-button");

const characterList =
document.getElementById("character-list");

const activeCharacterName =
document.getElementById(
"active-character-name"
);

const activeCharacterImage =
document.getElementById(
"active-character-image"
);

const activeCharacterRarity =
document.getElementById(
"active-character-rarity"
);

const activeCharacterBoost =
document.getElementById(
"active-character-boost"
);

const activeCharacterSkills =
document.getElementById(
"active-character-skills"
);


// =========================
// PERSONAGENS
// =====≈===================

const characters=[

{
name:"Isagi Base",
rarity:"COMMON",
boost:0,
unlockOrder:0,
image:"assets/characters/isagi.png",
skills:[
"Direct Shot",
"Fade Away"
]
},

{
name:"Bachira",
rarity:"COMMON",
boost:2,
unlockOrder:1,
image:"assets/characters/bachira.png",
skills:[
"Monster Dribble",
"Bee Shot"
]
},

{
name:"Chigiri",
rarity:"COMMON",
boost:3,
unlockOrder:2,
image:"assets/characters/chigiri.png",
skills:[
"Speed Rush",
"Panther Sprint"
]
},

{
name:"Gagamaru",
rarity:"COMMON",
boost:4,
unlockOrder:3,
image:"assets/characters/gagamaru.png",
skills:[
"Wild Jump",
"Reflex Save"
]
},

{
name:"Barou",
rarity:"RARE",
boost:6,
unlockOrder:4,
image:"assets/characters/barou.png",
skills:[
"King Shot",
"Chop Dribble"
]
},

{
name:"Nagi",
rarity:"RARE",
boost:8,
unlockOrder:5,
image:"assets/characters/nagi.png",
skills:[
"Trap Control",
"Fake Volley"
]
},

{
name:"Reo",
rarity:"RARE",
boost:9,
unlockOrder:6,
image:"assets/characters/reo.png",
skills:[
"Copy Skill",
"Perfect Balance"
]
},

{
name:"Rin Itoshi",
rarity:"EPIC",
boost:12,
unlockOrder:7,
image:"assets/characters/rin.png",
skills:[
"Destroyer Shot",
"Puppet Control"
]
},

{
name:"Shidou",
rarity:"EPIC",
boost:14,
unlockOrder:8,
image:"assets/characters/shidou.png",
skills:[
"Dragon Drive",
"Extreme Volley"
]
},

{
name:"Sae Itoshi",
rarity:"EPIC",
boost:16,
unlockOrder:9,
image:"assets/characters/sae.png",
skills:[
"Perfect Pass",
"Curve Shot"
]
},

{
name:"Kaiser",
rarity:"LEGENDARY",
boost:22,
unlockOrder:10,
image:"assets/characters/kaiser.png",
skills:[
"Kaiser Impact",
"Predator Eye"
]
},

{
name:"Noel Noa",
rarity:"LEGENDARY",
boost:28,
unlockOrder:11,
image:"assets/characters/noa.png",
skills:[
"Perfect Machine",
"Dual Shot"
]
},

{
name:"Lavinho",
rarity:"GODLY",
boost:35,
unlockOrder:12,
image:"assets/characters/lavinho.png",
skills:[
"Dance Dribble",
"Street Genius"
]
},

{
name:"NEL Isagi",
rarity:"GODLY",
boost:45,
unlockOrder:13,
image:"assets/characters/nel-isagi.png",
skills:[
"Meta Vision",
"True Direct Shot"
]
}

];

let selectedCharacter =
characters[0];


// =========================
// FLOW
// =========================

function addFlow(){

if(flowActive){

return;
}

flowPoints += 5;

if(flowPoints >=100){

flowPoints=100;

activateFlow();
}

updateFlowUI();

}


function activateFlow(){

flowActive=true;

flowPoints=100;

flowText.textContent=
"FLOW ACTIVE ⚡";

kickButton.style.transform=
"scale(1.08)";

kickButton.style.boxShadow=
"0 0 80px cyan";

setTimeout(()=>{

flowActive=false;

flowPoints=0;

kickButton.style.transform=
"scale(1)";

kickButton.style.boxShadow=
"0 0 40px cyan";

updateFlowUI();

},15000);

}


function updateFlowUI(){

flowBar.style.width=
`${flowPoints}%`;

if(!flowActive){

flowText.textContent=
`${flowPoints}/100`;

}

}


// =========================
// BOOST
// =========================

function getCurrentBoost(){

let boost=
selectedCharacter.boost;

if(awakening){

boost*=2;
}

if(flowActive){

boost*=2;
}

return boost;

}


// =========================
// CLIQUE
// =========================

function kickBall(){

let gained=

kickPower+
getCurrentBoost()+
rebirths;


// bônus do flow

if(flowActive){

gained*=2;

}

egoPoints+=gained;

addFlow();

updateUI();

}


// =========================
// UPGRADES
// =========================

function buyKickUpgrade(){

if(egoPoints>=25){

egoPoints-=25;

kickPower++;

updateUI();

}

}


function buyAutoUpgrade(){

if(egoPoints>=50){

egoPoints-=50;

autoPower++;

updateUI();

}

}


// =========================
// REBIRTH
// =========================

function rebirth(){

if(
egoPoints>=
rebirthPrice
){

rebirths++;

egoPoints=0;

kickPower=1;

autoPower=0;

rebirthPrice=
Math.floor(
rebirthPrice*1.8
);

renderCharacters();

updateUI();

}

}


// =========================
// PERSONAGENS
// =========================

function renderCharacters(){

characterList.innerHTML="";

characters.forEach(
character=>{

if(
rebirths>=
character.unlockOrder
){

const card=
document.createElement(
"div"
);

card.classList.add(
"character-card"
);

if(
selectedCharacter.name===
character.name
){

card.classList.add(
"active"
);

}

card.innerHTML=`

<img src="${character.image}">

<div>

<h3>
${character.name}
</h3>

<p>
${character.rarity}
</p>

<span>
+${character.boost}
</span>

</div>

`;

card.onclick=()=>{

selectedCharacter=
character;

renderCharacters();

updateUI();

};

characterList.appendChild(
card
);

}

});

}


// =========================
// UI
// =========================

function updateUI(){

pointsElement.textContent=
Math.floor(
egoPoints
);

rebirthCount.textContent=
rebirths;

rebirthButton.textContent=
`⚡ REBIRTH (${rebirthPrice})`;

updateFlowUI();

activeCharacterName.textContent=
selectedCharacter.name;

activeCharacterImage.src=
selectedCharacter.image;

activeCharacterRarity.textContent=
selectedCharacter.rarity;

activeCharacterBoost.textContent=
`+${getCurrentBoost()} Boost`;

activeCharacterSkills.innerHTML=

selectedCharacter.skills
.map(skill=>

`<div class="skill">
${skill}
</div>`

).join("");

if(typeof checkAchievements==="function"){

checkAchievements();

}

}


// =========================
// AUTO FARM
// =========================

setInterval(()=>{

egoPoints+=
autoPower+
rebirths;

updateUI();

},1000);


// DESPERTAR

setInterval(()=>{

awakening=true;

updateUI();

setTimeout(()=>{

awakening=false;

updateUI();

},30000);

},120000);


// =========================
// EVENTOS
// =========================

kickButton.onclick=
kickBall;

kickUpgrade.onclick=
buyKickUpgrade;

autoUpgrade.onclick=
buyAutoUpgrade;

rebirthButton.onclick=
rebirth;

renderCharacters();

updateUI();