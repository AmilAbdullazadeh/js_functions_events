console.log("Base js is working !");

// var c = null
//
// function Cemle(a, b) {
//     c = a + b;
//     console.log(c)
//     document.write(c);
//     return c
// }
//
// Cemle(5, 6);

/*-------------- Global & Local variables ---------------*/

// var b = 10 // global variable
// var cem = 0 // global variable

// function Cem() {
//     var a = 5; // local variable
//     cem = a + b;
//     a += 5;
//     console.log(cem);
// }
//
// Cem();
//
// console.log(cem);

// console.log(a);
// console.log(b);

/*------------- with Arguments ----------------*/

// function Cem(a, b) {
//     var cem = 0; // local variable
//     cem = a + b;
//     console.log(cem);
// }
//
// Cem(10, 39);

// console.log(cem);

/*-------------- Closures ---------------*/

// var cem = 0;
//
// function n1() {
//     var a = 5;
//
//     function n2() {
//         var b = 10;
//         cem = a + b;
//         // console.log(cem)
//         return cem;
//     }
//
//     n2()
//     console.log(cem);
// }
//
// n1();

/*---------------- var, let, const ~ ES6 ---------------*/

// var a = 10;
// let b = 22;
// const c = 11;
//
// var cem_var = 0;
// let cem_let = 0;
// const cem_const = 0;

// function Multiple() {
// return a * 2
// return b * 2
// return c * 2
// cem_var = a + 40;
// cem_let = b + 50;
// cem_const = c + 10;
// }

// console.log(cem_var)
// console.log(cem_let)
// console.log(cem_const)

// Multiple();
// console.log(cem_var)
// console.log(cem_let)
// console.log(cem_const)

/*-----  EVENTS -----*/

// function openAlert() {
//     for (let i = 0; i < 3; i++) {
//         alert("Salam Dunya !");
//     }
// }

/* --------- getElements ---------- */

// let input_id = document.getElementById('input-id');
// let input_class = document.getElementsByClassName('input-class');
// let input_attr = document.querySelector('.input-class');
// let input_attr_id = document.querySelector('#input-id');
// let img = document.querySelectorAll('img');

/*-------------- Events with getElements ---------------*/
// function openAlert() {
//     alert("Hello World !");
// }
//
// let input_id = document.getElementById('input-id');
//
// // input_id.addEventListener('click', function openAlert() {
// //     alert("Hello World !");
// // })
//
// input_id.addEventListener('click', openAlert);

/*------------ onchange func -------------*/
// let select_value = document.getElementById('mySelect').value;
// let select_id = document.getElementById('mySelect');
//
// select_id.addEventListener('change', handleChange);
//
// function handleChange() {
//     // document.write(select_value);
//     document.getElementById("demo").innerHTML = "You selected: " + select_value;
// }

/*-------------  -------------*/