//Global variable for quiz questions
var questions = [
    {
        question: "Arrays in JavaScript can be used to store ____.",
        options: [
                    {
                        option: "1. numbers and strings",
                        answer: false
                    },
                    {
                        option: "2. other arrays",
                        answer: false
                    },
                    {
                        option: "3. booleans",
                        answer: false
                    },
                    {
                        option: "4. all of the above",
                        answer: true
                    }
                ]
    },
    {
        question: "A useful tool to debug in-browser by printing content to the debugger during development is ____?",
        options: [
                    {
                        option: "print()",
                        answer: false
                    },
                    {
                        option: "terminal/bash",
                        answer: false
                    },
                    {
                        option: "while(true)",
                        answer: false
                    },
                    {
                        option: "console.log()",
                        answer: true
                    }
                ]
    },
    {
        question: "String values mus be enclosed in:",
        options: [
                    {
                        option: "Parenthesis",
                        answer: false
                    },
                    {
                        option: "Curly brackets",
                        answer: false
                    },
                    {
                        option: "Quotations",
                        answer: true
                    },
                    {
                        option: "Tildes",
                        answer: false
                    }
                ]
    },
    {
        question: "Commonly used data types include:",
        options: [
                    {
                        option: "Booleans, alerts, and consoles",
                        answer: false
                    },
                    {
                        option: "Dongles, ports, and buttons",
                        answer: false
                    },
                    {
                        option: "Strings, arrays, and floats",
                        answer: true
                    },
                    {
                        option: "Tables, lists, and loops",
                        answer: false
                    }
                ]
    },
    {
        question: "Which is an appropriate for statement?",
        options: [
                    {
                        option: "for i = values, statements, end",
                        answer: false
                    },
                    {
                        option: "for i in range(x): statements",
                        answer: false
                    },
                    {
                        option: "for (let i = 0; i < x; i++) {statements}",
                        answer: true
                    },
                    {
                        option: "for (i in x:y) {statements}",
                        answer: false
                    }
                ]
    },
    {
        question: "Which of these does not return true?",
        options: [
                    {
                        option: "Boolean(1)",
                        answer: false
                    },
                    {
                        option: "Boolean(0)",
                        answer: true
                    },
                    {
                        option: 'Boolean("false")',
                        answer: false
                    },
                    {
                        option: 'Boolean("0")',
                        answer: false
                    }
                ]
    },
    {
        question: "Which of these is a float data object?",
        options: [
                    {
                        option: '"1.5"',
                        answer: false
                    },
                    {
                        option: "3/2",
                        answer: true
                    },
                    {
                        option: "Math.floor(5.556)",
                        answer: false
                    },
                    {
                        option: "'float'",
                        answer: false
                    }
                ]
    },
    {
        question: 'The code: document.addEventListener("change", updateItem); will do what?',
        options: [
                    {
                        option: "When an element in the document changes, the updateItem function will run without any input",
                        answer: false
                    },
                    {
                        option: "When an element in the document changes, the updateItem function will run with the input 'event'",
                        answer: true
                    },
                    {
                        option: "When a button is pressed, the updateItem function will run without any input",
                        answer: false
                    },
                    {
                        option: "When a button is pressed, the updateItem function will run with the input 'event'",
                        answer: false
                    }
                ]
    },
    {
        question: "The condition in an if/else statement is enclosed in:",
        options: [
                    {
                        option: "Parenthesis",
                        answer: true
                    },
                    {
                        option: "Curly brackets",
                        answer: false
                    },
                    {
                        option: "Square brackets",
                        answer: false
                    },
                    {
                        option: "Boolean marks",
                        answer: false
                    }
                ]
    },
    {
        question: "The ! in a statement such as Boolean(!true) does what?",
        options: [
                    {
                        option: "Inverts the boolean",
                        answer: true
                    },
                    {
                        option: "Always returns false",
                        answer: false
                    },
                    {
                        option: "Always returns true",
                        answer: false
                    },
                    {
                        option: "Reverses the polarity of the neutron flow",
                        answer: false
                    }
                ]
    },
    {
        question: "Which statement will return a random number between 5 and 10?",
        options: [
                    {
                        option: "Math.random() * 5 + 5",
                        answer: true
                    },
                    {
                        option: "Math.random(5, 10)",
                        answer: false
                    },
                    {
                        option: "math.Random() * 5 + 5",
                        answer: false
                    },
                    {
                        option: "Math.Random() * 10 - 5",
                        answer: false
                    }
                ]
    },
    {
        question: 'document.querySelector("body").appendChild(document.createElement("p")); will do what to the HTML code?',
        options: [
                    {
                        option: "Add an empty <p> tag to the end of the body",
                        answer: true
                    },
                    {
                        option: "Add the letter p to the end of the body",
                        answer: false
                    },
                    {
                        option: "Add an empty <p> tag to the start of the body",
                        answer: false
                    },
                    {
                        option: "Nothing",
                        answer: false
                    }
                ]
    },
    {
        question: "Which of these returns the number 5?",
        options: [
                    {
                        option: '"5"',
                        answer: false
                    },
                    {
                        option: "Math.pow(125,1/3)",
                        answer: true
                    },
                    {
                        option: "Math.ceil(5.01)",
                        answer: false
                    },
                    {
                        option: "Math.floor(4.99)",
                        answer: false
                    }
                ]
    },
    {
        question: "Which of the following is not an object:",
        options: [
                    {
                        option: "var cat = {name: 'scruffy', length: 5}",
                        answer: false
                    },
                    {
                        option: "var cat = new Object()",
                        answer: false
                    },
                    {
                        option: "class cat: name = 'scruffy'; length = 5;",
                        answer: true
                    },
                    {
                        option: "var cat = {this = 'not an object'}",
                        answer: false
                    }
                ]
    },
    {
        question: "Which of the following is an array?",
        options: [
                    {
                        option: "{}",
                        answer: false
                    },
                    {
                        option: "/**/",
                        answer: false
                    },
                    {
                        option: "[]",
                        answer: true
                    },
                    {
                        option: "array()",
                        answer: false
                    }
                ]
    },
    {
        question: "Which of these are true about a global variable?",
        options: [
                    {
                        option: "They can be called anywhere in the code",
                        answer: false
                    },
                    {
                        option: "If they are changed in a function, the old value is not usable by another function",
                        answer: false
                    },
                    {
                        option: "They are not declared within a function",
                        answer: false
                    },
                    {
                        option: "All of the above",
                        answer: true
                    }
                ]
    },
    {
        question: "Which is a reason that we use var when declaring a variable?",
        options: [
                    {
                        option: "It allows us to freely make changes to other variables through variable methods",
                        answer: false
                    },
                    {
                        option: "It prevents access to variables with the same name in higher scope",
                        answer: true
                    },
                    {
                        option: "It makes the variable omega class, which prevents hijacking from outside interfaces",
                        answer: false
                    },
                    {
                        option: "All of the above",
                        answer: false
                    }
                ]
    },
    {
        question: "Which html element contains JavaScript?",
        options: [
                    {
                        option: "<script>",
                        answer: true
                    },
                    {
                        option: "<source>",
                        answer: false
                    },
                    {
                        option: "<javascript>",
                        answer: false
                    },
                    {
                        option: "<js>",
                        answer: false
                    }
                ]
    },
    {
        question: 'Which of the following will change the text of <p id="alpha">Hello World</p>?',
        options: [
                    {
                        option: "#alpha.innerText = 'Goodbye World'",
                        answer: false
                    },
                    {
                        option: 'document.getElementById("alpha").innerHTML = "Goodbye World"',
                        answer: true
                    },
                    {
                        option: 'document.querySelector("alpha").innerText = "Goodbye World"',
                        answer: false
                    },
                    {
                        option: 'document.querySelector(".alpha").innerHTML = "Goodbye World"',
                        answer: false
                    }
                ]
    }
];


