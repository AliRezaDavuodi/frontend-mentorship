// var 
const inputBox = document.querySelectorAll('.float');
const inputBoxArr = Array.from(inputBox);
const createAccountBtn = document.querySelector('.btn')
const checkBox = document.getElementById('accept')


// event listener
inputBoxArr.map(ele => ele.addEventListener('keyup', validate));
inputBoxArr.map(ele => ele.children[0].addEventListener('focus', moveReplaceUp))
inputBoxArr.map(ele => ele.children[0].addEventListener('blur', moveReplaceDown))

createAccountBtn.addEventListener('click', () => {
    inputBoxArr.map(elem => {
        const input = elem.children[0]
        if (!elem.value) {
            input.classList.add('unvalid')
            input.classList.remove('valid')
        }
    })
});

checkBox.addEventListener('click', () => {
    createAccountBtn.classList.toggle('not-allow')
    createAccountBtn.classList.toggle('active')
    createAccountBtn.toggleAttribute('disabled')
})



//functions
function validate(event) {

    // check value or it's length
    if (event.target.value && event.target.value.length >= 10) {
        event.target.classList.add('valid')
        event.target.classList.remove('unvalid')
    }
    else {
        event.target.classList.add('unvalid')
        event.target.classList.remove('valid')
    }
}

function moveReplaceUp(event) {
        event.target.parentElement.children[1].classList.add('float-label-active')
}

function moveReplaceDown(event) {
    if (!event.target.value) {
        event.target.parentElement.children[1].classList.remove('float-label-active');
    }
    else{
        if (event.target.classList.contains("date-input")) {
            event.target.classList.add('change-color')
        }
    }
    
}
