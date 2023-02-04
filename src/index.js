import project from './createProject.js'
import TODO from './createTodo.js'
import { format, parseISO, add } from 'date-fns'

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
const tomorrowTasks = document.querySelector('.tomorrow')
const WeekTasks = document.querySelector('.thisWeek')
const importantTasks = document.querySelector('.important')


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

        

        if(projectExists(1) == false) {
            const newProj = new project(projectForm.title.value)
            projectsArray.push(newProj)
            project.updateProjects(projectsArray)
    
            project.render(newProj)
            formWindow.classList.toggle('inactive')
        }else {
            alert('Project already exists')
        }

    }
})

editProjForm.subm.addEventListener('click', () => {

    if(editProjForm.title.value){

        for(let i = 0; i < projectsArray.length; i++){

            console.log(projectsArray.length)
    
            if(projectsArray[i].name == tempName.temp){

                /* we clear this field in the array so it won't be flagged as a existing result in case we don't need to edit the name of the task*/ 
                projectsArray[i].name = ""
                
                if(projectExists(2) == false) {
                    projectsArray[i].name = editProjForm.title.value;
                    project.updateProjects(projectsArray)
                    projectContainer.childNodes[i].querySelector('div').textContent = editProjForm.title.value
                    todoList.id = projectsArray[i].name
                    editPwindow.classList.toggle('inactive')
                    return
                }else {
                    alert("this project already exists")
                    /*reassign the name field after */
                    projectsArray[i].name = tempName.temp
                }

                
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
        console.log(tempName.temp)
        TODO.deleteTodo(tempName.temp)

    }
})

warnWindow.querySelector('.no').addEventListener('click', () => {
    warnWindow.classList.toggle('inactive')
})

projectForm.closebtn.addEventListener('click', () => {
    formWindow.classList.toggle('inactive')
})
editProjForm.closebtn.addEventListener('click', () => {
    editPwindow.classList.toggle('inactive')
})
todoForm.closebtn.addEventListener('click', () => {
    todoFormWindow.classList.toggle('inactive')
})


addTask.addEventListener('click', () => {

    /* CLEAR FIELDS */
    clearFields()

    todoForm.querySelector('h2').textContent = "New TODO"
    todoFormWindow.classList.toggle('inactive')
    console.log(todoList.id)

})


todoForm.subm.addEventListener('click', () => {
    

    if(todoForm.title.value &&todoForm.date.value) {

        if(todoForm.querySelector('h2').textContent == "New TODO"){

            /*if(todoList.id == 'today' || todoList.id == 'tomorrow' || todoList.id == 'week' || todoList.id == 'importantTSKS') console.log('feeeeeeeeeee')*/

            projectsArray.forEach(element => {

                if(element.name == todoList.id){

                    if(todoExists(element) == false) {
                        project.addTODO(element, todoForm.title.value, todoForm.date.value, todoForm.priority.value, todoForm.description.value)
                        TODO.renderTodos(element)
                        todoFormWindow.classList.toggle('inactive')
                        return
                    }else {
                        alert("There's a task with the same name in this project")
                    }
                }
            })
        
        }else{

            projectsArray.forEach(item => {
                if(item.name == todoList.id) {
                    item.todos.forEach(task => {

                        if(tempName.temp == task.task){

                            let formerName = task.task
                            
                            /* we clear the field so it won't be flagged as a existing result in case we don't need to edit the name of the task*/
                            task.task = "";
                            if(todoExists(item) == false) {

                                TODO.updateTodoInfo(task)
                                
                                todoFormWindow.classList.toggle('inactive')
                                console.log('nani')
                                TODO.updateTodoTab(formerName, task);
                                                        
                                return
                            }else {
                                task.task = tempName.temp
                                alert("There's a task with the same name in this project")
                            }
                        }
                    })
                    return

                }else if(todoList.id == "tomorrow" || todoList.id == "today" || todoList.id == "week" || todoList.id == "importantTSKS") {
                    item.todos.forEach(task => {

                        if(tempName.temp == task.task){

                            const formerName = task.task

                            TODO.updateTodoInfo(task)
                            
                            todoFormWindow.classList.toggle('inactive')

                            

                            if(todoList.id == "today"){
                            
                                let d1 = format(new Date(), 'PPP')
                                let d2 = format(parseISO(task.date), 'PPP')
                                if(d1 != d2) {
                                    const tt = `#${task.code}`
                                    let tempchild = todoList.querySelector(tt);
                                    todoList.querySelector('.todoContainer').removeChild(tempchild)
                                }else{
                                    TODO.updateTodoTab(formerName, task);
                                }
                            } else if (todoList.id == "tomorrow") {
                                let d1 = format(add(new Date(), { days: 1}), 'PPP')
                                let d2 = format(parseISO(task.date), 'PPP')
                                if(d1 != d2) {
                                    const tt = `#${task.code}`
                                    let tempchild = todoList.querySelector(tt);
                                    todoList.querySelector('.todoContainer').removeChild(tempchild)
                                }else{
                                    TODO.updateTodoTab(formerName, task);
                                }
                            } else if (todoList.id == "week"){
                                let d1 = format(new Date(), 'I')
                                let d2 = format(parseISO(task.date), 'I')
                                if(d1 != d2) {
                                    const tt = `#${task.code}`
                                    let tempchild = todoList.querySelector(tt);
                                    todoList.querySelector('.todoContainer').removeChild(tempchild)
                                }else{
                                    TODO.updateTodoTab(formerName, task);
                                }
                            } else if (todoList.id == "importantTSKS"){
                                if (task.priority != "urgent"){
                                    const tt = `#${task.code}`
                                    let tempchild = todoList.querySelector(tt);
                                    todoList.querySelector('.todoContainer').removeChild(tempchild)
                                }else{
                                    TODO.updateTodoTab(formerName, task);
                                }
                            }
                            
                                                      
                            return
                        }
                    })
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

function projectExists (form) {

    if(form == 1) {
        let value = false;
        projectsArray.forEach(proj => {
            
            if (proj.name.toLowerCase() == projectForm.title.value.toLowerCase()) {
                console.log(proj.name.toLowerCase())
                console.log(projectForm.title.value.toLowerCase())
                value = true;
                return
            }
        })
        return value;
    } else {
        let value = false;
        projectsArray.forEach(proj => {
            
            if (proj.name.toLowerCase() == editProjForm.title.value.toLowerCase()) {
                value = true;
                return
            }
        })
        return value;
    }

    
}

function todoExists (proj) {
    let value = false;
    
    proj.todos.forEach(todo => {
        if (todo.task.toLowerCase() == todoForm.title.value.toLowerCase()) {
                value = true;
        }
    })
    
    return value
}


todayTasks.addEventListener('click', () => {
    addTask.classList.remove('addTODO')
    addTask.classList.add('inactive')
    let todayArray = {
        todos: []
    }

    /* Set id of TODO container */
    /* IF NECESARY */
    todoList.id = "today"


    projectsArray.forEach(proj => {
        
        console.log(format(new Date(), 'PPP'))
        proj.todos.forEach(todo => {

            console.log(format(parseISO(todo.date), 'PPP'))
            if(format(new Date(), 'PPP') == format(parseISO(todo.date), 'PPP')) {
                todayArray.todos.push(todo)
            }
        })
    })
    TODO.renderTodos(todayArray)
})

tomorrowTasks.addEventListener('click', () => {
    addTask.classList.remove('addTODO')
    addTask.classList.add('inactive')
    console.log('tomorrow')

    let tomorrowArray = {
        todos: []
    }


    /* Set id of TODO container */
    /* IF NECESARY */
    todoList.id = "tomorrow"


    projectsArray.forEach(proj => {
        
        console.log('.....')
        console.log(format(add(new Date(), {days: 1}), 'd'))
        console.log('.....')
        proj.todos.forEach(todo => {

            console.log(format(parseISO(todo.date), 'd'))
            if(format(add(new Date(), {days: 1}), 'd') == format(parseISO(todo.date), 'd')) {
                tomorrowArray.todos.push(todo)
            }
        })
    })

    console.log(tomorrowArray)
    TODO.renderTodos(tomorrowArray)
})



WeekTasks.addEventListener('click', () => {
    console.log('thisWeek')
    addTask.classList.remove('addTODO')
    addTask.classList.add('inactive')
    let weekArray = {
        todos: []
    }

    /* Set id of TODO container */
    /* IF NECESARY */
    todoList.id = "week"


    projectsArray.forEach(proj => {
        
        console.log('.....')
        console.log(format(new Date(), 'I'))
        console.log('.....')
        proj.todos.forEach(todo => {

            console.log(format(parseISO(todo.date), 'I'))
            if(format(new Date(), 'I') == format(parseISO(todo.date), 'I')) {
                weekArray.todos.push(todo)
            }
        })
    })

    console.log(weekArray)
    TODO.renderTodos(weekArray)
})


importantTasks.addEventListener('click', () => {

    addTask.classList.remove('addTODO')
    addTask.classList.add('inactive')
    let importantArr = {
        todos: []
    }

    todoList.id = "importantTSKS"

    projectsArray.forEach(proj => {
        
        proj.todos.forEach(todo => {

            if(todo.priority == 'urgent') {
                importantArr.todos.push(todo)        
            }
        })
    })

    TODO.renderTodos(importantArr)
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