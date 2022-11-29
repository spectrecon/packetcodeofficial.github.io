
const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    {
        genre: 'WHO',
        questions: [
            {
                question: "who wrote harry potter",
                answers: ["JK Rowling","JRR Tolkien"],
                correct: "JK Rowling",
                level: 'very easy',
            },
            {
                question: "who was born on krypton?",
                answers: ["spider-man","Superman"],
                correct: "Superman",
                level: 'easy',
            },
            {
                question: "who created the theory of gravity",
                answers: ["Isac Brown","Isac Newton"],
                correct: "Isac Newton",
                level: 'medium',
            },
            {
                question: "who created the first single lense camera?",
                answers: ["Le Prince","hugh de voghn"],
                correct: "Le Prince",
                level: 'hard',
            },
            {
                question: "who is the youngest player ever to score a hat trick in the fifa world cup",
                answers: ["Messi","Pele"],
                correct: "Pele",
                level: 'very hard',
            },
        
        ]
    },
    {
        genre: "WHERE",
        questions: [
            {
                question: " where is jamaica located",
                answers: ["Africa","Caribbean"],
                correct: "Caribbean",
                level: 'very easy',
            },
            {
                question: "where is the world cup 2022",
                answers: ["malasia","qatar"],
                correct: "qatar",
                level: 'easy',
            },
            {
                question: "where is the heart located",
                answers: ["to the left to the left"," right is always right"],
                correct: "to the left to the left",
                level: 'medium',
            },
            {
                question: "where is johnny depp from",
                answers: ["Owensboro","Turkey"],
                correct: "Owensboro",
                level: 'hard',
            },
            {
                question: " where is candice ",
                answers: ["candice who"," on the moon"],
                correct: "candice who",
                level: 'very hard',
            },
        ]
    },
    {
        genre: "WHAT",
        questions: [
            {
                question: " what is 2 + 2",
                answers: ["15","2"],
                correct: "2",
                level: 'very easy',
            },
            {
                question: "what is the closest plannet to the sun",
                answers: ["mars","earth"],
                correct: "Mars",
                level: 'easy',
            },
            {
                question: "what is the esiest coding language",
                answers: ["python","Java"],
                correct: "python",
                level: 'medium',
            },
            {
                question: "what  happened in 1602",
                answers: ["Battle of blackbay","Portuguese Expulsion"],
                correct: "Portuguese Expulsion",
                level: 'hard',
            },
            {
                question: "what is the coldest substance on earth ",
                answers: ["Bose-Einstein condensate","dry ice"],
                correct: "Bose-Einstein condensate",
                level: 'very hard',
            },
        ]
    },  
    {
        genre: "WHEN",
        questions: [
            {
                question: " When is jamaica day",
                answers: ["august 6","august 4"],
                correct: "august 6",
                level: 'very easy',
            },
            {
                question: "when is the next world cup",
                answers: ["2023","2026"],
                correct: "2026",
                level: 'easy',
            },
            {
                question: " when is it a good time to fish",
                answers: ["midday","sunset"],
                correct: "sunset",
                level: 'medium',
            },
            {
                question: "who had the most doubles in Nba hystory",
                answers: ["Wilt","Russel"],
                correct: "Wilt",
                level: 'hard',
            },
            {
                question: "who is the richest man in hystory",
                answers: ["mansan musa","jeff bessos"],
                correct: "mansan musa",
                level: 'very hard',
            },
        ] 
    },
    {
        genre: "WHY",
        questions: [
            {
                question: "why did the chicken cross the road",
                answers: ["for fun","for food"],
                correct: "for food",
                level: 'very easy',
            },
            {
                question: " why do people snore",
                answers: ["sleep deprevation","bad sleeping habits"],
                correct: "bad sleeping habits",
                level: 'easy',
            },
            {
                question: "why do people talk in their sleep",
                answers: ["sleep terrors","good communication skills"],
                correct: "sleep terrors",
                level: 'medium',
            },
            {
                question: "why do we have ten fingers ",
                answers: ["anatomy","i dont even know"],
                correct: "anatomy",
                level: 'hard',
            },
            {
                question: "Why does a giraffe have a long neck?",
                answers: ["feeding","to drink more water"],
                correct: "to drink more water",
                level: 'very hard',
            },
        ]
    }
    
]

