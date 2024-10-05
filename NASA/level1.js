// Define your questions and correct answers
const questions = [
    {
        question: "Which looks like water?",
        images: ["d.jpg", "H.jpg"], // paths to images
        correct: 0 // Index of the correct image
    },
    {
        question: "Which is more clean?",
        images: [".jpg", ".jpg"], // paths to images
        correct: 1 // Index of the correct image
    }
];

let currentQuestion = 0;

// Get DOM elements
const questionText = document.getElementById("question");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

// Load the first question
loadQuestion();

// Function to load a question
function loadQuestion() {
    questionText.textContent = questions[currentQuestion].question;
    image1.src = questions[currentQuestion].images[0];
    image2.src = questions[currentQuestion].images[1];
    feedback.textContent = ""; // Clear feedback
    nextBtn.style.display = "none"; // Hide next button
}

// Add click event listeners for the images
image1.addEventListener("click", () => checkAnswer(0));
image2.addEventListener("click", () => checkAnswer(1));

// Function to check the answer
function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].correct) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        nextBtn.style.display = "block"; // Show next button
    } else {
        feedback.textContent = "Try again!";
        feedback.style.color = "red";
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
        feedback.textContent = "";
        nextBtn.style.display = "none"; // Hide next button
    }
});
