//////////////////////////////////////////////////////////

const data = {
    students: {
        classes: {
            assignments: {}
        }
    },
    classes: {
        students: {},
        assignments: {}
    },
    assignments: {
        classes: {},
        students: {}
    }
}

state = [];

const totalPossible = {
    totalColumn: 0
}

console.log(totalPossible.totalColumn);

var addScoreInputDivOpen;

const studentLabelArray = [];

const assignmentLabelArray = [];

const totalPossibleArray = [];

const studentsArray = [];

const assignmentsArray = [];

const forkDiv = document.querySelector('#forknutz');

const classDiv = document.querySelector('#classContainer');

const attendanceDiv = document.querySelector('#attendanceContainer');

function init() {
    console.log("++++++++++++++++++!!|!+!|!!  PAGE LOADED  !!|!+!|!!+++++++++++++++++++++++++++++++++++++++++++!!|!+!|!!  PAGE LOADED  !!|!+!|!!+++++++++++++++++++++++++");
    //console.log("init function working");
    document.getElementById('addClassButton').addEventListener('click', addClassInputFormOpen);
    document.getElementById('addButtonClass').addEventListener('click', addClassToTable);
    document.getElementById('cancelButtonClass').addEventListener('click', cancelClassInputForm);

    document.getElementById('addAttendanceButton').addEventListener('click', addAttendanceInputFormOpen);
    document.getElementById('addButtonAttendance').addEventListener('click', addAttendanceToTable);
    document.getElementById('cancelButtonAttendance').addEventListener('click', cancelAttendanceInputForm);


    document.getElementById('addStudentButton').addEventListener('click', addStudentInputFormOpen);
    document.getElementById('addButtonStudent').addEventListener('click', addStudentToTable);
    document.getElementById('cancelButtonStudent').addEventListener('click', cancelStudentInputForm);

    document.getElementById('addAssignmentButton').addEventListener('click', addAssignmentInputFormOpen);
    document.getElementById('addButtonAssignment').addEventListener('click', addAssignmentToTable);
    document.getElementById('cancelButtonAssignment').addEventListener('click', cancelAssignmentInputForm);
    document.querySelector('#totalTest').addEventListener('click', changeValues);

    document.getElementById("addButtonStudent").style.cursor = "pointer";
    document.getElementById("addButtonClass").style.cursor = "pointer";
    document.getElementById("addButtonAssignment").style.cursor = "pointer";
    document.getElementById("cancelButtonStudent").style.cursor = "pointer";
    document.getElementById("cancelButtonClass").style.cursor = "pointer";
    document.getElementById("cancelButtonAssignment").style.cursor = "pointer";

    document.getElementById("addClassButton").style.cursor = "pointer";
    document.getElementById("addStudentButton").style.cursor = "pointer";
    document.getElementById("addAssignmentButton").style.cursor = "pointer";

    document.getElementById("addButtonTest").style.cursor = "pointer";
    console.log(document.getElementById("cancelButtonClass"));
    console.log(document.getElementById("canceEditScore"));
    document.getElementById("cancelEditScore").style.cursor = "pointer";

    document.getElementById("addButtonStudentLabel").style.cursor = "pointer";
    document.getElementById("cancelButtonStudentLabel").style.cursor = "pointer";
    document.getElementById("addAssignmentStudentLabel").style.cursor = "pointer";
    document.getElementById("cancelAssignmentStudentLabel").style.cursor = "pointer";

}

//classDiv.style.display = "none";

function addAttendanceInputFormOpen() {
    console.log("addattendace input form open");
    //document.querySelector('#attendanceContainer').className = "blur";
    changeClassName("#attendanceContainer")("blur");

    //console.log("addAttendanceInputFormOpen function was invoked!!!!!!!^^^^!!!!!!!");
    document.getElementById("addAttendanceDiv").style.display = "block";
}

function cancelAttendanceInputForm() {
    document.querySelector('#attendanceContainer').className = "table_container";
    //console.log("cancelAttendanceInputform was invoked!!@#");
    document.getElementById("addAttendanceDiv").style.display = "none";
}


function addClassInputFormOpen() {
    //document.querySelector('#classContainer').className = "blur";
    changeClassName("#classContainer")("blur");

    //console.log("addClassInputFormOpen function was invoked!!!!!!!^^^^!!!!!!!");
    document.getElementById("addClassDiv").style.display = "block";
}

function cancelClassInputForm() {
    document.querySelector('#classContainer').className = "table_container";
    //console.log("cancelClassInputform was invoked!!@#");
    document.getElementById("addClassDiv").style.display = "none";
}

function addStudentInputFormOpen() {
    //console.log("addStudentInputFormOpen function was invoked!_+_+_+__++_");
    document.getElementById("addStudentDiv").style.display = "block";
    changeClassName("#classContainer")("blur");
}

function cancelStudentInputForm() {
    //console.log("cancelStudentInputform was invoked!!@#");
    document.getElementById("addStudentDiv").style.display = "none";
    document.querySelector('#classContainer').style.display = "block";
    // !*! add functionality to set display to none if a table hasn't been created yet
    document.querySelector('#classContainer').className = "table_container";
}

function addAssignmentInputFormOpen() {
    //console.log("addAssignmentInputFormOpen function was invoked!**********************");
    document.getElementById("addAssignmentDiv").style.display = "block";
    changeClassName("#classContainer")("blur");
    //console.log(document.querySelector('#classContainer'));
}

function cancelAssignmentInputForm() {
    //console.log("cancelAssignmentInputform was invoked!!@#@#@#");
    document.getElementById("addAssignmentDiv").style.display = "none";
    document.querySelector('#classContainer').style.display = "block";
// !*! add functionality to set display to none if a table hasn't been created yet
    document.querySelector('#classContainer').className = "table_container";
}




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
        //console.log("newElement working");
        return document.createElement(`${typeOfElement}`);
    },

    setElementAttributeOf: function(element) {
        //console.log("setElement working");
        return function(attributeType, attributeValue) {
            //console.log("setElement inner working")
            element.setAttribute(`${attributeType}`, `${attributeValue}`);
        }
    },

    addChildTo: function(parent) {
        //console.log('addChildTo working');
            return function(newChild) {
            parent.appendChild(newChild);
        }
    },

    addRowTo: function(parent) {
        //console.log('addRowTo working');
        return function(position) {
            return parent.insertRow(position);
        }
    },

    addCellTo: function(parent) {
        //console.log('addCellTo working');
        return function(position) {
            return parent.insertCell(position);
        }
    },

    addTheadTo: function(parent) {
        //console.log('addTheadTo working');
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
        //console.log("addInsideAfterLastChild working");
        return function(newChild) {
            parent.insertAdjacentElement("beforeend", newChild);
        }
    }
};



function editStudentLabel() {
    const studentLabelInput = document.querySelector('#addStudentLabelInputField').value;
    console.log(studentLabelArray[0]);
    console.log(document.querySelector(`#student-${studentLabelArray[0]}-studentNameHeader`));
    const studentSpan = document.querySelector(`#student-${studentLabelArray[0]}-studentNameSpan`);
    console.log(studentSpan);
    studentLabelArray.pop();
    tableCreator.addTextContentTo(studentSpan)(studentLabelInput);

    console.log(studentSpan);

    const addStudentLabelInputDiv = document.querySelector('#addStudentLabelDiv');
    changeClassName("#classContainer")("table_container");
    addStudentLabelInputDiv.className = "hide";

}

