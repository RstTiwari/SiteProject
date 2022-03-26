
// so now we can divide javascript functnlity in 5 parts
//  add numbers
// add operators
// delete input
// clear all the inputs


//first taking input are displayed

let calcArea = document.querySelctor("text-area")

// adding input from the 

// add number
const addNum = text => {
let {value} = calcArea;

// rules to input the dot

const ruleA =value.length === 0 && text === ".";

//add input 
    if(!ruleA) {
        calcArea.value += text ;

    }
}


// adding operators
const oprList =["+" ,"-" ,"*" ,"/"] ;

const addOpr = text => {
    const {value} = calcArea ;
    const lastCharachter = value[value.length -1];

}

// dont add repeted oprators
if(lastCharachter !== text){
    if(value.length > 0){
        calcArea.value += text;
    }
}


 //If last character is operator then replace it with new operator
 if (oprList.includes(lastCharacter)) {
calcArea.value = value.substr(0, value.length - 1) + text;
}

//Delete inputs on backspace
const del = () => {
const { value } = calcArea;
if (value.length > 0) {
calcArea.value = value.substr(0, value.length - 1);
}
};   

//Clear whole area
const clear = () => {
calcArea.value = "";
};

//Perform calculation
const calc = () => {
const { value } = calcArea;
const result = eval(value);

if (!isNaN(result)) {
calcArea.value = result;
} else {
alert("Wrong expression, Please check your input");
}
};

//Add event listeners to the button
document.querySelectorAll(".button-group > span").forEach(e => {
e.addEventListener("click", f => {
const { classList, innerText } = f.target;

if (classList.contains("num")) {
//Number buttons clicked including .
addNums(innerText);
} else if (classList.contains("opr")) {
//Opertor buttons clicked
addOpr(innerText);
} else if (classList.contains("calc")) {
//Equal button clicked
calc();
} else if (classList.contains("delete")) {
//Backspace button clicked
del();
} else if (classList.contains("clear")) {
//Clear button clicked
clear();
}
});
});

//Add key events
document.addEventListener("keydown", e => {
switch (e.key) {
case "1":
case "2":
case "3":
case "4":
case "5":
case "6":
case "7":
case "8":
case "9":
case "0":
case ".":
addNums(e.key);
break;
case "/":
case "*":
case "+":
case "-":
case "%":
addOpr(e.key);
break;
case "Enter":
calc();
break;
case "Backspace":
del();
break;
case "c":
clear();
default:
}
});

 