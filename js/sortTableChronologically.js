





function sortTableChronologically() {
  //Get all the rows in your table into an Array//
  var rows = document.getElementsByTagName('tr');
  var theArray = Array.from(rows);
  //Run the sort() method on the array, using a compare function that looks at the date.//
  theArray.sort(function(a, b){
  let x = a.querySelector("td:first-of-type tei-date");
  if (!x) {return -1};
  x = new Date(x.getAttribute("when"));

  let y = b.querySelector("td:first-of-type tei-date");
  if (!y) {return 1};
  y = new Date(y.getAttribute("when"));

  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
  //3. Add the rows back to the table in the new order.//
  document.getElementById("chrono").innerHTML = theArray;
}
