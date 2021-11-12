

let x=Number(prompt("Enter any number : "));
let y=Number(prompt("Enter any number : "));


function sum(number1, number2){
    document.write(`${number1} + ${number2} = ${number1 + number2}`);
}

function sub(number1, number2){
    document.write(`<p>${number1} - ${number2} = ${number1 - number2}</p>`);
}
function mult(number1, number2){
    document.write(`<p>${number1} * ${number2} = ${number1 * number2}</p>`)
}

   

function div(number1, number2){
    document.write(`<p>${number1} / ${number2} = ${number1 / number2}</p>`)
}


/*sum(10,20);
sub(10,20);
mult(10,20);
div(10,20);*/

sum(x,y);
sub(x,y);
mult(x,y);
div(x,y);