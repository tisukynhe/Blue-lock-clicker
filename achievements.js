// =========================
// CONQUISTAS
// =========================

let achievements = [

{
id:"first_rebirth",
name:"First Rebirth",
icon:"🌀",
description:"Faça seu primeiro rebirth",
unlocked:false
},

{
id:"first_awakening",
name:"First Awakening",
icon:"🔥",
description:"Ative o primeiro despertar",
unlocked:false
},

{
id:"1000_ep",
name:"1.000 EP",
icon:"⚽",
description:"Alcance 1.000 Ego Points",
unlocked:false
},

{
id:"5000_ep",
name:"5.000 EP",
icon:"⚽",
description:"Alcance 5.000 Ego Points",
unlocked:false
},

{
id:"10000_ep",
name:"10.000 EP",
icon:"⚽",
description:"Alcance 10.000 Ego Points",
unlocked:false
},

{
id:"50000_ep",
name:"50.000 EP",
icon:"👑",
description:"Alcance 50.000 Ego Points",
unlocked:false
},

{
id:"100000_ep",
name:"100.000 EP",
icon:"💎",
description:"Alcance 100.000 Ego Points",
unlocked:false
}

];

const achievementList =
document.getElementById(
"achievement-list"
);

function unlockAchievement(id){

const achievement =

achievements.find(

a => a.id === id

);

if(
achievement &&
!achievement.unlocked
){

achievement.unlocked = true;

alert(
`🏆 Conquista desbloqueada:
${achievement.name}`
);

renderAchievements();

}

}

function checkAchievements(){

if(rebirths >= 1){

unlockAchievement(
"first_rebirth"
);

}

if(awakening){

unlockAchievement(
"first_awakening"
);

}

if(egoPoints >= 1000){

unlockAchievement(
"1000_ep"
);

}

if(egoPoints >= 5000){

unlockAchievement(
"5000_ep"
);

}

if(egoPoints >= 10000){

unlockAchievement(
"10000_ep"
);

}

if(egoPoints >= 50000){

unlockAchievement(
"50000_ep"
);

}

if(egoPoints >= 100000){

unlockAchievement(
"100000_ep"
);

}

}

function renderAchievements(){

achievementList.innerHTML="";

achievements.forEach(
achievement=>{

const div =
document.createElement(
"div"
);

div.classList.add(
"achievement"
);

if(
achievement.unlocked
){

div.classList.add(
"unlocked"
);

}

div.innerHTML=`

<div style="
font-size:1.8rem;
margin-bottom:5px;
">

${achievement.icon}

</div>

<h4>

${achievement.name}

</h4>

<p style="
font-size:.75rem;
margin-top:5px;
">

${achievement.description}

</p>

`;

achievementList
.appendChild(
div
);

});

}

renderAchievements();