function cancelEditStudentLabel() {
    studentLabelArray.pop();

    changeClassName("#classContainer")("table_container");


    const addStudentLabelInputDiv = document.querySelector('#addStudentLabelDiv');
    addStudentLabelInputDiv.className = "hide";
}

function editAssignmentLabel() {
    console.log("editAssignmentLabel hasteth beeneth invokedeth");
    const assignmentLabelInput = document.querySelector('#addAssignmentLabelInputField').value;
    console.log(assignmentLabelArray[0]);

    const assignmentSpan = document.querySelector(`#assignment-${assignmentLabelArray[0]}-assignmentSpan`);
    console.log(assignmentSpan);
    assignmentLabelArray.pop();

    tableCreator.addTextContentTo(assignmentSpan)(assignmentLabelInput);
    console.log(assignmentSpan);

    const addAssignmentLabelInputDiv = document.querySelector('#addAssignmentLabelDiv');
    changeClassName("#classContainer")("table_container");
    addAssignmentLabelInputDiv.className = "hide";

}

function cancelEditAssignmentLabel() {
    assignmentLabelArray.pop();

    changeClassName("#classContainer")("table_container");

    const addAssignmentLabelInputDiv = document.querySelector('#addAssignmentLabelDiv');
    addAssignmentLabelInputDiv.className = "hide";
}

function editTotalPossible() {
    console.log("editTotalPossible hasteth beeneth invokedeth");
    const assignmentLabelInput = document.querySelector('#editTotalPossibleInputField').value;
    console.log(totalPossibleArray[0]);

    const totalPossibleSpan = document.querySelector(`#assignment-${totalPossibleArray[0]}-totalPossibleSpan`);
    console.log(totalPossibleSpan);
    console.log(totalPossibleSpan.value);
    totalPossibleArray.pop();

    tableCreator.addTextContentTo(totalPossibleSpan)(assignmentLabelInput);
    console.log(totalPossibleSpan);

    const addAssignmentLabelInputDiv = document.querySelector('#editTotalPossibleDiv');
    changeClassName("#classContainer")("table_container");
    addAssignmentLabelInputDiv.className = "hide";

    const total = addTotalPossible();
    console.log(total);

    tableCreator.addTextContentTo(document.querySelector('#totalPossibleFinal'))(totalPossible.totalColumn);
    console.log(document.querySelector('#totalPossibleFinal').textContent);


}

function cancelEditTotalPossible() {
    totalPossibleArray.pop();

    changeClassName("#classContainer")("table_container");

    const addAssignmentLabelInputDiv = document.querySelector('#editTotalPossibleDiv');
    addAssignmentLabelInputDiv.className = "hide";
}




function cancelAddStudentScore() {
    console.log("cancel add student score invoked !");
    addScoreInputDivOpen = false;
    document.querySelector('#addScoreDiv').style.display = "none";
}

function changeDisplay(idOrClass) {
    return function(openClose) {
        document.querySelector(`${idOrClass}`).style.display = `${openClose}`;
    }
}

function changeClassName(idOrClass) {
    console.log(idOrClass);
    return function(openClose) {
        document.querySelector(`${idOrClass}`).className = `${openClose}`;
    }
}


function studentTotalBottom(student) {
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7&&&");
    var total = 0;
        for(i=1; i<=assignmentsArray.length; i++) {
            const score = parseInt(document.querySelector(`#student-${student}-assignment-${i}`).value);
            console.log(isNaN(score));
            if(isNaN(score) != true) {
                total += score;
            }
        }
    return total;
}

function studentOne() {
    console.log(studentTotalBottom(1));
}

function testOneTwo() {
    console.log("testing testing one two one two");
}












function addScoreClick() {
    const classText = document.querySelector('#totalPossibleFinal').textContent;
    // console.log(`here is the non existent text - ${classText}`);
    // if(classText == ""){
    //     return;
    // }

    console.log("addScoreClick");
    document.querySelector('#addScoreDiv').style.display = "none";
    addScoreInputDivOpen = false;


    console.log("addScoreClick working");
    const x = state[0];
    const y = state[1];


    console.log(x);
    console.log(y);
    document.querySelector('#addScoreDiv').className = "hide";
    const span = document.querySelector(`#student-${x}-assignment-${y}-scoreSpan`);
    console.log(span);
    const score = document.querySelector('#scoreInputField').value;
    console.log(score);
    tableCreator.addTextContentTo(span)(`${score}`);


    console.log(x);

    const newTotal = addScore(x, y);

    console.log(newTotal);
    const totalText = document.querySelector(`#student-${x}`);
    console.log(totalText);
    tableCreator.addTextContentTo(totalText)(`${newTotal}`);
    console.log(state);
    state.pop();
    state.pop();

};


function addTotalPossible() {
    console.log("addTotalPossible is in motion ^#^#^#^#^#^#^#");

    // const totalPossibleFinal = document.querySelector('#totalPossibleFinal').value;
    // console.log(`here is the non existent text - ${totalPossibleFinal}`);
    // if(totalPossibleFinal == ""){
    //     return;
    // }
console.log(assignmentsArray.length);
    console.log(document.querySelector(`#assignment-1-totalPossibleSpan`).textContent);
    var totalPossibleScore = 0;
    // if(assignmentsArray.length==1) {
    //     totalPossibleScore = parseInt(document.querySelector(`#assignment-1-totalPossibleSpan`).textContent);
        
    //     console.log(totalPossibleScore);
   for(i=1; i<=autoAssignmentsArray.length; i++) {
        console.log(i);
        const totalPossibleScoreInput = parseInt(document.querySelector(`#assignment-${i}-totalPossibleSpan`).textContent);
        console.log(totalPossibleScoreInput);
        console.log(isNaN(totalPossibleScoreInput));
        if(isNaN(totalPossibleScoreInput) != true) {
            totalPossibleScore += totalPossibleScoreInput;
        }
    }
    
    console.log(totalPossibleScore);
    totalPossibleArray.pop();

    totalPossible.totalColumn = totalPossibleScore;
    
    return totalPossibleScore; 
}


function addScore(x, y) {
    console.log(x + " --_-- " + y);
    var total = 0;
    for(i=1; i<=autoAssignmentsArray.length; i++) {
        const score = parseInt(document.querySelector(`#student-${x}-assignment-${i}-scoreSpan`).textContent);
        console.log(score);
        console.log(isNaN(score));
        if(isNaN(score) != true) {
            total += score;
        }
    }
    state.pop();
    state.pop();
    console.log(total);
return total;
}




   




