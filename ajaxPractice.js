const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const wrapper = document.querySelector(".wrapper");
btn1.addEventListener("click", () => {
  fetch("https://codingapple1.github.io/js/more1.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((a) => {
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `<div> ${a.title}</div>
        <h4>${a.price}</h4>`;
        container.append(box);
      });
    })
    .catch((error) => {
      console.log("oh..no");
    });
});

btn2.addEventListener("click", () => {
  fetch("https://codingapple1.github.io/js/more1.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((a) => {
        wrapper.innerHTML = `<div> ${a.title}</div>
        <h4>${a.price}</h4>`;
        container2.append(wrapper);
      });
    })
    .catch((error) => {
      console.log("oh..no");
    });
});
