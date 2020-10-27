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

document.querySelectorAll("nav button").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo:{y:"#section"+(index + 1)}});
  });
});

var tl = new TimelineMax({defaults: {ease: "power1.out"}});

tl.fromTo("#div1", {opacity: 0}, {opacity: 1, duration: 2, delay: 0.5});
tl.fromTo("#div2", {opacity: 0}, {opacity: 1, duration: 2, delay: 1});