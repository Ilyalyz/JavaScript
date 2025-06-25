let str = '74';
let num = 29;
let bool = true;
let un;
let nul = null;
console.log(typeof str); 
console.log(typeof num); 
console.log(typeof bool);
console.log(typeof un);
console.log(typeof nul);

let s = Number(str);
console.log(typeof s);
let n = String(num);
console.log(typeof n);
let b = 1;
console.log(typeof b);
b = Boolean(b);
console.log(typeof b);

let res = str + num;
console.log(res);
console.log(typeof res);
let res2 = str * num; 
console.log(res2);
console.log(typeof res2);

function value_type (value)
{
   return typeof value;
}
console.log(value_type('Ілля'));
console.log(value_type(10));
console.log(value_type(false));
console.log(value_type(undefined));
console.log(value_type(null));

console.log('5' == 5);
console.log('5' === 5);
console.log(null == undefined);
console.log(null === undefined);
console.log(true == 1);
console.log(true === 1);