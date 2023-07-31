
function addNewSField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("SField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");


    let sOB = document.getElementById("sk");
    let sAddButtonOb = document.getElementById("SAddButton");

    sOB.insertBefore(newNode, sAddButtonOb);
}

function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 5);
    newNode.setAttribute("placeholder", "Enter Here");


    let weOB = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOB.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 5);
    newNode.setAttribute("placeholder", "Enter Here");


    let aqOB = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOB.insertBefore(newNode, aqAddButtonOb);
}

function generateCV() {

    
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    let ss = document.getElementsByClassName("SField");
    let str2 = ""; 
    for(let e of ss) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("sT").innerHTML = str2;

    let wes = document.getElementsByClassName("weField");
    let str = ""; 
    for(let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;

    let aqs = document.getElementsByClassName("aqField");
    let str1 = ""; 
    for(let e of aqs) {
        str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    // setting image

    let file=document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    // set image to template

    reader.onloadend = function () {
        document.getElementById("imgTemplate").src = reader.result;
    };

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

function printCV() {
    window.print();
}