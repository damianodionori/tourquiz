console.log("Quiz pronto!");

const translations = {
  it: {
    title: "🏛️ British Museum Quiz per Piccoli Esploratori! 🏛️",
    difficultyTitle: "Scegli il livello di difficoltà:",
    easy: "Facile (5-7 anni)",
    medium: "Medio (8-10 anni)",
    hard: "Difficile (11+ anni)",
    score: "Punteggio:",
    next: "Avanti",
    back: "Torna alla selezione",
    certificateTitle: "🏛️ Certificato di Piccolo Esploratore del British Museum 🏛️",
    certificateText1: "Con grande piacere si certifica che",
    certificateText2: "ha completato con successo il Tour Quiz del British Museum",
    certificateText3: "dimostrando una straordinaria conoscenza della storia e dei tesori del museo!",
    finalScore: "Punteggio finale:",
    printCertificate: "Stampa Certificato",
    restart: "Ricomincia Quiz",
    namePlaceholder: "Inserisci il tuo nome",
    questions: {
      easy: [
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
          question: "Di che colore è la Stele di Rosetta?",
          answers: [
            { text: "Grigio scuro", correct: true },
            { text: "Bianco", correct: false },
            { text: "Rosso", correct: false },
            { text: "Verde", correct: false }
          ]
        },
        {
          question: "Quale di questi animali si trova spesso nelle opere egizie?",
          answers: [
            { text: "Il gatto", correct: true },
            { text: "Il cane", correct: false },
            { text: "Il cavallo", correct: false },
            { text: "Il leone", correct: false }
          ]
        },
        {
          question: "Cosa rappresentano gli Scacchi di Lewis?",
          answers: [
            { text: "Guerrieri e re", correct: true },
            { text: "Animali", correct: false },
            { text: "Piante", correct: false },
            { text: "Case", correct: false }
          ]
        },
        {
          question: "Quale di questi oggetti è fatto di pietra?",
          answers: [
            { text: "Il Moai", correct: true },
            { text: "Gli Scacchi di Lewis", correct: false },
            { text: "Il Serpente a Due Teste", correct: false },
            { text: "La Maschera di Tutankhamon", correct: false }
          ]
        },
        {
          question: "Da dove viene il Moai?",
          answers: [
            { text: "Isola di Pasqua", correct: true },
            { text: "Hawaii", correct: false },
            { text: "Nuova Zelanda", correct: false },
            { text: "Tahiti", correct: false }
          ]
        },
        {
          question: "Quale di questi oggetti è più antico?",
          answers: [
            { text: "La Stele di Rosetta", correct: true },
            { text: "Gli Scacchi di Lewis", correct: false },
            { text: "I Marmi del Partenone", correct: false },
            { text: "Il Moai", correct: false }
          ]
        },
        {
          question: "Cosa si trova in cima al Moai?",
          answers: [
            { text: "Un cappello di pietra rossa", correct: true },
            { text: "Una corona", correct: false },
            { text: "Un elmo", correct: false },
            { text: "Un cappello di paglia", correct: false }
          ]
        },
        {
          question: "Quale di questi oggetti è più grande?",
          answers: [
            { text: "Il Moai", correct: true },
            { text: "La Stele di Rosetta", correct: false },
            { text: "Gli Scacchi di Lewis", correct: false },
            { text: "I Marmi del Partenone", correct: false }
          ]
        }
      ],
      medium: [
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
          question: "In quale anno è stata trovata la Stele di Rosetta?",
          answers: [
            { text: "1799", correct: true },
            { text: "1801", correct: false },
            { text: "1798", correct: false },
            { text: "1800", correct: false }
          ]
        },
        {
          question: "Chi ha decifrato i geroglifici usando la Stele di Rosetta?",
          answers: [
            { text: "Jean-François Champollion", correct: true },
            { text: "Napoleone Bonaparte", correct: false },
            { text: "Howard Carter", correct: false },
            { text: "Lord Elgin", correct: false }
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
          question: "In quale secolo sono stati trovati gli Scacchi di Lewis?",
          answers: [
            { text: "XIX secolo", correct: true },
            { text: "XVIII secolo", correct: false },
            { text: "XX secolo", correct: false },
            { text: "XVII secolo", correct: false }
          ]
        },
        {
          question: "Quale di questi oggetti è fatto di turchese?",
          answers: [
            { text: "Il Serpente a Due Teste", correct: true },
            { text: "La Stele di Rosetta", correct: false },
            { text: "Gli Scacchi di Lewis", correct: false },
            { text: "I Marmi del Partenone", correct: false }
          ]
        },
        {
          question: "Chi ha portato i Marmi del Partenone al British Museum?",
          answers: [
            { text: "Lord Elgin", correct: true },
            { text: "Napoleone", correct: false },
            { text: "Howard Carter", correct: false },
            { text: "Champollion", correct: false }
          ]
        },
        {
          question: "In quale anno sono stati trovati gli Scacchi di Lewis?",
          answers: [
            { text: "1831", correct: true },
            { text: "1830", correct: false },
            { text: "1832", correct: false },
            { text: "1829", correct: false }
          ]
        }
      ],
      hard: [
        {
          question: "Perché la Stele di Rosetta è così importante?",
          answers: [
            { text: "Ha aiutato a decifrare i geroglifici egizi", correct: true },
            { text: "È fatta d'oro", correct: false },
            { text: "È la più grande stele egizia", correct: false },
            { text: "Ha più di 5000 anni", correct: false }
          ]
        },
        {
          question: "Quale dinastia egizia ha creato la Stele di Rosetta?",
          answers: [
            { text: "Dinastia tolemaica", correct: true },
            { text: "Dinastia ramesside", correct: false },
            { text: "Dinastia amarniana", correct: false },
            { text: "Dinastia saita", correct: false }
          ]
        },
        {
          question: "In quale lingua è scritta la Stele di Rosetta?",
          answers: [
            { text: "Greco antico, demotico e geroglifici", correct: true },
            { text: "Latino, greco e geroglifici", correct: false },
            { text: "Aramaico, greco e geroglifici", correct: false },
            { text: "Copto, greco e geroglifici", correct: false }
          ]
        },
        {
          question: "Quale di questi oggetti è un Lamassu assiro?",
          answers: [
            { text: "Una statua con testa umana e corpo di toro alato", correct: true },
            { text: "Una statua di leone alato", correct: false },
            { text: "Una statua di sfinge", correct: false },
            { text: "Una statua di grifone", correct: false }
          ]
        },
        {
          question: "Da dove provengono i Lamassu assiri?",
          answers: [
            { text: "Palazzi assiri di Nimrud e Khorsabad", correct: true },
            { text: "Templi babilonesi", correct: false },
            { text: "Piramidi egizie", correct: false },
            { text: "Templi greci", correct: false }
          ]
        },
        {
          question: "Quale di questi oggetti è fatto di turchese?",
          answers: [
            { text: "Il Serpente a Due Teste", correct: true },
            { text: "La Stele di Rosetta", correct: false },
            { text: "Gli Scacchi di Lewis", correct: false },
            { text: "I Marmi del Partenone", correct: false }
          ]
        },
        {
          question: "Chi ha portato i Marmi del Partenone al British Museum?",
          answers: [
            { text: "Lord Elgin", correct: true },
            { text: "Napoleone", correct: false },
            { text: "Howard Carter", correct: false },
            { text: "Champollion", correct: false }
          ]
        },
        {
          question: "Quale parte del Partenone mostra la lotta tra Lapiti e Centauri?",
          answers: [
            { text: "Le Metope", correct: true },
            { text: "Il Fregio", correct: false },
            { text: "Il Frontone", correct: false },
            { text: "L'Acropoli", correct: false }
          ]
        },
        {
          question: "In quale periodo è stato creato il Serpente a Due Teste?",
          answers: [
            { text: "Periodo post-classico azteco", correct: true },
            { text: "Periodo classico maya", correct: false },
            { text: "Periodo olmeco", correct: false },
            { text: "Periodo tolteco", correct: false }
          ]
        },
        {
          question: "Chi ha inventato la cioccolata calda?",
          answers: [
            { text: "Sir Hans Sloane", correct: true },
            { text: "Leonardo da Vinci", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: false }
          ]
        }
      ]
    }
  },
  en: {
    title: "🏛️ British Museum Quiz for Little Explorers! 🏛️",
    difficultyTitle: "Choose difficulty level:",
    easy: "Easy (5-7 years)",
    medium: "Medium (8-10 years)",
    hard: "Hard (11+ years)",
    score: "Score:",
    next: "Next",
    back: "Back to selection",
    certificateTitle: "🏛️ British Museum Explorer Certificate 🏛️",
    certificateText1: "This is to certify that",
    certificateText2: "has successfully completed the British Museum Tour Quiz",
    certificateText3: "demonstrating extraordinary knowledge of the museum's history and treasures!",
    finalScore: "Final Score:",
    printCertificate: "Print Certificate",
    restart: "Restart Quiz",
    namePlaceholder: "Enter your name",
    questions: {
      easy: [
        {
          question: "Where is the British Museum located?",
          answers: [
            { text: "London", correct: true },
            { text: "Paris", correct: false },
            { text: "Rome", correct: false },
            { text: "New York", correct: false }
          ]
        },
        {
          question: "Which of these famous objects is in the British Museum?",
          answers: [
            { text: "The Rosetta Stone", correct: true },
            { text: "The Mona Lisa", correct: false },
            { text: "The Venus de Milo", correct: false },
            { text: "The David", correct: false }
          ]
        },
        {
          question: "What color is the Rosetta Stone?",
          answers: [
            { text: "Dark grey", correct: true },
            { text: "White", correct: false },
            { text: "Red", correct: false },
            { text: "Green", correct: false }
          ]
        },
        {
          question: "Which of these animals is often found in Egyptian art?",
          answers: [
            { text: "The cat", correct: true },
            { text: "The dog", correct: false },
            { text: "The horse", correct: false },
            { text: "The lion", correct: false }
          ]
        },
        {
          question: "What do the Lewis Chessmen represent?",
          answers: [
            { text: "Warriors and kings", correct: true },
            { text: "Animals", correct: false },
            { text: "Plants", correct: false },
            { text: "Houses", correct: false }
          ]
        },
        {
          question: "Which of these objects is made of stone?",
          answers: [
            { text: "The Moai", correct: true },
            { text: "The Lewis Chessmen", correct: false },
            { text: "The Double-headed Serpent", correct: false },
            { text: "The Mask of Tutankhamun", correct: false }
          ]
        },
        {
          question: "Where does the Moai come from?",
          answers: [
            { text: "Easter Island", correct: true },
            { text: "Hawaii", correct: false },
            { text: "New Zealand", correct: false },
            { text: "Tahiti", correct: false }
          ]
        },
        {
          question: "Which of these objects is the oldest?",
          answers: [
            { text: "The Rosetta Stone", correct: true },
            { text: "The Lewis Chessmen", correct: false },
            { text: "The Parthenon Marbles", correct: false },
            { text: "The Moai", correct: false }
          ]
        },
        {
          question: "What is on top of the Moai?",
          answers: [
            { text: "A red stone hat", correct: true },
            { text: "A crown", correct: false },
            { text: "A helmet", correct: false },
            { text: "A straw hat", correct: false }
          ]
        },
        {
          question: "Which of these objects is the largest?",
          answers: [
            { text: "The Moai", correct: true },
            { text: "The Rosetta Stone", correct: false },
            { text: "The Lewis Chessmen", correct: false },
            { text: "The Parthenon Marbles", correct: false }
          ]
        }
      ],
      medium: [
        {
          question: "What material is the Rosetta Stone made of?",
          answers: [
            { text: "Granite", correct: true },
            { text: "Bronze", correct: false },
            { text: "Marble", correct: false },
            { text: "Gold", correct: false }
          ]
        },
        {
          question: "Which of these objects was found in the Hebrides?",
          answers: [
            { text: "The Lewis Chessmen", correct: true },
            { text: "The Rosetta Stone", correct: false },
            { text: "The Parthenon Marbles", correct: false },
            { text: "The Moai", correct: false }
          ]
        },
        {
          question: "In which year was the Rosetta Stone found?",
          answers: [
            { text: "1799", correct: true },
            { text: "1801", correct: false },
            { text: "1798", correct: false },
            { text: "1800", correct: false }
          ]
        },
        {
          question: "Who deciphered hieroglyphs using the Rosetta Stone?",
          answers: [
            { text: "Jean-François Champollion", correct: true },
            { text: "Napoleon Bonaparte", correct: false },
            { text: "Howard Carter", correct: false },
            { text: "Lord Elgin", correct: false }
          ]
        },
        {
          question: "Where do the Parthenon Marbles come from?",
          answers: [
            { text: "Athens, Greece", correct: true },
            { text: "Rome, Italy", correct: false },
            { text: "Cairo, Egypt", correct: false },
            { text: "Mexico City", correct: false }
          ]
        },
        {
          question: "Which of these is an Aztec object?",
          answers: [
            { text: "The Double-headed Serpent", correct: true },
            { text: "The Rosetta Stone", correct: false },
            { text: "The Lewis Chessmen", correct: false },
            { text: "The Parthenon Marbles", correct: false }
          ]
        },
        {
          question: "In which century were the Lewis Chessmen found?",
          answers: [
            { text: "19th century", correct: true },
            { text: "18th century", correct: false },
            { text: "20th century", correct: false },
            { text: "17th century", correct: false }
          ]
        },
        {
          question: "Which of these objects is made of turquoise?",
          answers: [
            { text: "The Double-headed Serpent", correct: true },
            { text: "The Rosetta Stone", correct: false },
            { text: "The Lewis Chessmen", correct: false },
            { text: "The Parthenon Marbles", correct: false }
          ]
        },
        {
          question: "Who brought the Parthenon Marbles to the British Museum?",
          answers: [
            { text: "Lord Elgin", correct: true },
            { text: "Napoleon", correct: false },
            { text: "Howard Carter", correct: false },
            { text: "Champollion", correct: false }
          ]
        },
        {
          question: "In which year were the Lewis Chessmen found?",
          answers: [
            { text: "1831", correct: true },
            { text: "1830", correct: false },
            { text: "1832", correct: false },
            { text: "1829", correct: false }
          ]
        }
      ],
      hard: [
        {
          question: "Why is the Rosetta Stone so important?",
          answers: [
            { text: "It helped decipher Egyptian hieroglyphs", correct: true },
            { text: "It's made of gold", correct: false },
            { text: "It's the largest Egyptian stele", correct: false },
            { text: "It's over 5000 years old", correct: false }
          ]
        },
        {
          question: "Which Egyptian dynasty created the Rosetta Stone?",
          answers: [
            { text: "Ptolemaic dynasty", correct: true },
            { text: "Ramesside dynasty", correct: false },
            { text: "Amarna dynasty", correct: false },
            { text: "Saite dynasty", correct: false }
          ]
        },
        {
          question: "In which language is the Rosetta Stone written?",
          answers: [
            { text: "Ancient Greek, Demotic, and Hieroglyphs", correct: true },
            { text: "Latin, Greek, and Hieroglyphs", correct: false },
            { text: "Aramaic, Greek, and Hieroglyphs", correct: false },
            { text: "Coptic, Greek, and Hieroglyphs", correct: false }
          ]
        },
        {
          question: "Which of these objects is an Assyrian Lamassu?",
          answers: [
            { text: "A statue with human head and winged bull body", correct: true },
            { text: "A winged lion statue", correct: false },
            { text: "A sphinx statue", correct: false },
            { text: "A griffin statue", correct: false }
          ]
        },
        {
          question: "Where do the Assyrian Lamassu come from?",
          answers: [
            { text: "Assyrian palaces of Nimrud and Khorsabad", correct: true },
            { text: "Babylonian temples", correct: false },
            { text: "Egyptian pyramids", correct: false },
            { text: "Greek temples", correct: false }
          ]
        },
        {
          question: "Which of these objects is made of turquoise?",
          answers: [
            { text: "The Double-headed Serpent", correct: true },
            { text: "The Rosetta Stone", correct: false },
            { text: "The Lewis Chessmen", correct: false },
            { text: "The Parthenon Marbles", correct: false }
          ]
        },
        {
          question: "Who brought the Parthenon Marbles to the British Museum?",
          answers: [
            { text: "Lord Elgin", correct: true },
            { text: "Napoleon", correct: false },
            { text: "Howard Carter", correct: false },
            { text: "Champollion", correct: false }
          ]
        },
        {
          question: "Which part of the Parthenon shows the battle between Lapiths and Centaurs?",
          answers: [
            { text: "The Metopes", correct: true },
            { text: "The Frieze", correct: false },
            { text: "The Pediment", correct: false },
            { text: "The Acropolis", correct: false }
          ]
        },
        {
          question: "In which period was the Double-headed Serpent created?",
          answers: [
            { text: "Aztec post-classic period", correct: true },
            { text: "Maya classic period", correct: false },
            { text: "Olmec period", correct: false },
            { text: "Toltec period", correct: false }
          ]
        },
        {
          question: "Who invented hot chocolate?",
          answers: [
            { text: "Sir Hans Sloane", correct: true },
            { text: "Leonardo da Vinci", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: false }
          ]
        }
      ]
    }
  }
};

