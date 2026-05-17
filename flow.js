// =========================
// FLOW SYSTEM
// =========================

// aumenta Flow ao clicar

function addFlowPoints(amount=5){

if(flowActive){

return;

}

flowPoints += amount;

if(flowPoints > 100){

flowPoints = 100;

}

if(flowPoints >= 100){

activateFlow();

}

updateFlowUI();

}


// ativa FLOW

function activateFlow(){

flowActive = true;

flowPoints = 100;

flowText.textContent =
"FLOW ACTIVE";

kickButton.style.transform =
"scale(1.1)";

kickButton.style.boxShadow =
"0 0 60px cyan";


// duração do FLOW

setTimeout(()=>{

flowActive = false;

flowPoints = 0;

kickButton.style.transform =
"scale(1)";

kickButton.style.boxShadow =
"0 0 40px cyan";

updateFlowUI();

},15000);

}


// atualiza barra

function updateFlowUI(){

flowBar.style.width =
`${flowPoints}%`;

if(!flowActive){

flowText.textContent =
`${flowPoints}/100`;

}

}