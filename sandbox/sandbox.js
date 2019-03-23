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
                console.log(`${newChild} of addChildTo ${parent}`); 
                console.log(parent);
                console.log(newChild);
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
        tableCreator.setElementAttributeOf(colOne)("style", "background-color: green");
        tableCreator.addChildTo(classTable)(colOne);
        console.log(colOne);

    // CREATE SECOND COLUMN
        const colTwo = tableCreator.newElement("col");
        tableCreator.setElementAttributeOf(colTwo)("style", "background-color: purple");
        classTable.appendChild(colTwo);
        tableCreator.addChildTo(classTable)(colTwo);

    // CREATE THIRD COLUMN
        const colThree = tableCreator.newElement("col");
        tableCreator.setElementAttributeOf(colThree)("span", "3");
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
        console.log(firstTableHeader);
        console.log(classNameHeaderTag);

    // CREATE STUDENT NAME ROW
        const studentNameRow = tableCreator.newElement("tr");
        tableCreator.setElementAttributeOf(studentNameRow)("id", "studentNamesRow");
        tableCreator.setElementAttributeOf(studentNameRow)("style", "background-color: rgb(255, 81, 0)");
        tableCreator.addChildTo(classTable)(studentNameRow);
    
    // CREATE HEADER TAG
        //const headerTag = document.createElement("th");
        const headerTag = tableCreator.newElement("th");
        //studentNameRow.appendChild(headerTag);
        tableCreator.addChildTo(studentNameRow)(headerTag);
        //var textnode = document.createTextNode("Water");
    
        //headerTag.setAttribute("id","thFirst");
        headerTag.setAttribute("style", "width: 20px")
        //headerTag.appendChild(textnode);
        headerTag.innerText = "";
    
    // CREATE th ELEMENT
        const totalTh = tableCreator.newElement("th");
        //studentNameRow.appendChild(totalTh); 
        tableCreator.addChildTo(studentNameRow)(totalTh);
        //const studentTotal = totalTh.textContent = "TOTAL";
        const studentTotal = tableCreator.addTextContentTo(totalTh)("TOTAL");
        console.log(studentTotal);

    // CREATE ADD STUDENT BUTTON
        const studentButtonDiv = document.getElementById("tableButtonDiv");
        console.log(studentButtonDiv);
        const addStudentButton = tableCreator.newElement("button");
        tableCreator.addTextContentTo(addStudentButton)("ADD STUDENT");
        tableCreator.setElementAttributeOf(addStudentButton)("id", "addStudentButton");
        tableCreator.addChildTo(studentButtonDiv)(addStudentButton);







        addStudentButton.addEventListener("click", () => {
            // ANOTHER th ELEMENT
                const secondTh = tableCreator.newElement("th");
                console.log(studentNameRow);
                tableCreator.addChildTo(studentNameRow)(secondTh);
                const firstStudent = tableCreator.addTextContentTo(secondTh)("Sally Forth");
                assignmentsArray.forEach((assignment) => {
                    console.log(assignment);
                    tableCreator.addCellTo(assignment)();
                });
                
                
            });
});



        



document.getElementById("addAssignmentButton").addEventListener("click", () => {
 
    // CREATE tr ELEMENT
        let id = assignmentsArray.length + 1;
        console.log(id);
        const assignmentRow = document.createElement("tr");
        assignmentRow.setAttribute("id", "classRow");
        classTable.appendChild(assignmentRow);

        let className = "comm101";
        let studentName = "Gary Indiana";
        const assignmentName = document.createElement("th");
        tableCreator.setElementAttributeOf(assignmentRow)("id", `${id}`);
        tableCreator.setElementAttributeOf(assignmentRow)("data-id", `${id}`);
        console.log(assignmentRow);
        const first = document.getElementById(`${id}`); 
        console.log(first);
        assignmentsArray.push(first);
        console.log(assignmentsArray);
        assignmentName.setAttribute("class", "headerCorrect");
        assignmentName.setAttribute("data-className", `${className}`);
        assignmentName.setAttribute("data-studentName", `${studentName}`);
        assignmentRow.appendChild(assignmentName);
        assignmentName.textContent = "COMMONLY CONFUSED WORDS QUIZ";

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
    //console.log(studentNameRow);
    console.log(document.getElementById('studentNamesRow'));
    console.log("newStudent working first log");
     function newStudent(parent) {
         console.log('newStudent working second log');
         return (element) => {
             parent.appendChild(document.createElement(`${element}`));
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

