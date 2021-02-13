function makeBuffer() {
	let bufferValue = "";

	function stringBuffer() {
		return bufferValue;
	}

	stringBuffer.add = function(value) {
		if (isNaN(value))
			bufferValue += value + " ";
		else
			bufferValue += value;
	}

	stringBuffer.print = stringBuffer; 

	stringBuffer.clear = function() {
		bufferValue = "";
	}

	return stringBuffer;
}

let buffer = makeBuffer();
buffer.add("JavaScript");
buffer.add("Вчити");
buffer.add("Потрібно!");
console.log(buffer.print());