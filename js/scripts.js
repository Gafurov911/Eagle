// Скрипты для Тестов
// Таргет основных блоков и кнопок
const start_btn = document.querySelector('.statr__test_button')
const choose__test = document.querySelector('.choose__test')
const start__test = document.querySelector('.start__test')
const statr__tests = start__test.querySelector('.statr__tests') // блок ответы тестов
const moduleStatus = document.querySelector('.module__status_line')
// Таргет основных блоков и кнопок Рузультата
const results = document.querySelector('.results')

// START START Привязка к кнопке функцию при клыке
start_btn.onclick = ()=>{
    choose__test.style.display = 'none'
    start__test.style.display = 'flex'
    showQuestions(0)
};

// начальное количесво тестов
let que_count = 0
let resultScore = 0
// let que_icons = 0

const restart = results.querySelector('.restart')
const exit = results.querySelector('.exit')
// module__status_active
restart.onclick = () => {
    start__test.style.display = 'flex'
    choose__test.style.display = 'none'
    results.classList.remove('module__one')
    const resultInfo = results.querySelector('.module__status_active')
    resultInfo.lastChild.remove()
    que_count = 0
    resultScore = 0
    showQuestions(0)
}
exit.onclick = ()=>{
    window.location.reload(); //reload the current window
}

// NEXT NEXT следующий тест при нажатии next_btn
const next_btn = start__test.querySelector('.btn__test_next')
next_btn.onclick = ()=>{
    if (que_count < questions.length - 1) {
        que_count++
        // que_icons++
        showQuestions(que_count)
        next_btn.style.pointerEvents = "none"
    } else {
        // console.log('Questions completed')
        showResultbox()
    }
};

// Функция для добавление тестов в блоках при нажатии start_btn
function showQuestions(index) {
    const test__info = start__test.querySelector('.test__info') // блок вопросы тестов
    // Добавление тестов
    let test__title = '<h1 class="test__title">' + questions[index].question + '</h1>'
    let tests = '<button class="btn__test_one">' + questions[index].icons[0] + '<p class="btn__text">' + questions[index].options[0] + '</p></button>'
        + '<button class="btn__test_one">' + questions[index].icons[1] + '<p class="btn__text">' + questions[index].options[1] + '</p></button>'
        + '<button class="btn__test_one">' + questions[index].icons[2] + '<p class="btn__text">' + questions[index].options[2] + '</p></button>'
    test__info.innerHTML = test__title
    statr__tests.innerHTML = tests

    // отслеживание выбранной пользователем ответа
    const btn__test_one = statr__tests.querySelectorAll('.btn__test_one')
    for (let i = 0; i < btn__test_one.length; i++) {
        btn__test_one[i].setAttribute("onclick", "optionSelected(this)")
    }
}

// проверка на правилность ответа
function optionSelected(answer) {
    let userAnswer = answer.textContent
    let correctAnswer = questions[que_count].answer
    const allOptions = statr__tests.children.length
    if (userAnswer == correctAnswer) {
        resultScore += 1
        answer.classList.add('correct')
        console.log('Answer is Correct')
        console.log("Correct answers = " + resultScore)
    } else {
        answer.classList.add('incorrect')
        console.log('Answer is Wrong')
        
        // если ответ не правилный то автоматом выбераем правилный
        for (i = 0; i < allOptions; i++) {
            if (statr__tests.children[i].textContent == correctAnswer) {
                statr__tests.children[i].setAttribute("class", "btn__test_one correct")               
            }
        }
    }    
    // при выборе ответа отключаем выбор другого 
    for (i = 0; i < allOptions; i++) {
        statr__tests.children[i].classList.add('disabled')
    }
    next_btn.style.pointerEvents = "auto"
}

function showResultbox() {
    choose__test.style.display = 'none'
    start__test.style.display = 'none'
    results.classList.add('module__one')
    const resultInfo = results.querySelector('.module__status_active')
    if (resultScore >= 0) {
        let resulthtml = `<span class="status__active">`+ resultScore +` / `+ questions.length +`</span>`
        resultInfo.insertAdjacentHTML('beforeend', resulthtml)
    }
   
    let statusLine = resultScore * (100 / questions.length)
    console.log(statusLine);
    console.log(moduleStatus);
    moduleStatus.style.width = statusLine + '%'
}

// кнопка without test
const statr_button = document.querySelector('.statr__button').onclick = function () {
    location.href = "./main.html";
};
