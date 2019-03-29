
//////////////////////////////////////////////////////////
 
const studentsArray = [];

const assignmentsArray = [];

const forkDiv = document.querySelector('#forknutz');

const classDiv = document.querySelector('#classContainer');

function checkSubmit(e) {

    if(e && e.keyCode == 13) {
       console.log(`${e.keyCode} event`);
       //document.forms[0].submit();
    }
    e.preventDefault();


 } 
 //checkSubmit();


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
    },

    addInsideAfterLastChild: function(parent) {
        console.log("addInsideAfterLastChild working");
        return function(newChild) {
            parent.insertAdjacentElement("beforeend", newChild);
        }
    }
};





function init() {
    console.log("fart shit fart ++++++++++++++++++++++++++");
    console.log("init function working");
    document.getElementById('addClassButton').addEventListener('click', addClassInputFormOpen);
    document.getElementById('addButtonClass').addEventListener('click', addClassToTable);
    document.getElementById('cancelButtonClass').addEventListener('click', cancelClassInputForm);

    document.getElementById('addStudentButton').addEventListener('click', addStudentInputFormOpen);
    document.getElementById('addButtonStudent').addEventListener('click', addStudentToTable);
    document.getElementById('cancelButtonStudent').addEventListener('click', cancelStudentInputForm);

    document.getElementById('addAssignmentButton').addEventListener('click', addAssignmentInputFormOpen);
    document.getElementById('addButtonAssignment').addEventListener('click', addAssignmentToTable);
    document.getElementById('cancelButtonAssignment').addEventListener('click', cancelAssignmentInputForm);

}

function addClassInputFormOpen() {
console.log("addClassInputFormOpen function was invoked!!!!!!!^^^^!!!!!!!");
}

function cancelClassInputForm() {
    console.log("cancelClassInputform was invoked!!@#");
}

function addStudentInputFormOpen() {
    console.log("addStudentInputFormOpen function was invoked!_+_+_+__++_");
}
    
function cancelStudentInputForm() {
    console.log("cancelStudentInputform was invoked!!@#");
}

function addAssignmentInputFormOpen() {
    console.log("addAssignmentInputFormOpen function was invoked!**********************");
}
    
function cancelAssignmentInputForm() {
    console.log("cancelAssignmentInputform was invoked!!@#@#@#");
}
    
    




