let inputs = [
  "I + I",
  "XX-IV",
  "III*VI",
  "X / III",
  "III / X",
  "X - XXX",
  "XX + XX",
];

inputs.forEach((expression) => {
  console.log(calculate(expression));
});

function calculate(expression) {
  expression = toNumber(expression.split(""));
  let calculateResult;
  firstNumber = expression[0];
  secondNumber = expression[2];
  operation = expression[1];
  switch (operation) {
    case "+":
      calculateResult = firstNumber + secondNumber;
      return calculateResult < 39
        ? toRoman(calculateResult)
        : "범위를 벗어났습니다.";
    case "-":
      calculateResult = firstNumber - secondNumber;
      return calculateResult === 0
        ? "범위를 벗어났습니다."
        : calculateResult < 0
        ? "작은 수 에서 큰 수를 뺄 수 없습니다."
        : toRoman(calculateResult);
    case "*":
      calculateResult = firstNumber * secondNumber;
      return calculateResult < 39
        ? toRoman(calculateResult)
        : "범위를 벗어났습니다.";
    case "/":
      quotient = Math.floor(firstNumber / secondNumber);
      remain = expression[0] % expression[2];
      calculateResult = `몫 ${toRoman(quotient)}, 나머지 ${toRoman(remain)}`;
      return quotient === 0
        ? "작은 수 에서 큰 수를 나눌 수 없습니다."
        : calculateResult;
  }
}

function toRoman(number) {
  let romanNumber = [];
  const tenDigits = Math.floor(number / 10);
  const oneDigit = number % 10;
  function replaceTo(newOne) {
    romanNumber.pop();
    romanNumber.push(newOne);
  }
  for (let i = 0; i < tenDigits; i++) {
    romanNumber.push("X");
  }
  if (Math.floor(oneDigit / 5) === 1) {
    romanNumber.push("V");
  }
  for (let i = 0; i < oneDigit % 5; i++) {
    if (oneDigit % 5 === 4) {
      Math.floor(oneDigit / 5) === 0 ? replaceTo("IV") : replaceTo("IX");
      break;
    }
    romanNumber.push("I");
  }
  return romanNumber.toString().replace(/,/g, "");
}

function toNumber(expression) {
  let result = [];
  let number = 0;
  function saveItem(item) {
    result.push(number);
    number = 0;
    result.push(item);
  }

  function saveNumber(item) {
    switch (item) {
      case "I":
        number += 1;
        break;
      case "V":
        if (number % 10 === 1) {
          number -= 2;
        }
        number += 5;
        break;
      case "X":
        if (number % 10 === 1) {
          number -= 2;
        }
        number += 10;
        break;
      default:
        break;
    }
  }

  expression.forEach((item) => {
    (item === "/") | (item === "-") | (item === "*") | (item === "+")
      ? saveItem(item)
      : saveNumber(item);
  });

  result.push(number);

  return result;
}
