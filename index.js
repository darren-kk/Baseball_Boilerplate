const startBtn = document.querySelector("#start");
const throwinput = document.querySelector("#throw");
const enterBtn = document.querySelector("#enter");
const screen = document.querySelectorAll(".screen-div-ball");
const outCount = document.querySelectorAll(".screen-div-count");
const resetBtn = document.querySelector("#reset");
const pitchArr = new Array(3);
let randomNumber = [];
let pitchBall = 0;
let count = 0;

function createRandomNumber() {
  const makerArr = new Array(3)
  
  function random() {
    let number = 0;
    number = Math.floor(Math.random() * 10);
    return number;
  };

  for (let i = 0; i < makerArr.length; i ++) {
    makerArr[i] = random();
  };

  randomNumber = makerArr;
  
  return randomNumber;
}

startBtn.addEventListener("click", createRandomNumber);

function handleInput() {
  const pitcher = document.querySelector("#throw").value;

  if (pitcher > 999) {
    alert("숫자는 3자리여야 합니다!");
    document.querySelector("#throw").value = "";
  };
  
  if (isNaN(pitcher)) {
    alert("숫자를 입력해 주세요!");
    document.querySelector("#throw").value = "";
  };

  pitchBall = pitcher;
  
  return pitchBall;
}

throwinput.addEventListener('input', handleInput);

function compare() {
  const mapfn = (arg) => Number(arg);
  const compareArr = Array.from(String(handleInput()),mapfn);
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < compareArr.length; i++) {
    
    if (randomNumber[i] === compareArr[i]) {
      strike = strike + 1;
    } else if (randomNumber.includes(compareArr[i])) {
      ball = ball + 1;
    }; 

  };

  screen[count].textContent = pitchBall;
  outCount[count].textContent = `${strike} strike ${ball} ball`;
  count = count + 1;
  
  if (strike === 3) {
    alert("Homerun!");
    reset();
  }; 
  
  if (count === 10) {
    alert("Try again!");
    reset();
  };
}

enterBtn.addEventListener('click', compare);

function reset() {
  count = 0; 
  randomNumber = [];
  document.querySelector("#throw").value = "";
  createRandomNumber();
  
  for(let i = 0; i < screen.length; i++) {
    screen[i].textContent = "";
    outCount[i].textContent = "0 strike 0 ball"
  };
}

resetBtn.addEventListener('click', reset);