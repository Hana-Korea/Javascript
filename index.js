// class
class 할아버지 {
  constructor(이름) {
    this.name = 이름;
  }
  sayHi() {
    console.log(`i'm your grandfather`);
  }
}
class 아버지 extends 할아버지 {
  constructor(이름, 나이) {
    super(이름);
    this.age = 나이;
  }
  sayHello() {
    super.sayHi();
    console.log(`I'm your father`);
  }
}
const 아버지1 = new 아버지();
console.log(아버지1.sayHello());

// getter & setter
const hyewon = {
  name: "hana",
  age: 27,
  set nextAge(나이) {
    this.age = 나이 + 1;
  },
};
hyewon.nextAge = 40;
console.log(hyewon.age);

// class, extends, getter, setter 연습문제 5개
//1.
class Dog {
  constructor(타입, 색깔) {
    this.type = 타입;
    this.color = 색깔;
  }
}
2;
class Cat extends Dog {
  constructor(타입, 색깔, 나이) {
    super(타입, 색깔);
    this.age = 나이;
  }
}
// 3.
class Cat extends Dog {
  constructor(타입, 색깔, 나이) {
    super(타입, 색깔);
    this.age = 나이;
  }
  set setAge(몇살) {
    this.age = Number(몇살 + 1);
  }
  get nextAge() {
    return this.age;
  }
}

const kitty = new Cat(2, 1, 20);
console.log(kitty);
const puppy = new Dog(4, 5, 6);
console.log(puppy);
kitty.setAge = 29;
console.log(kitty.nextAge);
console.log(puppy.nextAge);

4;
class Unit {
  constructor() {
    this.공격력 = 5;
    this.체력 = 100;
  }
  get battlePoint() {
    return this.공격력 + this.체력;
  }
  set heal(증가) {
    this.체력 += Number(증가);
  }
}
const 캐릭터 = new Unit();
캐릭터.heal = 70;
console.log(캐릭터.battlePoint);

//5.
const data = {
  odd: [],
  even: [],
  분리해주는함수: function (...x) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] % 2 == 0) {
        this.even.push(x[i]);
      } else {
        this.odd.push(x[i]);
      }
    }
    return data;
  },
  겟함수: function () {
    const result = [...this.odd, ...this.even].sort(function (comp1, comp2) {
      return comp1 - comp2;
    });

    return result;
  },
};

console.log(data.분리해주는함수(11, 8, 3, 4));
console.log(0, data.겟함수());
