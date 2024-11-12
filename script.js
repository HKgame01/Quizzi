// Flashcard data
const flashcards = [
    {
        question: "Definition",
        text: "The accumulation of molecular species at the surface rather than in the bulk of solid or liquid",
        options: ["Adsorption", "Absorption", "Desorption", "Physisorption (or physical adsorption)"],
        correctAnswer: "Adsorption"
    }
];

let currentCard = 0;

// Elements
const flashcardText = document.querySelector(".flashcard-text");
const flashcardImage = document.querySelector(".flashcard-image");
const options = document.querySelectorAll(".option");

// Load flashcard data
function loadFlashcard() {
    const card = flashcards[currentCard];
    flashcardText.textContent = card.text;

    options.forEach((option, index) => {
        option.textContent = `${index + 1} ${card.options[index]}`;
        option.onclick = () => checkAnswer(card.options[index], card.correctAnswer);
    });
}

// Check the user's answer
function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert("Correct!");
    } else {
        alert("Incorrect. Try again.");
    }
}

// Load the first card on page load
loadFlashcard();
