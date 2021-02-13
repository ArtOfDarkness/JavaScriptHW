function filterRange(array, a, b) {
	let newArray = [];

	if ((a < 0) || (a > array.length) || (b < 0) || (b > array.length)) {
		console.log("Введене число за межами індексів масива!");
	} else {
		for (let i = a; i < b; i++) {
			if (!isNaN(array[i])) {
				newArray.push(array[i]);
			}
		}
	}
	
	return newArray;
}

let numbers = [ 0, 1, 2, "Іван", 3, 4, "Петро", 5, 6, "Василь" ];
console.log(filterRange(numbers, 2, 8));