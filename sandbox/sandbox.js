
//console.log('fart test');
//console.log("second fart test");


function addCellRowOne(position) {
    var row = document.getElementById("row_1");
    var x = row.insertCell(0);
    x.setAttribute("style", "border:1px solid orange");
    x.style.color = "red";
    x.innerHTML = "CELL ONE";
}

addCellRowOne(0);

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

//////////////////////////////////////////////////////////

const forkDiv = document.querySelector('#forknutz');
console.log(forkDiv);


const classDiv = document.querySelector('#classContainer');

const tableCreator = {
    newElement: function(typeOfElement) {
        console.log("newElement working");
        return document.createElement(`${typeOfElement}`);
    },

    setElementAttributeOf: function(element) {
        console.log("setElement working");
        return function(attributeType, attributeValue) {
            console.log("setElement inner working")
            element.setAttribute(`${attributeType}`, `${attributeValue}`);
        }
    },

    addChildTo: function(parent) {
        console.log('addChildTo working');   
            return function(newChild) {
            parent.appendChild(newChild);
        }
    },

    addRowTo: function(parent) {
        console.log('addRowTo working');
        return function(position) {
            return parent.insertRow(position);
        }
    },

    addCellTo: function(parent) {
        console.log('addCellTo working');
        return function(position) {
            return parent.insertCell(position);
        }
    },

    addTheadTo: function(parent) {
        console.log('addTheadTo working');
        return function(position) {
            return parent.createTHead(position);
        }
    },
    
    addTextContentTo: function(element) {
        return function(newText) {
            return element.textContent = `${newText}`;
        }
    },

    addInnerTextTo: function(element) {
        return function(newInnerText) {
            return element.innerText = `${newInnerText}`
        }
    },

    addInnerHtmlTo: function(element) {
        return function(newInnerHtml) {
            return element.innerHTML = `${newInnerHtml}`;
        }
    }
};







const studentsArray = [];

const assignmentsArray = [];

assignmentsArray.forEach((item, index) => {
    tableCreator.addCellTo(item)();
});






 
document.getElementById('addClassButton').addEventListener('click', () => {
    console.log('addClassButton eventListener is working!');
    
    // CREATE TABLE ELEMENT
        const classTable = tableCreator.newElement("table");
        tableCreator.setElementAttributeOf(classTable)("id", "classTable");
        tableCreator.setElementAttributeOf(classTable)("align", "center");
        tableCreator.addChildTo(classDiv)(classTable);

    // CREATE COLUMN
        const colOne = tableCreator.newElement("col");
        tableCreator.setElementAttributeOf(colOne)("style", "background-color: orange");
        tableCreator.addChildTo(classTable)(colOne);

    // CREATE SECOND COLUMN
        const colTwo = tableCreator.newElement("col");
        tableCreator.setElementAttributeOf(colTwo)("style", "background-color: purple");
        tableCreator.addChildTo(classTable)(colTwo);
        tableCreator.addChildTo(classTable)(colTwo);

    // CREATE THIRD COLUMN
        const colThree = tableCreator.newElement("col");
        tableCreator.setElementAttributeOf(colThree)("span", "100");
        tableCreator.setElementAttributeOf(colThree)("style", "background-color: orange");
        tableCreator.addChildTo(classTable)(colThree);

    // CREATE TABLE HEADER
        const firstTableHeader = tableCreator.addTheadTo(classTable)();
        tableCreator.setElementAttributeOf(firstTableHeader)("id", "firstTableHeader");
        const classNameHeaderTag = tableCreator.newElement("th");
        tableCreator.setElementAttributeOf(classNameHeaderTag)("colspan", "100");
        tableCreator.setElementAttributeOf(classNameHeaderTag)("id", "classNameth");
        tableCreator.setElementAttributeOf(classNameHeaderTag)("style", "background-color: brown");
        tableCreator.addTextContentTo(classNameHeaderTag)("Communications 101");
        tableCreator.addChildTo(firstTableHeader)(classNameHeaderTag);

    // CREATE ADD STUDENT BUTTON
        const studentButtonDiv = document.getElementById("tableButtonDiv");
        const addStudentButton = tableCreator.newElement("button");
        tableCreator.setElementAttributeOf(addStudentButton)("id", "addStudentButton");
        tableCreator.addTextContentTo(addStudentButton)("ADD STUDENT");
        tableCreator.addChildTo(studentButtonDiv)(addStudentButton);
});



