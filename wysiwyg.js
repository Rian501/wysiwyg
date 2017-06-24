// Create an array of objects that represents famous people (see structure below).
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
		console.log("target?", event.target, event.currentTarget);
		event.currentTarget.classList.add("dotted-border");
		//So, ideally (probably) we want to remove the dotted border if another div is clicked, but that isn't in the reqs so for MVP and for now, this is fine.
		var selectedBio = event.currentTarget.querySelector('.bio');
		console.log("selected Bio?", selectedBio);
		selectedBio.style.color = "blue";
		//somehow link the person's bio text to the input box, replacing the bio with what is in the input box immediately (not on enter, but as you type)
	});
};


// So the input box should clear on enter press.. but the .value will be filling in text in  the bio section of the HTML immediately.
