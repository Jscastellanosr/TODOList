import project from './createProject.js'
import { projects } from './createProject.js'


window.addEventListener('DOMContentLoaded', ()=>{

    /* LOAD STORAGE CONTENT */
    if(localStorage.getItem('default')){
        console.log('yes')
    } else{

        const defProj = new project('Default')
        defProj.addProject()
        console.log(projects)
        console.log('no')
    }


})