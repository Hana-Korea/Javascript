// callback hell
function 첫째함수(구멍) {
  console.log(1);
  구멍();
}
function 둘째함수(구멍1) {
  console.log(2);
  구멍1();
}

function 셋째함수(구멍2) {
  console.log(3);
  구멍2();
}
function 넷째함수() {
  console.log(4);
}

첫째함수(function () {
  둘째함수(function () {
    셋째함수(function () {
      넷째함수();
    });
  });
});

//Promise
const 프로미스 = new Promise(function (res, rej) {
  setTimeout(() => {
    res();
  }, 1000);
});
프로미스
  .then(() => {
    console.log("성공");
  })
  .catch(() => {
    console.log("tlfv");
  });
console.log(프로미스);
setTimeout(() => {
  console.log(프로미스);
}, 2000);

// img 로딩 성공시 특정코드 실행
const imgEl = document.querySelector("img");
const 프로미스2 = new Promise(function (res, rej) {
  imgEl.addEventListener("load", res);
  imgEl.addEventListener("error", rej);
});
프로미스2
  .then(() => {
    console.log("성공했어요");
  })
  .catch(() => {
    console.log("실패");
  });

//ajax 요청 성공하면 코드 실행
const greeting = new Promise(function (res, rej) {
  $.get("https://codingapple1.github.io/hello.txt").done(function (결과) {
    res(결과);
  });
});
greeting
  .then(function (결과) {
    const 프로미스3 = new Promise(function (res, rej) {
      $.get("https://codingapple1.github.io/hello2.txt").done(function (결과2) {
        res(결과2);
      });
    });
    return 프로미스3;
  })
  .then((결과2) => {
    console.log(결과2);
  });