document.getElementById("addStudentButton").addEventListener("click", () => {
    // ANOTHER th ELEMENT
        const studentId = studentsArray.length + 1;
        const secondTh = tableCreator.newElement("th");
        tableCreator.setElementAttributeOf(secondTh)("class", `${studentId}`);
        tableCreator.addChildTo(document.getElementById("studentNamesRow"))(secondTh);
        tableCreator.addTextContentTo(secondTh)("Sally Forth");
        const first = document.getElementsByClassName(`${studentId}`); 
        studentsArray.push(first);
        assignmentsArray.forEach((assignment) => {
            const newCell = tableCreator.addCellTo(assignment)();
            console.log(newCell);
            const newInput = tableCreator.newElement("input");
            console.log(newInput);
            tableCreator.setElementAttributeOf(newInput)("id", "newInput");
            console.log(newInput);
            tableCreator.addChildTo(newCell)(newInput);
            console.log(document.querySelector('#newInput'));
        });

        
});




        



document.getElementById("addAssignmentButton").addEventListener("click", () => {

    if(assignmentsArray.length < 1) {

    // CREATE STUDENT NAME ROW
        const studentNameRow = tableCreator.newElement("tr");
        tableCreator.setElementAttributeOf(studentNameRow)("id", "studentNamesRow");
        tableCreator.setElementAttributeOf(studentNameRow)("style", "background-color: rgb(255, 81, 0)");
        tableCreator.addChildTo(classTable)(studentNameRow);
    
    // CREATE HEADER TAG
        const headerTag = tableCreator.newElement("th");
        tableCreator.addChildTo(studentNameRow)(headerTag);
        tableCreator.setElementAttributeOf(headerTag)("style", "width: 20px");
        tableCreator.addTextContentTo(headerTag)("");
    
    // CREATE th ELEMENT
        const totalTh = tableCreator.newElement("th");
        tableCreator.addChildTo(studentNameRow)(totalTh);
        const studentTotal = tableCreator.addTextContentTo(totalTh)("TOTAL");
    };


 
    // CREATE tr ELEMENT
        let assignmentId = assignmentsArray.length;
        const assignmentRow = tableCreator.newElement("tr");
        tableCreator.setElementAttributeOf(assignmentRow)("id", "classRow");
        tableCreator.addChildTo(classTable)(assignmentRow);

        let className = "comm101";
        let studentName = "Gary Indiana";
        const assignmentName = tableCreator.newElement("th");
        tableCreator.setElementAttributeOf(assignmentRow)("id", `${assignmentId}`);
        tableCreator.setElementAttributeOf(assignmentRow)("data-id", `${assignmentId}`);
        const first = document.getElementById(`${assignmentId}`); 
        assignmentsArray.push(first);
        tableCreator.setElementAttributeOf(assignmentName)("class", "headerCorrect");
        tableCreator.setElementAttributeOf(assignmentName)("data-class", `${className}`);

        assignmentName.setAttribute("data-studentName", `${studentName}`);
        assignmentRow.appendChild(assignmentName);
        assignmentName.textContent = "COMMONLY CONFUSED WORDS QUIZ";
        var correctCell = assignmentsArray.length - 1;
        var lengthStudents = studentsArray.length;
        console.log(studentsArray);

        
        const newCell = tableCreator.addCellTo(assignmentsArray[correctCell])();

        const newInput = tableCreator.newElement("input");
        tableCreator.setElementAttributeOf(newInput)("style", "background-color: purple; border: purple");
        const newId = assignmentRow.dataset.id;
        tableCreator.setElementAttributeOf(newInput)("class", `fart${newId}`);
        tableCreator.addChildTo(newCell)(newInput);
        const shit = document.querySelector (`.fart${newId}`);
        tableCreator.setElementAttributeOf(shit)("style", "background-color: purple; border: purple");


        for(i=0; i < lengthStudents; i++) {
            const newCell = tableCreator.addCellTo(assignmentsArray[correctCell])();
            const newInput = tableCreator.newElement("input");
            const newId = assignmentRow.dataset.id;
            tableCreator.setElementAttributeOf(newInput)("class", `fart${newId}`);
            tableCreator.addChildTo(newCell)(newInput);
            const shit = document.querySelector (`.fart${newId}`);
        };




});







