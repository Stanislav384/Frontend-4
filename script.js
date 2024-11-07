const quotes = [
    "1",
    "2",
    "3",
    "4"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteText').innerText = quotes[randomIndex];
}
