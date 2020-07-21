// When the user scrolls the page, execute myFunction
window.onscroll = function() {makeStickyMenu()};

// Get the indexesbar
var navbar = document.getElementById("indexesbar");

// Get the offset position of the indexesbar
var sticky = indexesbar.offsetTop;

// Add the sticky class to the indexesbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeStickyMenu() {
  if (window.pageYOffset >= sticky) {
    indexesbar.classList.add("sticky")
  } else {
    indexesbar.classList.remove("sticky");
  }
}
