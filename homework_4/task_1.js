let array = [ -62, -568, -719, -70, 58, 566, 913, -834, 670, 98, -836,
		-631, 223, -993, 19, -315, 538, -100, 186, -794 ];

function asc(number1, number2) {
	return number1 - number2;
}

array.sort(asc);
console.log(array);

array.sort(asc).reverse();
console.log(array);

function getPositive(number) {
	return number>=0;
}

function getNegative(number) {
	return number<0;
}

let positiveNumbersArray = array.filter(getPositive).sort(asc);
console.log(positiveNumbersArray);

let negativeNumbersArray = array.filter(getNegative).sort(asc);
console.log(negativeNumbersArray);