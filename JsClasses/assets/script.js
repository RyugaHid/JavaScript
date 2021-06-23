class StudentList {
    subjects = [];
    students = [];

    constructor(students, subjects) {
        this.students = students;
        this.subjects = subjects;

        this.addToHtml(students, subjects);
    }


    addToHtml(students, subjects) {
        let subject = document.getElementById('tbody');
        let student = document.getElementById('students');
        student.innerHTML = `<th></th>`;
        subject.innerHTML = '';
        for (let j = 0; j < students.length; j++) {
            student.innerHTML += `<th>${students[j].name}</th>`
        }

        for (let i = 0; i < subjects.length; i++) {
            let subjectAverageList = [];
            for (let j = 0; j < students.length; j++) {
                subjectAverageList.push(Number(students[j].grades[i]));
            }
            let tds = '';
            for (let student of students) {
                tds += ` <td style = "background-color: ${student.grades[i] >= this.average(subjectAverageList) ? `rgb(26, 206, 35)` : `red`} " > ${String(student.grades[i])} </td>\n`;
            }

            let trs = `<tr> <td>${subjects[i]}</td> ` + tds + `<td>${this.average(subjectAverageList)}</td> </tr>`;
            subject.innerHTML += trs;

        }

        student.innerHTML += `<th>Average</th>`;
    }
    addStudent(studentInput, frontGrade, javaGrade, flutterGrade, pythonGrade) {
        students.push({
            name: studentInput,
            grades: [frontGrade, javaGrade, flutterGrade, pythonGrade]
        });

        this.addToHtml(students, subjects);
    }

    average(listt) {
        let sum = 0;
        for (let i = 0; i < listt.length; i++) {
            sum += listt[i];
        }
        let averageNum = sum / listt.length;

        return averageNum;
    }


}



let students = [
    {
        name: 'Nika',
        grades: [85, 60, 50, 35]
    },
    {
        name: 'Giorgi',
        grades: [45, 30, 80, 12]
    },
    {
        name: 'Lika',
        grades: [100, 56, 80, 42]
    },
    {
        name: 'Lasha',
        grades: [60, 50, 40, 19]
    },
]

let subjects = ['front-end', 'java', 'flutter', 'python']
let studentsListInstance = new StudentList(students, subjects);



function elementsForStudents() {
    let studentInput = document.querySelector('#student').value;
    let frontGrade = document.querySelector('#front').value;
    let javaGrade = document.querySelector('#java').value;
    let flutterGrade = document.querySelector('#flutter').value;
    let pythonGrade = document.querySelector('#python').value;

    studentsListInstance.addStudent(studentInput, frontGrade, javaGrade, flutterGrade, pythonGrade);
}
