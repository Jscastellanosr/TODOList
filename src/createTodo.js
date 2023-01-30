

const todoContainer = document.querySelector('.todoContainer')

export default class TODO {

    constructor(task, date, description = "", priority){
        this.task = task,
        this.date = date,
        this.description = description,
        this.priority = priority
    }

    static renderTodos (object) {
        todoContainer.innerHTML =""

        object.todos.forEach(element => {
            const todo = document.createElement('div')
            todo.textContent = element.task;
            todoContainer.appendChild(todo);
        });

        console.log('ok nice')
    }


}