
function setup() {

}

function checkPalindrome(textInput) {

    var wordDisplayLabel = document.getElementById("wordDisplay")
    wordDisplayLabel.setAttribute("style", "")

    var answerLabel = document.getElementById("answerLabel")
    answerLabel.setAttribute("style", "")

	var userInput = textInput.replace(/[^A-Za-z0-9]/g, "").split(" ").join("").split("")
	
	var tempArray = userInput
	userInput = userInput.join("")
	tempArray.reverse()

    wordDisplayLabel.innerHTML = textInput

    if (tempArray.join("").toLowerCase() == userInput.toLowerCase()) {
        wordDisplayLabel.setAttribute("style", "animation-name: rotate; animation-duration: 6s; animation-iteration-count: infinite;")
        answerLabel.innerHTML = "That is a palindrome!"
	}
	else {
		answerLabel.innerHTML = "That is NOT a palindrome."
	}
}