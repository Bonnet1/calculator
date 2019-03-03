


/******* FUNCTIONS ********/

function operate(firstNum, operator, secondNum) {
    let result = 0;

    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);

    if (operator == 'add') {
        result = add(firstNum, secondNum);
    } else if (operator == 'subtract') {
        result = subtract(firstNum, secondNum);
    } else if (operator == 'multiply') {
        result = multiply(firstNum, secondNum);
    } else if (operator = 'divide') {
        result = divide(firstNum, secondNum);
    } else {return 'ERROR';
    }

    if (result > Number.MAX_SAFE_INTEGER) {
        return "TOO BIG";
      }
      else if (result < Number.MIN_SAFE_INTEGER) {
        return "TOO SMALL";
      }
    
      console.log(result);

      return parseFloat(result.toFixed(5));
    }

function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (myArray) {
	let total = 0;
	for(var i = 0; i < myArray.length; i++)
		total += myArray[i];
	return total;
}

function multiply (a,b) {
	return a*b;
}

function divide (a,b) {
	return a/b;
}

function power(a,b) {
	let total = 1;
	for(var i = 0; i < b; i++)
		total *= a;
	return total;
}

function factorial(num) {
	let total = num;
	if (num === 0 || num === 1)
		return 1;
	while (num > 1) {
		num--;
		total *= num;
	}
	return total;
}