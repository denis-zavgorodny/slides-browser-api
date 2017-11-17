// var citizen = Object.create({
//     leg: 2
// }, {
//     name: {
//         value: 'Bob',
//         enumerable: true,
//     },
// });

// console.log(citizen.leg);


// var citizen1 = Object.create({}, {
//   name: {
//     value: 'Bob'
//   }
// })

// console.log(citizen1)
// console.log(citizen1.name)

// function Citizen (name, age) {
//   this.name = name;
//   this.age = age;
// }
// Citizen.prototype.getAge = function(){ return this.age;};
// Citizen.prototype.leg = 3;
// var bob = new Citizen("Bob", 30);
// var bob1 = new Citizen("Bob1", 18);
// console.log(bob.leg);
// Citizen.prototype.leg = 5;
// console.log(bob1.leg);

// var human = {
//   head: 1,
//   neck: 1,
//   body: 1,
//   arm: 3,
//   leg: 2
// }
// var bob = {
//   gender: 'man',
//   name: 'Bob',
//   __proto__: human
// }
// human.arm = 10
// console.log(bob.arm)

// var simple = {
//   leg: 3
// }

// function Human () {
// }
// Human.prototype = simple
// var h = new Human()
// console.log(h.leg)

// var bob = {
//   name: 'Bob',
//   get age() { return this._age + ' y.o.'; },
//   set age(value) { this._age = value; }
// };
// bob.age = 10;
// console.log(bob.age);

// function test() {
//     console.log(a);
//     let a = 1;
// }
// test();

let foo = (x, y) => {
    return x + y;
};
console.log(foo(2, 3));


// var man = {};
// Object.defineProperty(man, 'age', {
//     set: function(value) {
//         _age = value;
//     },
//     get: function() {
//         return _age;
//     }
// });
// man.age = 1;
// console.log(man.age);
