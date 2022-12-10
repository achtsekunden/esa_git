/*
JS File for displaying christmas tree
*/
// gets the value from input field
var input = document.querySelector("input#tr_height");
// gets the value from the output field
var log = document.getElementById("values");
// adding event Listener to the input
input.addEventListener("input", start);
// function for updating the value and to draw the tree
function start(e){
    log.innerText = e.target.value;
    var tree_height = log.innerText;
    // loop for drawing the star
    for (i = 0; i < 1; i+= 1) {
        for (r = 0; r < tree_height - 1; r+= 1) {
            document.write("&nbsp");
        }
        document.write("*</br>");
    }
    // loop for drawing the the tree levels
    for (i = 0; i < tree_height; i+= 1) {
        for (r = tree_height - 1; r > i; r--) {
            document.write("&nbsp");
        }
        for (k = 0; k <= (i * 1); k+= 1) {
            document.write("x");
        }
        document.write("</br>");
    }

    // loop for drawing the trunk
    for (i = 0; i < 1; i+= 1) {
        for (r = 0; r < tree_height - 1; r+= 1) {
            document.write("&nbsp");
        }
        document.write("I</br>");
    }
} /* end of function start */
