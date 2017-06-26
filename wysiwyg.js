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

function UnSelect() {
	  cardsToUnselect = document.getElementsByClassName("dotted-border");
	  console.log("cards to unselect", cardsToUnselect);
		console.log("dotted border?", document.getElementsByClassName("dotted-border"));
	  for (let i=0; i<cardsToUnselect.length; i++) {
		cardsToUnselect[i].classList.remove("dotted-border");
		console.log("dotted border?", document.getElementsByClassName("dotted-border"));
	}
}



for (let i=0; i< personContainer.length; i++) {
	personContainer[i].addEventListener("click", function() {
		UnSelect();
		event.currentTarget.classList.add("dotted-border");
		//So, ideally (probably) we want to remove the dotted border if another div is clicked...
		var selectedBio = event.currentTarget.querySelector('.bio');
		selectedBio.style.backgroundColor = "orange";
		inputBox.focus();
		inputBox.addEventListener('keyup', function () {
			if (event.key !== 'Enter') {
 			selectedBio.innerHTML = inputBox.value;
			} else {
				inputBox.value = '';
			}
		})
	});
};


//make functions that step 1 clear out the selection, then get the new selection, then do stuff to it.

// So the input box should clear on enter press.. but the .value will be filling in text in  the bio section of the HTML immediately.
