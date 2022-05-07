let jokes = [
    { text: 'Человека красит одежда. Голые люди имеют крайне малое влияние в обществе, а то и совсем никакого. М.Твен' },
    { text: 'На всякого обывателя найдется свой обуватель.' },
    { text: '— Что ищет программист-наркоман? — Панель закладок.' },
    { text: 'Рано встаешь на работу? Обязательно разбуди в доме всех. А то че они?!' },
    { text: 'Студенческая жизнь прекрасна до тех пор, пока тебе не нужно идти в универ.' }
];

let button = document.querySelector('.button');
let joke = document.querySelector('.joke');

button.addEventListener('click', function () {
    let rand = Math.floor(Math.random() * jokes.length);
    joke.innerText = jokes[rand].text;
});