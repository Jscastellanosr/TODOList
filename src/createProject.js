const projectContainer = document.querySelector('.projectContainer')
const todoContainer = document.querySelector('.todoContainer')
export default class project {
    constructor(name) {
        this.name = name,
        this.todos =[]
    }

    static addTODO (object, todo) {
        object.todos.push(todo)
    }

    static addProject (object) {
       localStorage.setItem(`${object.name}`, JSON.stringify(object))
    }

    static render(object) {
        const proj = document.createElement('li');
        proj.textContent = object.name;
        proj.addEventListener('click', ()=> {
            this.renderTodos(object);
        })
        projectContainer.appendChild(proj);
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
