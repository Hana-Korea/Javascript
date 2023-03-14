// for in

class 부모 {}
부모.prototype.name = "kim";

const obj = new 부모();

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  }
}

// for of 구구단

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let 자료 of arr) {
  for (let 자료2 of arr2) {
    console.log((자료 + 1) * 자료2);
  }
}

// 연습문제
const products1 = [
  {
    name1: "chair",
    price1: 7000,
  },
  {
    name2: "sofa",
    price: 5000,
  },
  {
    name1: "desk",
    price3: 9000,
  },
];
// function 제거(products) {
//   let result = {};
//   for (let i of products) {
//     for (let key in i) {
//       if (typeof key.slice(-1) == "number") {

//       } else {
//       }
//     }
//   }
// }
// console.log(제거(products1));

// 심볼
const 심볼 = Symbol("설명");
const weight = Symbol("몸무게 비밀");
const height = Symbol("키 비밀임ㄴ");
const person = {
  name: "Lee",
};
person.weight = 45;

person[weight] = 200;

console.log(person.weight);