function addAttendanceToTable() {
    console.log("addAttendanceToTable");
    const attendanceText = document.querySelector('#addAttendanceInputField').value;

    if(attendanceText == ""){
        return;
    }


    attendanceDiv.style.display = "block";
    console.log(attendanceDiv);
    document.getElementById("addAttendanceDiv").style.display = "none";
    document.querySelector('#attendanceContainer').className = "table_container";

    //console.log('addClassButton eventListener is working!');

    // CREATE TABLE ELEMENT
        const attendanceTable = tableCreator.newElement("table");
        tableCreator.setElementAttributeOf(attendanceTable)("id", "attendanceTable");
        tableCreator.setElementAttributeOf(attendanceTable)("align", "center");
        tableCreator.addChildTo(attendanceDiv)(attendanceTable);

    // CREATE COLUMN
        const colOne = tableCreator.newElement("col");
        tableCreator.setElementAttributeOf(colOne)("style", "background-color: orange");
        tableCreator.addChildTo(attendanceTable)(colOne);

    // CREATE SECOND COLUMN
        const colTwo = tableCreator.newElement("col");
        tableCreator.setElementAttributeOf(colTwo)("style", "background-color: purple");
        tableCreator.addChildTo(attendanceTable)(colTwo);
        tableCreator.addChildTo(attendanceTable)(colTwo);

    // CREATE THIRD COLUMN
        const colThree = tableCreator.newElement("col");
        tableCreator.setElementAttributeOf(colThree)("span", "100");
        tableCreator.setElementAttributeOf(colThree)("style", "background-color: orange");
        tableCreator.addChildTo(attendanceTable)(colThree);

    // CREATE ATTENDANCE TABLE HEADER
        const firstTableHeader = tableCreator.addTheadTo(attendanceTable)();
        tableCreator.setElementAttributeOf(firstTableHeader)("id", "firstTableHeader");
        const attendanceNameHeaderTag = tableCreator.newElement("th");
        tableCreator.setElementAttributeOf(attendanceNameHeaderTag)("colspan", "100");
        tableCreator.setElementAttributeOf(attendanceNameHeaderTag)("id", "classNameth");
        tableCreator.setElementAttributeOf(attendanceNameHeaderTag)("style", "background-color: brown");

    // ADD TEXT FROM NEW ATTENDANCE INPUT FIELD

        tableCreator.addTextContentTo(attendanceNameHeaderTag)(`${attendanceText}`);
        tableCreator.addChildTo(firstTableHeader)(attendanceNameHeaderTag);


}






function addClassToTable() {
    console.log("addClasToTable");
    const classText = document.querySelector('#addClassInputField').value;

    if(classText == ""){
        return;
    }

    classDiv.style.display = "block";
    console.log(classDiv);
    document.getElementById("addClassDiv").style.display = "none";
    document.querySelector('#classContainer').className = "table_container";

    //console.log('addClassButton eventListener is working!');

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

    // CREATE CLASS TABLE HEADER
        const firstTableHeader = tableCreator.addTheadTo(classTable)();
        tableCreator.setElementAttributeOf(firstTableHeader)("id", "firstTableHeader");
        const classNameHeaderTag = tableCreator.newElement("th");
        tableCreator.setElementAttributeOf(classNameHeaderTag)("colspan", "100");
        tableCreator.setElementAttributeOf(classNameHeaderTag)("id", "classNameth");
        tableCreator.setElementAttributeOf(classNameHeaderTag)("style", "background-color: brown");
    // ADD TEXT FROM NEW CLASS INPUT FIELD

        tableCreator.addTextContentTo(classNameHeaderTag)(`${classText}`);
        tableCreator.addChildTo(firstTableHeader)(classNameHeaderTag);


}








