import project from './createProject.js'

const addProj = document.querySelector('.addProject')
const formWindow = document.querySelector('.formWindow')
const subm = document.querySelector('#subm')


window.addEventListener('DOMContentLoaded', ()=>{

    /* LOAD STORAGE CONTENT */

    /* check if default exists */
    if(localStorage.getItem('Default')){
        console.log('yes')
        console.log(JSON.parse(localStorage.getItem('Default')).name)
    } else{
        const defProj = new project('Default')

        /* ADDING TODOS FOR TESTING */

        project.addTODO(defProj, 'do this and do that')
        project.addTODO(defProj, 'now do this and do that')
        project.addTODO(defProj, 'then do this and do that')
        project.addTODO(defProj, 'after do this and do that')
        
        project.addProject(defProj);
        console.log('no')

    }

    const project1 = new project('Project1')
    project.addProject(project1)

    console.log(localStorage)
    /*RETRIEVE LOCALGROUP OBJECTS */
    const projectArray = [];
    console.log('...........')
    for(let i = localStorage.length - 1; i >= 0 ; i--){
        projectArray.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }

    /* RENDER ARRAYS */

    for(let i = 0; i < projectArray.length; i++) {
       project.render(projectArray[i])
    }

})

addProj.addEventListener('click', ()=>{
    formWindow.classList.toggle('inactive')
})

subm.addEventListener('click', ()=>{
    formWindow.classList.toggle('inactive')
})