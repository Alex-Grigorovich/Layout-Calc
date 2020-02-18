const startButton = document.querySelector('.start-button');
firstScreen = document.querySelector('.first-screen');
mainForm = document.querySelector('.main-form');
formCalculate = document.querySelector('.form-calculate');
endButton = document.querySelector('.end-button');
totalElem = document.querySelector('.total');
fastRange = document.querySelector('.fast-range');


function showElem(elem){
    elem.style.display = 'block';
};


function hideElem(elem){
    elem.style.display = 'none';
};

function handlerCallbackForm(event){
    const target = event.target;
       target.checked ? showElem(fastRange) : hideElem(fastRange); 
}

startButton.addEventListener('click', function(){
    showElem(mainForm);
    hideElem(firstScreen);
})

endButton.addEventListener('click', function(){
    
    for(const elem of formCalculate.elements){
        if(elem.tagName === 'FIELDSET'){
            hideElem(elem);
        }
    }
    
showElem(totalElem);

})


formCalculate.addEventListener('change', handlerCallbackForm);