//Declare other Global Variables 
var maxQuestions = 10; //number of questions in the quiz
var maxTime = 70; //total time alloted
var questionScore = Math.floor(maxTime/maxQuestions); //score per correct answer
var maxScore = maxTime + (maxQuestions * questionScore); //maximum possible score
var timer = maxTime; //current time
var timerDisplay = document.querySelector('#timer'); //timer display

//general functions

//timer function
var startTimer = function() {
    var countdown = setInterval(count,1000);
    function count() {
        var seconds = parseInt(timer, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        if (timer < 0) {
            clearInterval(countdown);
            timer = maxTime;
        } else {
            timer--;
            timerDisplay.textContent = seconds;
        }
    }
}

//inarray
var inArray = function(item, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true;
        }
    }
    return false;
}

startTimer();
//Start Quiz Functions
//Start Quiz listener(s)

//Quiz Functions
var randomizeQuestions = function() {
    //take global list of questions and randomly pick 10 DIFFERENT ones
    var questionsChosen = [];
    var questionNumbers = [];
    var x = questions.length + 1;
    for (let i = 0; i < maxQuestions; i++) {
        while(x > questions.length || inArray(x, questionNumbers)) {
            var x = Math.floor(Math.random() * questions.length);
        }
        questionNumbers.push(x);
    }

    for (let i = 0; i < maxQuestions; i++) {
        questionsChosen.push(questions[questionNumbers[i]]);
    }
    return questionsChosen;
}


//Quiz listener(s)

//High Score Record Functions
//High Score Record listener(s)

//High Score Functions
//High Score listener(s)