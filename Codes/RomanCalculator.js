let inputs = [
  "I + I",
  "XX-IV",
  "III*VI",
  "X / III",
  "III / X",
  "X - XXX",
  "XX + XX",
  "XH + XX",
];

const expressionReg = /^[I|V|X| ]+[\*|\-|\+|\/][I|V|X| ]+$/;

function calculate(expression) {
  if (expressionReg.test(expression) === true) {
    expression = toNumber(expression.split(""));
    let calculateResult;
    const firstNumber = expression[0],
      operation = expression[1],
      secondNumber = expression[2];
    switch (operation) {
      case "+":
        calculateResult = firstNumber + secondNumber;
        return exception(operation, calculateResult);
      case "-":
        calculateResult = firstNumber - secondNumber;
        return exception(operation, calculateResult);

      case "*":
        calculateResult = firstNumber * secondNumber;
        return exception(operation, calculateResult);

      case "/":
        calculateResult = Math.floor(firstNumber / secondNumber);
        remain = expression[0] % expression[2];
        return exception(operation, calculateResult, remain);
    }
  } else {
    return "Input의 형식이 옳지 않습니다.";
  }
}

function exception(operation, result, remain) {
  const upperXXXX = result < 39,
    isZero = result === 0,
    rowerZero = result < 0;
  switch (operation) {
    case "+":
      return upperXXXX ? toRoman(result) : "범위를 벗어났습니다.";
    case "-":
      return isZero
        ? "범위를 벗어났습니다."
        : rowerZero
        ? "작은 수 에서 큰 수를 뺄 수 없습니다."
        : toRoman(result);
    case "*":
      return upperXXXX ? toRoman(result) : "범위를 벗어났습니다.";
    case "/":
      return isZero
        ? "작은 수에서 큰 수를 나눌 수 없습니다."
        : `몫 ${toRoman(result)}, 나머지 ${toRoman(remain)}`;
  }
}

function toRoman(number) {
  let romanNumber = [];
  const tenDigits = Math.floor(number / 10),
    oneDigit = number % 10,
    upperV = Math.floor(oneDigit / 5) === 1,
    isRemainIV = oneDigit % 5 === 4;

  function replaceTo(newOne, upperV) {
    if (upperV) {
      romanNumber.pop();
    }
    romanNumber.push(newOne);
  }

  for (let i = 0; i < tenDigits; i++) {
    romanNumber.push("X");
  }
  if (upperV) {
    romanNumber.push("V");
  }
  for (let i = 0; i < oneDigit % 5; i++) {
    if (isRemainIV) {
      upperV ? replaceTo("IX", upperV) : replaceTo("IV", upperV);
      break;
    }
    romanNumber.push("I");
  }

  return romanNumber.toString().replace(/,/g, "");
}

function toNumber(expression) {
  let number = 0,
    result = [];

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

inputs.forEach((expression) => {
  console.log(calculate(expression));
});
