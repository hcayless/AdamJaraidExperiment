

function dispayId() {
var rows = document.querySelectorAll("#t1 tr");
var theArray = Array.from(rows);

theArray.forEach(tr => {
  var td = document.getElementsByTagName("td");
    td:nth-child(4).innerHTML = tr.id;
})
}


// function displayID() {
//   var x = document.getElementsByTagName("tr")[0].id;
//   var newTd = document.getElementsByTagName("tr").insertCell(0);
//
//     newTd.innerHTML = x;
// }
