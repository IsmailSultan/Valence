var elementList = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium",
  "Boron",
  "Carbon",
  "Nitrogen",
  "Oxygen",
  "Fluorine",
  "Neon",
  "Sodium",
  "Magnesium",
  "Aluminium",
  "Silicon",
  "Phosphorus",
  "Sulphur",
  "Chlorine",
  "Argon",
  "Potassium",
  "Calcium",
];

var tempElement;
var score = 0; 

function genElement() {
    let element = elementList[Math.floor(Math.random() * elementList.length)];
    return element
}

function valencyCalc(quest) {
    let q = quest
    var Valency
    let index = Math.abs(parseInt((elementList.indexOf(q)) + 1));
    let TempValency = (index-2)%8;
    if(TempValency > 4) {
        Valency = 8 - Math.abs(TempValency);
        return Valency
    }else {
        Valency = Math.abs(TempValency)       
        return Valency
    }
}

function validate(q, a) {
    var ValencyNew = valencyCalc(q);
    if(parseInt(a) === parseInt(Math.abs(ValencyNew))){
        return true;
    }else {
        return false;

    }
}

function addscore(){
    score += 1;
    return score
}

let a = document.getElementById("start");
let qc = document.getElementById("questionContainer");
a.addEventListener("click", () => {
  a.classList.add("hidden");
  qc.classList.remove("hidden");
  tempElement = genElement();
  document.getElementById("elementName").innerHTML = tempElement;
  document.getElementById("answer").placeholder = "Answer..."
});

let b = document.getElementById("answer");
b.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
    event.preventDefault();
    var tf = validate(tempElement, b.value)
    if(tf === true){
        tempElement = genElement();
        document.getElementById("elementName").innerHTML = tempElement;
        document.getElementById("answer").placeholder = "Answer..."
    }else{
        if(b.value.length == 0){
            tempElement = genElement();
            document.getElementById("elementName").innerHTML = tempElement;
            document.getElementById("answer").placeholder = "Answer..."
        }else{
            let tempCorA = valencyCalc(tempElement);
            document.getElementById("state").innerHTML = "Wrong Answer";
            document.getElementById("elementName").innerHTML = `The correct answer was ${tempCorA} \n Your score is ${score}`;
            document.getElementById("answer").placeholder = "Enter to restart"
    }}
  }
  b.value = ''
});
