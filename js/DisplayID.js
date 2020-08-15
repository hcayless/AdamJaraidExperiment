

function displayID() {
  var x = document.getElementsByTagName("tr")[0].id;

  var newTd = document.getElementsByTagName("tr").insertCell(0);
    newTd.innerHTML = x;
}
