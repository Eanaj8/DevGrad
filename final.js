
let elForm = document.getElementById("dev-input")
let elDisplayButton = document.getElementById("button1")
let devArr = []


let devGrads = function(name, bootCamp, language) {
    this.name = name;
    this.bootCamp = bootCamp;
    this.language = language;

};

let firstGraduate = new devGrads("Sammie Leonard","Code Partners", "JS,Ruby,Python");
let secondGraduate = new devGrads("Jovan Leonard","Carroll Academy", "HTML,JS,CSS");
let thirdGraduate = new devGrads("Jamal Leonard","Coding Warehouse","Java,JS,CSS");
let fourthGraduate = new devGrads("Jaylon Leonard","W3 Schools","JS,CSS,HTML");
let fifthGraduate = new devGrads("Jazmyn Leonard","Bullis Academy","Python,Java,JS");

document.write("firstGraduate: name - " + firstGraduate.name + " " + "bootCamp - " + firstGraduate.bootCamp + "language - " + firstGraduate.language + "<br>");
document.write("secondGraduate: name - " + secondGraduate.name + " " + "bootCamp - " + secondGraduate.bootCamp + "language - " + secondGraduate.language + "<br>");
document.write("thirdGraduate: name - " + thirdGraduate.name + " " + "bootCamp - " + thirdGraduate.bootCamp + "language - " + thirdGraduate.language + "<br>");
document.write("fourthGraduate: name - " + fourthGraduate.name + " " + "bootCamp - " + fourthGraduate.bootCamp + "language - " + fourthGraduate.language + "<br>");
document.write("fifthGraduate: name - " + fifthGraduate.name + " " + "bootCamp - " + fifthGraduate.bootCamp + "language - " + fifthGraduate.language + "<br>");

devArr.push(firstGraduate,secondGraduate,thirdGraduate,fourthGraduate,fifthGraduate)
console.log(devArr)

const storedData = JSON.parse(localStorage.getItem('data')) || 0;

if(storedData.length > 0) {
    storedData.forEach((data) => {
        const { name, bootCamp, language } = data
        let ul = document.getElementById('dynamicList');
        var li = document.createElement("li");
        li.innerHTML = `${name} - ${bootCamp} - ${language}`
        ul.appendChild(li);
    })
}

function displayArray(event) {
    event.preventDefault();
    let ul = document.getElementById("dynamicList");
    let name = document.getElementById("name").value;
    let bootCamp = document.getElementById("bootCamp").value;
    let language = document.getElementById("language").value;
    var li = document.createElement("li");
    li.setAttribute("id", name.value);
    li.innerHTML = `${name} - ${bootCamp} - ${language}`;
    previousData = JSON.parse(localStorage.getItem('data')) || [];
    localStorage.setItem('data', JSON.stringify([...previousData, {name, bootCamp, language}]))
    ul.appendChild(li)
}

document.getElementById("button1").addEventListener('click', displayArray)







