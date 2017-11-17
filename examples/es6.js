// var {parent: {dad: {name: dadName, age: dadAge}}} = {
//   name: 'Bob', age: 22,
//   parent: {
//     dad: {
//       name: 'Bill',
//       age: 70
//     }
//   }
// }
// console.log(dadName, dadAge)

// var name = 'Bob'
// var foo = {
// 	name
// }
// const bar = {
//     a: 1,
//     start() {
//         console.log(this.a);
//     },
// };

// const foo = {
//     a: 2,
//     baz() {
//         console.log(super.a);
//     },
//     __proto__: bar,
// };
// foo.baz();

// const field = 'name';
// const person = {
//     [field]: 'Bob',
// };
// console.log(person);

var name = 'Bob';
var mr = 'mr.';
function tag(str, ...param) {
    console.log(b);
    // return str.reduce((acc, current, index) => {
    //     return acc + param[index - 1] + current;
    // });
}
var res = tag `Hello, ${mr} ${name}!`;
console.log(res);

