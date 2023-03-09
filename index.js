let car = { name: "소나타", price: [50000, 3000, 4000] };
const nameEl = document.querySelector(".name");
nameEl.textContent = car.name;
const price = document.querySelector(".price");
price.textContent = car.price[0];

let 출석부 = ["흥민", "영희", "철수", "재석"];

//for 반복문 연습
function 이름찾기(a) {
  for (let i = 0; i < 4; i++) {
    if (a === 출석부[i]) {
      console.log("있어요");
    }
  }
}
이름찾기("흥민");

//for 반복문 연습2
function 구구단() {
  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 10; j++) {
      console.log((i + 1) * j);
    }
  }
}
console.log(구구단());

//for 반복문 연습3
function 성적비교(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i];
  }
  let comparison = Math.abs(result / a.length - b);
  if (comparison > 0) {
    return `평균보다 ${comparison}점 올랐네요`;
  } else {
    return `평균보다 ${comparison}점 떨어졌네요`;
  }
}
console.log(성적비교([10, 20, 30, 40, 50], 40));
console.log(성적비교([40, 40, 40], 20));
