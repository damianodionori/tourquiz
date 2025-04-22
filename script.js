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
      question: "Quale di questi oggetti è stato trovato nelle Isole Ebridi?",
      answers: [
        { text: "Gli Scacchi di Lewis", correct: true },
        { text: "La Stele di Rosetta", correct: false },
        { text: "I Marmi del Partenone", correct: false },
        { text: "Il Moai", correct: false }
      ]
    },
    {
      question: "Da dove provengono i Marmi del Partenone?",
      answers: [
        { text: "Atene, Grecia", correct: true },
        { text: "Roma, Italia", correct: false },
        { text: "Il Cairo, Egitto", correct: false },
        { text: "Città del Messico", correct: false }
      ]
    },
    {
      question: "Quale di questi è un oggetto azteco?",
      answers: [
        { text: "Il Serpente a Due Teste", correct: true },
        { text: "La Stele di Rosetta", correct: false },
        { text: "Gli Scacchi di Lewis", correct: false },
        { text: "I Marmi del Partenone", correct: false }
      ]
    },
    {
      question: "Da dove proviene il Moai esposto al British Museum?",
      answers: [
        { text: "Isola di Pasqua", correct: true },
        { text: "Hawaii", correct: false },
        { text: "Nuova Zelanda", correct: false },
        { text: "Tahiti", correct: false }
      ]
    },
    {
      question: "Perché la Stele di Rosetta è così importante?",
      answers: [
        { text: "Ha aiutato a decifrare i geroglifici egizi", correct: true },
        { text: "È fatta d'oro", correct: false },
        { text: "È la più grande stele egizia", correct: false },
        { text: "Ha più di 5000 anni", correct: false }
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
  
  // Funzione per mescolare un array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
  
    // Creiamo una copia delle risposte e le mescoliamo
    const shuffledAnswers = shuffleArray([...currentQuestion.answers]);
  
    shuffledAnswers.forEach(answer => {
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
    
    const nameInput = document.getElementById('child-name');
    if (nameInput) {
      nameInput.removeAttribute('readonly');
      nameInput.removeAttribute('disabled');
      nameInput.focus();
    }
  }
  
  function printCertificate() {
    const childName = document.getElementById('child-name').value || 'Piccolo Esploratore';
    const currentDate = new Date().toLocaleDateString('it-IT');
    
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Per favore, permetti l\'apertura dei popup per stampare il certificato.');
      return;
    }

    const certificateContent = `
      <html>
        <head>
          <title>Certificato di Piccolo Esploratore</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Georgia:wght@400;700&display=swap" rel="stylesheet">
          <style>
            @media print {
              body {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              .certificate {
                margin: 0;
                border: 2px solid #3498db !important;
                -webkit-print-color-adjust: exact !important;
              }
              @page {
                size: auto;
                margin: 0mm;
              }
            }

            body {
              margin: 0;
              padding: 20px;
              background: #f9f7e8;
              font-family: Georgia, serif;
            }

            .certificate {
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              background: #f9f7e8;
              position: relative;
              text-align: center;
              border: 2px solid #3498db;
              border-radius: 10px;
            }

            .certificate::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-image: 
                url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Rosetta_Stone.JPG/320px-Rosetta_Stone.JPG'),
                url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Moai_Rano_raraku.jpg/320px-Moai_Rano_raraku.jpg'),
                url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Parthenon_Marbles%2C_British_Museum_1.jpg/320px-Parthenon_Marbles%2C_British_Museum_1.jpg'),
                url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lewis_Chessmen_in_the_British_Museum.jpg/320px-Lewis_Chessmen_in_the_British_Museum.jpg');
              background-size: 150px, 150px, 150px, 150px;
              background-position: 
                10% 10%,
                90% 10%,
                10% 90%,
                90% 90%;
              background-repeat: no-repeat;
              opacity: 0.1;
              z-index: 0;
              -webkit-print-color-adjust: exact;
            }

            .certificate::after {
              content: '';
              position: absolute;
              top: 20px;
              left: 20px;
              right: 20px;
              bottom: 20px;
              border: 4px double #3498db;
              border-radius: 15px;
              z-index: 1;
            }

            .content {
              position: relative;
              z-index: 2;
              padding: 20px;
            }

            h1 {
              color: #2c3e50;
              font-size: 1.8em;
              margin-bottom: 20px;
              line-height: 1.3;
            }

            .name {
              font-size: 2em;
              color: #2c3e50;
              margin: 20px 0;
              font-weight: bold;
            }

            p {
              font-size: 1.2em;
              line-height: 1.4;
              margin: 10px 0;
              color: #34495e;
            }

            .score {
              font-size: 1.4em;
              margin: 20px 0;
              font-weight: bold;
              color: #2c3e50;
            }

            .date {
              font-style: italic;
              margin-top: 20px;
            }

            @media screen and (min-width: 768px) {
              .certificate {
                padding: 40px;
              }
              h1 {
                font-size: 2.2em;
              }
              .name {
                font-size: 2.5em;
              }
              p {
                font-size: 1.3em;
              }
            }
          </style>
        </head>
        <body>
          <div class="certificate">
            <div class="content">
              <h1>🏛️ Certificato di Piccolo Esploratore<br>del British Museum 🏛️</h1>
              <p>Con grande piacere si certifica che</p>
              <div class="name">${childName}</div>
              <p>ha completato con successo il Tour Quiz del British Museum</p>
              <p>dimostrando una straordinaria conoscenza della storia e dei tesori del museo!</p>
              <div class="score">Punteggio finale: ${score}</div>
              <div class="date">Data: ${currentDate}</div>
            </div>
          </div>
          <script>
            window.onload = function() {
              // Aspetta che i font siano caricati
              document.fonts.ready.then(function () {
                if (window.matchMedia('(max-width: 767px)').matches) {
                  alert('Salva il certificato come PDF per stamparlo più tardi!');
                } else {
                  window.print();
                }
              });
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(certificateContent);
    printWindow.document.close();
  }
  
  // Add event listeners when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize the quiz
    startQuiz();

    // Set up event listeners
    nextButton.addEventListener('click', handleNextButton);

    // Set up certificate-related event listeners
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', startQuiz);
    }

    const printBtn = document.getElementById('print-certificate');
    if (printBtn) {
      printBtn.addEventListener('click', printCertificate);
    }

    const nameInput = document.getElementById('child-name');
    if (nameInput) {
      nameInput.removeAttribute('readonly');
      nameInput.removeAttribute('disabled');
    }
  });
  
  // Aggiungi gestione touch per i pulsanti
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.98)';
    });
    
    button.addEventListener('touchend', function() {
      this.style.transform = 'scale(1)';
    });
  });
  