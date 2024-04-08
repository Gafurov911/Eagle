const module__btn = document.querySelector('.module__btn')
const module__btn1 = document.querySelector('.module__btn1')

module__btn.addEventListener("click", function () {
    location.href = "./start.html";
});

module__btn1.addEventListener("click", function () {
    location.href = "./start.html";
});

const scoreModule1 = JSON.parse(localStorage.getItem('scoreModule1'))
console.log(scoreModule1);
const queLengthModule1 = JSON.parse(localStorage.getItem('queLengthModule1'))
console.log(queLengthModule1);

const modulePassive = document.querySelector('.module__one')
const moduleActive = document.querySelector('.module__one1')
const moduleStatus = document.querySelector('.module__status_line1')
const resultInfo = document.querySelector('.module__status_active1')
// results.classList.add('module__one')

function showResultbox(e) {      
    if (scoreModule1 > 0) {
        moduleActive.classList.remove('results')
        modulePassive.classList.add('results')
    }

    if (scoreModule1 > 0) {        
        let resulthtml = `<span class="status__active">` + scoreModule1 + ` / ` + queLengthModule1 + `</span>`
        resultInfo.insertAdjacentHTML('beforeend', resulthtml)
    }

    let statusLine = scoreModule1 * (100 / queLengthModule1)
    moduleStatus.style.width = statusLine + '%'
    moduleStatus.style.transition = '5s'
}
showResultbox()
