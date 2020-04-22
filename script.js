// Get the modal
var modal = document.getElementById("myResumeBackground");

// Get the button that opens the modal
var myResume = document.getElementById("myResume");

// When the user clicks on the button, open the modal
myResume.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
