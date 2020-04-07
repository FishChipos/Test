timesClicked = 0

function onButtonClick () {
	
	if (timesClicked == 1) {
		document.getElementById("newText").innerHTML = "Isn't a thank you enough?";
		timesClicked++;
		
		return;
	}
	
	if (timesClicked == 2) {
		document.getElementById("newText").innerHTML = "Fine I'll just disable the button.";
		
		document.getElementById("btn").removeEventListener("click", onButtonClick);
		document.getElementById("btn").setAttribute("class", "disabled-button");
	
		return;
	}
	
	let wrapper = document.getElementById("wrapper");
	let newParagraph = document.createElement("p");
	let newText = document.createTextNode("Thanks for clicking me!");
	
	newParagraph.setAttribute("id", "newText");
	
	newParagraph.appendChild(newText);
	wrapper.appendChild(newParagraph);
	
	timesClicked++;
}
