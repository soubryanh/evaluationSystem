const quizData = [
  {
    question: "¿Para qué sirve el console.log( )?",
    a: "Define los atributos de un elemento en HTML",
    b: "Funciona para mostrar información dentro de la consola web",
    c: "Abre un espacio para dibujar en el navegador",
    d: "Invoca elementos externos del código",
    correct: "b",
  },
  {
    question: "¿Quién es un Frontend?",
    a: "El que programa la base de datos",
    b: "Quien diseña las interfaces y UX",
    c: "Quien programa la interacción con el usuario",
    d: "Quien programa la conexión para registrarse",
    correct: "b",
  },
  {
    question: "¿Qué es concatenar?",
    a: "Convertir cadenas de texto a números enteros",
    b: "Realizar operaciones matemáticas",
    c: "Unir 2 o más cadenas de texto",
    d: "Recibir datos del usuario",
    correct: "c",
  },
  {
    question: "¿Para qué se utiliza CSS?",
    a: "Para definir los estilos de un sitio web",
    b: "Para plrogramar sitios interactivos",
    c: "Para definir la información de un sitio web",
    d: "Para hacer desarrollo backend",
    correct: "a",
  },
  {
    question: "¿Para qué se utiliza HTML?",
    a: "Para programar aplicaciones móviles",
    b: "Para estructurar semanticamente el contenido de un sitio web",
    c: "Para guardar información",
    d: "Para programar sitios interactivos",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `;
    }
  }
});
