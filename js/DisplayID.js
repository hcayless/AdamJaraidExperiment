

function displayID() {
  var x = document.getElementsByTagName("tr")[0].id;

  var newTd = document.getElementById("tr").insertCell(0);
    newTd.innerHTML = x;
}
