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
	  title: "Abstract Artist",
	  name: "Oskar Fischinger",
	  bio: "Oskar Wilhelm Fischinger was a German-American abstract animator, filmmaker, and painter, notable for creating abstract musical animation many decades before the appearance of computer graphics and music videos.",
	  image: "http://www.centerforvisualmusic.org/CVM_OF_B0011_c.jpg",
	  lifespan: {
	    birth: 1900,
	    death: 1967
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
]

let outputSec = document.getElementById("output");
let i = 0;
for (; i < 3; i++) {
	outputSec.innerHTML += `
		<person class="person" id="person-${i}">
			<header>${famousPplArray[i].title}: ${famousPplArray[i].name}</header>
			<img src = "${famousPplArray[i].image}">
			<article class="bio">${famousPplArray[i].bio}</article>
			<footer>Lifespan: ${famousPplArray[i].lifespan.birth} - ${famousPplArray[i].lifespan.death}</footer>
		</person>`
}

var personContainer = document.getElementsByClassName("person");

for (let i=0; i< personContainer.length; i++) {
	personContainer[i].addEventListener("click", function() {
		UnSelect(event);
		}
	);
};

function UnSelect(event) {
	  for (let i=0; i<personContainer.length; i++) {
		personContainer[i].classList.remove("dotted-border");
		}
		newSelect(event);
}

function newSelect(event) {
	event.currentTarget.classList.add("dotted-border");
	let selectedCard = document.getElementsByClassName("dotted-border")
	console.log("selectedCard", selectedCard);
	targetBioOfSelected(selectedCard);
}

function targetBioOfSelected(selectedCard) {
	let selectedBio = selectedCard[0].querySelector('.bio');
	console.log("the query", selectedCard[0].querySelector('.bio'));
	doStuffToSelected(selectedBio);
}

function doStuffToSelected(selectedBio) {
	console.log("selectedBio", selectedBio);
	inputBox.focus();
	inputBox.addEventListener('keyup', function () {
		if (event.key !== 'Enter') {
			selectedBio.innerHTML = inputBox.value;
		} else {
			inputBox.value = '';
		}
	});
}



//make functions that step 1 clear out the selection, then get the new selection, then do stuff to it.

// So the input box should clear on enter press.. but the .value will be filling in text in  the bio section of the HTML immediately.
