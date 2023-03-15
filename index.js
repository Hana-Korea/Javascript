// const btnEl = document.querySelector("button");
// async function 버튼클릭함수() {
//   const 프로미스 = new Promise(function (res, rej) {
//     btnEl.addEventListener("click", () => {
//       res("ㅇㅇ");
//     });
//   });
//   프로미스.then((결과) => {
//     console.log(결과);
//   });
// }
// 버튼클릭함수();

const btnEl = document.querySelector("button");
async function 버튼클릭함수() {
  const 프로미스 = new Promise(function (res, rej) {
    btnEl.addEventListener("click", () => {
      res("ㅇㅇ");
    });
  });
  const result = await 프로미스;
  console.log(result);
}
버튼클릭함수();
