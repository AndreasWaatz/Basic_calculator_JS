//Basic calculator created by Andreas Wåtz

// Listen to button clicked
let numbers = document.querySelector('.numberButtons');
numbers.addEventListener('click', btnClicked);

// Get's the calculations field
let calculationField = document.querySelector('#calculations');

//Stores numbers clicked
let numberClicked = [];
// Store Joined numbers from numbersClicked
let joinedNumbers = [];
// Store all inputs woth numbers and operator
let calculationsArray = [];
// Adds all the numbers depending on operator
let totalResult = 0;

// Starts function when buttons clicked
function btnClicked(e) {

    // Stores value of the button clicked
    let btnClicked = e.target.value;

    // If C is clicked everythig gets cleared
    if(btnClicked === 'c') {
        calculationField.innerText = '0';
        totalResult = 0;
        calculationsArray = [];
        numberClicked = [];
        numberClickedSecond = [];
        active = true;
     //If a number is clicked we print it out and stores the values in array and join the to one.   
    }else if(btnClicked === '0' || btnClicked === '1' || btnClicked === '2' || btnClicked === '3' ||    btnClicked === '4' || btnClicked === '5' || btnClicked === '6' || btnClicked === '7' ||         btnClicked === '8' || btnClicked === '9' || btnClicked === '.' ) {


        // Checks if desimal is clicked
        if(btnClicked === '.'){
            //Push decimal to numberClicked
            numberClicked.push(btnClicked);
            //Prints out number clicked + decimal
            calculationField.innerText = joinedNumbers + '.';
        }else{
            //Push each number to numberClicked
            numberClicked.push(btnClicked);
            //Join numbers to one integer
            joinedNumbers = +numberClicked.join('');
            //Prints out numbers clicked
            calculationField.innerText = joinedNumbers;
        }

      // Adds latest number and clicked operators to calculationArray      
    } else if(btnClicked === "+" || btnClicked === "-" || btnClicked === "x" || btnClicked === "/"){
            //Clears numbersClicked
            numberClicked = [];
            //Push joinNumbers to CalculateArray
            calculationsArray.push(joinedNumbers);
            //Clears joinedNumbers
            joinedNumbers = [];
            //Adds operator to calculationsArray
            calculationsArray.push(btnClicked);
            //Print out the operator to field
            calculationField.innerText = btnClicked;
    
      // Goes thru the calculationsArray and calculate all the number depending on operator in array      
    } else if(btnClicked === '=') {
            //Adds last number input to calculationsArray
            calculationsArray.push(joinedNumbers);
            //Clears numberClicked
            numberClicked = [];
            //Adds first number value in calculationArray to totalResult
            totalResult = calculationsArray[0];

            //Loops thru numbers and operators and store it in totalResult.
            for (let i = 0; i < calculationsArray.length; i++) {

                if(calculationsArray[i] === '+'){
                    console.log('Operator',calculationsArray[i]);
                    totalResult += calculationsArray[i +1]
                } else if(calculationsArray[i] === '-'){
                    console.log('Operator',calculationsArray[i]);
                    totalResult -= calculationsArray[i +1]
                } else if(calculationsArray[i] === 'x'){
                    console.log('Operator',calculationsArray[i]);
                    totalResult *= calculationsArray[i +1]
                } else if(calculationsArray[i] === '/'){
                    console.log('Operator',calculationsArray[i]);
                    totalResult /= calculationsArray[i +1]
                }    
                    
            }
            // Check if totalResult is number without decimal
            if (totalResult == Math.floor(totalResult)) {
                //Prints out result without decimal.
                calculationField.innerText = totalResult
            }else {
                //Print out result in field with maximum 2 numbers after decimal
            calculationField.innerText = totalResult.toFixed(2);
            }
        } 
}