//////////////////////////////////////////////////////////////////////////////////////
//******************************************************************************************** */
// //     // CREATE STUDENT NAME ROW
// //     const studentNameRow = tableCreator.newElement("tr");
// //     tableCreator.setElementAttributeOf(studentNameRow)("id", "studentNamesRow");
// //     tableCreator.setElementAttributeOf(studentNameRow)("style", "background-color: rgb(255, 81, 0)");
// //     tableCreator.addChildTo(classTable)(studentNameRow);

// // // CREATE HEADER TAG
// //     //const headerTag = document.createElement("th");
// //     const headerTag = tableCreator.newElement("th");
// //     //studentNameRow.appendChild(headerTag);
// //     tableCreator.addChildTo(studentNameRow)(headerTag);
// //     //var textnode = document.createTextNode("Water");

// //     //headerTag.setAttribute("id","thFirst");
// //     headerTag.setAttribute("style", "width: 20px")
// //     //headerTag.appendChild(textnode);
// //     headerTag.innerText = "";

// // // CREATE th ELEMENT
// //     const totalTh = tableCreator.newElement("th");
// //     //studentNameRow.appendChild(totalTh); 
// //     tableCreator.addChildTo(studentNameRow)(totalTh);
// //     //const studentTotal = totalTh.textContent = "TOTAL";
// //     const studentTotal = tableCreator.addTextContentTo(totalTh)("TOTAL");
// //     console.log(studentTotal);

// // // ANOTHER th ELEMENT
// //     //const secondTh = document.createElement("th");
// //     const secondTh = tableCreator.newElement("th");
// //     console.log(studentNameRow);
// //     //studentNameRow.appendChild(secondTh); 
// //     tableCreator.addChildTo(studentNameRow)(secondTh);
// //     //const firstStudent = secondTh.textContent = "Sally Forth";
// //     const firstStudent = tableCreator.addTextContentTo(secondTh)("Sally Forth");
// //     console.log(firstStudent);

// // // ANOTHER th ELEMENT
// //     const thirdTh = document.createElement("th");
// //     studentNameRow.appendChild(thirdTh); 
// //     const secondStudent = thirdTh.textContent = "Danny Diamond";
// //     console.log(secondStudent); 

// // // CREATE tr ELEMENT
// //     const assignmentRow = document.createElement("tr");
// //     assignmentRow.setAttribute("id", "classRow");
// //     classTable.appendChild(assignmentRow);

// //     let className = "comm101";
// //     let studentName = "Gary Indiana";
// //     const assignmentName = document.createElement("th");
// //     assignmentName.setAttribute("class", "headerCorrect");
// //     assignmentName.setAttribute("data-className", `${className}`);
// //     assignmentName.setAttribute("data-studentName", `${studentName}`);
// //     assignmentRow.appendChild(assignmentName);
// //     assignmentName.textContent = "commonly confused words";
/////////////////////////////////////////////////////////////////
//************************************************************** */

// need to find a way to turn off listener until table is created
const addRowEventListener = document.getElementById('addScoreButton').addEventListener("click", () => {
    console.log(document.getElementById('studentNamesRow'));
    console.log("newStudent working first log");
     function newStudent(parent) {
         console.log('newStudent working second log');
         return (element) => {
            tableCreator.addChildTo(parent)(`${element}`);
        }
     };

     newStudent(document.getElementById('studentNamesRow'))("th");
});


//////////////////////////////////////////////////////////


//document.getElementById('addScoreButton').addEventListener("click", () => {
    //console.log(document.getElementById('studentNamesRow'));
    //console.log("newStudent working first log");
    // function newStudent(parent) {
    //     console.log('newStudent working second log');
    //     return (element) => {
    //         parent.appendChild(document.createElement(`${element}`));
    //     }
    // };
    
    // newStudent(studRows)("th");
//});



const newAttrib = (parent) => {
    console.log('newAttrib working');
    return (key, value) => {
       parent.setAttribute(`${key}`, `${value}`);
    }
};

//var newStudentRowElement = newAttrib(studentNameRow);
//newStudentRowElement("class", "fart");




