//Variables for functions to reference
const masterList = document.querySelector('.student-list');
let students = document.querySelectorAll('student-item');
let totalStudents = masterList.length;

//populates page with a group of 10 students based on their respective page numbers
function showPage(page, studentList) {
  masterList.hide();
  for (let i = 0; i < studentList.length; i += 1) {
    if (i >= (page - 1) * 10 && <= (page * 10) - 1) {
      studentList[i].show();
    }
  }
}

//
function appendPageLinks(studentList) {
  const pagLinks = document.createElement('Div');
  pagLinks.className = 'pagLinks';
  const pagUL = pagLinks.appendChild('ul');
  pagUL.setAttribute("id", "links");
  let numberOfPages = Math.ceil(totalStudents / 10);
  for (let i = 0; i < numberOfPages; i += 1) {
    pagUL.innerHTML = '<li><a href="#" class="inactive">' + (i + 1) + '</a></li>';
  }
  pagUL.addEventListener("click", () => {
    showPage(event.target.textContent, masterList);
    event.target.className = "active";
  });
}

showPage();
