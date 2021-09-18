const items = [];

(function () {
    // variables
    const mainInput = document.querySelector('.todo__input')
    const taskBox = document.querySelector('.todo__list')
    const addBtn = document.querySelector('.btn-add')
    const editBtn = document.querySelectorAll('.btn-edit')

    let id, taskTitle;

    // state ----------------------------------

    window.addEventListener('click', function (e) {
        if (e.target.innerText === 'Add') {
            addItem();
        } 
        if (e.target.innerText === 'Delete') {
            deleteItem(e);
        }
    })




    //functions ----------------------------------------------

    function addItem() {

        // create id
        id = items.length ? items[items.length - 1].itemId + 1 : 0;

        // get value from main input
        if (mainInput.value) {
            taskTitle = mainInput.value;

            // make the structure of taskss
            const taskItem = {
                itemId: id,
                itemContent: `<li class="todo__list-item" id = ${id}>
            <p contenteditable="true" class="todo__task-title"> ${taskTitle} </p>
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

            // clear main input field
            mainInput.value = '';

        } else {
            alert('Please Write Something To Add')
        }
    }



    function deleteItem(e) {

        // find item's id
        let ID = e.target.parentElement.parentElement.id
        console.log(ID, 'first')
        ID = items.findIndex(item => item.itemId == ID)
        console.log(ID, 'second')

        // delete it fom state
        items.splice(ID, 1)

        // update Ui
        updateUi();

    }


    function updateUi() {
        taskBox.innerHTML = '';
        items.map(item => {
            taskBox.insertAdjacentHTML('beforeend', item.itemContent)

        })
    }

})();