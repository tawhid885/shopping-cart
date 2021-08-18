// get input value
function getInputValue(product){
    const phoneInput = document.getElementById(product+'-input');
    const phoneText = phoneInput.value;
    const phoneValue = parseInt(phoneText);
    return phoneValue;
}

// calculate total 
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1000;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = (subTotal * .10).toFixed(2);
    const totalPrice = subTotal + parseFloat(tax);
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice; 
    
}

// plus or minus 
function updateProductNumber(id, isIncreasing, totalId, price){
    const productInput = document.getElementById(id);
    let caseInputText = productInput.value;

    if(isIncreasing){
        caseInputText = parseInt(caseInputText) + 1;
    }
    else if(caseInputText >0 && !isIncreasing){
        caseInputText = parseInt(caseInputText) - 1; 
    }
    productInput.value= caseInputText;
    const productTotal = document.getElementById(totalId);
    // const totalText = total.innerText;
    // const totalValue = parseFloat(totalText);
    productTotal.innerText = caseInputText * price;
    calculateTotal();
    
    
}

// case plus 
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case-input', true, 'case-total', 59);
})

// case minus 
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case-input', false, 'case-total', 59);
})

// phone plus
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone-input', true, 'phone-total', 1000);
})

//phone minus
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone-input', false, 'phone-total', 1000);
})