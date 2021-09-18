
(function () {

    // state ----------------------------------
    const items = [];

    // variables
    const mainInput = document.querySelector('.todo__input')
    const taskBox = document.querySelector('.todo__list')
    const addBtn = document.querySelector('.btn-add')
    const editBtn = document.querySelectorAll('.btn-edit')
    let id, taskTitle;

    // Event Listeners
    window.addEventListener('click', function (e) {
        if (e.target.innerText === 'Add') {
            addItem();
        }
        else if (e.target.innerText === 'Delete') {
            deleteItem(e);
        }
        else if (e.target.innerText === 'Edit') {
            editTask(e);
        }
        else if (e.target.innerText === 'Save') {
            saveTask(e);
        }
    })

    //functions ----------------------------------------------
    function addItem() {

       if (items.length < 8) {
            // create id
        id = items.length ? items[items.length - 1].itemId + 1 : 0;

        // get value from main input
        if (mainInput.value) {
            taskTitle = mainInput.value;

            // make the structure of taskss
            const taskItem = {
                itemId: id,
                itemContent: `<li class="todo__list-item" id = ${id}>
            <p class="todo__task-title"> ${taskTitle} </p>
            <div class="todo__task-btn">
                <a href="#" class="btn btn-edit">edit</a>
                <a href="#" class="btn btn-delete">delete</a>
            </div>
          </li> `
            }

            // add a new item to the state
            items.push(taskItem);

            // Update Ui
            updateUi();

            // clear main input field and focus
            mainInput.value = '';
            mainInput.focus();

        } else {
            alert('Please Write Something To Add')
        }
       }else{
           alert('you add more ...')
       }
    }

    function deleteItem(e) {

        // find item's id
        let ID = e.target.parentElement.parentElement.id
        ID = items.findIndex(item => item.itemId == ID)

        // delete it fom state
        items.splice(ID, 1)

        // update Ui
        updateUi();
    }

    function editTask(e) {

        // Cahnge Btn Name From EDIT To SAVE
        e.target.innerText = 'Save';

        // Add  Contenteditable="TRUE" To Task
        e.target.parentElement.parentElement.children[0].setAttribute('Contenteditable', 'true');
        e.target.parentElement.parentElement.children[0].focus()
        e.target.parentElement.parentElement.children[0].style.color = '#f00';
    }

    function saveTask(e) {

        // Cahnge Btn Name From SAVE To EDIT
        e.target.innerText = 'Edit';

        // Add  Contenteditable="FALSE" To Task
        e.target.parentElement.parentElement.children[0].setAttribute('Contenteditable', 'false');
        e.target.parentElement.parentElement.children[0].blur()
        e.target.parentElement.parentElement.children[0].style.color = '#fff';
    }


    function updateUi() {
        taskBox.innerHTML = '';
        items.map(item => {
            taskBox.insertAdjacentHTML('beforeend', item.itemContent)

        })
    }

})();