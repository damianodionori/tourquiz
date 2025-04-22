console.log("Quiz pronto!");

const questions = [
    {
      question: "Dove si trova il British Museum?",
      answers: [
        { text: "Londra", correct: true },
        { text: "Parigi", correct: false },
        { text: "Roma", correct: false },
        { text: "New York", correct: false }
      ]
    },
    {
      question: "Quale di questi oggetti famosi si trova al British Museum?",
      answers: [
        { text: "La Stele di Rosetta", correct: true },
        { text: "La Gioconda", correct: false },
        { text: "La Venere di Milo", correct: false },
        { text: "Il David", correct: false }
      ]
    },
    {
      question: "Di che materiale è fatta la Stele di Rosetta?",
      answers: [
        { text: "Granito", correct: true },
        { text: "Bronzo", correct: false },
        { text: "Marmo", correct: false },
        { text: "Oro", correct: false }
      ]
    },
    {
      question: "Quale di questi animali è rappresentato nella collezione egizia?",
      answers: [
        { text: "Sfinge", correct: true },
        { text: "Tigre", correct: false },
        { text: "Panda", correct: false },
        { text: "Kangaroo", correct: false }
      ]
    },
    {
      question: "In quale sala del British Museum si trovano le mummie egizie?",
      answers: [
        { text: "Sala Egizia", correct: true },
        { text: "Sala Greca", correct: false },
        { text: "Sala Romana", correct: false },
        { text: "Sala Medievale", correct: false }
      ]
    }
  ];
  
  const questionElement = document.getElementById('question');
  const answerButtons = document.getElementById('answer-buttons');
  const nextButton = document.getElementById('next-btn');
  const scoreElement = document.getElementById('score');
  const certificateContainer = document.getElementById('certificate-container');
  const finalScoreElement = document.getElementById('final-score');
  const printCertificateButton = document.getElementById('print-certificate');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    nextButton.innerHTML = "Avanti";
    certificateContainer.style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (isCorrect) {
      selectedBtn.classList.add('correct');
      score += 20;
      scoreElement.textContent = score;
    } else {
      selectedBtn.classList.add('incorrect');
    }
  
    Array.from(answerButtons.children).forEach(button => {
      button.disabled = true;
    });
  
    nextButton.style.display = 'block';
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showCertificate();
    }
  }
  
  function showCertificate() {
    document.getElementById('quiz-container').style.display = 'none';
    certificateContainer.style.display = 'block';
    finalScoreElement.textContent = score;
    
    if (!document.getElementById('restart-btn')) {
      const restartButton = document.createElement('button');
      restartButton.id = 'restart-btn';
      restartButton.innerHTML = 'Ricomincia Quiz';
      restartButton.style.backgroundColor = '#3498db';
      restartButton.style.marginTop = '20px';
      restartButton.addEventListener('click', startQuiz);
      document.getElementById('certificate-content').appendChild(restartButton);
    }
  }
  
  function printCertificate() {
    const childName = document.getElementById('child-name').value || 'Piccolo Esploratore';
    const certificateContent = document.getElementById('certificate-content').innerHTML;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Certificato di Piccolo Esploratore</title>
          <style>
            body {
              font-family: 'Comic Neue', cursive;
              text-align: center;
              padding: 50px;
            }
            .certificate {
              border: 10px solid #3498db;
              padding: 30px;
              margin: 20px;
            }
            h1 {
              color: #2c3e50;
            }
          </style>
        </head>
        <body>
          <div class="certificate">
            <h1>�� Certificato di Piccolo Esploratore 🎉</h1>
            <p>Questo certificato attesta che</p>
            <h2>${childName}</h2>
            <p>ha completato con successo il Tour Quiz!</p>
            <p>Punteggio finale: ${score}</p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }
  
  nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  printCertificateButton.addEventListener('click', printCertificate);
  
  startQuiz();
  