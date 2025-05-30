const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const style = document.createElement('style');
style.innerHTML = `
* {
  box-sizing: border-box;
}

body {
  background-color: pink;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

div {
  position: absolute;
  bottom: 20px;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  font-size: 18px;
}

input {
  width: 50px;
  padding: 5px;
  font-size: 18px;
  background-color: pink;
  border: none;
  text-align: center;
}

input:focus {
  outline: none;
}
`;
document.head.appendChild(style);




const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'Hello!..How are you?..';
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
  speed = 300 / e.target.value;
});