function addStudentToTable() {
    console.log("addStudentToTable");
    const classText = document.querySelector('#addStudentInputField').value;

    if(classText == ""){
        return;
    }

    document.querySelector('#classContainer').style.display = "block";
    document.querySelector('#addStudentDiv').style.display = "none";
    document.querySelector('#classContainer').className = "table_container";



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
    }

    if(assignmentsArray.length < 1 ) {
                console.log("second condition test");
            // ADD th ELEMENT TO STUDENT ROW
                studentLabelArray.pop();
                const studentId = studentsArray.length + 1;
                const secondTh = tableCreator.newElement("th");
                
                tableCreator.setElementAttributeOf(secondTh)("id", `student-${studentId}-studentNameHeader`);
                tableCreator.addChildTo(document.getElementById("studentNamesRow"))(secondTh);

                const assignArrayLength = assignmentsArray.length;
            // SET CLASS OF NEW th ELEMENT
                tableCreator.setElementAttributeOf(secondTh)("class", `${studentId}`);

            // CREATE NEW SPAN
                const studentSpan = tableCreator.newElement("span");
                console.log(studentSpan);
                tableCreator.addChildTo(secondTh)(studentSpan);
                //tableCreator.setElementAttributeOf(secondTh)("id", `student-${studentId}-studentNameSpan`);
                tableCreator.setElementAttributeOf(studentSpan)("id", `student-${studentId}-studentNameSpan`);

            // SET TEXT OF NEW th ELEMENT
                const assignmentText = document.querySelector('#addStudentInputField').value;
                tableCreator.addTextContentTo(studentSpan)(`${assignmentText}`);
console.log(secondTh);

            // CREATE BUTTON TO OPEN ADD STUDENT LABEL DIV
                const editStudentNameButton = tableCreator.newElement("button");
                tableCreator.setElementAttributeOf(editStudentNameButton)("id", `student-${studentId}-editStudentNameButton`); 
                tableCreator.setElementAttributeOf(editStudentNameButton)("data-studentLabelId", `${studentId}`); 

                const plusIcon = tableCreator.newElement("i");
                        tableCreator.setElementAttributeOf(plusIcon)("class", "fa fa-plus");
        
                        tableCreator.addChildTo(editStudentNameButton)(plusIcon);
        
        

                tableCreator.addChildTo(secondTh)(editStudentNameButton);

                document.querySelector(`#student-${studentId}-editStudentNameButton`).addEventListener("click", openEditStudentLabelDiv);
            
            
                function openEditStudentLabelDiv() {
                    changeClassName("#classContainer")("blur");

                    console.log(editStudentNameButton.dataset.studentlabelid);
                    studentLabelArray.push(editStudentNameButton.dataset.studentlabelid);
                    console.log(studentLabelArray);

                    console.log("openEditStudentLabelDiv is invoked 1 1 1 1 1 1 1 ")
                    const editStudentLabelDiv = document.querySelector('#addStudentLabelDiv');
                    tableCreator.setElementAttributeOf(editStudentLabelDiv)("class", "addStudentDiv");
                }
    
    
                document.querySelector(`#student-${studentId}-editStudentNameButton`).style.cursor = "pointer";

                console.log(" ttttttttttttttttttttttttttttttttttt");
                console.log(editStudentNameButton);
            // PUSH NEW STUDENT th ELEMENT TO STUDENTS ARRAY
                const first = document.getElementsByClassName(`${studentId}`);
                studentsArray.push(first);

    }

    if(assignmentsArray.length >= 1) {
        console.log("third condition test");
        studentLabelArray.pop();

        // ADD th ELEMENT TO STUDENT ROW
            const studentId = studentsArray.length + 1;
            const secondTh = tableCreator.newElement("th");
            tableCreator.setElementAttributeOf(secondTh)("id", `student-${studentId}-studentNameHeader`);

            tableCreator.addChildTo(document.getElementById("studentNamesRow"))(secondTh);

            const assignArrayLength = assignmentsArray.length;
        // SET CLASS OF NEW th ELEMENT
            tableCreator.setElementAttributeOf(secondTh)("class", `${studentId}`);
        // CREATE NEW SPAN
            const studentSpan = tableCreator.newElement("span");
            console.log(studentSpan);
            tableCreator.addChildTo(secondTh)(studentSpan);
            //tableCreator.setElementAttributeOf(secondTh)("id", `student-${studentId}-studentNameSpan`);
            tableCreator.setElementAttributeOf(studentSpan)("id", `student-${studentId}-studentNameSpan`);

        // SET TEXT OF NEW SPAN ELEMENT
            const assignmentText = document.querySelector('#addStudentInputField').value;
            tableCreator.addTextContentTo(studentSpan)(`${assignmentText}`);
console.log(secondTh);

        // CREATE BUTTON TO OPEN ADD STUDENT LABEL DIV
            const editStudentNameButton = tableCreator.newElement("button");
            tableCreator.setElementAttributeOf(editStudentNameButton)("id", `student-${studentId}-editStudentNameButton`); 
            tableCreator.setElementAttributeOf(editStudentNameButton)("data-studentLabelId", `${studentId}`); 

            const plusIcon = tableCreator.newElement("i");
            tableCreator.setElementAttributeOf(plusIcon)("class", "fa fa-plus");

            tableCreator.addChildTo(editStudentNameButton)(plusIcon);


            tableCreator.addChildTo(secondTh)(editStudentNameButton);
            console.log(editStudentNameButton);

            document.querySelector(`#student-${studentId}-editStudentNameButton`).style.cursor = "pointer";

            document.querySelector(`#student-${studentId}-editStudentNameButton`).addEventListener("click", openEditStudentLabelDiv);
            

            function openEditStudentLabelDiv() {

                changeClassName("#classContainer")("blur");

                console.log(editStudentNameButton.dataset.studentlabelid);
                studentLabelArray.push(editStudentNameButton.dataset.studentlabelid);
                console.log(studentLabelArray);


               console.log("openEditStudentLabelDiv is invoked 2 2 2 2 2 2 2 ")

                const editStudentLabelDiv = document.querySelector('#addStudentLabelDiv');
                tableCreator.setElementAttributeOf(editStudentLabelDiv)("class", "addStudentDiv");
            }


        // PUSH NEW STUDENT th ELEMENT TO STUDENTS ARRAY
            const first = document.getElementsByClassName(`${studentId}`);
            studentsArray.push(first);
        // ADD CELL TO EACH ASSIGNMENT FOR NEW STUDENT
            assignmentsArray.forEach((assignment, index) => {
                var indexOne = index + 1;
        // CREATE AND ADD PLACEHOLDER CELL
                const newCell = tableCreator.addCellTo(assignment)(-1);
                console.log(newCell);
        // SET CLASS OF NEW PLACEHOLDER CELL
        console.log(studentId + " --- " + indexOne);
                tableCreator.setElementAttributeOf(newCell)("class", "score");
                tableCreator.setElementAttributeOf(newCell)("id", `student-${studentId}-assignment-${indexOne}-scoreCell`);


                //const score = document.querySelector('#scoreInputField').value;
        // CREATE AND ADD SPAN TO SCORE CELL
                const span = tableCreator.newElement("span");
                tableCreator.setElementAttributeOf(span)("id", `student-${studentId}-assignment-${indexOne}-scoreSpan`);
                tableCreator.addChildTo(newCell)(span);
                tableCreator.addTextContentTo(span)("");


        // CREATE PLUS BUTTON TO OPEN SCORE POP-UP
                const addScoreButton = tableCreator.newElement("button");
                tableCreator.setElementAttributeOf(addScoreButton)("id", `student-${studentId}-assignment-${indexOne}-scoreButton`);
                tableCreator.setElementAttributeOf(addScoreButton)("data-student", `${studentId}`);
                tableCreator.setElementAttributeOf(addScoreButton)("data-assignment", `${indexOne}`);
                tableCreator.setElementAttributeOf(addScoreButton)("class", "addScoreButton");
                tableCreator.setElementAttributeOf(addScoreButton)("style", "cursor: pointer");

                const plusIcon = tableCreator.newElement("i");
        //<i class="material-icons">face</i>
                tableCreator.setElementAttributeOf(plusIcon)("class", "fa fa-plus");

                tableCreator.addChildTo(addScoreButton)(plusIcon);

                console.log(addScoreButton);

            tableCreator.addChildTo(newCell)(addScoreButton);


            console.log(document.querySelector(`#student-${studentId}-assignment-${indexOne}-scoreButton`));

                const x = document.querySelector(`#student-${studentId}-assignment-${indexOne}-scoreButton`).dataset.student;
                const y = document.querySelector(`#student-${studentId}-assignment-${indexOne}-scoreButton`).dataset.assignment;
                console.log(x);

                addScoreButton.addEventListener('click', function() {

                    document.querySelector('#addScoreDiv').style.display = "block";

                    state.pop();
                    state.pop();

                    console.log(addScoreButton.dataset.student);
                    state.push(addScoreButton.dataset.student);
                    console.log(addScoreButton.dataset.assignment);
                    state.push(addScoreButton.dataset.assignment);

                    console.log(state);

                    console.log("+++++++++++**********************&&&&&&&&&&%%%%%");

                    document.querySelector('#addScoreDiv').className = "addStudentDiv";


                });


        //addScoreClick();
            //document.querySelector('#cancelScoreButton').addEventListener('click', cancelScore);

    })




            const Id = studentsArray.length;
            // CREATE th HEADER FOR STUDENT TOTAL
                const studentTotalHeader = tableCreator.newElement("th");
            // SET CLASS OF NEW th ELEMENT
                tableCreator.setElementAttributeOf(studentTotalHeader)("id", `student-${Id}`);
            // SET TEXT OF NEW th ELEMENT
            //console.log(studentTotalBottom(1));
            //const assignmentText = document.querySelector('#addStudentInputField').value;
            //var finalTotal = studentTotalBottom((studentsArray.length));
            //console.log(finalTotal);

            //tableCreator.addTextContentTo(studentTotalHeader)(`${newTotal}`);

            tableCreator.addTextContentTo(studentTotalHeader)("student poop test");


                //tableCreator.addTextContentTo(studentTotalHeader)("1299");

            // ADD th ELEMENT TO TOTALS ROW
                tableCreator.addChildTo(document.getElementById("studentTotalsRow"))(studentTotalHeader);

    }
}







const autoTotalPossible = [42, 180, 680, 183, 9];

const autoStudentsArray = ["Gary", "Harry", "Larry", "Barry", "Sandra"];

const autoClassArray = ["stinky poop class", "fart class", "poopy stink class"];


const autoAssignmentsArray = [{
    name: "doctoralThesis",
    scores: [22, 0, 679, 180, 9]
}, 
{
    name: "persuasive essay",
    scores: [7, 48, 513, 77, 5]
},
{    
    name: "final midterm exam",
    scores: [12, 42, 598, 179, 8]
}]

console.log(autoAssignmentsArray[1].scores[2]);
console.log(autoAssignmentsArray[0].name);
console.log(autoAssignmentsArray.length);


// IMPLEMENT UNIQUE AUTOID FOR EACH  INDIVIDUAL CLASS TABLE PERSIST


