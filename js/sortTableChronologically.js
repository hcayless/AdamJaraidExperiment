//
//
//   //Get all the rows in your table into an Array//
//   var myTableArray = [];
//
// $("tei-table#t1 tei-row").each(function() {
//     var arrayOfThisRow = [];
//     var tableData = $(this).find('tei-cell');
//     if (tableData.length > 0) {
//         tableData.each(function() { arrayOfThisRow.push($(this).text()); });
//         myTableArray.push(arrayOfThisRow);
//     }
// });
//
//
// //Run the sort() method on the array, using a compare function that looks at the date.//
//
// myTableArray.sort(function(x, y) {
//   let a = new Date(x.when),
//       b = new Date(y.when);
//   return a - b;});
//
// //3. Add the rows back to the table in the new order.//
//
// document.getElementById("chrono").innerHTML = myTableArray;







function SortTableChronologically() {
  //Get all the rows in your table into an Array//
  var rows = document.getElementsByTagName('tei-row');
  var theArray = [rows];
  //Run the sort() method on the array, using a compare function that looks at the date.//
  theArray.sort(function(a, b){
  var x = new Date(a.when);
  var y = new Date(b.when);
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
  //3. Add the rows back to the table in the new order.//
  document.getElementById("chrono").innerHTML = theArray;
}
