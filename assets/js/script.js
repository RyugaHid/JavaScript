let subject = ["HTML", "Css", "JavaScript", "Math"];
let students = [
  {
    name: "Nika",
    lastname: "yjmcfgnb",
    score: [51, 63, 25, 58],
  },
  {
    name: "Gio",
    lastname: "yjmcfgnb",
    score: [51, 58, 25, 26],
  },
  {
    name: "Lasha",
    lastname: "yjmcfgnb",
    score: [63, 58, 26, 85],
  },
  {
    name: "Vano",
    lastname: "yjmcfgnb",
    score: [51, 63, 25, 48],
  },
];

let avarage = [0, 0, 0, 0];
for(let i = 0; i < students.length; i++){
   for(let j =0; j < students[i].score.length; j++){
     avarage[j] += students[i].score[j];
   }
}

for(let i = 0; i < avarage.length; i++) {
  avarage[i] /=  subject.length; 
};

let container = document.getElementById("#container");

let thead = document.querySelector("#container thead tr");
let tbody = document.querySelector("#container tbody");


let tmp = "";

for (let i = 0; i < subject.length; i++) {
  tmp += `<td>${subject[i]}</td>`;
}

thead.innerHTML += tmp;


tmp = '';

for(let i = 0; i < students.length; i++) {
  tmp += `<tr>
  <td>${students[i].name}</td>
  <td>${students[i].lastname}</td>
  <td class = "${avarage[0] > students[i].score[0] ? 'red' : 'green'}">${students[i].score[0]}</td>
  <td class = "${avarage[1] > students[i].score[1] ? 'red' : 'green'}">${students[i].score[1]}</td>
  <td class = "${avarage[2] > students[i].score[2] ? 'red' : 'green'}">${students[i].score[2]}</td>
  <td class = "${avarage[3] > students[i].score[3] ? 'red' : 'green'}">${students[i].score[3]}</td>
  </tr>`
}

tbody.innerHTML += tmp;



tmp = `<tr>` +
     `<td colspan = "2">
     Avarage 
     </td>` ;

for(let i = 0; i < avarage.length; i++) {
  tmp += `<td>${avarage[i]}</td>`;
}

tmp += '</tr>';

tbody.innerHTML += tmp;