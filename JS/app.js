/* Ideas 87
1. Add comma to create 4,6 * 5;
2. Kunna räna fler än 2 tal
*/

let numbers = document.querySelector('.numberButtons');
numbers.addEventListener('click', btnClicked);

let calculationField = document.querySelector('#calculations');

let numberClicked = [];
let numberClickedSecond = [];
let joinedNumbers = [];
let joinedNumbersSecond = [];
let operator = '';
let active = true;

function btnClicked(e) {

    let btnClicked = e.target.value;

    if(btnClicked === 'c') {
        calculationField.innerText = '0';
        numberClicked = [];
        numberClickedSecond = [];
        active = true;
    }
    
    if(active === true) {

        if(btnClicked === '0' || btnClicked === '1' || btnClicked === '2' || btnClicked === '3' || btnClicked === '4' || btnClicked === '5' || btnClicked === '6' || btnClicked === '7' || btnClicked === '8' || btnClicked === '9' ) {
            numberClicked.push(btnClicked);
            joinedNumbers = +numberClicked.join('');
            calculationField.innerText = joinedNumbers;

        } else if(btnClicked === "+" || btnClicked === "-" || btnClicked === "x" || btnClicked === "/"){

            operator = btnClicked;

            calculationField.innerText = btnClicked;
    
            active = false;
        }    
        
    } else if(active === false) {

        if(btnClicked === '0' || btnClicked === '1' || btnClicked === '2' || btnClicked === '3' || btnClicked === '4' || btnClicked === '5' || btnClicked === '6' || btnClicked === '7' || btnClicked === '8' || btnClicked === '9') {

            numberClickedSecond.push(btnClicked);
            joinedNumbersSecond = +numberClickedSecond.join('');
            calculationField.innerText = joinedNumbersSecond;

        } else if(btnClicked === '=') {

            if(operator === '+'){
                calculationField.innerText = joinedNumbers + joinedNumbersSecond;
            } else if(operator === 'x') {
                calculationField.innerText = joinedNumbers * joinedNumbersSecond;
            } else if(operator === '-') {
                calculationField.innerText = joinedNumbers - joinedNumbersSecond;
            } else if(operator === '/') {
                calculationField.innerText = joinedNumbers / joinedNumbersSecond;
            }
        }
    }
}

let calcOperators = (function(){

    function calcAddition(value1, value2) {
            return value1 + value2;
    }

    return {
        calcAddition: calcAddition
    }

})();


