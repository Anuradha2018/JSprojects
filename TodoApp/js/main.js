
let removeIcon='<i style="color:red" class="far fa-trash-alt"></i>';
let completeIcon='<i style="color:green" class="far fa-check-circle"></i>';
let completedIcon='<i style="color:green" class="fas fa-check-circle"></i>';

document.getElementById('add').addEventListener('click', function() {
    let value = document.getElementById("item").value;
    if(value) { 
        addItemTodo(value);
        document.getElementById('item').value='';
    }
});
function removeItem() {
     let item = this.parentNode.parentNode;
     let parent =  item.parentNode;
     parent.removeChild(item);
}

function completeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;
    //Check if item is completed
    
    let target = (id ==='todo') ? document.getElementById('completed') :document.getElementById('complete');
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
    
    

}

function addItemTodo(text) {
    let list = document.getElementById('todo');

    let item = document.createElement('li');
    item.innerText = text;

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');



    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;
    //removing item
    remove.addEventListener('click', removeItem);

    let complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeIcon;
    //for tasks being completed
    complete.addEventListener('click', completeItem);

    let completed = document.createElement('button');
    complete.classList.add('completed');
    completed.innerHTML =completedIcon;


    list.appendChild(item);
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);
    list.insertBefore(item, list.childNodes[0]);
    
}