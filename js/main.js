// GO!

// TASK 1 -- Show/Hide Nav
const btn = document.querySelector(".answer-box button");
const nav = document.querySelector(".answer-box .nav-menu");
btn.addEventListener('click', hideNavBar);

function hideNavBar(){
	nav.classList.toggle("nav-menu-hidden");
	if (btn.textContent === "Hide Nav"){
		btn.textContent = "Show Nav";
	} else if (btn.textContent === "Show Nav"){
		btn.textContent = "Hide Nav";
	}
}


// TASK 2 -- Select an Icon
const changeColor = document.querySelectorAll(".wish-list .option");
const arrayColor = [...changeColor];
for (let i=0; i<arrayColor.length; i++){
	arrayColor[i].addEventListener('click', itemSelect);
}

function itemSelect(evt){
	var currEvt = evt.currentTarget;
	currEvt.classList.toggle("selected");
}


// TASK 3 -- Move Item From List to List
const item = document.querySelectorAll(".add-points .point");
const itemArr = [...item];
for (let i=0; i<itemArr.length; i++){
	itemArr[i].addEventListener('click', sumCounter)
}

var counter = document.querySelector(".total-points")
var numCounter = parseInt(counter.textContent);
function sumCounter(evt){
	var number = parseInt(evt.target.textContent);
	numCounter += number;
	counter.textContent = numCounter;
}


// TASK 4 -- Add Guest to List
const listItems = document.querySelectorAll(".student-workspace li");
const itemsArr = [...listItems];

for (let i=0; i<itemsArr.length; i++){
	itemsArr[i].addEventListener('click', toggleParent)
}

const goodStand = document.querySelector(".good-standing-list");
const probation = document.querySelector(".probation-list");

function toggleParent(evt){
	var evtItem = evt.target;
	if (evtItem.parentNode.classList == "probation-list"){
		goodStand.appendChild(evtItem);
	} else if (evtItem.parentNode.classList == "good-standing-list"){
		probation.appendChild(evtItem);
	}
}


// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
