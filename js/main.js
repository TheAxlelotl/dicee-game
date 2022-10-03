let hasRefreshed = (sessionStorage.getItem('key') === '1');

if (hasRefreshed) {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let image1 = document.querySelector('.img1');
    image1.src = `../img/dice${randomNumber1}.png`;

    let image2 = document.querySelector('.img2');
    image2.src = `../img/dice${randomNumber2}.png`;

    let heading = document.querySelector('h1');
    if (randomNumber1 === randomNumber2) heading.textContent = 'Draw';
    if (randomNumber1 > randomNumber2) heading.textContent = '🚩 Player 1 Wins!';
    if (randomNumber1 < randomNumber2) heading.textContent = 'Player 2 Wins! 🚩';

} else {
    sessionStorage.setItem('key', '1');
}

