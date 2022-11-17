const start = document.querySelector("#start");
const throwinput = document.querySelector("#throw");
const enter = document.querySelector("#enter");
const pitchArr = new Array(3);


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
}
start.addEventListener("click", maker)

function pitch() {
  const pitcher = document.querySelector("#throw").value;
  console.log(pitcher);

  if (pitcher > 999) {
    alert("숫자는 3자리여야 합니다!");
  } else if (isNaN(pitcher)) {
    alert("숫자를 입력해 주세요!") // input 초기화 물어보기 
  }

  return pitcher;
}
throwinput.addEventListener('input', pitch)

/* function prevent(event) {
  event.preventDefault() ;
  console.log(event);
}

throwinput.addEventListener('input', prevent) */