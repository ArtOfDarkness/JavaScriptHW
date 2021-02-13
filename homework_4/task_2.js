let student1 = { yearOfStudying: 5, facultyName: "Комп'ютерних технологій" };
let student2 = { yearOfStudying: 3, facultyName: "Фінанси і кредит" };
let student3 = { yearOfStudying: 1, facultyName: "Психологія" };
let student4 = { yearOfStudying: 3, facultyName: "Юридичний" };
let student5 = { yearOfStudying: 2, facultyName: "Філософія" };
let student6 = { yearOfStudying: 2, facultyName: "Маркетинг" };
let student7 = { yearOfStudying: 4, facultyName: "Економіки і Менеджмента" };
let student8 = { yearOfStudying: 5, facultyName: "Облік і аудит" };
let student9 = { yearOfStudying: 3, facultyName: "Інститут Фізкультури" };
let student10 = { yearOfStudying: 2, facultyName: "Економіки і Права" };

let students = []; 
students.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10);

function getFacultyName(student) {
	return student.facultyName;
}

let listOfFaculties = students.map(getFacultyName).sort();
console.log(listOfFaculties);

function sumStudentsYearsOfStudying(sumYearsOfStudying, currentStudent) {
	return sumYearsOfStudying + currentStudent.yearOfStudying;
}

let totalYearsOfStudying = students.reduce(sumStudentsYearsOfStudying, 0);
console.log(totalYearsOfStudying);