import project from './createProject.js'
import TODO from './createTodo.js'
import { format, parseISO } from 'date-fns'

const addProj = document.querySelector('.addProject')
const formWindow = document.querySelector('.formWindow')
const projectContainer = document.querySelector('.projectContainer')
const projectForm = document.querySelector('#newProject')
const editPwindow = document.querySelector('.editProject')
const editProjForm = document.querySelector('#editP')
const warnWindow = document.querySelector('.warningWindow')
const addTask = document.querySelector('.addTODO')
const todoFormWindow = document.querySelector('.addTodoForm')
const todoForm = document.querySelector('#TODOForm')
const todoList = document.querySelector('.todoList')
const todayTasks = document.querySelector('.today')

let projectsArray = [];

window.addEventListener('DOMContentLoaded', ()=>{

    

    /* LOAD STORAGE CONTENT */

    /* check if default exists */
    if(JSON.parse(localStorage.getItem('projects'))){

        console.log('yes')

    } else{
        const defProj = new project('Default')

        /* ADDING TODOS FOR TESTING */


        project.addTODO(defProj, 'wake up', '2023-08-21', 'urgent', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis est at ornare vulputate. Suspendisse consequat augue eu fringilla tincidunt. Donec hendrerit augue odio. Sed vitae nulla ultricies, imperdiet metus quis, porta nulla. Quisque varius, quam ut egestas euismod, augue eros pretium lectus, quis vulputate velit urna ut nisi. Quisque in arcu viverra, mattis orci sagittis, lacinia neque. Integer laoreet consequat velit a maximus. In porta placerat velit, ut sodales magna venenatis sed. Suspendisse potenti. In ut malesuada risus.")
        project.addTODO(defProj, 'breakfast', '2023-09-18', 'urgent', 'xxx')
        project.addTODO(defProj, 'brush teeth', '2023-05-22', 'urgent', 'xxx')
        project.addTODO(defProj, 'get dressed', '2023-02-15', 'urgent', 'xxx')

        projectsArray.push(defProj)


        const proj1 = new project('proj1')
        projectsArray.push(proj1)
        
        project.updateProjects(projectsArray);
        console.log('no')

    }


    /*RETRIEVE LOCALGROUP OBJECTS */
    
    console.log('...........')

    projectsArray = JSON.parse(localStorage.getItem('projects'))

    console.log(projectsArray)

    /* RENDER ARRAY ELEMENTS */

    console.log(JSON.parse(localStorage.getItem('projects')))

    projectsArray.forEach(element => {
        project.render(element)
    });

    /*RENDER DEFAULT TODO and set TODO container's ID */
    TODO.renderTodos(projectsArray[0])
    todoList.id = projectsArray[0].name

})

addProj.addEventListener('click', ()=>{
    formWindow.querySelector('#title').value = "";
    formWindow.classList.toggle('inactive')
})

projectForm.subm.addEventListener('click', ()=>{

    if(projectForm.title.value) {
        const newProj = new project(projectForm.title.value)
        projectsArray.push(newProj)
        project.updateProjects(projectsArray)


        console.log(projectsArray)
        console.log(JSON.parse(localStorage.getItem('projects')))

        project.render(newProj)
        formWindow.classList.toggle('inactive')
    }
})

editProjForm.subm.addEventListener('click', () => {

    if(editProjForm.title.value){

        editPwindow.classList.toggle('inactive')

        for(let i = 0; i < projectsArray.length; i++){

            console.log(projectsArray.length)
    
            if(projectsArray[i].name == tempName.temp){
                console.log(editProjForm.title.value)

                projectsArray[i].name = editProjForm.title.value;
                project.updateProjects(projectsArray)
                projectContainer.childNodes[i].querySelector('div').textContent = editProjForm.title.value
                todoList.id = projectsArray[i].name
                return
            }
        }
    }
})



warnWindow.querySelector('.yes').addEventListener('click', () => {

    if(warnWindow.querySelector('.yes').id == 'deleteProjectY'){

        warnWindow.classList.toggle('inactive')

        for(let i = 0; i < projectsArray.length; i++){

            if(projectsArray[i].name == tempName.temp){

                projectsArray.splice(i, 1)
                project.updateProjects(projectsArray) 
                projectContainer.removeChild(projectContainer.childNodes[i])

                TODO.renderTodos(projectsArray[0])
                todoList.id = projectsArray[0].name
                return
            }
        }
    }else if(warnWindow.querySelector('.yes').id == 'deleteTODOY') {

        TODO.deleteTodo(tempName.temp)

    }
})

warnWindow.querySelector('.no').addEventListener('click', () => {
    warnWindow.classList.toggle('inactive')
})


addTask.addEventListener('click', () => {

    /* CLEAR FIELDS */
    clearFields()

    todoForm.querySelector('h2').textContent = "New TODO"
    todoFormWindow.classList.toggle('inactive')
    console.log(todoList.id)

})


todoForm.subm.addEventListener('click', () => {
    
    console.log()

    if(todoForm.title.value &&todoForm.date.value) {

        if(todoForm.querySelector('h2').textContent == "New TODO"){

            projectsArray.forEach(element => {


                if(element.name == todoList.id){
                    project.addTODO(element, todoForm.title.value, todoForm.date.value, todoForm.priority.value, todoForm.description.value)
                    TODO.renderTodos(element)
                    todoFormWindow.classList.toggle('inactive')
                    return
                }
            })
           

        }else{

            projectsArray.forEach(item => {
                if(item.name == todoList.id) {
                    item.todos.forEach(task => {

                        if(tempName.temp == task.task){

                            const formerName = task.task

                            TODO.updateTodoInfo(task)
                            
                            todoFormWindow.classList.toggle('inactive')

                            TODO.updateTodoTab(formerName, task);
                                                       
                            return
                        }
                    })
                    return
                }              
            })
        }
    }
})


function clearFields() {
    todoForm.querySelector('#title').value = ""
    todoForm.querySelector('#date').value = ""
    todoForm.querySelector('#priority').value = "low"
    todoForm.querySelector('#description').value = ""
}


todayTasks.addEventListener('click', () => {
    let todayArray;
    console.log(projectsArray)

})





















export default class tempName {
    temp;
    get Temp () {
        return temp
    }

    set Temp (value) {
        temp = value;
    }
}

export { projectsArray }







/*
    console.log(projectForm.title.value)
    console.log(projectForm.description.value)
    console.log(projectForm.priority.value)
    console.log(projectForm.date.value)

    console.log(format(parseISO(projectForm.date.value), 'dd'))

*/