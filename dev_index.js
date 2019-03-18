


function myFunction() {
  console.log('outerFunction');
  const row = document.getElementById("poop");
  console.log(row);
  const x = row.insertCell(1);
  x.innerHTML = "NEW SHIT";
  console.log(x.innerHTML);

  myOtherFunction();
}
function myOtherFunction() {
  console.log('innerFunction');
  const otherRow = document.getElementById("death");
  console.log(otherRow);
  const y = otherRow.insertCell(1);
  y.innerHTML = "OTHER NEW SHIT";
}

var test = document.querySelector('.shite');
console.log(test);
test.setAttribute("class", "student1");

function changeColor(newColor) {
  const otherRow = document.getElementById("death");
  console.log(otherRow);
  console.log("shart shart");
  var elem = document.getElementById("fuct");
  elem.style.color = newColor;
}

changeColor('red');

function addClassToSchedule() {
  console.log('function is working!!!');
  const tableName = document.getElementById('table_id');
  console.log(tableName);
  const row = tableName.insertRow(-1);

  console.log('pooooooopppppp');
}

const sayHi = function() {
  console.log("Hey there!");
}

sayHi();

addClassToSchedule(8);

function addRow(tableID) {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);

  // Insert a cell in the row at index 0
  let newCell = newRow.insertCell(0);

  // Append a text node to the cell
  let newText = document.createTextNode('New bottom row');
  newCell.appendChild(newText);
}

// Call addRow() with the table's ID
addRow('table_id');

/* 
function myFunction() {
  //var row_poop = document.getElementById("poop");
  var rowFart = document.getElementById("fart");
  //var y = row_poop.insertCell(2);
  var x = rowFart.insertCell(2);
  x.innerHTML = "HELLO WORLD";
  //y.innerHTML = "New cell";
}
*/




/*
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 
*/