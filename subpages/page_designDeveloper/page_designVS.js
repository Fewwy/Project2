let jokes = [
    { text: 'Почему феменистки не любят математику? Слишком много неравенств.' },
    { text: 'Знаки зодиака: Скорпион и 11 лохов не вошедших в Mortal Kombat.' }, 
    { text: 'Еврейские спортсмены заняли на олимпиаде немного денег.' },
    { text: 'Какие стоны издает геймер во время секса? Hearthstone' },
    { text: 'Викинги после смерти попадают в Вальгалу. Женщины-викинги попадают в Вальгалище.' }
];

let button = document.querySelector('.button');
let joke = document.querySelector('.joke');

button.addEventListener('click', function () {
    let rand = Math.floor(Math.random() * jokes.length);
    joke.innerText = jokes[rand].text;
});