let currentLanguage = 'it';
let currentQuestions = [];

function updateLanguage(lang) {
  currentLanguage = lang;
  document.querySelector('h1').textContent = translations[lang].title;
  document.querySelector('.difficulty-container h2').textContent = translations[lang].difficultyTitle;
  
  const difficultyButtons = document.querySelectorAll('.difficulty-btn');
  difficultyButtons[0].innerHTML = `<i class="fas fa-star"></i> ${translations[lang].easy}`;
  difficultyButtons[1].innerHTML = `<i class="fas fa-star"></i><i class="fas fa-star"></i> ${translations[lang].medium}`;
  difficultyButtons[2].innerHTML = `<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> ${translations[lang].hard}`;
  
  document.querySelector('#score-display').textContent = `${translations[lang].score} `;
  document.querySelector('#next-btn').textContent = translations[lang].next;
  document.querySelector('#back-btn').innerHTML = `<i class="fas fa-arrow-left"></i> ${translations[lang].back}`;
  
  document.querySelector('.certificate h2').textContent = translations[lang].certificateTitle;
  document.querySelector('.certificate-text:nth-of-type(1)').textContent = translations[lang].certificateText1;
  document.querySelector('.certificate-text:nth-of-type(2)').textContent = translations[lang].certificateText2;
  document.querySelector('.certificate-text:nth-of-type(3)').textContent = translations[lang].certificateText3;
  document.querySelector('.certificate-score').textContent = `${translations[lang].finalScore} `;
  document.querySelector('#print-certificate').innerHTML = `<i class="fas fa-print"></i> ${translations[lang].printCertificate}`;
  document.querySelector('#restart-btn').innerHTML = `<i class="fas fa-redo"></i> ${translations[lang].restart}`;
  document.querySelector('#child-name').placeholder = translations[lang].namePlaceholder;
  
  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });

  // Update current questions if quiz is in progress
  if (currentQuestions.length > 0) {
    currentQuestions = translations[lang].questions[currentDifficulty];
    showQuestion();
  }
}

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const certificateContainer = document.getElementById('certificate-container');
const finalScoreElement = document.getElementById('final-score');
const printCertificateButton = document.getElementById('print-certificate');
const difficultySelection = document.getElementById('difficulty-selection');
const quizContainer = document.getElementById('quiz-container');

