//Variables for functions to reference
let masterList = document.querySelector('.student-list');
let students = document.querySelectorAll('.student-item');
let totalStudents;
let pagLinks;
let pagUL;
let numberOfPages;
const pageDiv = document.querySelector('.page');

//populates page with a group of 10 students based on their respective page numbers
function showPage(page, studentList) {
  masterList.hide();
  for (let i = 0; i < studentList.length; i += 1) {
    if (i >= (page - 1) * 10 && i <= (page * 10) - 1) {
      studentList[i].show();
    }
  }
}

//
function appendPageLinks(studentlist) {
  totalStudents = studentList.length
  numberOfPages = Math.ceil(totalStudents / 10);
  pagLinks = document.createElement('div');
  pagLinks.className = 'pagLinks';
  pagUL = document.createElement('ul');
  pagUL.setAttribute("id", "links");
  pageDiv.appendChild(pagLinks);
  pagLinks.appendChild(pagUL);
  for (let i = 0; i < numberOfPages; i += 1) {
    pagUL.innerHTML = '<li><a href="#" class="inactive">' + (i + 1) + '</a></li>';
  }
  pagUL.addEventListener("click", () => {
    showPage(event.target.textContent, masterList);
    event.target.className = "active";
  });
}

appendPageLinks(students);
