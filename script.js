// function for get input value from id 
function getInputValue(id){
return parseInt(document.getElementById(id).value)
}

// function for get element text number by id 
function getElementValue(id){
return parseInt(document.getElementById(id).innerText)
}


// function for set text in element by id 
function setText(id,text){
document.getElementById(id).innerText = text;
}

// function for set value in input box by id 
function setValue(id,value){
document.getElementById(id).value = value;
}

function chnageValue(isIncrease){
    let total;
if(isIncrease){
   total = getInputValue('phone-total')+1
}
else{
  total = getInputValue('phone-total')-1
}
    setValue('phone-total', total)
    setText('phone-total-amount', total*1219)
    updateTotal()
}


function chnageValue2(isIncrease){
    let total;
if(isIncrease){
   total = getInputValue('case-total')+1
}
else{
  total = getInputValue('case-total')-1
}
    setValue('case-total', total)
    setText('case-total-amount', total*59)
    updateTotal()
}


document.getElementById('phone-btn-plus').addEventListener('click',function(){
    chnageValue(true)
})
document.getElementById('phone-btn-minus').addEventListener('click',function(){
    chnageValue(false)
})



document.getElementById('case-btn-plus').addEventListener('click',function(){
    chnageValue2(true)
})
document.getElementById('case-btn-minus').addEventListener('click',function(){
    chnageValue2(false)
})

function updateTotal(){
   const subtotal =  getElementValue('phone-total-amount') + getElementValue('case-total-amount')
   setText('sub-total',subtotal)
   const texAmount = parseFloat((subtotal*0.1).toFixed(2))
   setText('text-amount',texAmount)
   const total = subtotal - texAmount;
   setText('total-amount',total)
}


const items = document.getElementsByClassName('remove-item')
for (const item of items) {
    item.addEventListener('click',function(e){
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
    })
    
}