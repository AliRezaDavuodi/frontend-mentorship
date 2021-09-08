const inputBox = document.querySelectorAll('.float');
const inputBoxArr = Array.from(inputBox);
const createAccountBtn = document.querySelector('.btn')
const checkBox = document.getElementById('accept')
inputBoxArr.map(ele => ele.addEventListener('keyup', validate))



function validate(elem) {

    // check value or it's length
    if (elem.target.value && elem.target.value.length >= 10) {
        elem.target.classList.add('valid')
        elem.target.classList.remove('unvalid')
    }
    else {
        elem.target.classList.add('unvalid')
        elem.target.classList.remove('valid')
    }

}


checkBox.addEventListener('click', () => {
    createAccountBtn.classList.toggle('not-allow')
    createAccountBtn.classList.toggle('active')
})