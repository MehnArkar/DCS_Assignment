function changeColor() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.style.color = 'blue';
    });
}

function changeFont() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.style.fontFamily = 'Courier New, Courier, monospace';
    });
}

function changeSize() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.style.fontSize = '20px';
    });
}

function changeLink() {
    const link = document.getElementById('link');
    if (link.textContent === 'Google') {
        link.textContent = 'Yahoo';
        link.href = 'https://www.yahoo.com';
    } else {
        link.textContent = 'Google';
        link.href = 'https://www.google.com';
    }
    link.target = '_blank';
}

function showTime() {
    const timeDisplay = document.getElementById('timeDisplay');
    const currentTime = new Date().toLocaleTimeString();
    timeDisplay.textContent = currentTime;
}
