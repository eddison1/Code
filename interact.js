const quiz = [
  {
    question: "1. Which of these is considered the 'brain' of a computer?.",
    options: ["Random Access Memory (RAM)", "Hard Disk Drive (HDD)", "Central Processing Unit (CPU)"],
    answer: "Central Processing Unit (CPU)"
  },
  {
    question: "2. What does the term 'NPC' mean in video games?",
    options: ["Non-Playable Character", "Necessary Power Core", "Network Protocol Control"],
    answer: "Non-Playable Character"
  },
  {
    question: "3. Who is often called the 'King of Pop'?",
    options: ["Prince", "Michael Jackson", "James Brown"],
    answer: "Michael Jackson"
  },
  {
    question: "4. Who is considered the spiritual head of the worldwide Catholic Church?",
    options: ["The Archbishop of Canterbury", "The Patriarch of Constantinople", "The Pope"],
    answer: "The Pope"
  },
  {
    question: "5. What is the main circuit board of a computer that connects all the hardware components?",
    options: ["Motherboard", "Graphics Card", "Power Supply Unit"],
    answer: "Motherboard"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quiz[currentQuestion];
  document.getElementById("questionBox").innerText = q.question;
  
  const choices = document.getElementById("choices");
 choices.innerHTML = "";

  q.options.forEach(option => {
    const radioButtn = document.createElement("input");
    radioButtn.type = "radio";
    radioButtn.name = "option";
    radioButtn.value = option;
    radioButtn.id = option;

    const label = document.createElement("label");
    label.htmlFor = option;
    label.innerText = option;

    choices.appendChild(radioButtn);
    choices.appendChild(label);
    choices.appendChild(document.createElement("br"));
  });
}

function submitAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  const feedback = document.getElementById("feedback");

  if (!selected) {
    feedback.innerText = "Please select an answer.";
    feedback.style.color = "red";
    return;
  }

  if (selected.value === quiz[currentQuestion].answer) {
    feedback.innerText = "Nice One! Let's Go!";
    feedback.style.color = "green";
    score++;
  } else {
    feedback.innerText = "You're wrong.";
    feedback.style.color = "red";
  }

  document.getElementById("scoreBox").innerText = `Score: ${score}`;

  currentQuestion++;

  if (currentQuestion < quiz.length) {
    setTimeout(() => {
      feedback.innerText = "";
      loadQuestion();
    }, 1000);
  } else {
    showFinalResult();
  }
}

function showFinalResult() {
  document.getElementById("questionBox").style.display = "none";
  document.getElementById("choices").style.display = "none";
  document.querySelector("button").style.display = "none";
  document.getElementById("feedback").style.display = "none";

  const message = score >= 2 ? " Great job and keep it up!" : "You can do better and Never Give Up!";
  document.getElementById("finalMessage").innerText = `Final Score: ${score}/${quiz.length} — ${message}`;
}

// Start the quiz
window.onload = loadQuestion;
