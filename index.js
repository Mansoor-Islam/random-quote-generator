const quoteDisplay = document.querySelector('#quote');
const button = document.querySelector('button');
const body = document.body;

const quotes = [
    'Do something today that your future self will thankyou for',
    'Do one thing every day that scares you',
    'Your limitation is only your imagination',
    'The secret of getting ahead is getting started',
    'If opportunity doesn’t knock, build a door',
    'Sometimes later becomes never. Do it now!',
    'Go the extra mile. It’s never crowded there',
    'A person who never made a mistake never tried anything new',
    'Believe you can and you\'re halfway there.'
]

const colors = ['#ff9ff3', '#feca57', '#ff6b6b', '#48dbfb', '#1dd1a1', '#00d2d3', '#809fff', '#a8dadc', '#576574', '#ffd6a5']; 

function showQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNumber];

    quoteDisplay.innerHTML = `"${randomQuote}"`;
    quoteDisplay.classList.add("quote-style");
    body.style.backgroundColor = colors[randomNumber];
}

button.addEventListener('click', showQuote);