let currentQuestionIndex = 0;
let score = 0;
let currentDifficulty = '';

function startQuiz(difficulty) {
  currentQuestionIndex = 0;
  score = 0;
  currentDifficulty = difficulty;
  currentQuestions = translations[currentLanguage].questions[difficulty];
  scoreElement.textContent = score;
  nextButton.innerHTML = translations[currentLanguage].next;
  certificateContainer.style.display = 'none';
  difficultySelection.style.display = 'none';
  quizContainer.style.display = 'block';
  showQuestion();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showQuestion() {
  resetState();
  let currentQuestion = currentQuestions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

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
    score += 10;
    scoreElement.textContent = score;
    nextButton.style.display = 'block';
  } else {
    selectedBtn.classList.add('incorrect');
    // Show the correct answer
    Array.from(answerButtons.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.classList.add('correct');
      }
    });
    // Allow retry after a short delay
    setTimeout(() => {
      resetState();
      showQuestion();
    }, 2000);
  }

  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
  });
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showCertificate();
  }
}

function showCertificate() {
  quizContainer.style.display = 'none';
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

function goBackToSelection() {
  difficultySelection.style.display = 'block';
  quizContainer.style.display = 'none';
  certificateContainer.style.display = 'none';
}

// Add event listeners when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Set up language switcher
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      updateLanguage(lang);
    });
  });

  // Set up difficulty selection
  const difficultyButtons = document.querySelectorAll('.difficulty-btn');
  difficultyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const difficulty = button.dataset.difficulty;
      startQuiz(difficulty);
    });
  });

  // Set up quiz-related event listeners
  nextButton.addEventListener('click', handleNextButton);
  
  // Set up back button
  const backButton = document.getElementById('back-btn');
  if (backButton) {
    backButton.addEventListener('click', goBackToSelection);
  }

  // Set up certificate-related event listeners
  const restartBtn = document.getElementById('restart-btn');
  if (restartBtn) {
    restartBtn.addEventListener('click', goBackToSelection);
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

// Add touch handling for buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('touchstart', function() {
    this.style.transform = 'scale(0.98)';
  });
  
  button.addEventListener('touchend', function() {
    this.style.transform = 'scale(1)';
  });
});
  