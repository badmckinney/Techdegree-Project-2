const masterList = document.querySelector('.student-list');

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
  let totalStudents = studentList.length;
}
