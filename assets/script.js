let students = [
  {
    name: "Nika",
    lastname: "yjmcfgnb",
    score: [78, 63, 36, 58],
  },

  {
    name: "Giorgi",
    lastname: "yjmcfgnb",
    score: [52, 45, 76, 86],
  },
  {
    name: "Lasha",
    lastname: "yjmcfgnb",
    score: [21, 66, 56, 88],
  },
  {
    name: "Sandro",
    lastname: "yjmcfgnb",
    score: [78, 63, 36, 58],
  },
];
let subjects = ["HTML", "CSS", "JavaScript", "MATH"];

let table = document.getElementById("#container");



let tbody = document.querySelector("#container tbody");


//Generatin Avarage

let avarage = [0, 0, 0, 0];

function generateAvarage(){
  avarage = [0, 0, 0, 0];

  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < subjects.length; j++) {
      if (avarage.length < students.length) {
      }
      avarage[j] += students[i].score[j];
    }
  }
  
  for (let i = 0; i < avarage.length; i++) {
    avarage[i] /= students.length;

    tmp =
  `<tfoot><tr>` +
  `<td colspan = "2"> Avarage </td>`;

for (let i = 0; i < avarage.length; i++) {
  tmp += `<td> ${avarage[i]} </td>`;
}

tmp += `</tr></tfoot>`;

document.querySelector('#container tfoot').innerHTML = tmp;
  }
}
generateAvarage();
//Generatin thead
function generateHead(){
  let thead = document.querySelector("#container thead tr");
  let tmp = "";
for (let i = 0; i < students.length; i++) {
 addRow(students[i])
}
tbody.innerHTML += tmp;

tmp = "";

for (let i = 0; i < subjects.length; i++) {
  tmp += `<td>${subjects[i]}</td>`;
}

thead.innerHTML += tmp;


}
generateHead();




document.getElementById("add_student_form").addEventListener("submit", addStudent);

function addStudent(e) {
  e.preventDefault();
  let fields = document.querySelectorAll('#add_student_form input');
  let newStudent = {
    name: '',
    lastname: '',
    score: []
  }
  for(let i = 0; i < fields.length; i++){
    if(fields[i].name === 'name'){
      newStudent.name = fields[i].value;
    }else if(fields[i].name === 'lastname'){
         newStudent.lastname = fields[i].value;
    }else{
      newStudent.score.push(parseInt( fields[i].value) ? parseInt( fields[i].value) : 0 );
    }
  }
  students.push(newStudent);
   addRow(newStudent);
}

function addRow(student) {
  let tmp = `<tr>
  <td>${student.name}</td>
  <td>${student.lastname}</td>
  `;
for (let j = 0; j < student.score.length; j++) {
  tmp += `<td class = "${
    avarage[j] > student.score[j] ? "red" : "green"
  }">${student.score[j]}</td>`;
}
tmp += `</tr>`;
generateAvarage();
document.querySelector("#container tbody").innerHTML += tmp;
}