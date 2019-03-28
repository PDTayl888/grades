
//////////////////////////////////////////////////////////

const studentsArray = [];

const assignmentsArray = [];

const forkDiv = document.querySelector('#forknutz');

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





function init() {
    console.log("fart shit fart ++++++++++++++++++++++++++");
    console.log("init function working");
    document.getElementById('addClassButton').addEventListener('click', addClassToTable);
    document.getElementById('addStudentButton').addEventListener('click', addStudentToTable);
    document.getElementById('addAssignmentButton').addEventListener('click', addAssignmentToTable);
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
        tableCreator.addTextContentTo(classNameHeaderTag)("Communications 101");
        tableCreator.addChildTo(firstTableHeader)(classNameHeaderTag);

    // CREATE ADD STUDENT BUTTON
        const studentButtonDiv = document.getElementById("tableButtonDiv");
        const addStudentButton = tableCreator.newElement("button");
        tableCreator.setElementAttributeOf(addStudentButton)("id", "addStudentButton");
        tableCreator.addTextContentTo(addStudentButton)("ADD STUDENT");
        tableCreator.addChildTo(studentButtonDiv)(addStudentButton);

}









 
function addStudentToTable() {
    console.log("assStudent listener is working!");
    var x = document.getElementById("addStudentInputDiv");
    var y = document.getElementById("addStudentInputField");
    const inputValue = document.forms[0][0].value;
    let inputElement = document.forms[0][0];
    let inputForm = document.forms[0];
    console.log(inputElement);
    console.log(inputForm);
    console.log(inputValue);
    console.log(x);
    console.log(y);
    console.log(y.value);

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
                // ADD th ELEMENT TO STUDENT ROW
                console.log("second condition test");
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
                const parkValue = document.querySelector(`#student-1-assignment-1`);
                console.log(park)
                //console.log(parkValue.value);
                    console.log(newInput);
                tableCreator.addChildTo(newCell)(newInput);
                console.log(document.querySelector('#newInput'));
            })
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
        let assignmentId = assignmentsArray.length - 1 ;
        const assignmentRow = tableCreator.newElement("tr");
        tableCreator.setElementAttributeOf(assignmentRow)("id", "classRow");
        tableCreator.addChildTo(classTable)(assignmentRow);
    
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

            
}





        



document.addEventListener('DOMContentLoaded', init);





 
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



