const billInput = document.querySelector('#billInput'),
      peopleInput = document.querySelector('#peopleInput'),
      customPercent = document.querySelector('#custom__input'),
      tipAmount = document.querySelector('#tipAmount'),
      total = document.querySelector('#totalNumber'),
      buttons = document.querySelector('.calculator__buttons'),
      noZeroBill = document.querySelector('#noZeroBill'),
      noZeroPpl = document.querySelector('#noZeroPpl'),
      resetButton = document.querySelector('#resetButton');

//Bill Input
billInput.addEventListener('keyup', (e) => {
    let inputValue = e.target.value;
    let reg = /^0+/gi;

    billInput.value = inputValue
    .replace(/\s/g, '');
    // .replace(/\D/g, '');

    if (inputValue.match(reg)) {
        billInput.value = inputValue.replace(reg, '');
        noZeroBill.innerText = "Can't be zero";
        noZeroBill.classList.add('noZero');
        billInput.classList.add('noZeroInput');
    }  
    else if(billInput.value == 0) {
        tipAmount.innerText = '$0.00'
        noZeroBill.innerText = "";
        noZeroBill.classList.remove('noZero');
        billInput.classList.remove('noZeroInput');
    } 
    else {
        noZeroBill.innerText = "";
        noZeroBill.classList.remove('noZero');
        billInput.classList.remove('noZeroInput');
    }
});

//Tip Buttons
buttons.addEventListener('click', (e) => {
    let buttonSelected = parseInt(e.target.innerText); 

    if (isNaN(buttonSelected)) {
        return;
    } 
    else if (billInput.value == 0) {
        noZeroBill.innerText = "Can't be zero";
        noZeroBill.classList.add('noZero');
        billInput.classList.add('noZeroInput');
    }
    else {
        const tipAmountCalc = (a, b) => ((a * b)/100).toFixed(2);
        tipAmount.innerText = "$" + tipAmountCalc(billInput.value, buttonSelected);
    }
});

//Custom Input
customPercent.addEventListener('keyup', (e) => {
    let inputValue = e.target.value;
    let reg = /^0+/gi;

    customPercent.value = inputValue
    .replace(/\s/g, '')
    .replace(/\D/g, '');

    if (inputValue.match(reg)) {
        customPercent.value = inputValue.replace(reg, '');
    }

    if (billInput.value == 0) {
        noZeroBill.innerText = "Can't be zero";
        noZeroBill.classList.add('noZero');
        billInput.classList.add('noZeroInput');
        tipAmount.innerText = '$0.00';
    } 
    else if (inputValue == 0) {
        tipAmount.innerText = '$0.00';
    }
    else {
        const tipAmountCalc = (a, b) => ((a * b)/100).toFixed(2);
        tipAmount.innerText = "$" + tipAmountCalc(billInput.value, inputValue);
    }
});


//People Input
peopleInput.addEventListener('keyup', (e) => {
    let inputValue = e.target.value;
    let reg = /^0+/gi;

    peopleInput.value = inputValue
    .replace(/\s/g, '')
    .replace(/\D/g, '');

    if (inputValue.match(reg)) { //no admite 0
        peopleInput.value = inputValue.replace(reg, '');
        noZeroPpl.innerText = "Can't be zero";
        noZeroPpl.classList.add('noZero');
        peopleInput.classList.add('noZeroInput');
    }
    else if (billInput.value == 0) { //Valido que haya un dato ingresado en bill
        noZeroBill.innerText = "Can't be zero";
        noZeroBill.classList.add('noZero');
        billInput.classList.add('noZeroInput');
        noZeroPpl.innerText = "";
        noZeroPpl.classList.remove('noZero');
        peopleInput.classList.remove('noZeroInput');
    }
    else { //Ingreso un número que no es 0 y bill no está vacío
        let tipNumber = tipAmount.innerText.substring(1);
        let tip = parseFloat(tipNumber);
        noZeroPpl.innerText = "";
        noZeroPpl.classList.remove('noZero');

        if (tip == 0) { //Quiere decir que no se seleccionó algún botón y por eso da 0
            return;
        } 
        else if (peopleInput.value == 0) { //Si borra los datos del peopleInput se reinicia el cálculo
            total.innerText = '$0.00';
            return;
        }
        else { //Hace el cálculo 
            total.innerText = '$' + (tip / peopleInput.value).toFixed(2);
        }
    }
});

//Reset Button
resetButton.addEventListener('click', () => {
    billInput.value = '';
    customPercent.value = '';
    peopleInput.value = '';
    tipAmount.innerText = '$0.00';
    total.innerText = '$0.00';
    noZeroBill.innerText = '';
    noZeroPpl.innerText = '';
    billInput.classList.remove('noZeroInput');
    peopleInput.classList.remove('noZeroInput');
});