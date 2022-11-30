const question = document.querySelector('#question');
const choices = document.querySelector('#choices');
const btn = document.querySelector('#nxt');
const scoreOut = document.querySelector('.score');
const reset = document.querySelector('#reset');

let questionArray = [
    {
        question: '2+2 = ?',
        answers: {
            a: 4,
            b: 6,
            c: 7,
            d: 2,
        },
        correct: 'a'
    },
    {
        question: '5+2 = ?',
        answers: {
            a: 4,
            b: 6,
            c: 7,
            d: 2,
        },
        correct: 'c'
    },
    {
        question: '45-12 = ?',
        answers: {
            a: 36,
            b: 28,
            c: 33,
            d: 43,
        },
        correct: 'c'
    },
    {
        question: '32-29 = ?',
        answers: {
            a: 4,
            b: 6,
            c: 7,
            d: 3,
        },
        correct: 'd'
    },
    {
        question: '25*5 = ?',
        answers: {
            a: 100,
            b: 125,
            c: 130,
            d: 150,
        },
        correct: 'b'
    },
    {
        question: 'A triangle, if angle a = 60° and angle b = 80°, What is angle c = ?',
        answers: {
            a: 50,
            b: 60,
            c: 40,
            d: 30,
        },
        correct: 'c'
    },
    {
        question: '65*100 = ?',
        answers: {
            a: 6500,
            b: 6100,
            c: 4500,
            d: 6300,
        },
        correct: 'a'
    },
    {
        question: '111*111 = ?',
        answers: {
            a: 121,
            b: 12321,
            c: 222,
            d: 23232,
        },
        correct: 'b'
    },
    {
        question: '3*3 = ?',
        answers: {
            a: 12,
            b: 15,
            c: 9,
            d: 6,
        },
        correct: 'c'
    },
    {
        question: '12+4*2 = ?',
        answers: {
            a: 20,
            b: 32,
            c: 28,
            d: 18,
        },
        correct: 'a'
    },
    {
        question: '25/5*2 = ?',
        answers: {
            a: 20,
            b: 10,
            c: 2.5,
            d: 5,
        },
        correct: 'b'
    },
    {
        question: '(60+5)*10 = ?',
        answers: {
            a: 650,
            b: 560,
            c: 605,
            d: 600,
        },
        correct: 'a'
    },
    {
        question: '100*10/50 = ?',
        answers: {
            a: 1000,
            b: 500,
            c: 200,
            d: 250,
        },
        correct: 'c'
    },
    {
        question: '22*11 = ?',
        answers: {
            a: 121,
            b: 232,
            c: 131,
            d: 242,
        },
        correct: 'd'
    },
    {
        question: '45+655/5 = ?',
        answers: {
            a: 190,
            b: 150,
            c: 201,
            d: 171,
        },
        correct: 'd'
    },
    {
        question: '12+65*7 = ?',
        answers: {
            a: 476,
            b: 470,
            c: 467,
            d: 171,
        },
        correct: 'c'
    },
    {
        question: '1+1 = ?',
        answers: {
            a: 476,
            b: 470,
            c: 467,
            d: 2,
        },
        correct: 'd'
    },
    {
        question: '3+3 = ?',
        answers: {
            a: 476,
            b: 470,
            c: 9,
            d: 2,
        },
        correct: 'c'
    },
    {
        question: '70+70*2 = ?',
        answers: {
            a: 210,
            b: 200,
            c: 140,
            d: 340,
        },
        correct: 'a'
    },
    {
        question: 'Ikaw + Ako = ?',
        answers: {
            a: 'Forever',
            b: 'Hindi tadhana',
            c: 'For better',
            d: 'Sana all',
        },
        correct: 'c'
    }
]

function outPut(questionArray, question, choices, btn){
    let output;
    let answers;
    let i = 0;
    var score = 0;

    if(i === 0){
        output = [];
        answers = [];
    
        for(letter in questionArray[i].answers){
            answers.push(`<label class = "labelChoice">
            <input type="radio" name="question${i}" value="${letter}" id="ans_${i}${letter}">
            ${questionArray[i].answers[letter]}
            </label>`)
        }
    
        output.push(`<h1 class="question">
        ${questionArray[i].question}
        </h1>`)
    
        question.innerHTML = output.join(' ');
        choices.innerHTML = answers.join(' ');
    }

    // nxt.addEventListener('click', () => {
        
    // })
    
    btn.addEventListener('click', () => {
        let next = false;

        for(letter in questionArray[i].answers){
            var id = 'ans_' + i + letter;
            var inp = document.getElementById(id);
            console.log(id)
    
            if(inp.checked){
                next = true

                if (inp.value==questionArray[i].correct && inp.checked){
                    score++;
                    scoreOut.innerHTML = score;
                }
                else {
                    continue;
                }
            }
            else {
                document.getElementById('no_ans').innerHTML = 'No Answer';
            }
        }
        
        if (next===true){
            document.getElementById('no_ans').innerHTML = ' ';
            i+=1;
        output = [];
        answers = [];
        scoreOut.innerHTML = score;
    
        for(letter in questionArray[i].answers){
            answers.push(`<label class = "labelChoice">
            <input type="radio" name="question${i}" value="${letter}" id="ans_${i}${letter}">
            ${questionArray[i].answers[letter]}
            </label>`)
        }
    
        output.push(`<h1 class="question">
        ${questionArray[i].question}
        </h1>`)
    
        question.innerHTML = output.join(' ');
        choices.innerHTML = answers.join(' ');
        }
    })

    reset.addEventListener('click', () => {
        window.history.go(0);
    })
}

outPut(questionArray, question, choices, btn);