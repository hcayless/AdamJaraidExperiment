





function sortTableChronologically() {
  //Get all the rows in your table into an Array//
  var rows = document.getElementsByTagName('tr');
  var theArray = Array.from(rows);
  //Run the sort() method on the array, using a compare function that looks at the date.//
  theArray.sort(function(a, b){
  let x = a.querySelector("td:first-of-type tei-date");
  //tell that lines without date should not be considered
  if (!x) {return -1};
  //add the when
  x = new Date(x.getAttribute("when"));

  let y = b.querySelector("td:first-of-type tei-date");
  //tell that lines without date should not be considerd
  if (!y) {return 1};
  //add the when
  y = new Date(y.getAttribute("when"));

  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
 //

  //Add the rows back to the table in the new order.//

  var table = document.querySelector("#t1>table");
  table.innerHTML = "";
  theArray.forEach(function(row) {table.appendChild(row)})

}
