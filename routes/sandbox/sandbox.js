
//console.log('fart test');
//console.log("second fart test");


function addCellRowOne(position) {
    var row = document.getElementById("row_1");
    var x = row.insertCell(0);
    x.innerHTML = "New cell";
}

//addCellRowOne(0);

function addCellRowTwo(position) {
    const row = document.getElementById("row_2");
    //console.log(row);
    const poop = row.insertCell(position);
    //console.log(poop);
    poop.innerHTML = "New cell";
}

addCellRowTwo(1);
addCellRowTwo(1);

function myFunction() {
    var row = document.getElementById("myRow");
    var x = row.insertCell(0);
    x.innerHTML = "New cell test sherpa";
}

myFunction();

function setAttribute(attrib, attribValue) {
    //console.log(`${attrib} test setAttribute ${attribValue}`)
    const fart = document.querySelector('#row_2');
    //console.log(fart);
    fart.setAttribute(`${attrib}`, `${attribValue}`);
}

//setAttribute("id", "row_changed");

function setAttribCell(attrib, attribValue) {
    //console.log(`test setAttribCell`);
    const shit = document.querySelector('#cell');
    //console.log(shit);
    shit.setAttribute(`${attrib}`, `${attribValue}`);
    //console.log(shit.firstChild.data);
    const dank = shit.firstChild.data = "Satan Santa coincidence";
    //console.log(dank);
}

//setAttribCell("id", "row_changed");


const addClassButton = document.getElementById('addClassButton');
    
//console.log(addClassButton);

addClassButton.addEventListener('click', () => {
    console.log('addClassButton eventListener is working!');
    
    const classDiv = document.querySelector('#classContainer');

    const classTable = document.createElement("table");
    classTable.setAttribute("id", "classTable");
    classTable.setAttribute("align", "center");
    classDiv.appendChild(classTable);

    const colOne = document.createElement("col");
    //colOne.setAttribute("span", "1");
    colOne.setAttribute("style", "background-color: green");
    colOne.setAttribute("style", "border: 8px solid blue");
    classTable.appendChild(colOne);

    console.log(colOne);

    const colTwo = document.createElement("col");
    //colTwo.setAttribute("span", "1");
    colTwo.setAttribute("style", "background-color: purple");
    colTwo.setAttribute("style", "border: 6px solid red");
    classTable.appendChild(colTwo);

    const colThree = document.createElement("col");
    colThree.setAttribute("span", "3");
    colThree.setAttribute("style", "background-color: orange");
    colThree.setAttribute("style", "border: 4px dotted green");
    classTable.appendChild(colThree);

    const firstTableHeader = classTable.createTHead();
    firstTableHeader.setAttribute("id", "firstTableHeader");
    const classNameHeaderTag = document.createElement("th");
    classNameHeaderTag.setAttribute("colspan", "5");
    classNameHeaderTag.setAttribute("id", "classNameth");
    classNameHeaderTag.setAttribute("style", "background-color: brown");
    classNameHeaderTag.textContent = "Communications 101";
    firstTableHeader.appendChild(classNameHeaderTag);
    console.log(firstTableHeader);
    console.log(classNameHeaderTag);

    const studentNameRow = document.createElement("tr");
    studentNameRow.setAttribute("id", "studentNamesRow");
    studentNameRow.setAttribute("style", "background-color: rgb(255, 81, 0)")
    classTable.appendChild(studentNameRow);

    const headerTag = document.createElement("th");
    studentNameRow.appendChild(headerTag);
    var textnode = document.createTextNode("Water");
    headerTag.setAttribute("id","thFirst");
    headerTag.setAttribute("style", "width: 20px")
    headerTag.appendChild(textnode);
    headerTag.innerText = "";

    const totalTh = document.createElement("th");
    studentNameRow.appendChild(totalTh); 
    const studentTotal = totalTh.textContent = "TOTAL SCORE POSSIBLE";
    console.log(studentTotal);

    const secondTh = document.createElement("th");
    studentNameRow.appendChild(secondTh); 
    const firstStudent = secondTh.textContent = "Sally Forth";
    console.log(firstStudent);

    const thirdTh = document.createElement("th");
    studentNameRow.appendChild(thirdTh); 
    const secondStudent = thirdTh.textContent = "Danny Diamond";
    console.log(secondStudent);

    const assignmentRow = document.createElement("tr");
    assignmentRow.setAttribute("id", "classRow");
    classTable.appendChild(assignmentRow);

    let className = "comm101";
    let studentName = "Gary Indiana";
    const assignmentName = document.createElement("th");
    assignmentName.setAttribute("class", "headerCorrect");
    assignmentName.setAttribute("data-className", `${className}`);
    assignmentName.setAttribute("data-studentName", `${studentName}`);
    assignmentRow.appendChild(assignmentName);
    assignmentName.textContent = "commonly confused words";
    console.log(assignmentName);

    //console.log(tableHeader);
    console.log(document.querySelector("#classTable"));

});



//setAttribCell("id", "row_changed");