function addClassToTable() {
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
        const classText = document.getElementById("addClassInputField").value;
        tableCreator.addTextContentTo(classNameHeaderTag)(`${classText}`);
        tableCreator.addChildTo(firstTableHeader)(classNameHeaderTag);

    // CREATE ADD STUDENT BUTTON
        // const studentButtonDiv = document.getElementById("tableButtonDiv");
        // const addStudentButton = tableCreator.newElement("button");
        // tableCreator.setElementAttributeOf(addStudentButton)("id", "addStudentButton");
        // tableCreator.addTextContentTo(addStudentButton)("ADD STUDENT");
        // tableCreator.addChildTo(studentButtonDiv)(addStudentButton);
        // console.log(addStudentButton);

        //     // CREATE ADD ASSIGNMENT BUTTON
        //     const addAssignmentButton = tableCreator.newElement("button");
        //     tableCreator.setElementAttributeOf(addAssignmentButton)("id", "addAssignmentButton");
        //     tableCreator.addTextContentTo(addAssignmentButton)("ADD ASSIGNMENT");
        //     tableCreator.addChildTo(studentButtonDiv)(addAssignmentButton);
        //     console.log(addAssignmentButton);
    
        // document.getElementById('addAssignmentButton').addEventListener('click', addAssignmentToTable);

        // document.getElementById('addStudentButton').addEventListener('click', addStudentToTable);

}








 
function addStudentToTable() {
    // console.log("assStudent listener is working!");
    // var x = document.getElementById("addStudentInputDiv");
    // var y = document.getElementById("addStudentInputField");
    // const inputValue = document.forms[0][0].value;
    // let inputElement = document.forms[0][0];
    // let inputForm = document.forms[0];
    // console.log(inputElement);
    // console.log(inputForm);
    // console.log(inputValue);
    // console.log(x);
    // console.log(y);
    // console.log(y.value);

    if(assignmentsArray.length < 1 && studentsArray.length < 1) {
        console.log("first condition test");
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
                // ADD th ELEMENT TO STUDENT ROW
                const studentId = studentsArray.length + 1;
                const secondTh = tableCreator.newElement("th");  
                tableCreator.addChildTo(document.getElementById("studentNamesRow"))(secondTh);
    
                const assignArrayLength = assignmentsArray.length;
            // SET CLASS OF NEW th ELEMENT
                tableCreator.setElementAttributeOf(secondTh)("class", `${studentId}`);
            // SET TEXT OF NEW th ELEMENT
                tableCreator.addTextContentTo(secondTh)("Sally Forth");
            // PUSH NEW STUDENT th ELEMENT TO STUDENTS ARRAY
                const first = document.getElementsByClassName(`${studentId}`); 
                studentsArray.push(first);    

    } else if(assignmentsArray.length < 1 && studentsArray.length >= 1) {
                console.log("second condition test");
                const studentId = studentsArray.length + 1;
            // CREATE th HEADER FOR STUDENT NAME
                const secondTh = tableCreator.newElement("th");      
                const assignArrayLength = assignmentsArray.length;
            // SET CLASS OF NEW th ELEMENT
                tableCreator.setElementAttributeOf(secondTh)("class", `${studentId}`);
            // SET TEXT OF NEW th ELEMENT
                tableCreator.addTextContentTo(secondTh)("Sally Forth");
            // ADD th ELEMENT TO STUDENT ROW
                tableCreator.addChildTo(document.getElementById("studentNamesRow"))(secondTh);
            // PUSH NEW STUDENT th ELEMENT TO STUDENTS ARRAY
                const first = document.getElementsByClassName(`${studentId}`); 
                studentsArray.push(first);    

    }

    if(assignmentsArray.length >= 1) {
        console.log("third condition test");

        // ADD th ELEMENT TO STUDENT ROW
            const studentId = studentsArray.length + 1;
            const secondTh = tableCreator.newElement("th");  
            tableCreator.addChildTo(document.getElementById("studentNamesRow"))(secondTh);

            const assignArrayLength = assignmentsArray.length;
        // SET CLASS OF NEW th ELEMENT
            tableCreator.setElementAttributeOf(secondTh)("class", `${studentId}`);
        // SET TEXT OF NEW th ELEMENT
            tableCreator.addTextContentTo(secondTh)("Sally Forth");
        // PUSH NEW STUDENT th ELEMENT TO STUDENTS ARRAY
            const first = document.getElementsByClassName(`${studentId}`); 
            studentsArray.push(first);
        // ADD CELL WITH INPUT FIELD TO EACH ASSIGNMENT FOR NEW STUDENT
            assignmentsArray.forEach((assignment, index) => {
                var indexTwo = index + 2;
                var indexOne = index + 1;

                const newCell = tableCreator.addCellTo(assignment)(-1);
                console.log(newCell);
                tableCreator.setElementAttributeOf(newCell)("class", "score");

                const newInput = tableCreator.newElement("input");
                tableCreator.setElementAttributeOf(newInput)("class", "score");
                console.log(newInput);
                tableCreator.setElementAttributeOf(newInput)("id", `student-${studentId}-assignment-${indexOne}`);
                const park = document.querySelector(`#student-3-assignment-${assignArrayLength}`);
                //const parkValue = document.querySelector(`#student-1-assignment-1`);
                //console.log(park)
                //console.log(parkValue.value);
                console.log(newInput);
                tableCreator.addChildTo(newCell)(newInput);
                console.log(document.querySelector('#newInput'));
            })


            const Id = studentsArray.length + 1;
            // CREATE th HEADER FOR STUDENT TOTAL
                const studentTotalHeader = tableCreator.newElement("th");  
            // SET CLASS OF NEW th ELEMENT
                tableCreator.setElementAttributeOf(studentTotalHeader)("id", `student-${Id}`);
            // SET TEXT OF NEW th ELEMENT
                tableCreator.addTextContentTo(studentTotalHeader)("1299");
            
            // ADD th ELEMENT TO TOTALS ROW
                tableCreator.addChildTo(document.getElementById("studentTotalsRow"))(studentTotalHeader);


    }
}











