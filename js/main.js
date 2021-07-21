console.log("Hello world");

//JavaScript 2章 問題1
let say = "Hello";
console.log(say)
say = "Goodbye"
console.log(say)

//問題2
//・数値 ・文字列 •boolean •null ・undefined

//JavaScript 4章 問題1
const price = 1000;
const tax = 0.1;
console.log(price*tax)

//問題2
const scoreA = 80 + 90 + 60 + 85 + 100;
const scoreB = 40 + 30 + 50 + 25 + 60;

console.log(scoreA)
console.log(scoreB)

if (scoreA >= 300 && scoreB >= 300){
 console.log("素晴らしい");
} else if (scoreA >= 300 || scoreB >= 300) {
 console.log("普通");
} else if (scoreA < 300 && scoreB < 300) {
  console.log("頑張ろう");
}

//問題3
const result = "小吉";

switch (result) {
  case "大吉":
    console.log("大吉です！");
    break;
  case "中吉":
    console.log("中吉です！");
    break;
  case "小吉":
    console.log("小吉です！");
    break;
  case "吉":
    console.log("吉です！");
    break;
  case "末吉":
    console.log("末吉です！");
    break;
  case "凶":
    console.log("凶です！");
    break;
  case "大凶":
    console.log("大凶です！");
    break;
}

//問題4
const price1 = 1800;
const result1 = (price1<1000) ? "安い" : (price1>2000) ? "高い" : "ちょうどいい";
console.log(result1);

//JavaScript 5章 問題
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = numbers.map(function (item) {
  if (item % 2 == 0) {
    return item * 2;
  }
  return item
});

console.log(num);

//JavaScript 6章 問題
function advice(name, test) {
  if (test >= 70 && test <= 100) {
    return `${name}君良くできました`;
  } else if (test >= 30 && test < 70) {
    return `${name}君普通です`;
  } else if (test >= 0 && test < 30) {
    return `${name}君もう少し頑張りましょう`;
  } else {
    return '正しい数字を入力してください';
  }
}

console.log(advice("A", 80));
console.log(advice("B", 15));
console.log(advice("C", 55));

//JavaScript 7章 問題1
const test = ["国語", "数学", "英語"];

test.push("理科");
test.push("社会");
console.log(test);

console.log(test.length);

//問題2
for (let i = 1; i <= 50; i++){
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//問題3
let water = 1000;
const drinkWater = 180;
while (water > 0) {
  console.log(water);
  water = water - drinkWater;
}
console.log("水を飲み干した");

//JavaScriptテスト問題  問題①
const array = [2, 4, 7, 5, 4, 3, 8];

//2, 4, 7, 5, 4, 3, 8 要素(x)
//0, 1, 2, 3, 4, 5, 6 要素のindex(i)
//0, 1, 2, 3, 1, 5, 6 indexOf(x)

const result2 = array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
});

console.log(result2);

//JavaScriptテスト問題  問題②
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else{
    return false;
  }
}

let year = 2020;
if (leapYear(year)) {
  console.log(year + "年はうるう年です")
} else{
  console.log(year + "年はうるう年ではありません")
}