export { };

function getText(name: string, age: number): string{
	const nameText = name.substr(0, 10);
	const nameText2 = age.substr(0, 10); // age 는 타입이 number 라서 substr 메소드가 없음
	const ageText = age >= 35 ? 'senior' : 'junior';
	return `name : ${nameText}, age: ${ageText}`;
}


const v1: string = getText('mike', 23);
const v2: string = getText('mike', '23'); // age 는 number => 에러
const v3: number = getText('mike', 23); // getText 함수에서 return 은 string 이다. => 에러

function getStudentDetails(studentID: number): {
	studentID: number;
	studentName: string;
	age: number;
	gender: string;
	subject: string;
	createDate: Date;
} {
	return null;
}

// 하지만 이렇게 반환을 다적게 되면 복잡하기 때문에 interface 를 구현하는것을 추천한다. 