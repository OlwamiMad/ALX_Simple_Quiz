// Step 1: Declare the checkAnswer function
function checkAnswer() {
    // Step 2: Set the correct answer
    const correctAnswer = "4";
    
    // Step 3: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Step 4: Check if the user has selected an answer
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        
        // Step 5: Compare the user's answer to the correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // Step 6: If no answer is selected, prompt the user to choose an option
        document.getElementById("feedback").textContent = "Please select an answer!";
    }
}

// Step 7: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
