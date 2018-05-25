//Variables for functions to reference
let masterList = document.querySelector('.student-list');
let students = document.querySelectorAll('.student-item');
let totalStudents = students.length;
let pagLinks;
let pagUL;
let numberOfPages;
let anchors = document.getElementsByTagName('a');
const pageDiv = document.querySelector('.page');
let searchBar;

//populates page with a group of 10 students based on their respective page numbers
function showPage(page, studentList) {
  for (let i = 0; i < studentList.length; i += 1) {
    studentList[i].style.display = "none";
  }
  for (let i = 0; i < studentList.length; i += 1) {
    if (i >= (page - 1) * 10 && i <= (page * 10) - 1) {
      studentList[i].style.display = "block";
    }
  }
}

//
function appendPageLinks(studentList) {
  numberOfPages = Math.ceil(totalStudents / 10);
  pagLinks = document.createElement('div');
  pagLinks.className = 'pagination';
  pagUL = document.createElement('ul');
  pagUL.setAttribute("id", "links");
  pageDiv.appendChild(pagLinks);
  pagLinks.appendChild(pagUL);
  for (let i = 0; i < numberOfPages; i += 1) {
    pagUL.innerHTML += '<li><a href="#" class="inactive">' + [i + 1] + '</a></li>';
  }
  pagUL.addEventListener("click", (e) => {
    showPage((e.target.textContent), studentList);
    for (i = 0; i < numberOfPages; i += 1) {
      anchors[i].className = "inactive";
    }
    e.target.className = "active";
  });
}

function createSearch() {
  searchBar = document.createElement('div');
  searchBar.className = 'student-search';
  let html = "";
  html += '<input type="text" id="userInput" onkeyup="search()" placeholder="Search for students..."><button>Search</button>';
  searchBar.innerHTML = html;
  document.querySelector('.page-header').appendChild(searchBar);
}

function search() {
  filter = userInput.value.toUpperCase();
  for (i = 0; i < students.length; i += 1) {
    eachStudent = students[i].getElementsByTagName('h3')[0];
    if (eachStudent.innerHTML.toUpperCase().includes(filter)) {
      students[i].style.display = "block";
    } else {
      students[i].style.display = "none";
    }
  }
}



createSearch();
showPage(1, students);
appendPageLinks(students);
anchors[0].className = "active";
