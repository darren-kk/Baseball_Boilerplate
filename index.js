const start = document.querySelector("#start")
let number = 0
const arr = new Array(3)

function maker() {

  function random() {
    number = Math.floor(Math.random() * 10);
    return number;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = random();
  }
  console.log(arr);
}

start.addEventListener("click", maker)

