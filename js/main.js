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




//Creates the innerHTML of the search bar, adds it to the div, and appends it to the DOM
function createSearch() {
  let html = "";
  html += '<input type="text" id="userInput" onkeyup="search()" placeholder="Search for students..."><button id="searchButton">Search</button>';
  searchBar.innerHTML = html;
  document.querySelector('.page-header').appendChild(searchBar);
}




//Creates a variable to hold a message if no students match user search input.
//Programmed to be hidden by default
/*let noMatches = document.createElement('li');
noMatches.innerHTML = '<h4>No Matches Found.</h4>';
masterList.appendChild(noMatches);
noMatches.style.display = 'none';*/




//Empties page links ul in preparation to update it based on search results list
//Iterates through all the students and compares user input with each students name and email
//If the students name OR email contains the value of user input, that students display is set to block and is pushed to a new array, else it is hidden
//If there are no matches to user input, a message is displayed that says "No Matches."
/*

function search() {
  pagUL.innerHTML = "";
  let filter = document.querySelector('input').value;
  eachStudentName = document.querySelectorAll('h3');
  eachStudentEmail = document.getElementsByClassName('email');
  for (i = 0; i < masterList.length; i += 1) {
    if (eachStudentName[i].innerHTML.includes(filter) || eachStudentEmail[i].innerHTML.includes(filter)) {
      masterList[i].style.display = 'block';
      if (masterList[i] !== searchResults[i]) {
        searchResults.push(masterList[i]);
      }
    } else {
      masterList[i].style.display = 'none';
    }
  }
  if (masterList.length === 0) {
    noMatches.style.display = 'block';
  } else {
    noMatches.style.display = 'none';
  }
  showPage(1, searchResults);
  appendPageLinks(searchResults);
  anchors[0].className = "active";
}

*/


//Event listener to handle when the search button is clicked.
//Clears the searchResults student list
//Runs search function
/*

searchBar.addEventListener("click", (e) => {
  searchResults = [];
  if (event.target.tagName === "button") {
    search();
  }
});

*/


//Initial page onload
createSearch();
showPage(1, students);
appendPageLinks(students);
anchors[0].className = "active";
