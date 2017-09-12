
function setup() {

}

function checkPalindrome(textInput) {
	var userInput = textInput.replace(/[^A-Za-z0-9]/g, "").split(" ").join("").split("")
	
	var tempArray = userInput
	userInput = userInput.join("")
	tempArray.reverse()
	
	if (tempArray.join("").toLowerCase() == userInput.toLowerCase()) {
		document.getElementById("answerLabel").innerHTML = "That is a palindrome!"
	}
	else {
		document.getElementById("answerLabel").innerHTML = "That is NOT a palindrome."
	}
}