//async & await
const btnEl = document.querySelector("button");

async function 버튼클릭() {
  const 버튼성공판정 = new Promise(function (res, rej) {
    btnEl.addEventListener("click", () => {
      res("success");
    });
  });
  const 찐결과 = await 버튼성공판정;
  console.log(찐결과);
}
버튼클릭();
