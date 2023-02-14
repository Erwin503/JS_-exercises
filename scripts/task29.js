// 1
// let str = "12345";
// let sum = 0;
// for (i in str) {
//   sum = sum + Number(str[i]);
// }
// alert(sum);
// 2
// let str = 12345;
// let str1 = String(str);
// let sum = 0;
// for (i in str1) {
//   sum = sum + Number(str1[i]);
// }
// alert(sum);
// 3
// let str = 12345;
// let str1 = String(str);
// let sum = 1;
// for (i in str1) {
//   sum = sum * Number(str1[i]);
// }
// alert(sum);
// 4
let str = 12345;
let str1 = String(str);
let res = "";
let len = str1.length;
for (let i = len - 1; i >= 0; i--) {
  res = res + str1[i];
}
alert(res);
