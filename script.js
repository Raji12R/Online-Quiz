const questions = [
    { q: "What is HTML?", a: ["Programming Language", "Markup Language", "Database", "OS"], correct: 1 },
    { q: "What is CSS used for?", a: ["Logic", "Styling", "Database", "Server"], correct: 1 },
    { q: "JavaScript is used for?", a: ["Styling", "Structure", "Interactivity", "Storage"], correct: 2 },
    { q: "Which tag is used for paragraph?", a: ["p tag", "h1 tag", "div tag", "span tag"], correct: 0 },
    { q: "CSS property for text color?", a: ["font-color", "text-style", "color", "background"], correct: 2 },
    { q: "JS comment symbol?", a: ["//", "##", "<!-- -->", "**"], correct: 0 },
    { q: "Image tag in HTML?", a: ["img tag", "image tag", "pic tag", "src tag"], correct: 0 },
    { q: "Console print method?", a: ["print()", "log()", "console.log()", "echo()"], correct: 2 },
    { q: "Font size property?", a: ["text-size", "font-size", "size", "font-style"], correct: 1 },
    { q: "Variable keyword in JS?", a: ["int", "var", "string", "define"], correct: 1 }
];

let index = 0;
let score = 0;
let selected = -1;

function loadQuestion() {
    const q = questions[index];
    document.getElementById("question").innerText = q.q;

    let answersHTML = "";
    q.a.forEach((ans, i) => {
        answersHTML += `<button onclick="selectOption(${i})" id="btn${i}">${ans}</button>`;
    });

    document.getElementById("answers").innerHTML = answersHTML;
    selected = -1;
}

function selectOption(i) {
    selected = i;

    const buttons = document.querySelectorAll("#answers button");

    // remove previous selection
    buttons.forEach(btn => btn.classList.remove("selected"));

    // add new selection
    document.getElementById("btn" + i).classList.add("selected");
}

function nextQuestion() {
    if (selected === -1) {
        alert("Please select an option!");
        return;
    }

    if (selected === questions[index].correct) {
        score++;
    }

    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-box").innerHTML = `
            <h2>🎉 Quiz Completed!</h2>
            <p>Your Score: ${score} / ${questions.length}</p>
        `;
    }
}

loadQuestion();