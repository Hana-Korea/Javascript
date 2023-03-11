//prototype
function Student() {
  (this.name = "Lee"), (this.age = 15);
}
Student.prototype.gender = "여";
let 학생1 = new Student();
let 학생2 = new Student();
console.log(학생1);
console.log(학생2.__proto__);

function Student2() {
  (this.name = "Lee"), (this.age = 15), (this.gender = "여");
}
let 학생11 = new Student2();
let 학생12 = new Student2();
console.log(학생11);
console.log(학생12);
console.log(Student2.prototype);

function Something(이름, 나이) {
  this.name = 이름;
  this.age = 나이;
  this.sayHi = function () {
    console.log("안녕 나는" + this.name + "이야");
  };
}
const 학생56 = new Something("김", 20);
console.log(학생56);

//__proto__
function Parent() {
  this.name = "Kim";
}
const a = new Parent();
console.log(1, a);
console.log(2, a.__proto__);
a.__proto__.name = "Park";
console.log(a.name);

//8번 문제
// function 글자세기(a) {
//   let arr = [...a];
//   let obj={}
//   for(let i=0;i<arr.length;i++){
//     if (arr[i]==='a'){
//       obj.
//     }
//   }

// 글자세기("aacbbb");
