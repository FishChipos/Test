function onButtonClick () {
	
	let wrapper = document.getElementById("wrapper");
	let newParagraph = document.createElement("p");
	let newText = document.createTextNode("Thanks for clicking me!");
	
	newParagraph.setAttribute("id", "newText");
	
	newParagraph.appendChild(newText);
	wrapper.appendChild(newParagraph);
	
	document.getElementById("btn").removeEventListener("click", onButtonClick);
	document.getElementById("btn").setAttribute("class", "disabled-button");
}