function addAssignmentToTable() {
    if(assignmentsArray.length < 1 && studentsArray.length < 1) {

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
    }
    

    


    // CREATE tr ELEMENT
        let assignmentId = assignmentsArray.length + 1;
    // ADD ASSIGNMENT ROW TO TABLE
        console.log("add assignment row test @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        const assignmentRow = classTable.insertRow(assignmentId);
        tableCreator.setElementAttributeOf(assignmentRow)("id", "classRow");
    
        let className = "comm101";
        let studentName = "Gary Indiana";
    // CREATE th FOR NEW ASSIGNMENT
        const assignmentName = tableCreator.newElement("th");
    // SET ATTRIBUTES FOR NEW ASSIGNMENT th
        tableCreator.setElementAttributeOf(assignmentRow)("id", `${assignmentId}`);
        tableCreator.setElementAttributeOf(assignmentRow)("data-id", `${assignmentId}`);
        console.log(assignmentRow);
    // PUSH NEW ASSIGNMENT tr ELEMENT TO ASSIGNMENTS ARRAY
        const addAssignment = document.getElementById(`${assignmentId}`); 
        assignmentsArray.push(assignmentRow);
        tableCreator.setElementAttributeOf(assignmentName)("class", "headerCorrect");
        tableCreator.setElementAttributeOf(assignmentName)("data-class", `${className}`);
    
        tableCreator.setElementAttributeOf(assignmentName)("data-studentName", `${studentName}`);
    // ADD NEW ASSIGNMENT th TO NEW ASSIGNMENT ROW
        tableCreator.addChildTo(assignmentRow)(assignmentName);
    // ADD TEXT TO ASSIGNMENT HEADER CELL
        tableCreator.addTextContentTo(assignmentName)("COMMONLY CONFUSED WORDS QUIZ");
        var correctCell = assignmentsArray.length - 1;
        var lengthStudents = studentsArray.length;
        console.log(studentsArray);
    
    // ADD PLACEHOLDER FOR TOTAL POSSIBLE POINTS TO NEW ASSIGNMENT ROW
        const newCell = tableCreator.addCellTo(assignmentsArray[correctCell])(-1);    
        const studentId = studentsArray.length;
        const assignArrayLength = assignmentsArray.length;
    
    
        const newInput = tableCreator.newElement("input");
        const newId = assignmentRow.dataset.id;
        tableCreator.setElementAttributeOf(newInput)("style", "background-color: purple; border: purple");
        tableCreator.setElementAttributeOf(newInput)("id", `student-0-assignment-${assignArrayLength}`);
        console.log(newInput);
    
        tableCreator.setElementAttributeOf(newInput)("class", `fart${newId}`);
        tableCreator.addChildTo(newCell)(newInput);
        const shit = document.querySelector (`.fart${newId}`);
    //tableCreator.setElementAttributeOf(shit)("style", "background-color: purple; border: purple");
        // ADD PLACEHOLDER CELLS FOR ASSIGNMENT SCORES FOR EACH STUDENT
            for(i=0; i < lengthStudents; i++) {
                const studsLoop = i + 1;
                console.log(studsLoop);
                const newCell = tableCreator.addCellTo(assignmentsArray[correctCell])(-1);
                const newInput = tableCreator.newElement("input");
                tableCreator.setElementAttributeOf(newInput)("id", `student-${studsLoop}-assignment-${assignArrayLength}`);
                tableCreator.setElementAttributeOf(newInput)("class", "score");
                tableCreator.setElementAttributeOf(newCell)("class", "score");

    
                tableCreator.addChildTo(newCell)(newInput);
                console.log(document.querySelector(`#student-${studsLoop}-assignment-${assignArrayLength}`));
            }


            if(assignmentsArray.length == 1) {

                // CREATE STUDENT TOTAL ROW
                    const studentTotalRow = tableCreator.newElement("tr");
                    tableCreator.setElementAttributeOf(studentTotalRow)("id", "studentTotalsRow");
                    tableCreator.setElementAttributeOf(studentTotalRow)("style", "background-color: rgb(255, 81, 0)");
                // ADD ROW TO TABLE
                    //tableCreator.addChildTo(classTable)(studentTotalRow);
                    tableCreator.addInsideAfterLastChild(classTable)(studentTotalRow);

                
                // CREATE HEADER TAG
                    const headerTag = tableCreator.newElement("th");
                // ADD HEADER TAG TO ROW
                    tableCreator.addChildTo(studentTotalRow)(headerTag);
                    tableCreator.setElementAttributeOf(headerTag)("style", "width: 20px");
                    tableCreator.addTextContentTo(headerTag)("");
                
                // CREATE th ELEMENT
                    const totalTh = tableCreator.newElement("th");
                    tableCreator.addChildTo(studentTotalRow)(totalTh);
                    const studentTotal = tableCreator.addTextContentTo(totalTh)("1234");
            

          
            console.log(`${lengthStudents} + + + + + + + + + + + + `);
            for(i=0; i < lengthStudents; i++) {
                stopper = 1;
                    console.log("TOTALS ROW TEST %%%$$$$%%%%$$$$%%%%$$$$");
                    const studentId = studentsArray.length + 1;
                // CREATE th HEADER FOR STUDENT TOTAL
                    const studentTotalHeader = tableCreator.newElement("th");  
                // SET CLASS OF NEW th ELEMENT
                    tableCreator.setElementAttributeOf(studentTotalHeader)("id", `student-${studentId}`);
                // SET TEXT OF NEW th ELEMENT
                    tableCreator.addTextContentTo(studentTotalHeader)("1299");
                
                // ADD th ELEMENT TO TOTALS ROW
                    tableCreator.addChildTo(document.getElementById("studentTotalsRow"))(studentTotalHeader);
    
                    const assignArrayLength = assignmentsArray.length;
                // PUSH NEW STUDENT th ELEMENT TO STUDENTS ARRAY
                    //const first = document.getElementsByClassName(`${studentId}`); 
                    //studentsArray.push(first);    

            }
            }
}





        



document.addEventListener('DOMContentLoaded', init);





 

//////////////////////////////////////////////////////////



