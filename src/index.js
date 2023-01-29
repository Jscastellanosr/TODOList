import project from './createProject.js'
import TODO from './createTodo.js'
import { format, parseISO } from 'date-fns'

const addProj = document.querySelector('.addProject')
const formWindow = document.querySelector('.formWindow')
const subm = document.querySelector('#subm')
const projectForm = document.querySelector('#newProject')


window.addEventListener('DOMContentLoaded', ()=>{

    /* LOAD STORAGE CONTENT */

    /* check if default exists */
    if(localStorage.getItem('Default')){
        console.log('yes')
        console.log(JSON.parse(localStorage.getItem('Default')).name)
    } else{
        const defProj = new project('Default')

        /* ADDING TODOS FOR TESTING */

        const todo1 = new TODO('wake up', 'tomorrow', 'urgent')
        const todo2 = new TODO('breakfast', 'tomorrow', 'urgent')
        const todo3 = new TODO('brush teeth', 'tomorrow', 'urgent')
        const todo4 = new TODO('get dressed', 'tomorrow', 'urgent')


        project.addTODO(defProj, todo1)
        project.addTODO(defProj, todo2)
        project.addTODO(defProj, todo3)
        project.addTODO(defProj, todo4)
        
        project.addProject(defProj);
        console.log('no')

    }

    const project1 = new project('Project1')
    project.addProject(project1)

    console.log(Object.values(localStorage))

    /*RETRIEVE LOCALGROUP OBJECTS */
    const projectArray = [];
    console.log('...........')
    for(let i = localStorage.length - 1; i >= 0 ; i--){

        console.log(localStorage.key(i))


        projectArray.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }

    /* RENDER ARRAY ELEMENTS */

    for(let i = 0; i < projectArray.length; i++) {
       project.render(projectArray[i])
    }
    /*RENDER DEFAULT TODO */
    project.renderTodos(projectArray[0])

})

addProj.addEventListener('click', ()=>{
    formWindow.classList.toggle('inactive')
})

subm.addEventListener('click', ()=>{

    if(projectForm.title.value) {
        const newProj = new project(projectForm.title.value)
        project.addProject(newProj)
        project.render(newProj)
        formWindow.classList.toggle('inactive')
    }

})






/*
    console.log(projectForm.title.value)
    console.log(projectForm.description.value)
    console.log(projectForm.priority.value)
    console.log(projectForm.date.value)

    console.log(format(parseISO(projectForm.date.value), 'dd'))

*/