"use strict";
let studentId = 12345;
let studentName = 'Jenny Kim';
let age = 21;
let gender = 'female';
let subject = 'Javascript';
let courseCompleted = false;
let student1 = {
    studentID: 121212,
    studentName: 'Janet Jackson',
    age: 30,
    gender: 'femail',
    subject: 'mongo db',
    courseCompleted: false
};
function getStudentDetails(studentID) {
    return {
        studentId: 1234,
        studentName: 'test',
        age: 3,
        // age 프로퍼티가 반환 값에 없다 라는 뜻이다. 이것을 어떻게 해결할 수 있을까 ??	
        gender: 'male',
        subject: 'node',
        courseCompleted: true
    };
}
function saveStudentDetails(student) {
}
saveStudentDetails(student1);
