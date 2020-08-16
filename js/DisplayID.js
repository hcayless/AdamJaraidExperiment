
function displayID() {
document.querySelectorAll("#t1 tr").forEach(tr => {
    const td = tr.insertCell(0);
    td.textContent = tr.id;

    var table = document.querySelector("#t1>table");
    table.innerHTML = "";

});
}

// function displayID() {
//   var x = document.getElementsByTagName("tr")[0].id;
//   var newTd = document.getElementsByTagName("tr").insertCell(0);
//
//     newTd.innerHTML = x;
// }
