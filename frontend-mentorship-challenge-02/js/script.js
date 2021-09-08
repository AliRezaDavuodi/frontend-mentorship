const inputBox = document.querySelectorAll('.float');
const inputBoxArr = Array.from(inputBox);

inputBoxArr.map(ele => ele.addEventListener('keyup', validate))


function validate(elem) {
    // console.log(elem.target.parentElement , 'im work ')

    // check value or it's length
    if (elem.target.value && elem.target.value.length >= 10) {
        elem.target.classList.add('valid')
        elem.target.classList.remove('unvalid')
    }
    else {
        elem.target.classList.add('unvalid')
        elem.target.classList.remove('valid')
    }


    // show or hide text

    // clear inputs

}







// console.log(box[0].children[0])