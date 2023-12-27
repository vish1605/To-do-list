const todoList = [{
    name: 'todo-task',
    dueDate: 'yyyy-mm-dd'
}

];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

   

    todoList.forEach( (todoObject, index) => {
        
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `<div>${name}</div>
                      <div>${dueDate}</div>
                      <button onclick = " 
                          todoList.splice(${index}, 1);
                          renderTodoList() ;
                          " class = "delete-todo-button">Delete</button>
          `;
        todoListHTML += html;

    });

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

}



function addTodo() {
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input')
    const dueDate = dateInputElement.value;
    todoList.push({
        name: name,
        dueDate: dueDate,

    });




    inputElement.value = ''
    renderTodoList();



}