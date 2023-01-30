import project from './createProject.js'
import TODO from './createTodo.js'
import { tempName } from './createProject.js'
import { format, parseISO, parse } from 'date-fns'

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

let projectsArray = [];

window.addEventListener('DOMContentLoaded', ()=>{

    

    /* LOAD STORAGE CONTENT */

    /* check if default exists */
    if(JSON.parse(localStorage.getItem('projects'))){

        console.log('yes')

    } else{
        const defProj = new project('Default')

        /* ADDING TODOS FOR TESTING */


        project.addTODO(defProj, 'wake up', format(new Date(2023, 8, 21), 'PPP'), 'urgent', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis est at ornare vulputate. Suspendisse consequat augue eu fringilla tincidunt. Donec hendrerit augue odio. Sed vitae nulla ultricies, imperdiet metus quis, porta nulla. Quisque varius, quam ut egestas euismod, augue eros pretium lectus, quis vulputate velit urna ut nisi. Quisque in arcu viverra, mattis orci sagittis, lacinia neque. Integer laoreet consequat velit a maximus. In porta placerat velit, ut sodales magna venenatis sed. Suspendisse potenti. In ut malesuada risus.")
        project.addTODO(defProj, 'breakfast', format(new Date(2023, 9, 18), 'PPP'), 'urgent', 'xxx')
        project.addTODO(defProj, 'brush teeth', format(new Date(2023, 5, 22), 'PPP'), 'urgent', 'xxx')
        project.addTODO(defProj, 'get dressed', format(new Date(2023, 2, 31), 'PPP'), 'urgent', 'xxx')

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
    
            if(projectsArray[i].name == tempName){
                console.log(editProjForm.title.value)

                projectsArray[i].name = editProjForm.title.value;
                project.updateProjects(projectsArray)
                projectContainer.childNodes[i].querySelector('div').textContent = editProjForm.title.value

                return
            }
        }
    }
})



warnWindow.querySelector('.yes').addEventListener('click', () => {

    if(warnWindow.querySelector('.yes').id == 'deleteProjectY'){

        warnWindow.classList.toggle('inactive')

        for(let i = 0; i < projectsArray.length; i++){

    
            if(projectsArray[i].name == tempName){

                projectsArray.splice(i, 1)
                project.updateProjects(projectsArray) 
                projectContainer.removeChild(projectContainer.childNodes[i])

                TODO.renderTodos(projectsArray[0])
                todoList.id = projectsArray[0].name

                return

            }
        }
    }
})

warnWindow.querySelector('.no').addEventListener('click', () => {
    warnWindow.classList.toggle('inactive')
})


addTask.addEventListener('click', () => {

    todoFormWindow.classList.toggle('inactive')
    console.log(todoList.id)

})


todoForm.subm.addEventListener('click', () => {


    if(todoForm.title.value &&todoForm.date.value) {
        
        console.log(todoForm.title.value)
        console.log(format(parseISO(todoForm.date.value), 'PPP'))
        console.log(todoForm.priority.value)
        console.log(todoForm.description.value)


        projectsArray.forEach(element => {
            if(element.name == todoList.id){
                project.addTODO(element, todoForm.title.value, format(parseISO(todoForm.date.value), 'PPP'), todoForm.priority.value, todoForm.description.value)
                TODO.renderTodos(element)
                todoFormWindow.classList.toggle('inactive')
                return
            }
        })


        /* */ 
        


        /* const newTODO = new TODO(todoForm.title.value, format(parseISO(todoForm.date.value), 'dd'), todoForm.priority.value, todoForm.description.value) */

    }
    
})










export { projectsArray }







/*
    console.log(projectForm.title.value)
    console.log(projectForm.description.value)
    console.log(projectForm.priority.value)
    console.log(projectForm.date.value)

    console.log(format(parseISO(projectForm.date.value), 'dd'))

*/