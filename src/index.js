module.exports = function toReadable(number) {

  const numbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  }

  resStr = [];
  let arr = Array.from(number.toString());

  if (arr.length === 4) {
    resStr.push(numbers[arr.shift()] + " thousand ");
  }

  if (arr.length === 3) {
    if (arr[0] === "0") {
      arr.shift();
    } else {
      resStr.push(numbers[arr.shift()] + " hundred");
    }
  }

  if (arr.length === 2) {
    if (arr[0] === "0") {
      arr.shift();
    } else if(arr[0] > 1){
      resStr.push(numbers[arr.shift() + "0"]);
    }else{
      resStr.push(numbers[arr.shift() + arr.shift()]);
    }
  }

  if (arr.length === 1) {
    if (arr[0] === "0") {
      if(resStr.length === 0){
        return numbers[arr.shift()];
      }else{
      return resStr.join(" ");
      }
    } else {
      resStr.push(numbers[arr.shift()]);
    }
  }

  return resStr.join(" ");
}
