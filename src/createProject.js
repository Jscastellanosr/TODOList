import TODO from './createTodo.js'
import { projectsArray } from './index.js'
import tempName from './index.js'

const projectContainer = document.querySelector('.projectContainer')
const editPwindow = document.querySelector('.editProject')
const editProjForm = document.querySelector('#editP')
const warnWindow = document.querySelector('.warningWindow')
const todoList = document.querySelector('.todoList')
const addTask = document.querySelector('.addTODO')


export default class project {
    constructor(name) {
        this.name = name,
        this.todos =[]
    }

    static addTODO (object, task, date, priority, description) {
        object.todos.push(new TODO(object.name, task, date, priority, description))
        this.updateProjects(projectsArray)
        
    }

    static updateProjects (object) {
       localStorage.setItem(`projects`, JSON.stringify(object))
    }

    static render(object) {
        const proj = document.createElement('div');

        const projTitle = document.createElement('div');
        projTitle.textContent = object.name;
        proj.appendChild(projTitle)

        const editProj = document.createElement('button')
        editProj.textContent = 'edit'
        editProj.addEventListener('click', () => {
            editProjForm.title.value = object.name;
            tempName.temp = object.name;
            editPwindow.classList.toggle('inactive')
            console.log(this)
        })
        proj.appendChild(editProj)

        const deleteProj = document.createElement('button')
        deleteProj.textContent = 'x'
        deleteProj.addEventListener('click', () => {

            tempName.temp = object.name;

            warnWindow.querySelector('h3').textContent = 'DELETE PROJECT';
            warnWindow.querySelector('p').textContent = 'Are you sure you want to delete thiss project?'

            warnWindow.querySelector('.yes').id = 'deleteProjectY'
            warnWindow.querySelector('.no').id = 'deleteProjectN'

            warnWindow.classList.toggle('inactive')
        })
        proj.appendChild(deleteProj)


        proj.addEventListener('click', ()=> {
            addTask.classList.add('addTODO')
            addTask.classList.remove('inactive')
            TODO.renderTodos(object);
            todoList.id = object.name
        })
        projectContainer.appendChild(proj);
    }

}
