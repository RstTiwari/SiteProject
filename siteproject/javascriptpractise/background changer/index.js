


//choosing random number to change the background colour
const body = document.querySelector('body');
const button= document.querySelector('button')

const colors = ["white","black"]

body.style.backgroundColor = " "
button.addEventListener("click" , changebackground);

function changebackground(){
    const colorIndex = parseInt(Math.random()*colors.length);

    body.style.backgroundColor = colors[colorIndex]

}



