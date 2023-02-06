//1
let str = "abcde";
alert(str[0]);
alert(str[2]);
alert(str[4]);

//2
let res = "";
for (let i = str.length - 1; i >= 0; i--) {
  res = res + str[i];
}
alert(res);

//3
let num = 1;
alert(str[num]);
