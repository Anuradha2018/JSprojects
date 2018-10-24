
let removeIcon='<i style="color:red" class="far fa-trash-alt"></i>';
let completeIcon='<i style="color:green" class="far fa-check-circle"></i>';

document.getElementById('add').addEventListener('click', function() {
    let value = document.getElementById("item").value;
    if(value) { 
        addItemTodo(value);
    }
});

function addItemTodo(text) {
    let list = document.getElementById('complete');

    let item = document.createElement('li');
    item.innerText = text;

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');



    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;

    let complete = document.createElement('button');
    complete.classList.add('complete')
    complete.innerHTML = completeIcon;
    list.appendChild(item);
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    
}