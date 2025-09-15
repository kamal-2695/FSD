function getGrade(marks) {
    let grade;
    if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 80) {
        grade = 'B';
    } else if (marks >= 70) {
        grade = 'C';
    } else if (marks >= 60) {
        grade = 'D';
    } else if (marks >= 50) {
        grade = 'E';
    } else {
        grade = 'F';
    }
    return grade;
}
const studentMarks = [95, 82, 76, 65, 54, 40];
studentMarks.forEach((marks, index) => {
    console.log(`Student ${index + 1}: Marks = ${marks}, Grade = ${getGrade(marks)}`);
});