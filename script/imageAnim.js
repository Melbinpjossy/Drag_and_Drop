(() => {
	// select the element that you want to work with
	let theButton = document.querySelector("#buttonHolder img");
	//window.addEventListener("load", changeHeaderText);

	function changeHeaderText() {
		document.querySelector("h1").testContent = "Hey there from JavaScript"
	}

	// event handling goes at the bottom
	theButton.addEventListener("click", changeHeaderText);
	
	// set up the puzzle pieces and boards

})();



