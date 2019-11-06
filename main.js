var plusButton = document.querySelector('.plus');
var subtractButton = document.querySelector('.subtract');
var parentItem = document.querySelector('.food-items');


parentItem.addEventListener("click", function(event) {
    if(event.target.className == 'plus') {
        let inputValue = parseInt(event.target.nextElementSibling.value)
        inputValue += 1;
        // update value
        event.target.nextElementSibling.value = inputValue;
        
    }
    else if(event.target.className == 'subtract') {
        let inputValue = parseInt(event.target.previousElementSibling.value)
        inputValue -= 1;
        // update value
        event.target.previousElementSibling.value = inputValue;
    }
    else if(event.target.className == 'select-button') {
        event.target.parentNode.parentNode.classList.add('chosen');
    }
});
