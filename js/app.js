// Блоки Маин, Сигн и логин
const main_page = document.querySelector('.main_page')
const sign_page = document.querySelector('.sign_page')
const login_page = document.querySelector('.login_page')
// Кнопки Маин: Сигн и логин
const sign_btn = document.querySelector('.sign__up')
const login_btn = document.querySelector('.login')
// Кнопки Форм сабмит: Сигн и логин
const sign_submit = document.querySelector('.sign_submit').onclick = function (e) {
    e.preventDefault()
    location.href = "./start.html";
};
const login_submit = document.querySelector('.login_submit').onclick = function (e) {
    e.preventDefault()
    location.href = "./start.html";
};

sign_btn.addEventListener("click", function (e) {
    e.preventDefault()
    main_page.style.display = 'none'
    sign_page.style.display = 'flex'    
});

login_btn.addEventListener("click", function () {
    main_page.style.display = 'none'
    login_page.style.display = 'flex'    
});
