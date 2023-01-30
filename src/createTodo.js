

const todoContainer = document.querySelector('.todoContainer')

export default class TODO {

    constructor(task, date, priority, description = ""){
        this.task = task,
        this.date = date,
        this.description = description,
        this.priority = priority
    }

    static renderTodos (project) {
        todoContainer.innerHTML =""

        project.todos.forEach(element => {
            
            const todo = document.createElement('div')
            todo.classList.add('todo')

            /* CHECK AND EXPAND */

            const checkExpand = document.createElement('div')
            checkExpand.classList.add('checkExpand')

            const checkbox = document.createElement('div')
            checkbox.classList.add('checkbox')
            checkExpand.appendChild(checkbox)

            const expand = document.createElement('button')
            expand.textContent = ">"
            expand.addEventListener('click', () => {
                description.classList.toggle('inactive')
            })
            checkExpand.appendChild(expand)

            todo.appendChild(checkExpand)


            /*TODO INFO */

            const todoInfo = document.createElement('div')
            todoInfo.classList.add('todoInfo')

            const task = document.createElement('div')
            task.classList.add('infoElement')
            task.textContent = element.task
            todoInfo.appendChild(task)

            const date = document.createElement('div')
            date.classList.add('infoElement')
            date.textContent = element.date
            todoInfo.appendChild(date)

            const priority = document.createElement('div')
            priority.classList.add('infoElement')
            priority.textContent = element.priority
            todoInfo.appendChild(priority)


            const description = document.createElement('p')
            description.classList.add('inactive')
            description.textContent = element.description
            todoInfo.appendChild(description)

            todo.appendChild(todoInfo)

            /*EDIT/REMOVE TODO */

            const editRemove = document.createElement('div')
            editRemove.classList.add('editRemove')

            const removeTodo = document.createElement('button')
            removeTodo.textContent = 'x'
            editRemove.appendChild(removeTodo)

            const editTodo = document.createElement('button')
            editTodo.textContent = 'Edit'
            editRemove.appendChild(editTodo)

            todo.appendChild(editRemove)


        
            todoContainer.appendChild(todo);
        });

        console.log('ok good')
    }


}