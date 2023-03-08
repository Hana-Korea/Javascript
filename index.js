let car = { name: "소나타", price: [50000, 3000, 4000] };
const nameEl = document.querySelector(".name");
nameEl.textContent = car.name;
const price = document.querySelector(".price");
price.textContent = car.price[0];
