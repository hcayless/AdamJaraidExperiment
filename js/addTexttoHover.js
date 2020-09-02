
function addTexttoInstHover() {


var css = 'table td:hover{ background-color: #00ff00 }';
var style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);

}
