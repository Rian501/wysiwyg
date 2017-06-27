let inputBox = document.getElementById('userInput');

let famousPplArray = [
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
	  title: "Performer",
	  name: "Josephine Baker",
	  bio: "Josephine Baker (born Freda Josephine McDonald) was an entertainer, activist, and French Resistance agent. During her early career she was renowned as a dancer, and she was also known for aiding the French Resistance during World War II.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Josephine_Baker_1950.jpg",
	  lifespan: {
	    birth: 1906,
	    death: 1975
	  }
	},
	{
	  title: "Abstract Artist",
	  name: "Oskar Fischinger",
	  bio: "Oskar Wilhelm Fischinger was a German-American abstract animator, filmmaker, and painter, notable for creating abstract musical animation many decades before the appearance of computer graphics and music videos.",
	  image: "http://www.centerforvisualmusic.org/CVM_OF_B0011_c.jpg",
	  lifespan: {
	    birth: 1900,
	    death: 1967
	  }
	},
]

let outputSec = document.getElementById("output");
let i = 0;
function puppetMaster () {
	for (; i < 3; i++) {
		outputSec.innerHTML += `
			<div class="person">
				<header>${famousPplArray[i].title}: ${famousPplArray[i].name}</header>
				<img src = "${famousPplArray[i].image}">
				<article class="bio">${famousPplArray[i].bio}</article>
				<footer>Lifespan: ${famousPplArray[i].lifespan.birth} - ${famousPplArray[i].lifespan.death}</footer>
			</div>`
	}
	addClickListener();
}
let personContainer = null;

function addClickListener () {
	personContainer = document.getElementsByClassName("person");
	for (let i=0; i< personContainer.length; i++) {
		personContainer[i].addEventListener("click", function() {
			UnSelect();
			});
	}
};

function UnSelect() {
	  for (let i=0; i<personContainer.length; i++) {
		personContainer[i].classList.remove("dotted-border");
		}
		newSelect();
}

function newSelect() {
	event.currentTarget.classList.add("dotted-border");
	let selectedCard = document.getElementsByClassName("dotted-border")
	targetBioOfSelected(selectedCard[0]);
}

function targetBioOfSelected(selectedCard) {
	let selectedBio = selectedCard.getElementsByClassName('bio');
	doStuffToSelected(selectedCard, selectedBio[0]);
}
function clearEvent() {
	inputBox.removeEventListener('keyup', function() {
		let replacementText = inputBox.value;
	});
	inputBox.value = '';
	return false
}

function doStuffToSelected(selectedCard, selectedBio) {
	var perCard = document.getElementsByClassName('person');
	console.log("persons?", perCard);
	console.log("selected Card", selectedCard);
	inputBox.focus();
	inputBox.addEventListener('keyup', function () {
		let replacementText = inputBox.value;
		if (selectedCard.classList.contains('dotted-border') && event.key !== 'Enter') {
			selectedCard.querySelector('.bio').innerHTML = replacementText;
			}
		if (event.key === 'Enter')  {
			clearEvent();
			}
		});
}

puppetMaster();
