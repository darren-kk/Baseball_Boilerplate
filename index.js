const startBtn = document.querySelector("#start");
const throwinput = document.querySelector("#throw");
const enterBtn = document.querySelector("#enter");
const screen = document.querySelectorAll(".screen-div-ball")
const outCount = document.querySelectorAll(".screen-div-count")
const resetBtn = document.querySelector("#reset");
const pitchArr = new Array(3);
let answer = [];
let pitchBall = 0;
let count = 0;



function maker() {
  const makerArr = new Array(3)
  
  function random() {
    let number = 0;
    number = Math.floor(Math.random() * 10);
    return number;
  };

  for (let i = 0; i < makerArr.length; i ++) {
    makerArr[i] = random();
  };
  console.log(makerArr);
  answer = makerArr;
  return answer;
};
startBtn.addEventListener("click", maker);

function pitch() {
  const pitcher = document.querySelector("#throw").value;

  if (pitcher > 999) {
    alert("숫자는 3자리여야 합니다!");
    document.querySelector("#throw").value = "";
  } else if (isNaN(pitcher)) {
    alert("숫자를 입력해 주세요!");
    document.querySelector("#throw").value = "";
  }
  pitchBall = pitcher;
  return pitchBall;
}
throwinput.addEventListener('input', pitch);

function compare() {
  const mapfn = (arg) => Number(arg);
  const compareArr = Array.from(String(pitch()),mapfn);
  let strike = 0;
  let ball = 0;

  for (let j = 0; j < compareArr.length; j++) {
    
    if (answer[j] === compareArr[j]) {
      strike = strike + 1;
    } else if (answer.includes(compareArr[j])) {
      ball = ball + 1;
    } 
  };

  screen[count].textContent = pitchBall;
  outCount[count].textContent = `${strike}` + " strike " + `${ball}` + " ball";
  count = count + 1;
  
  if (strike === 3) {
    alert("Homerun!");
    reset();
  } else if (count === 10) {
    alert("Try again!");
    reset();
  };
}
enterBtn.addEventListener('click', compare);

function reset() {
  count = 0; 
  answer = [];
  document.querySelector("#throw").value = "";
  maker();
  
  for(let k = 0; k < screen.length; k++) {
    screen[k].textContent = "";
    outCount[k].textContent = "0 strike 0 ball"
  };

};
resetBtn.addEventListener('click', reset);