import project from './createProject.js'
import TODO from './createTodo.js'
import { tempName } from './createProject.js'
import { format, parseISO } from 'date-fns'

const addProj = document.querySelector('.addProject')
const formWindow = document.querySelector('.formWindow')
const projectContainer = document.querySelector('.projectContainer')
const projectForm = document.querySelector('#newProject')
const editPwindow = document.querySelector('.editProject')
const editProjForm = document.querySelector('#editP')
const warnWindow = document.querySelector('.warningWindow')

let projectsArray = [];

window.addEventListener('DOMContentLoaded', ()=>{

    

    /* LOAD STORAGE CONTENT */

    /* check if default exists */
    if(JSON.parse(localStorage.getItem('projects'))){

        console.log('yes')

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

    /*RENDER DEFAULT TODO */
    TODO.renderTodos(projectsArray[0])

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

                console.log(projectsArray)

                projectsArray.splice(i, 1)

                console.log(projectsArray)

                project.updateProjects(projectsArray) 
                projectContainer.removeChild(projectContainer.childNodes[i])
                return
            }
        }
    }
})

warnWindow.querySelector('.no').addEventListener('click', () => {
    warnWindow.classList.toggle('inactive')
})













export { projectsArray }







/*
    console.log(projectForm.title.value)
    console.log(projectForm.description.value)
    console.log(projectForm.priority.value)
    console.log(projectForm.date.value)

    console.log(format(parseISO(projectForm.date.value), 'dd'))

*/