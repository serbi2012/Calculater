const 숫자버튼 = document.querySelectorAll(".number");
const 결과값 = document.querySelector(".textout");
const 수식등호 = document.querySelectorAll(".operator");
const 등호 = document.querySelector(".result");
const 제거 = document.querySelector(".clear");
const 플마 = document.querySelector(".플마");
const 타이퍼 = document.querySelectorAll(".typer");
console.log(타이퍼[0].value);

for (let i = 0; i < 수식등호.length; i++) {
  수식등호[i].addEventListener("click", function () {
    결과값.value += 수식등호[i].value;
  });
}

등호.addEventListener("click", function () {
  결과값.value = eval(결과값.value);
});

제거.addEventListener("click", function () {
  결과값.value = "";
});

플마.addEventListener("click", function () {
  if (결과값.value * -1 == Number || String) {
    결과값.value = 결과값.value * -1;
  } else {
    결과값.value = "";
  }
});

for (let i = 0; i < 숫자버튼.length; i++) {
  숫자버튼[i].addEventListener("click", function () {
    결과값.value += 숫자버튼[i].value;
  });
}

window.addEventListener("keydown", function (e) {
  for (let j = 0; j < 타이퍼.length; j++) {
    if (e.key == 타이퍼[j].value) {
      결과값.value += e.key;
    }
  }
  if (e.key == "Enter") {
    결과값.value = eval(결과값.value);
  } else if (e.key == "Delete") {
    결과값.value = "";
  } else if (e.key == "Backspace") {
    결과값.value = `${결과값.value}`.substring(0, 결과값.value.length - 1);
  }
});
