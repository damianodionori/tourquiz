console.log("Quiz pronto!");

// Tour data
const tours = {
    'british-museum': {
        questions: {
            easy: [
                {
                    question: {
                        en: "Where is the British Museum located?",
                        it: "Dove si trova il British Museum?"
                    },
                    answers: {
                        en: ["London", "Paris", "Rome", "New York"],
                        it: ["Londra", "Parigi", "Roma", "New York"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "Which of these famous objects is in the British Museum?",
                        it: "Quale di questi oggetti famosi si trova al British Museum?"
                    },
                    answers: {
                        en: ["The Rosetta Stone", "Mona Lisa", "Venus de Milo", "David"],
                        it: ["La Stele di Rosetta", "La Gioconda", "La Venere di Milo", "Il David"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What color is the Rosetta Stone?",
                        it: "Di che colore è la Stele di Rosetta?"
                    },
                    answers: {
                        en: ["Dark grey", "White", "Red", "Green"],
                        it: ["Grigio scuro", "Bianco", "Rosso", "Verde"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "Which animal is often found in Egyptian works?",
                        it: "Quale di questi animali si trova spesso nelle opere egizie?"
                    },
                    answers: {
                        en: ["Cat", "Dog", "Horse", "Lion"],
                        it: ["Il gatto", "Il cane", "Il cavallo", "Il leone"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What do the Lewis Chessmen represent?",
                        it: "Cosa rappresentano gli Scacchi di Lewis?"
                    },
                    answers: {
                        en: ["Warriors and kings", "Animals", "Plants", "Houses"],
                        it: ["Guerrieri e re", "Animali", "Piante", "Case"]
                    },
                    correct: 0
                }
            ],
            medium: [
                {
                    question: {
                        en: "What material is the Rosetta Stone made of?",
                        it: "Di che materiale è fatta la Stele di Rosetta?"
                    },
                    answers: {
                        en: ["Granite", "Bronze", "Marble", "Gold"],
                        it: ["Granito", "Bronzo", "Marmo", "Oro"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "Which of these objects was found in the Hebrides?",
                        it: "Quale di questi oggetti è stato trovato nelle Isole Ebridi?"
                    },
                    answers: {
                        en: ["The Lewis Chessmen", "The Rosetta Stone", "The Parthenon Marbles", "The Moai"],
                        it: ["Gli Scacchi di Lewis", "La Stele di Rosetta", "I Marmi del Partenone", "Il Moai"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "When was the Rosetta Stone found?",
                        it: "In quale anno è stata trovata la Stele di Rosetta?"
                    },
                    answers: {
                        en: ["1799", "1801", "1798", "1800"],
                        it: ["1799", "1801", "1798", "1800"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "Who deciphered the hieroglyphs using the Rosetta Stone?",
                        it: "Chi ha decifrato i geroglifici usando la Stele di Rosetta?"
                    },
                    answers: {
                        en: ["Jean-François Champollion", "Napoleon Bonaparte", "Howard Carter", "Lord Elgin"],
                        it: ["Jean-François Champollion", "Napoleone Bonaparte", "Howard Carter", "Lord Elgin"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "Where do the Parthenon Marbles come from?",
                        it: "Da dove provengono i Marmi del Partenone?"
                    },
                    answers: {
                        en: ["Athens, Greece", "Rome, Italy", "Cairo, Egypt", "Mexico City"],
                        it: ["Atene, Grecia", "Roma, Italia", "Il Cairo, Egitto", "Città del Messico"]
                    },
                    correct: 0
                }
            ],
            hard: [
                {
                    question: {
                        en: "Why is the Rosetta Stone so important?",
                        it: "Perché la Stele di Rosetta è così importante?"
                    },
                    answers: {
                        en: ["It helped decipher Egyptian hieroglyphs", "It's made of gold", "It's the largest Egyptian stele", "It's over 5000 years old"],
                        it: ["Ha aiutato a decifrare i geroglifici egizi", "È fatta d'oro", "È la più grande stele egizia", "Ha più di 5000 anni"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "Which Egyptian dynasty created the Rosetta Stone?",
                        it: "Quale dinastia egizia ha creato la Stele di Rosetta?"
                    },
                    answers: {
                        en: ["Ptolemaic Dynasty", "Ramesside Dynasty", "Amarna Dynasty", "Saite Dynasty"],
                        it: ["Dinastia tolemaica", "Dinastia ramesside", "Dinastia amarniana", "Dinastia saita"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "In what languages is the Rosetta Stone written?",
                        it: "In quale lingua è scritta la Stele di Rosetta?"
                    },
                    answers: {
                        en: ["Ancient Greek, Demotic and hieroglyphs", "Latin, Greek and hieroglyphs", "Aramaic, Greek and hieroglyphs", "Coptic, Greek and hieroglyphs"],
                        it: ["Greco antico, demotico e geroglifici", "Latino, greco e geroglifici", "Aramaico, greco e geroglifici", "Copto, greco e geroglifici"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What is an Assyrian Lamassu?",
                        it: "Quale di questi oggetti è un Lamassu assiro?"
                    },
                    answers: {
                        en: ["A statue with human head and winged bull body", "A winged lion statue", "A sphinx statue", "A griffin statue"],
                        it: ["Una statua con testa umana e corpo di toro alato", "Una statua di leone alato", "Una statua di sfinge", "Una statua di grifone"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "Where do the Assyrian Lamassu come from?",
                        it: "Da dove provengono i Lamassu assiri?"
                    },
                    answers: {
                        en: ["Assyrian palaces of Nimrud and Khorsabad", "Babylonian temples", "Egyptian pyramids", "Greek temples"],
                        it: ["Palazzi assiri di Nimrud e Khorsabad", "Templi babilonesi", "Piramidi egizie", "Templi greci"]
                    },
                    correct: 0
                }
            ]
        },
        translations: {
            en: {
                title: "British Museum Quiz for Young Explorers!",
                chooseDifficulty: "Choose your difficulty level:",
                easy: "Easy",
                medium: "Medium",
                hard: "Hard",
                score: "Score",
                next: "Next",
                back: "Go back",
                congrats: "Congratulations!",
                cardTitle: "British Museum",
                cardDescription: "Explore ancient civilizations and incredible artifacts!"
            },
            it: {
                title: "British Museum Quiz per Piccoli Esploratori!",
                chooseDifficulty: "Scegli il livello di difficoltà:",
                easy: "Facile",
                medium: "Medio",
                hard: "Difficile",
                score: "Punteggio",
                next: "Avanti",
                back: "Indietro",
                congrats: "Congratulazioni!",
                cardTitle: "British Museum",
                cardDescription: "Esplora antiche civiltà e incredibili manufatti!"
            }
        }
    },
    'natural-history': {
        questions: {
            easy: [
                {
                    question: {
                        en: "What famous creature greets visitors in the main hall?",
                        it: "Quale famosa creatura accoglie i visitatori nella sala principale?"
                    },
                    answers: {
                        en: ["A blue whale", "A T-Rex", "A mammoth", "A giraffe"],
                        it: ["Una balena blu", "Un T-Rex", "Un mammut", "Una giraffa"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What color is the famous dinosaur skeleton in the main hall?",
                        it: "Di che colore è il famoso scheletro di dinosauro nella sala principale?"
                    },
                    answers: {
                        en: ["White/Beige", "Brown", "Black", "Grey"],
                        it: ["Bianco/Beige", "Marrone", "Nero", "Grigio"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What is the name of the famous T-Rex in the museum?",
                        it: "Come si chiama il famoso T-Rex nel museo?"
                    },
                    answers: {
                        en: ["Sophie", "Rex", "Tommy", "Bob"],
                        it: ["Sophie", "Rex", "Tommy", "Bob"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What can you find in the Red Zone?",
                        it: "Cosa puoi trovare nella Zona Rossa?"
                    },
                    answers: {
                        en: ["Volcanoes and earthquakes", "Dinosaurs", "Animals", "Plants"],
                        it: ["Vulcani e terremoti", "Dinosauri", "Animali", "Piante"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What is the color of the building's exterior?",
                        it: "Di che colore è l'esterno dell'edificio?"
                    },
                    answers: {
                        en: ["Terracotta and blue", "White and grey", "Red and black", "Yellow and brown"],
                        it: ["Terracotta e blu", "Bianco e grigio", "Rosso e nero", "Giallo e marrone"]
                    },
                    correct: 0
                }
            ],
            medium: [
                {
                    question: {
                        en: "How long is the blue whale model in the main hall?",
                        it: "Quanto è lungo il modello della balena blu nella sala principale?"
                    },
                    answers: {
                        en: ["25 meters", "15 meters", "35 meters", "20 meters"],
                        it: ["25 metri", "15 metri", "35 metri", "20 metri"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What is the name of the earthquake simulator?",
                        it: "Come si chiama il simulatore di terremoti?"
                    },
                    answers: {
                        en: ["Kobe", "Tokyo", "San Francisco", "Mexico City"],
                        it: ["Kobe", "Tokyo", "San Francisco", "Città del Messico"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "Which famous architect designed the building?",
                        it: "Quale famoso architetto ha progettato l'edificio?"
                    },
                    answers: {
                        en: ["Alfred Waterhouse", "Christopher Wren", "John Nash", "Charles Barry"],
                        it: ["Alfred Waterhouse", "Christopher Wren", "John Nash", "Charles Barry"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "When did the museum first open?",
                        it: "Quando è stato aperto il museo per la prima volta?"
                    },
                    answers: {
                        en: ["1881", "1901", "1851", "1891"],
                        it: ["1881", "1901", "1851", "1891"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What is stored in the Cocoon building?",
                        it: "Cosa è conservato nell'edificio Cocoon?"
                    },
                    answers: {
                        en: ["Scientific specimens", "Live animals", "Fossils", "Art pieces"],
                        it: ["Campioni scientifici", "Animali vivi", "Fossili", "Opere d'arte"]
                    },
                    correct: 0
                }
            ],
            hard: [
                {
                    question: {
                        en: "How many specimens are housed in the museum?",
                        it: "Quanti campioni sono conservati nel museo?"
                    },
                    answers: {
                        en: ["Over 80 million", "Over 50 million", "Over 30 million", "Over 100 million"],
                        it: ["Più di 80 milioni", "Più di 50 milioni", "Più di 30 milioni", "Più di 100 milioni"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "Which famous scientist's specimens are kept in the museum?",
                        it: "I campioni di quale famoso scienziato sono conservati nel museo?"
                    },
                    answers: {
                        en: ["Charles Darwin", "Isaac Newton", "Albert Einstein", "Marie Curie"],
                        it: ["Charles Darwin", "Isaac Newton", "Albert Einstein", "Marie Curie"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What is the weight of the blue whale model?",
                        it: "Quanto pesa il modello della balena blu?"
                    },
                    answers: {
                        en: ["4.5 tonnes", "3.5 tonnes", "5.5 tonnes", "2.5 tonnes"],
                        it: ["4.5 tonnellate", "3.5 tonnellate", "5.5 tonnellate", "2.5 tonnellate"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What was the original name of the museum?",
                        it: "Qual era il nome originale del museo?"
                    },
                    answers: {
                        en: ["British Museum (Natural History)", "South Kensington Museum", "Imperial Museum", "Royal Natural History Museum"],
                        it: ["British Museum (Natural History)", "South Kensington Museum", "Imperial Museum", "Royal Natural History Museum"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What is the rarest specimen in the museum?",
                        it: "Qual è il campione più raro nel museo?"
                    },
                    answers: {
                        en: ["Archaeopteryx fossil", "T-Rex skull", "Dodo bones", "Mammoth hair"],
                        it: ["Fossile di Archaeopteryx", "Cranio di T-Rex", "Ossa di Dodo", "Pelo di mammut"]
                    },
                    correct: 0
                }
            ]
        },
        translations: {
            en: {
                title: "Natural History Museum Quiz for Young Explorers!",
                chooseDifficulty: "Choose your difficulty level:",
                easy: "Easy",
                medium: "Medium",
                hard: "Hard",
                score: "Score",
                next: "Next",
                back: "Go back",
                congrats: "Congratulations!",
                cardTitle: "Natural History Museum",
                cardDescription: "Discover dinosaurs and the wonders of nature!"
            },
            it: {
                title: "Natural History Museum Quiz per Piccoli Esploratori!",
                chooseDifficulty: "Scegli il livello di difficoltà:",
                easy: "Facile",
                medium: "Medio",
                hard: "Difficile",
                score: "Punteggio",
                next: "Avanti",
                back: "Indietro",
                congrats: "Congratulazioni!",
                cardTitle: "Museo di Storia Naturale",
                cardDescription: "Scopri i dinosauri e le meraviglie della natura!"
            }
        }
    },
    'westminster': {
        questions: {
            easy: [
                {
                    question: {
                        en: "What is the famous clock tower in Westminster called?",
                        it: "Come si chiama la famosa torre dell'orologio di Westminster?"
                    },
                    answers: {
                        en: ["Big Ben", "Tower Bridge", "London Eye", "The Shard"],
                        it: ["Big Ben", "Tower Bridge", "London Eye", "The Shard"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What color are the typical London phone boxes?",
                        it: "Di che colore sono le tipiche cabine telefoniche di Londra?"
                    },
                    answers: {
                        en: ["Red", "Blue", "Black", "Green"],
                        it: ["Rosse", "Blu", "Nere", "Verdi"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What is the name of the famous bridge near Big Ben?",
                        it: "Come si chiama il famoso ponte vicino a Big Ben?"
                    },
                    answers: {
                        en: ["Westminster Bridge", "London Bridge", "Tower Bridge", "Waterloo Bridge"],
                        it: ["Westminster Bridge", "London Bridge", "Tower Bridge", "Waterloo Bridge"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What color is Westminster Bridge?",
                        it: "Di che colore è il Westminster Bridge?"
                    },
                    answers: {
                        en: ["Green", "Red", "Blue", "Black"],
                        it: ["Verde", "Rosso", "Blu", "Nero"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What famous residence is near Westminster?",
                        it: "Quale famosa residenza si trova vicino a Westminster?"
                    },
                    answers: {
                        en: ["Buckingham Palace", "Tower of London", "Windsor Castle", "Kensington Palace"],
                        it: ["Buckingham Palace", "Torre di Londra", "Castello di Windsor", "Palazzo di Kensington"]
                    },
                    correct: 0
                }
            ],
            medium: [
                {
                    question: {
                        en: "How many clock faces does Big Ben have?",
                        it: "Quanti quadranti ha Big Ben?"
                    },
                    answers: {
                        en: ["4", "2", "3", "1"],
                        it: ["4", "2", "3", "1"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What is the real name of Big Ben?",
                        it: "Qual è il vero nome di Big Ben?"
                    },
                    answers: {
                        en: ["Elizabeth Tower", "Victoria Tower", "Clock Tower", "Westminster Tower"],
                        it: ["Elizabeth Tower", "Victoria Tower", "Clock Tower", "Westminster Tower"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What year was Westminster Palace built?",
                        it: "In che anno è stato costruito il Palazzo di Westminster?"
                    },
                    answers: {
                        en: ["1840", "1820", "1860", "1880"],
                        it: ["1840", "1820", "1860", "1880"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What is the name of the square in front of Big Ben?",
                        it: "Come si chiama la piazza di fronte a Big Ben?"
                    },
                    answers: {
                        en: ["Parliament Square", "Westminster Square", "Queen's Square", "Victoria Square"],
                        it: ["Parliament Square", "Westminster Square", "Queen's Square", "Victoria Square"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What famous abbey is in Westminster?",
                        it: "Quale famosa abbazia si trova a Westminster?"
                    },
                    answers: {
                        en: ["Westminster Abbey", "St Paul's Cathedral", "St James Abbey", "Royal Abbey"],
                        it: ["Westminster Abbey", "Cattedrale di St Paul", "Abbazia di St James", "Abbazia Reale"]
                    },
                    correct: 0
                }
            ],
            hard: [
                {
                    question: {
                        en: "How many bells are inside Big Ben?",
                        it: "Quante campane ci sono dentro Big Ben?"
                    },
                    answers: {
                        en: ["5", "3", "4", "6"],
                        it: ["5", "3", "4", "6"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What is the weight of Big Ben's main bell?",
                        it: "Quanto pesa la campana principale di Big Ben?"
                    },
                    answers: {
                        en: ["13.7 tonnes", "10.5 tonnes", "15.1 tonnes", "12.2 tonnes"],
                        it: ["13.7 tonnellate", "10.5 tonnellate", "15.1 tonnellate", "12.2 tonnellate"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "Who designed the current Houses of Parliament?",
                        it: "Chi ha progettato le attuali Houses of Parliament?"
                    },
                    answers: {
                        en: ["Charles Barry", "Christopher Wren", "John Nash", "William Kent"],
                        it: ["Charles Barry", "Christopher Wren", "John Nash", "William Kent"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What year did Big Ben first chime?",
                        it: "In quale anno Big Ben ha suonato per la prima volta?"
                    },
                    answers: {
                        en: ["1859", "1849", "1869", "1879"],
                        it: ["1859", "1849", "1869", "1879"]
                    },
                    correct: 0
                },
                {
                    question: {
                        en: "What style of architecture is Westminster Palace?",
                        it: "Quale stile architettonico ha il Palazzo di Westminster?"
                    },
                    answers: {
                        en: ["Gothic Revival", "Baroque", "Georgian", "Victorian"],
                        it: ["Neogotico", "Barocco", "Georgiano", "Vittoriano"]
                    },
                    correct: 0
                }
            ]
        },
        translations: {
            en: {
                title: "Westminster Walking Tour Quiz for Young Explorers!",
                chooseDifficulty: "Choose your difficulty level:",
                easy: "Easy",
                medium: "Medium",
                hard: "Hard",
                score: "Score",
                next: "Next",
                back: "Go back",
                congrats: "Congratulations!",
                cardTitle: "Westminster Walking Tour",
                cardDescription: "Walk through the heart of London's history!"
            },
            it: {
                title: "Westminster Walking Tour Quiz per Piccoli Esploratori!",
                chooseDifficulty: "Scegli il livello di difficoltà:",
                easy: "Facile",
                medium: "Medio",
                hard: "Difficile",
                score: "Punteggio",
                next: "Avanti",
                back: "Indietro",
                congrats: "Congratulazioni!",
                cardTitle: "Tour a Piedi di Westminster",
                cardDescription: "Cammina nel cuore della storia di Londra!"
            }
        }
    }
};

// Aggiungiamo le traduzioni dei certificati per ogni tour
const certificateTranslations = {
    'british-museum': {
        en: {
            title: "🏛️ British Museum Young Explorer Certificate 🏛️",
            intro: "This is to certify that",
            achievement: "has successfully completed the British Museum Tour Quiz",
            praise: "demonstrating extraordinary knowledge of the museum's history and treasures!",
            print: "Print Certificate",
            restart: "Restart Quiz"
        },
        it: {
            title: "🏛️ Certificato di Piccolo Esploratore del British Museum 🏛️",
            intro: "Con grande piacere si certifica che",
            achievement: "ha completato con successo il Tour Quiz del British Museum",
            praise: "dimostrando una straordinaria conoscenza della storia e dei tesori del museo!",
            print: "Stampa Certificato",
            restart: "Ricomincia Quiz"
        }
    },
    'natural-history': {
        en: {
            title: "🦕 Natural History Museum Young Scientist Certificate 🦕",
            intro: "This is to certify that",
            achievement: "has successfully completed the Natural History Museum Tour Quiz",
            praise: "demonstrating exceptional knowledge of nature, dinosaurs, and science!",
            print: "Print Certificate",
            restart: "Restart Quiz"
        },
        it: {
            title: "🦕 Certificato di Giovane Scienziato del Museo di Storia Naturale 🦕",
            intro: "Con grande piacere si certifica che",
            achievement: "ha completato con successo il Tour Quiz del Museo di Storia Naturale",
            praise: "dimostrando eccezionale conoscenza della natura, dei dinosauri e della scienza!",
            print: "Stampa Certificato",
            restart: "Ricomincia Quiz"
        }
    },
    'westminster': {
        en: {
            title: "🏰 Westminster Walking Tour Explorer Certificate 🏰",
            intro: "This is to certify that",
            achievement: "has successfully completed the Westminster Walking Tour Quiz",
            praise: "demonstrating remarkable knowledge of London's historic Westminster area!",
            print: "Print Certificate",
            restart: "Restart Quiz"
        },
        it: {
            title: "🏰 Certificato di Esploratore del Tour di Westminster 🏰",
            intro: "Con grande piacere si certifica che",
            achievement: "ha completato con successo il Tour Quiz di Westminster",
            praise: "dimostrando notevole conoscenza della storica area di Westminster di Londra!",
            print: "Stampa Certificato",
            restart: "Ricomincia Quiz"
        }
    }
};

// Aggiungiamo le traduzioni per la home page
const homeTranslations = {
    en: {
        title: "Choose Your London Adventure!",
        britishMuseum: {
            title: "British Museum",
            description: "Explore ancient civilizations and incredible artifacts!"
        },
        naturalHistory: {
            title: "Natural History Museum",
            description: "Discover dinosaurs and the wonders of nature!"
        },
        westminster: {
            title: "Westminster Walking Tour",
            description: "Walk through the heart of London's history!"
        },
        back: "Back to selection"
    },
    it: {
        title: "Scegli La Tua Avventura a Londra!",
        britishMuseum: {
            title: "British Museum",
            description: "Esplora antiche civiltà e incredibili manufatti!"
        },
        naturalHistory: {
            title: "Museo di Storia Naturale",
            description: "Scopri i dinosauri e le meraviglie della natura!"
        },
        westminster: {
            title: "Tour a Piedi di Westminster",
            description: "Cammina attraverso il cuore della storia di Londra!"
        },
        back: "Torna alla selezione"
    }
};

let currentTour = null;
let currentLanguage = 'it';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startTour(tourId) {
    currentTour = tourId;
    document.querySelector('.tours-container').style.display = 'none';
    showDifficultySelection();
}

function showDifficultySelection() {
    const container = document.querySelector('.container');
    const translations = tours[currentTour].translations[currentLanguage];
    
    // Update title
    document.querySelector('#main-title').textContent = translations.title;
    
    // Remove any existing difficulty selection
    const existingDifficultySelection = document.querySelector('#difficulty-selection');
    if (existingDifficultySelection) {
        existingDifficultySelection.remove();
    }
    
    // Create difficulty selection HTML
    const difficultyHtml = `
        <div id="difficulty-selection" class="difficulty-container">
            <h2>${translations.chooseDifficulty}</h2>
            <div class="difficulty-buttons">
                <button class="difficulty-btn" data-difficulty="easy">
                    <i class="fas fa-star"></i> ${translations.easy}
                </button>
                <button class="difficulty-btn" data-difficulty="medium">
                    <i class="fas fa-star"></i><i class="fas fa-star"></i> ${translations.medium}
                </button>
                <button class="difficulty-btn" data-difficulty="hard">
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> ${translations.hard}
                </button>
            </div>
            <button class="back-button" onclick="goBackToTours()">
                <i class="fas fa-arrow-left"></i> ${homeTranslations[currentLanguage].back}
            </button>
        </div>
    `;
    
    // Insert difficulty selection after title
    const quizContainer = document.querySelector('#quiz-container');
    quizContainer.insertAdjacentHTML('beforebegin', difficultyHtml);
    
    // Add event listeners to difficulty buttons
    document.querySelectorAll('.difficulty-btn').forEach(button => {
        button.addEventListener('click', () => {
            startQuiz(button.dataset.difficulty);
        });
    });
}

function startQuiz(difficulty) {
    currentQuestions = [...tours[currentTour].questions[difficulty]];
    currentQuestionIndex = 0;
    score = 0;
    
    // Hide difficulty selection and show quiz
    document.querySelector('#difficulty-selection').style.display = 'none';
    document.querySelector('#quiz-container').style.display = 'block';
    
    showQuestion();
}

function shuffleArray(array) {
    // Funzione di utilità per mescolare un array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const translations = tours[currentTour].translations[currentLanguage];
    
    document.querySelector('#score-display').textContent = `${translations.score}: ${score}`;
    document.querySelector('#question').textContent = question.question[currentLanguage];
    
    const btnContainer = document.querySelector('.btn-container');
    btnContainer.innerHTML = '';
    
    // Creiamo un array di oggetti che contiene sia la risposta che il suo indice originale
    const answersWithIndex = question.answers[currentLanguage].map((answer, index) => ({
        text: answer,
        isCorrect: index === question.correct
    }));
    
    // Mescoliamo l'array delle risposte
    const shuffledAnswers = shuffleArray([...answersWithIndex]);
    
    // Creiamo i pulsanti con le risposte mescolate
    shuffledAnswers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(index, shuffledAnswers));
        btnContainer.appendChild(button);
    });
    
    // Update back button text
    const backText = document.querySelector('.back-text');
    if (backText) {
        backText.textContent = homeTranslations[currentLanguage].back;
    }
    
    // Update next button text
    const nextText = document.querySelector('.next-text');
    if (nextText) {
        nextText.textContent = translations.next;
    }
    
    document.querySelector('#next-btn').style.display = 'none';
}

function selectAnswer(selectedIndex, shuffledAnswers) {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.disabled = true;
    });
    
    // Troviamo l'indice della risposta corretta nell'array mescolato
    const correctIndex = shuffledAnswers.findIndex(answer => answer.isCorrect);
    
    if (selectedIndex === correctIndex) {
        buttons[selectedIndex].classList.add('correct');
        score++;
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        buttons[correctIndex].classList.add('correct');
    }
    
    document.querySelector('#score-display').textContent = 
        `${tours[currentTour].translations[currentLanguage].score}: ${score}`;
    document.querySelector('#next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showCertificate();
    }
}

function goBack() {
    // Reset quiz state
    currentQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    
    // Hide quiz container and show tour selection
    document.querySelector('#quiz-container').style.display = 'none';
    const difficultySelection = document.querySelector('#difficulty-selection');
    if (difficultySelection) {
        difficultySelection.remove();
    }
    document.querySelector('.tours-container').style.display = 'grid';
    
    // Reset title
    updatePageLanguage();
}

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.querySelector('img').alt.toLowerCase().includes(lang)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // If we're in a quiz, update the quiz content
    if (currentQuestions.length > 0) {
        showQuestion();
        return;
    }
    
    // If we're in the difficulty selection screen, show it again
    if (document.querySelector('#difficulty-selection')) {
        showDifficultySelection();
        return;
    }
    
    // Otherwise, update the home page
    updatePageLanguage();
}

function updatePageLanguage() {
    const currentLang = document.documentElement.lang;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const [tourId, translationKey] = key.split('-');
        
        if (tours[tourId] && tours[tourId].translations && tours[tourId].translations[currentLang]) {
            element.textContent = tours[tourId].translations[currentLang][translationKey];
        }
    });

    // Update other UI elements
    document.getElementById('main-title').textContent = currentLang === 'en' ? 'Choose Your London Adventure!' : 'Scegli la Tua Avventura a Londra!';
    
    // Update certificate text
    if (document.getElementById('certificate-container').style.display !== 'none') {
        const certificateElements = {
            'certificate-title': currentLang === 'en' ? 'Certificate of Achievement' : 'Certificato di Merito',
            'certificate-intro': currentLang === 'en' ? 'This is to certify that' : 'Si certifica che',
            'certificate-achievement': currentLang === 'en' ? 'has successfully completed the' : 'ha completato con successo il',
            'certificate-praise': currentLang === 'en' ? 'Great job exploring London!' : 'Ottimo lavoro nell\'esplorare Londra!',
            'print-text': currentLang === 'en' ? 'Print Certificate' : 'Stampa Certificato',
            'restart-text': currentLang === 'en' ? 'Restart Quiz' : 'Ricomincia Quiz'
        };

        for (const [id, text] of Object.entries(certificateElements)) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = text;
            }
        }
    }
}

function showCertificate() {
    const certTranslations = certificateTranslations[currentTour][currentLanguage];
    
    document.querySelector('#certificate-title').textContent = certTranslations.title;
    document.querySelector('#certificate-intro').textContent = certTranslations.intro;
    document.querySelector('#certificate-achievement').textContent = certTranslations.achievement;
    document.querySelector('#certificate-praise').textContent = certTranslations.praise;
    document.querySelector('.print-text').textContent = certTranslations.print;
    document.querySelector('.restart-text').textContent = certTranslations.restart;
    document.querySelector('#final-score').textContent = score;
    
    document.querySelector('#quiz-container').style.display = 'none';
    document.querySelector('#certificate-container').style.display = 'block';
    
    // Add event listeners for certificate buttons
    document.querySelector('#print-certificate').addEventListener('click', () => {
        window.print();
    });
    
    document.querySelector('#restart-btn').addEventListener('click', () => {
        document.querySelector('#certificate-container').style.display = 'none';
        goBack();
    });
}

function goBackToTours() {
    // Reset tour selection
    currentTour = null;
    
    // Hide difficulty selection
    const difficultySelection = document.querySelector('#difficulty-selection');
    if (difficultySelection) {
        difficultySelection.remove();
    }
    
    // Show tours container and reset title
    document.querySelector('.tours-container').style.display = 'grid';
    updatePageLanguage();
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage();
});
  