(function automateClassTable() {

    if(autoClassArray.length >= 1) {
        console.log("automateClassTable is up and running yall!!!!!");
        const classText = autoClassArray[0];
        console.log(classText);

        if(classText == ""){
            return;
        }

    classDiv.style.display = "block";
    document.getElementById("addClassDiv").style.display = "none";
    document.querySelector('#classContainer').className = "table_container";

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

    // ADD TEXT FROM NEW CLASS INPUT FIELD
        tableCreator.addTextContentTo(classNameHeaderTag)(`${classText}`);
        tableCreator.addChildTo(firstTableHeader)(classNameHeaderTag);
    }

    console.log("addStudentToTable");
    for(i=0; i<autoAssignmentsArray.length; i++) {
        const assignmentText = autoAssignmentsArray[i];

        if(assignmentText == ""){
            return;
        }
    }

    document.querySelector('#classContainer').style.display = "block";
    document.querySelector('#addStudentDiv').style.display = "none";
    document.querySelector('#classContainer').className = "table_container";

    //if(autoAssignmentsArray.length < 1 && autoStudentsArray.length < 1) {

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
    //}

    // -- -- -- -- -- -- -- -- -- -- uu uu uu uu uu ii ii ii ii ii ii ll ll ll ll ll 




    // ADD STUDENT NAME HEADERS
        for(k=0; k<autoStudentsArray.length; k++) {
    // ADD th ELEMENT TO STUDENT ROW
        const studentId = k + 1;
        const secondTh = tableCreator.newElement("th");
                
        tableCreator.setElementAttributeOf(secondTh)("id", `student-${studentId}-studentNameHeader`);
        tableCreator.addChildTo(document.getElementById("studentNamesRow"))(secondTh);

    // SET CLASS OF NEW th ELEMENT
        tableCreator.setElementAttributeOf(secondTh)("class", `${studentId}`);

    // CREATE NEW SPAN
        const studentSpan = tableCreator.newElement("span");
        console.log(studentSpan);
        tableCreator.addChildTo(secondTh)(studentSpan);
        tableCreator.setElementAttributeOf(studentSpan)("id", `student-${studentId}-studentNameSpan`);

    // SET TEXT OF NEW th ELEMENT
        const autoStudentName = autoStudentsArray[k];
        tableCreator.addTextContentTo(studentSpan)(`${autoStudentName}`);

    // CREATE BUTTON TO OPEN ADD STUDENT LABEL DIV
        const editStudentNameButton = tableCreator.newElement("button");
        tableCreator.setElementAttributeOf(editStudentNameButton)("id", `student-${studentId}-editStudentNameButton`); 
        tableCreator.setElementAttributeOf(editStudentNameButton)("data-studentLabelId", `${studentId}`); 

        const plusIcon = tableCreator.newElement("i");
        tableCreator.setElementAttributeOf(plusIcon)("class", "fa fa-plus");
        
        tableCreator.addChildTo(editStudentNameButton)(plusIcon);
        
        

        tableCreator.addChildTo(secondTh)(editStudentNameButton);

        document.querySelector(`#student-${studentId}-editStudentNameButton`).addEventListener("click", openEditStudentLabelDiv);
            
            
        function openEditStudentLabelDiv() {
            changeClassName("#classContainer")("blur");

            console.log(editStudentNameButton.dataset.studentlabelid);
            studentLabelArray.push(editStudentNameButton.dataset.studentlabelid);
            console.log(studentLabelArray);

            console.log("openEditStudentLabelDiv is invoked 1 1 1 1 1 1 1 ")
            const editStudentLabelDiv = document.querySelector('#addStudentLabelDiv');
            tableCreator.setElementAttributeOf(editStudentLabelDiv)("class", "addStudentDiv");
        }
    
    
            document.querySelector(`#student-${studentId}-editStudentNameButton`).style.cursor = "pointer";

            console.log(" ttttttttttttttttttttttttttttttttttt");
            console.log(editStudentNameButton);

        }
 
    // ______________________________________________________________________________
    // ------------------------------------------------------------------------------
    // __--__--__--__--__ __--__--__--__-- __--__--__--__-- __--__--__--__-- __--__--





console.log(autoAssignmentsArray.length);

    for(i=0; i<autoAssignmentsArray.length; i++) {
        console.log(autoAssignmentsArray[i]);
        let assignmentId = i + 1;
        console.log(assignmentId);
    // INSERT ASSIGNMENT ROW 
        console.log("add assignment row test @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        const assignmentRow = classTable.insertRow(assignmentId);
        console.log(assignmentRow);
    // SET ATTRIBUTES FOR NEW ASSIGNMENT tr
        tableCreator.setElementAttributeOf(assignmentRow)("id", `row-${assignmentId}`);
        tableCreator.setElementAttributeOf(assignmentRow)("data-id", `${assignmentId}`);
        console.log(assignmentRow);
    

    // CREATE th FOR NEW ASSIGNMENT
        const assignmentName = tableCreator.newElement("th");
        tableCreator.addChildTo(assignmentRow)(assignmentName);
        tableCreator.setElementAttributeOf(assignmentName)("class", "headerCorrect");

        // CREATE NEW SPAN
            const assignmentSpan = tableCreator.newElement("span");
            console.log(assignmentSpan);
            tableCreator.addChildTo(assignmentName)(assignmentSpan);
            tableCreator.setElementAttributeOf(assignmentSpan)("id", `assignment-${assignmentId}-assignmentNameSpan`);
    
        // ADD TEXT TO ASSIGNMENT SPAN
            const assignmentText = autoAssignmentsArray[i].name;

            tableCreator.addTextContentTo(assignmentSpan)(`${assignmentText}`);
            tableCreator.setElementAttributeOf(assignmentSpan)("id", `assignment-${assignmentId}-assignmentSpan`);

            tableCreator.setElementAttributeOf(assignmentName)("data-assignmentName", `${assignmentText}`);


        // CREATE EDIT BUTTON FOR NEW ASSIGNMENT
            const editAssignmentNameButton = tableCreator.newElement("button");
            tableCreator.setElementAttributeOf(editAssignmentNameButton)("id", `assignment-${assignmentId}-editAssignmentNameButton`); 
            tableCreator.setElementAttributeOf(editAssignmentNameButton)("data-assignmentId", `${assignmentId}`); 

            tableCreator.addTextContentTo(editAssignmentNameButton)("+");
            console.log(":::::::::::::::::::::::::::::::::::::::::::::");
            console.log(assignmentName);    
            tableCreator.addChildTo(assignmentName)(editAssignmentNameButton);


        document.querySelector(`#assignment-${assignmentId}-editAssignmentNameButton`).addEventListener("click", openEditAssignmentLabelDiv);
            
            
        function openEditAssignmentLabelDiv() {

            changeClassName("#classContainer")("blur");

            console.log(editAssignmentNameButton.dataset.assignmentid);
            assignmentLabelArray.push(editAssignmentNameButton.dataset.assignmentid);
            console.log(assignmentLabelArray);


            console.log("openEditAssignmentLabelDiv is invoked ! ! ! ! ! ")
            const editAssignmentLabelDiv = document.querySelector('#addAssignmentLabelDiv');
            tableCreator.setElementAttributeOf(editAssignmentLabelDiv)("class", "addStudentDiv");
        }



        document.querySelector(`#assignment-${assignmentId}-editAssignmentNameButton`).style.cursor = "pointer";


        console.log(editAssignmentNameButton);


    /////////////////////////////////////////////////////////////////////////////////////////////////////// 


    
        var correctCell = autoAssignmentsArray.length - 1;
    
    // ADD PLACEHOLDER CELL FOR TOTAL POSSIBLE POINTS TO NEW ASSIGNMENT ROW
        const currentRow = document.querySelector(`#row-${assignmentId}`);
     
        const newCell = tableCreator.addCellTo(currentRow)(-1);
        const studentId = studentsArray.length;
        const assignmentsArrayLength = autoAssignmentsArray.length;
    
    // CREATE NEW SPAN
        const totalPossibleSpan = tableCreator.newElement("span");
        tableCreator.addTextContentTo(totalPossibleSpan)(autoTotalPossible[i]);
        console.log(totalPossibleSpan);
        tableCreator.addChildTo(newCell)(totalPossibleSpan);
        tableCreator.setElementAttributeOf(totalPossibleSpan)("id", `assignment-${assignmentId}-totalPossibleSpan`);
        tableCreator.setElementAttributeOf(document.querySelector(`#assignment-${assignmentId}-totalPossibleSpan`))("data-totalpossible", `${assignmentId}`);
     
     
    // ADD EDIT BUTTON TO TOTAL POSSIBLE 
        const editTotalPossibleButton = tableCreator.newElement("button");
        tableCreator.setElementAttributeOf(editTotalPossibleButton)("id", `assignment-${assignmentId}-editTotalPossibleButton`); 
        tableCreator.addTextContentTo(editTotalPossibleButton)("+");
        console.log(":::::::::::::::::::::::::::::::::::::::::::::");
        console.log(assignmentName);
        tableCreator.addChildTo(newCell)(editTotalPossibleButton);
    
        document.querySelector(`#assignment-${assignmentId}-editTotalPossibleButton`).style.cursor = "pointer";
    
    
        console.log(editTotalPossibleButton);
    
        document.querySelector(`#assignment-${assignmentId}-editTotalPossibleButton`).addEventListener("click", openEditTotalPossibleDiv);
                
                
        function openEditTotalPossibleDiv() {
            console.log("openEditTotalPossibleDiv *******************");
    
    
            changeClassName("#classContainer")("blur");
    
            const totalSpan = document.querySelector(`#assignment-${assignmentId}-totalPossibleSpan`);
    
            console.log(totalSpan);
            console.log(totalSpan.dataset.totalpossible);
            totalPossibleArray.push(totalSpan.dataset.totalpossible);
            console.log(totalPossibleArray);
    
    
            console.log("openEditTotalPossibleDiv is invoked ! ! ! ! ! ")
            const editTotalPossibleDiv = document.querySelector('#editTotalPossibleDiv');
            tableCreator.setElementAttributeOf(editTotalPossibleDiv)("class", "addStudentDiv");
        }
    
    
    
        document.querySelector(`#assignment-${assignmentId}-editAssignmentNameButton`).style.cursor = "pointer";

////////////////////////////////////////////////////


    //tableCreator.setElementAttributeOf(shit)("style", "background-color: purple; border: purple");
    // ADD PLACEHOLDER CELLS FOR ASSIGNMENT SCORES FOR EACH STUDENT
        console.log(autoStudentsArray);
        console.log(autoStudentsArray[0]);
        for(j=0; j<autoStudentsArray.length; j  ++) {
            const studsLoop = j + 1;
            //console.log(studsLoop);
            console.log(autoAssignmentsArray[correctCell]);
            const newCell = tableCreator.addCellTo(currentRow)(-1);
            console.log(newCell);
    tableCreator.setElementAttributeOf(newCell)("id", `student-${studsLoop}-assignment-${assignmentId}-scoreCell`);
    tableCreator.setElementAttributeOf(newCell)("class", "score");


/////////////////////////////////////-----------------------------------------------
        // CREATE SPAN ELEMENT
            const span = tableCreator.newElement("span");
            console.log(span);
            tableCreator.setElementAttributeOf(span)("id", `student-${studsLoop}-assignment-${assignmentId }-scoreSpan`);
            tableCreator.addChildTo(newCell)(span);
            tableCreator.addTextContentTo(span)(autoAssignmentsArray[i].scores[j]);


        // CREATE PLUS BUTTON TO OPEN SCORE POP-UP
            const addScoreButton = tableCreator.newElement("button");
            console.log(addScoreButton);
            tableCreator.setElementAttributeOf(addScoreButton)("id", `student-${studsLoop}-assignment-${assignmentId}-scoreButton`);
            tableCreator.setElementAttributeOf(addScoreButton)("class", "addScoreButton");
            tableCreator.setElementAttributeOf(addScoreButton)("data-student", `${studsLoop}`);
            tableCreator.setElementAttributeOf(addScoreButton)("data-assignment", `${assignmentId}`);
            tableCreator.setElementAttributeOf(addScoreButton)("style", "cursor: pointer");
            const plusIcon = tableCreator.newElement("i");
            console.log(plusIcon);
            //<i class="material-icons">face</i>
            tableCreator.setElementAttributeOf(plusIcon)("class", "fa fa-plus");
            //tableCreator.setElementAttributeOf(plusIcon)("class", "material-icons");
            //tableCreator.addInnerHtmlTo(plusIcon)("face");

            tableCreator.addChildTo(addScoreButton)(plusIcon);


            tableCreator.addChildTo(newCell)(addScoreButton);
            document.querySelector(".addScoreButton").style.cursor = "pointer";


            const x = document.querySelector(`#student-${studsLoop}-assignment-${assignmentId}-scoreButton`).dataset.student;
            const y = document.querySelector(`#student-${studsLoop}-assignment-${assignmentId}-scoreButton`).dataset.assignment;
            console.log(x);
            console.log(y);

            
            addScoreButton.addEventListener('click', function() {
                if(addScoreInputDivOpen == true) {
                    return;
                }
                addScoreInputDivOpen = true;
                
                document.querySelector('#addScoreDiv').style.display = "block";

                state.pop();
                state.pop();

                console.log(addScoreButton.dataset.student);
                console.log(addScoreButton.dataset.assignment);

                state.push(addScoreButton.dataset.student);
                state.push(addScoreButton.dataset.assignment);


                console.log("+++++++++++**********************&&&&&&&&&&%%%%%");
                document.querySelector('#addScoreDiv').className = "addStudentDiv";
            });


            console.log("end of student loop!!!!");

////////////////////////////////////// ---------------------------------
        }

    
        console.log("end of assignment loop!!!!");
        console.log(i);
        console.log(autoAssignmentsArray.length);






    }


        //if(assignmentsArray.length == 1) {

            // CREATE STUDENT TOTAL ROW
                const studentTotalRow = tableCreator.newElement("tr");
                tableCreator.setElementAttributeOf(studentTotalRow)("id", "studentTotalsRow");
                tableCreator.setElementAttributeOf(studentTotalRow)("style", "background-color: rgb(255, 81, 0)");
            // ADD ROW TO TABLE
                //tableCreator.addChildTo(classTable)(studentTotalRow);
                tableCreator.addInsideAfterLastChild(classTable)(studentTotalRow);

            // CREATE HEADER TAG
                const header = tableCreator.newElement("th");
            // ADD HEADER TAG TO ROW
                tableCreator.addChildTo(studentTotalRow)(header);
                tableCreator.setElementAttributeOf(header)("style", "width: 20px");
                tableCreator.addTextContentTo(header)("");

            // CREATE th ELEMENT
                const totalThead = tableCreator.newElement("th");
                tableCreator.setElementAttributeOf(totalThead)("id", "totalPossibleFinal");
                const totalPossibleFinal = document.querySelector(`#totalPossibleFinal`);
                console.log(totalPossibleFinal);
                tableCreator.addChildTo(studentTotalRow)(totalThead);
                const studentTotalPoss = tableCreator.addTextContentTo(totalThead)("Total Possible Row");


        console.log(`+ + + + + + + + + + + + `);
            for(m=0; m < autoStudentsArray.length; m++) {
            console.log(m);
                console.log("TOTALS ROW TEST %%%$$$$%%%%$$$$%%%%$$$$");
            // CREATE th HEADER FOR STUDENT TOTAL
                const studentTotalHeader = tableCreator.newElement("th");
            // SET CLASS OF NEW th ELEMENT
                tableCreator.setElementAttributeOf(studentTotalHeader)("id", `student-${m+1}`);
                console.log(studentTotalHeader);
            // SET TEXT OF NEW th ELEMENT
            console.log("550 550 550 550 550");

             tableCreator.addTextContentTo(studentTotalHeader)(autoTotalPossible[m]);
            // ADD th ELEMENT TO TOTALS ROW
                tableCreator.addChildTo(studentTotalRow)(studentTotalHeader);
        }
    //}







    //}
console.log("weird behavior testtttttttttttttttttttt");

})();











function addAssignmentToTable() {
    console.log("addAssignmentToTable");
    const classText = document.querySelector('#addAssignmentInputField').value;

    if(classText == ""){
        return;
    }

    document.querySelector('#classContainer').style.display = "block";
    document.querySelector('#addAssignmentDiv').style.display = "none";
    document.querySelector('#classContainer').className = "table_container";


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

    
    console.log(assignmentsArray[3]);
    console.log(assignmentsArray);
    console.log(assignmentsArray[3]);
    console.log(assignmentsArray.length);
    console.log(assignmentsArray.length + 1);
    
    let assignmentId = assignmentsArray.length + 1;
    // INSERT ASSIGNMENT ROW 
        console.log("add assignment row test @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        const assignmentRow = classTable.insertRow(assignmentId);
    // SET ATTRIBUTES FOR NEW ASSIGNMENT tr
            tableCreator.setElementAttributeOf(assignmentRow)("id", `${assignmentId}`);
            tableCreator.setElementAttributeOf(assignmentRow)("data-id", `${assignmentId}`);
            console.log(assignmentRow);
    

    // CREATE th FOR NEW ASSIGNMENT
        const assignmentName = tableCreator.newElement("th");
        tableCreator.addChildTo(assignmentRow)(assignmentName);
        tableCreator.setElementAttributeOf(assignmentName)("class", "headerCorrect");

                // CREATE NEW SPAN
                    const assignmentSpan = tableCreator.newElement("span");
                    console.log(assignmentSpan);
                    tableCreator.addChildTo(assignmentName)(assignmentSpan);
                    tableCreator.setElementAttributeOf(assignmentSpan)("id", `student-${assignmentId}-assignmentNameSpan`);
    
        // ADD TEXT TO ASSIGNMENT SPAN
            const assignmentText = document.querySelector('#addAssignmentInputField').value;

            tableCreator.addTextContentTo(assignmentSpan)(`${assignmentText}`);
            tableCreator.setElementAttributeOf(assignmentSpan)("id", `assignment-${assignmentId}-assignmentSpan`);

            tableCreator.setElementAttributeOf(assignmentName)("data-assignmentName", `${assignmentText}`);

    
    
    // CREATE EDIT BUTTON FOR NEW ASSIGNMENT
    const editAssignmentNameButton = tableCreator.newElement("button");
        tableCreator.setElementAttributeOf(editAssignmentNameButton)("id", `assignment-${assignmentId}-editAssignmentNameButton`); 
        tableCreator.setElementAttributeOf(editAssignmentNameButton)("data-assignmentId", `${assignmentId}`); 

        tableCreator.addTextContentTo(editAssignmentNameButton)("+");
        console.log(":::::::::::::::::::::::::::::::::::::::::::::");
        console.log(assignmentName);
        tableCreator.addChildTo(assignmentName)(editAssignmentNameButton);

        document.querySelector(`#assignment-${assignmentId}-editAssignmentNameButton`).addEventListener("click", openEditAssignmentLabelDiv);
            
            
        function openEditAssignmentLabelDiv() {

            changeClassName("#classContainer")("blur");

            console.log(editAssignmentNameButton.dataset.assignmentid);
            assignmentLabelArray.push(editAssignmentNameButton.dataset.assignmentid);
            console.log(assignmentLabelArray);


            console.log("openEditAssignmentLabelDiv is invoked ! ! ! ! ! ")
            const editAssignmentLabelDiv = document.querySelector('#addAssignmentLabelDiv');
            tableCreator.setElementAttributeOf(editAssignmentLabelDiv)("class", "addStudentDiv");
        }



        document.querySelector(`#assignment-${assignmentId}-editAssignmentNameButton`).style.cursor = "pointer";


        console.log(editAssignmentNameButton);




 
    // PUSH NEW ASSIGNMENT tr ELEMENT TO ASSIGNMENTS ARRAY
        assignmentsArray.push(assignmentRow);
        console.log(assignmentsArray);
        console.log(assignmentsArray.length);

        var correctCell = assignmentsArray.length - 1;
        var lengthStudents = studentsArray.length;
        console.log(studentsArray);

    // ADD PLACEHOLDER CELL FOR TOTAL POSSIBLE POINTS TO NEW ASSIGNMENT ROW
        const newCell = tableCreator.addCellTo(assignmentsArray[correctCell])(-1);
        const studentId = studentsArray.length;
        const assignmentArrayLength = assignmentsArray.length;

    // CREATE NEW SPAN
        console.log(assignmentArrayLength);
        const totalPossibleSpan = tableCreator.newElement("span");
        console.log(totalPossibleSpan);
        tableCreator.addChildTo(newCell)(totalPossibleSpan);
        tableCreator.setElementAttributeOf(totalPossibleSpan)("id", `assignment-${assignmentArrayLength}-totalPossibleSpan`);
        tableCreator.setElementAttributeOf(document.querySelector(`#assignment-${assignmentArrayLength}-totalPossibleSpan`))("data-totalpossible", `${assignmentArrayLength}`);
 
 
    // ADD EDIT BUTTON TO TOTAL POSSIBLE 
        const editTotalPossibleButton = tableCreator.newElement("button");
        tableCreator.setElementAttributeOf(editTotalPossibleButton)("id", `assignment-${assignmentArrayLength}-editTotalPossibleButton`); 
        tableCreator.addTextContentTo(editTotalPossibleButton)("+");
        console.log(":::::::::::::::::::::::::::::::::::::::::::::");
        console.log(assignmentName);
        tableCreator.addChildTo(newCell)(editTotalPossibleButton);

        document.querySelector(`#assignment-${assignmentArrayLength}-editTotalPossibleButton`).style.cursor = "pointer";


        console.log(editTotalPossibleButton);

        document.querySelector(`#assignment-${assignmentArrayLength}-editTotalPossibleButton`).addEventListener("click", openEditTotalPossibleDiv);
            
            
        function openEditTotalPossibleDiv() {
            console.log("openEditTotalPossibleDiv *******************");
            console.log(assignmentArrayLength);


            changeClassName("#classContainer")("blur");

            const totalSpan = document.querySelector(`#assignment-${assignmentArrayLength}-totalPossibleSpan`);

            console.log(totalSpan);
            console.log(totalSpan.dataset.totalpossible);
            totalPossibleArray.push(totalSpan.dataset.totalpossible);
            console.log(totalPossibleArray);


            console.log("openEditTotalPossibleDiv is invoked ! ! ! ! ! ")
            const editTotalPossibleDiv = document.querySelector('#editTotalPossibleDiv');
            tableCreator.setElementAttributeOf(editTotalPossibleDiv)("class", "addStudentDiv");
        }



        document.querySelector(`#assignment-${assignmentId}-editAssignmentNameButton`).style.cursor = "pointer";





    //tableCreator.setElementAttributeOf(shit)("style", "background-color: purple; border: purple");
        // ADD PLACEHOLDER CELLS FOR ASSIGNMENT SCORES FOR EACH STUDENT
            for(i=0; i < lengthStudents; i++) {
                const studsLoop = i + 1;
                //console.log(studsLoop);
                const newCell = tableCreator.addCellTo(assignmentsArray[correctCell])(-1);
        tableCreator.setElementAttributeOf(newCell)("id", `student-${studsLoop}-assignment-${assignmentId}-scoreCell`);
        tableCreator.setElementAttributeOf(newCell)("class", "score");


/////////////////////////////////////-----------------------------------------------
            // CREATE SPAN ELEMENT
                const span = tableCreator.newElement("span");
                tableCreator.setElementAttributeOf(span)("id", `student-${studsLoop}-assignment-${assignmentId }-scoreSpan`);
                tableCreator.addChildTo(newCell)(span);
                tableCreator.addTextContentTo(span)("");


            // CREATE PLUS BUTTON TO OPEN SCORE POP-UP
                const addScoreButton = tableCreator.newElement("button");
                tableCreator.setElementAttributeOf(addScoreButton)("id", `student-${studsLoop}-assignment-${assignmentId}-scoreButton`);
                tableCreator.setElementAttributeOf(addScoreButton)("class", "addScoreButton");
                tableCreator.setElementAttributeOf(addScoreButton)("data-student", `${studsLoop}`);
                tableCreator.setElementAttributeOf(addScoreButton)("data-assignment", `${assignmentId}`);
                tableCreator.setElementAttributeOf(addScoreButton)("style", "cursor: pointer");
                const plusIcon = tableCreator.newElement("i");
                //<i class="material-icons">face</i>
                tableCreator.setElementAttributeOf(plusIcon)("class", "fa fa-plus");
                //tableCreator.setElementAttributeOf(plusIcon)("class", "material-icons");
                //tableCreator.addInnerHtmlTo(plusIcon)("face");

                tableCreator.addChildTo(addScoreButton)(plusIcon);

                //tableCreator.setElementAttributeOf(addScoreButton)("onclick", "addScore(x,y)");

                //console.log(addScoreButton.dataset);
                tableCreator.addChildTo(newCell)(addScoreButton);
                document.querySelector(".addScoreButton").style.cursor = "pointer";

                // const cancelScoreButton = tableCreator.newElement("button");
                // tableCreator.setElementAttributeOf(cancelScoreButton)("id", "cancelScoreButton");
                // tableCreator.addChildTo(newCell)(cancelScoreButton);

                const x = document.querySelector(`#student-${studsLoop}-assignment-${assignmentId}-scoreButton`).dataset.student;
                const y = document.querySelector(`#student-${studsLoop}-assignment-${assignmentId}-scoreButton`).dataset.assignment;



                addScoreButton.addEventListener('click', function() {
                    if(addScoreInputDivOpen == true) {
                        return;
                    }
                    addScoreInputDivOpen = true;
                    
                    document.querySelector('#addScoreDiv').style.display = "block";
    
                    state.pop();
                    state.pop();

                    state.push(addScoreButton.dataset.student);
                    state.push(addScoreButton.dataset.assignment);


                    console.log("+++++++++++**********************&&&&&&&&&&%%%%%");
                    document.querySelector('#addScoreDiv').className = "addStudentDiv";
                });

                //document.querySelector('#cancelScoreButton').addEventListener('click', cancelScore);


////////////////////////////////////// ---------------------------------

                //console.log(document.querySelector(`#student-${studsLoop}-assignment-${assignArrayLength}`));
            }

//////////  TOTALS ROW CREATION
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
                    tableCreator.setElementAttributeOf(totalTh)("id", "totalPossibleFinal");
                    const totalPossibleFinal = document.querySelector(`#totalPossibleFinal`);
                    console.log(totalPossibleFinal);
                    tableCreator.addChildTo(studentTotalRow)(totalTh);
                    const studentTotal = tableCreator.addTextContentTo(totalTh)("Total Possible Row");


            console.log(`${lengthStudents} + + + + + + + + + + + + `);
            for(i=0; i < studentsArray.length; i++) {
                console.log(i);
            }
                for(i=0; i < studentsArray.length; i++) {
                console.log(i);
                    console.log("TOTALS ROW TEST %%%$$$$%%%%$$$$%%%%$$$$");
                // CREATE th HEADER FOR STUDENT TOTAL
                    const studentTotalHeader = tableCreator.newElement("th");
                // SET CLASS OF NEW th ELEMENT
                    tableCreator.setElementAttributeOf(studentTotalHeader)("id", `student-${i+1}`);
                    console.log(studentTotalHeader);
                // SET TEXT OF NEW th ELEMENT
                console.log("550 550 550 550 550");
                //testOneTwo();
                //studentTotalBottom(better);
                var better = i + 1;
                console.log(better);
                //console.log(studentTotalBottom(i));
                // if(studentTotalBottom(i)) {
                //     tableCreator.addTextContentTo(studentTotalHeader)("poop test");
                // }

                    //var finalTotal = studentTotalBottom(better);
                    //console.log(finalTotal);
                    //tableCreator.addTextContentTo(studentTotalHeader)(`${finalTotal}`);
                tableCreator.addTextContentTo(studentTotalHeader)("poop test");
                // ADD th ELEMENT TO TOTALS ROW
                    tableCreator.addChildTo(document.getElementById("studentTotalsRow"))(studentTotalHeader);
            }
        }
}

function changeValues() {
    let score = document.querySelector('#student-1-assignment-2');
    let scoreDeux = document.querySelector('#student-2-assignment-3');
    score.value = "42";
    scoreDeux.value = "420 ";
    console.log(score)
}


// function addScore() {
//     console.log(x + " --_-- " + y);
//     //const score = document.querySelector('student-${student}-assignment-${assignment}');
// }







document.addEventListener('DOMContentLoaded', init);







//////////////////////////////////////////////////////////




