// When the user scrolls the page, execute myFunction
window.onscroll = function() {makeStickyMenu()};

// Get the indexesbar
var indexesBar = document.getElementById("indexesBar");

// Get the offset position of the indexesbar
var sticky = indexesBar.offsetTop;

// Add the sticky class to the indexesbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeStickyMenu() {
  if (window.pageYOffset >= sticky) {
    indexesBar.classList.add("sticky")
  } else {
    indexesBar.classList.remove("sticky");
  }
}
