





function sortTableChronologically() {
  //Get all the rows in the table into an Array//
  var rows = document.querySelectorAll("#t1 tr");
  var theArray = Array.from(rows);
  //Run the sort() method on the array, using a compare function that looks at the date.//
  theArray.sort(function(a, b){
  let x = a.querySelector("td:first-of-type tei-date");
  // lines without date should not be considered
  if (!x) {return -1};
  //if there is notAfter its value should be considered as date
  if (x.hasAttribute("notAfter")) {
    x = new Date(x.getAttribute("notAfter"));
  };
  //add the when
  else if (x.hasAttribute("when")) {
    x = new Date(x.getAttribute("when"));
  };


  let y = b.querySelector("td:first-of-type tei-date");
  //lines without date should not be considerd
  if (!y) {return 1};
  // if there is notAfter its value should be considered as a date
  if (y.hasAttribute("notAfter")) {
    y = new Date(y.getAttribute("notAfter"));
  };
  // if there is when should be considered as a date
  else if (y.hasAttribute("when")) {
    y = new Date(y.getAttribute("when"));
  };


  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;

});
  //Add the rows back to the table in the new order.//

  var table = document.querySelector("#t1>table");
  table.innerHTML = "";
  theArray.forEach(function(row) {table.appendChild(row)})

}
