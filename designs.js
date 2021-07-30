//create listener for grid size submission
document.addEventListener('submit', function() {
    makeGrid();
    event.preventDefault();
});

//create grid function
function makeGrid() {
    //get user dimensions and current table element
    var userGrid = document.getElementById("pixelCanvas");
    var selectedHeight = document.getElementById("inputHeight").value;
    var selectedWidth = document.getElementById("inputWidth").value;
    userGrid.innerHTML = '';
    //create table for output later
    tableOutput = '';
    for (var h = 0; h < selectedHeight; h++) {
        tableOutput += "<tr>";
        for (var w = 1; w < selectedWidth; w++) {
            tableOutput += "<td></td>";
        }
        tableOutput += "<td>";
    }
    //push changes to html table
    userGrid.innerHTML = tableOutput;
    //create listeners for all cells
    document.querySelectorAll('td').forEach(item => {
        item.addEventListener('click', event => {
            item.style.backgroundColor = document.getElementById("colorPicker").value;
        })
    })
}