const start = document.querySelector("#start");
const throwinput = document.querySelector("#throw");
const enter = document.querySelector("#enter");
const screen = document.querySelectorAll(".screen-div-ball")
const outCount = document.querySelectorAll(".screen-div-count")
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
  }

  for (let i = 0; i < makerArr.length; i ++) {
    makerArr[i] = random();
  }
  console.log(makerArr);
  answer = makerArr;
  return answer;
}
start.addEventListener("click", maker) // start 누르면 숫자를 배열로 저장

function pitch() {
  const pitcher = document.querySelector("#throw").value;

  if (pitcher > 999) {
    alert("숫자는 3자리여야 합니다!");
  } else if (isNaN(pitcher)) {
    alert("숫자를 입력해 주세요!") // input 초기화 물어보기 
  }
  pitchBall = pitcher;
  return pitchBall;
}
throwinput.addEventListener('input', pitch)

function compare() {
  const mapfn = (arg) => Number(arg);
  const compareArr = Array.from(String(pitch()),mapfn)
  let strike = 0;
  let ball = 0;
  for (let j = 0; j < compareArr.length; j++) {
    
    if (answer[j] === compareArr[j]) {
      strike = strike + 1;
    } else if (answer.includes(compareArr[j])) {
      ball = ball + 1;
    } 

    if (strike === 3) {
      alert("3 Strike! please press reset button");
    }
  }
  screen[count].textContent = pitchBall;
  outCount[count].textContent = `${strike}` + " strike " + `${ball}` + " ball"
  count = count + 1;
}



enter.addEventListener('click', compare)


/* function prevent(event) {
  event.preventDefault() ;
  console.log(event);
}

throwinput.addEventListener('input', prevent) */