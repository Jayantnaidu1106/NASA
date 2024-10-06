// Define your questions and correct answers
const questions = [
    {
        question: "Which one looks clear like water in a glass?",
        images: ["cleanpond.jpg", "pollutedpond.jpg"], // paths to images
        correct: 0 // Index of the correct image
    },
    {
        question: "Which is more clean?",
        images: ["pollutedpond.jpg", "cleanpond.jpg"], // paths to images
        correct: 1 // Index of the correct image
    },
    {
        question: "Which has waste or trash floating in it?",
        images: ["pollutedpond.jpg", "cleanpond.jpg"], // Adjust paths accordingly
        correct: 0 // Assuming polluted pond has waste
    },
    {
        question: "Which one has no green algae or foam on its surface??",
        images: ["cleanpond.jpg", "pollutedpond.jpg"], // Adjust paths accordingly
        correct: 0 // Assuming water flows like water
    }
];

let currentQuestion = 0;
let score = 0;
let answeredQuestions = new Set();
let currentQuestionAnswered = false;

// Get DOM elements
const questionText = document.getElementById("question");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const nextLevelBtn = document.getElementById("next-level-btn");
const scoreDisplay = document.getElementById("score");
const badge = document.getElementById("badge");

// Load the first question
loadQuestion();

// Function to load a question
function loadQuestion() {
    questionText.textContent = questions[currentQuestion].question;
    image1.src = questions[currentQuestion].images[0];
    image2.src = questions[currentQuestion].images[1];
    feedback.textContent = ""; // Clear feedback
    nextBtn.style.display = "none"; // Hide next button
    currentQuestionAnswered = false;
}

// Add click event listeners for the images
image1.addEventListener("click", () => checkAnswer(0));
image2.addEventListener("click", () => checkAnswer(1));

// Function to check the answer
function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].correct) {
        if (!answeredQuestions.has(currentQuestion)) {
            score += 10; // Increment score for a correct answer
            answeredQuestions.add(currentQuestion); // Mark question as answered
        }
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        scoreDisplay.textContent = `Score: ${score}`;
        nextBtn.style.display = "block"; // Show next button
        currentQuestionAnswered = true;
    } else {
        feedback.textContent = "Oops! Wrong answer - Try again!";
        feedback.style.color = "red";
        nextBtn.style.display = "none";
    }
}

// Event listener for the "Next" button
nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion(); // Load the next question
    } else {
        questionText.textContent = "Quiz complete! Well done!";
        image1.style.display = "none"; // Hide images
        image2.style.display = "none";
        feedback.textContent = `Your score: ${score} points!`;
        nextBtn.style.display = "none"; // Hide next button
        const summary = document.createElement("p");
        summary.innerHTML = `
            <b>KEY OBSERVATIONS</b><br><br>
            1. Doesn't look like clear water<br>
            2. Is not clean<br>
            3. Has waste product<br>
            4. Has algae on the surface<br><br>
            <strong>Hurrah! You completed one level!</strong>
        `;
        document.querySelector(".quiz-container").appendChild(summary);

        nextLevelBtn.style.display = "block";

        showBadge();
    }
});
function showBadge() {
    badge.style.display = "block"; // Show badge
    badge.classList.add("celebration"); // Add celebration effect
}

// Reset the quiz for the next level

nextLevelBtn.addEventListener("click", () => {
    window.location.href='level2.html';// Load the first question of the new level
    markLevelAsCompleted(level);
});

// Event listener for the badge click
badge.addEventListener("click", () => {
    badge.style.display = "none"; // Hide the badge when clicked
    // Optionally add any additional logic here, e.g., save the badge to user profile
});
// Add this function to handle the start of Level 2
function startLevel2() {
    // Create the pop-up message
    const popUpMessage = document.createElement("div");
    popUpMessage.id = "popup-message";
    popUpMessage.innerHTML = `
        <h2>Okay, I got it!</h2>
        <p>Humans have dumped waste into the pond. Do you also dump waste into the water?</p>
        <button id="yes-btn">Yes</button>
        <button id="no-btn">No</button>
    `;
    document.body.appendChild(popUpMessage);

    // Add event listeners for Yes and No buttons
    document.getElementById("yes-btn").addEventListener("click", function() {
        popUpMessage.innerHTML = `<h2>Wonderful!</h2><p>You are a good human.</p>`;
        setTimeout(() => {
            popUpMessage.innerHTML = `
                <h2>But what is making the water yellow in color and why does it smell bad and have algae growth?</h2>
                <p>Let's find out!</p>
                <button id="next-question-btn">Let's Go</button>
            `;
            document.getElementById("next-question-btn").addEventListener("click", () => {
                // Call a function to load the next question
                loadNextQuestion();
                document.body.removeChild(popUpMessage); // Remove popup after moving to next question
            });
        }, 2000); // Wait for 2 seconds before showing the next question
    });

    document.getElementById("no-btn").addEventListener("click", function() {
        popUpMessage.innerHTML = `<h2>Oh ho!</h2><p>That's a bad habit. Think of the fish; she doesn't like her home to be trashed. Don't do it again!</p>`;
        setTimeout(() => {
            popUpMessage.innerHTML = `
                <h2>But what is making the water yellow in color and why does it smell bad and have algae growth?</h2>
                <p>Let's find out!</p>
                <button id="next-question-btn">Let's Go</button>
            `;
            document.getElementById("next-question-btn").addEventListener("click", () => {
                // Call a function to load the next question
                loadNextQuestion();
                document.body.removeChild(popUpMessage); // Remove popup after moving to next question
            });
        }, 2000); // Wait for 2 seconds before showing the next question
    });
}

// Call startLevel2 when moving to level 2, for example after completing level 1
document.getElementById('back-btn').addEventListener('click', function() {
    window.location.href='levels.html'; // Navigate to the levels page
});
