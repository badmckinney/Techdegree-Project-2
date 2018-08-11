//Variables for functions to reference
let masterList = document.querySelector('.student-list');
let students = document.querySelectorAll('.student-item');
let totalStudents = students.length;
let anchors = document.getElementsByTagName('a');
const pageDiv = document.querySelector('.page');
searchBar = document.createElement('div');
searchBar.className = 'student-search';
let pagLinks;
let pagUL;
let numberOfPages;
let searchResults = [];





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




//Determines the number of pages needed based on number of students in list
//Creates elements that will hold page page links
//Appends page links to the DOM and assigns active class to the page link that is being viewed.
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


/*
//Creates the innerHTML of the search bar, adds it to the div, and appends it to the DOM
function createSearch() {
  let html = "";
  html += '<input type="text" id="userInput" onkeyup="search()" placeholder="Search for students..."><button id="searchButton">Search</button>';
  searchBar.innerHTML = html;
  document.querySelector('.page-header').appendChild(searchBar);
}
*/


//Initial page onload
//createSearch();
showPage(1, students);
appendPageLinks(students);
anchors[0].className = "active";
