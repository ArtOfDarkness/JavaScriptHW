function calculator(a, operator, b) {
	process.stdout.write(a + " " + operator + " " + b + " = ");
	
	let result = "";
	try {
		if (isNaN(a) || isNaN(b)) {
			throw "Неприпустиме Число";

		} else if (operator != "+" && operator != "-" && operator != "*" && operator != "/") {
			throw "Неприпустимий Оператор!";
		
		} else {
			switch (operator) {
				case ("+"): {
					result = a + b;
					break;
				}
				case ("-"): {
					result = a - b;
					break;
				}
				case ("*"): {
					result = a * b;
					break;
				}
				case ("/"): {
					if (b == 0) {
						throw "На нуль ділити не можна!";
					} else {
						result = a / b;
						break;
					}
				}
			}
		}
	} catch (error) {
		process.stdout.write(error);
	}

	return result;
}

let a = 5;
let b = 2.5;

console.log("Перевіряємо роботу калькулятора:")
console.log(calculator(a, "+", b));
console.log(calculator(a, "-", b));
console.log(calculator(a, "*", b));
console.log(calculator(a, "/", b));
console.log();
console.log("Перевіряємо роботу калькулятора на прикладах з помилками:")
console.log(calculator("a", "+", b));
console.log(calculator(a, "+", "b"));
console.log(calculator(a, "add", b));
console.log(calculator(a, "/", 0));