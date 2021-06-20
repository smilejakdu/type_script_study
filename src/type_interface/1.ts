let studentId: number = 12345;
let studentName: string = 'Jenny Kim';
let age: number = 21;
let gender: string = 'female';
let subject: string = 'Javascript';
let courseCompleted: boolean = false;

let student1 = {
 	studentID: 121212,
	studentName: 'Janet Jackson',
	age: 30,
	gender: 'femail',
	subject: 'mongo db',
	courseCompleted:false
}

// interface 선언할때 앞글자는 대문자로 해야한다.
interface Student {
	studentId: number;
	studentName: string;
	// age: number;
	age?:number; // 선택적 프로퍼티
	gender: string;
	subject: string;
	courseCompleted : boolean;
}

function getStudentDetails(studentID: number): Student
{
	return {
		studentId: 1234,
		studentName: 'test',
		age: 3, // age 를 주서처리를 하게되면 에러가 발생하게 된다.  마우스를 over 하게 되면 student 인터페이스에서 정의된 age 프로퍼티가 반환값에 포함되어야하는데 
		// age 프로퍼티가 반환 값에 없다 라는 뜻이다. 이것을 어떻게 해결할 수 있을까 ??	
		gender: 'male',
		subject: 'node',
		courseCompleted : true
	};
}

function saveStudentDetails(student:Student):void { // interface 재사용 가능하다.

}

saveStudentDetails(student1);