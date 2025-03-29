const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addToDoBtn');
const todoList = document.getElementById('todoList');

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const todoText = todoInput.value.trim(); 

    if (todoText !== '') { 
        const li = document.createElement('li');

        const textSpan = document.createElement('span');
        textSpan.textContent = todoText;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', function() {
            const newText = prompt('Edit your todo', textSpan.textContent);
            if (newText !==null) {
                textSpan.textContent = newText.trim();
            }
        });

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click', function(){
            li.remove();
        });


       li.appendChild(textSpan);
       li.appendChild(editBtn);
       li.appendChild(removeBtn);
       todoList.appendChild(li);

       todoInput.value = '';
       todoInput.focus();

    }

    
}
