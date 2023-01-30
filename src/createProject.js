import TODO from './createTodo.js'

const projectContainer = document.querySelector('.projectContainer')
const editPwindow = document.querySelector('.editProject')
const editProjForm = document.querySelector('#editP')
const warnWindow = document.querySelector('.warningWindow')

let tempName;
export default class project {
    constructor(name) {
        this.name = name,
        this.todos =[]
    }

    static addTODO (object, todo) {
        object.todos.push(todo)
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
            tempName = object.name;
            editPwindow.classList.toggle('inactive')
        })
        proj.appendChild(editProj)

        const deleteProj = document.createElement('button')
        deleteProj.textContent = 'x'
        deleteProj.addEventListener('click', () => {

            tempName = object.name;

            warnWindow.querySelector('h3').textContent = 'WARNING';
            warnWindow.querySelector('p').textContent = 'Are you sure you want to delete thiss project?'

            warnWindow.querySelector('.yes').id = 'deleteProjectY'
            warnWindow.querySelector('.no').id = 'deleteProjectN'

            warnWindow.classList.toggle('inactive')
        })
        proj.appendChild(deleteProj)


        proj.addEventListener('click', ()=> {
            TODO.renderTodos(object);
        })
        projectContainer.appendChild(proj);
    }

}

export { tempName }