let score = 0

function addCategory(category){

    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML = category.genre

    column.appendChild(genreTitle)
    game.append(column)

    category.questions.forEach(question =>{
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

        if (question.level ==='very easy'){
            card.innerHTML = 100
        }
        if (question.level ==='easy'){
            card.innerHTML = 200
        }
        if (question.level ==='medium'){
            card.innerHTML = 300
        }
        if (question.level ==='hard'){
            card.innerHTML = 400
        }
        if (question.level ==='very hard'){
            card.innerHTML = 500
        }


        card.setAttribute('data-question',question.question)
        card.setAttribute('data-answer-1', question.answers[0])
        card.setAttribute('data-answer-2', question.answers[1])
        card.setAttribute('data-correct', question.correct)
        card.setAttribute('data-value', card.getInnerHTML)

        card.addEventListener('click', flipCard)
    })

}

jeopardyCategories.forEach(category => addCategory(category))

function flipCard(){

    this.innerHTML = ""
    this.style.fontSize = "15px"
    this.style.lineHeight = "30px"
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text')
    textDisplay.innerHTML = this.getAttribute('data-question')
    const firstButton = document.createElement('button')
    const secondbutton = document.createElement('button')
    firstButton.classList.add('first-button')
    secondbutton.classList.add('second-button')
    firstButton.innerHTML = this.getAttribute('data-answer-1')
    secondbutton.innerHTML = this.getAttribute('data-answer-2')
    firstButton.addEventListener('click', getresult)
    secondbutton.addEventListener('click', getresult)
    this.append(textDisplay,firstButton,secondbutton)

    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.removeEventListener('click', flipCard ))
}


function getresult() {


    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.addEventListener('click', flipCard))

    const cardOfButton = this.parentElement

    if (cardOfButton.getAttribute('data-correct') == this.innerHTML) {

        score = score + parseInt(cardOfButton.getAttribute('data-value'))
        scoreDisplay.innerHTML = score
        cardOfButton.classList.add('correct-answer')

        setTimeout(()=>{

            while(cardOfButton.firstChild){
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
             cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')
        }, 100)
    }else {
        cardOfButton.getAttribute('wrong-answer')
        setTimeout(()=>{

            while(cardOfButton.firstChild){
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
             cardOfButton.innerHTML = 0

        },100)
    }
    cardOfButton.removeEventListener('click', flipCard)
}

function findPercentageScore() {
    var totalQuestions = 10;
    var correctAnswers = 5;
    var incorrectAnswers = 5;
    var percentageScore = (correctAnswers / totalQuestions) * 100;
    var playerName = "John Doe";
    var town = "New York";
    var currentDate = new Date();
    document.getElementById("showpercentage").innerHTML =
      "Total Number of Questions: " +
      totalQuestions +
      "<br>" +
      "Number of Correct Answers: " +
      correctAnswers +
      "<br>" +
      "Number of Incorrect Answers: " +
      incorrectAnswers +
      "<br>" +
      "Percentage Score: " +
      percentageScore +
      "%" +
      "<br>" +
      "Player's Name: " +
      playerName +
      "<br>" +
      "Town: " +
      town +
      "<br>" +
      "Current Date: " +
      currentDate;
   }

   function showAll(){ 
    document.getElementById("showallplayers").value = ""
    for (x=0;x<PlayersData.length;x++)
    { 
        
        document.getElementById("showallplayers").value +=(firstname[x]+","+lastname[x]+","+age[x]+","+numcorrect[x]+","+numincorrect[x]+","+finalscore[x]+","+percentage[x]+"\n")
    }
    }



