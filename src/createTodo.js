import { format, parseISO } from 'date-fns'
import tempName from './index.js'
import project from './createProject.js'
import { projectsArray } from './index.js'
const todoList = document.querySelector('.todoList')

const todoContainer = document.querySelector('.todoContainer')
const todoForm = document.querySelector('#TODOForm')
const todoFormWindow = document.querySelector('.addTodoForm')
const warnWindow = document.querySelector('.warningWindow')

export default class TODO {

    constructor(task, date, priority, description = ""){
        this.task = task,
        this.date = date,
        this.description = description,
        this.priority = priority,
        this.complete = false
    }

    static renderTodos (proj) {
        todoContainer.innerHTML =""

        proj.todos.forEach(element => {
            
            const todo = document.createElement('div')
            todo.classList.add('todo')
            console.log('.........................')
            if(element.complete == true) todo.classList.add('checked');

            /* CHECK AND EXPAND */

            const checkExpand = document.createElement('div')
            checkExpand.classList.add('checkExpand')

            const checkbox = document.createElement('div')
            checkbox.classList.add('checkbox')
            checkbox.addEventListener('click', () => {

                checkbox.parentNode.parentNode.classList.toggle('checked')

                proj.todos.forEach(todo => {

                    if(todo.task == element.task) {
                        todo.complete == true? todo.complete = false: todo.complete = true;
                        
                        project.updateProjects(projectsArray)
                        console.log(projectsArray)
                    }  
                    
                })
                
            })
            checkExpand.appendChild(checkbox)

            const expand = document.createElement('button')
            expand.textContent = ">"
            expand.addEventListener('click', () => {
                description.classList.toggle('inactive')
            })
            checkExpand.appendChild(expand)

            todo.appendChild(checkExpand)


            /*TODO INFO */

            const todoInfo = document.createElement('div')
            todoInfo.classList.add('todoInfo')

            const task = document.createElement('div')
            task.id = "taskTitle"
            task.classList.add('infoElement')
            task.textContent = element.task
            todoInfo.appendChild(task)

            const date = document.createElement('div')
            date.id = "taskDate"
            date.classList.add('infoElement')
            date.textContent = format(parseISO(element.date), 'PPP')
            todoInfo.appendChild(date)

            const priority = document.createElement('div')
            priority.id = 'taskPriority'
            priority.classList.add('infoElement')
            priority.textContent = element.priority
            todoInfo.appendChild(priority)


            const description = document.createElement('p')
            description.id = 'taskDescription'
            description.classList.add('inactive')
            description.textContent = element.description
            todoInfo.appendChild(description)

            todo.appendChild(todoInfo)

            /*EDIT/REMOVE TODO */

            const editRemove = document.createElement('div')
            editRemove.classList.add('editRemove')

            const removeTodo = document.createElement('button')
            removeTodo.textContent = 'x'
            removeTodo.addEventListener('click', () => {
                tempName.temp = element.task
                warnWindow.querySelector('h3').textContent = 'DELETE TODO';
                warnWindow.querySelector('p').textContent = 'Are you sure you want to delete this task?'
    
                warnWindow.querySelector('.yes').id = 'deleteTODOY'
                warnWindow.querySelector('.no').id = 'deleteTODON'
    
                warnWindow.classList.toggle('inactive')
            })
            editRemove.appendChild(removeTodo)

            const editTodo = document.createElement('button')
            editTodo.textContent = 'Edit'
            editTodo.addEventListener('click', () => {

                todoForm.querySelector('h2').textContent = "Edit TODO"
                todoFormWindow.classList.toggle('inactive')

                todoForm.querySelector('#title').value = element.task
                todoForm.querySelector('#date').value = element.date
                todoForm.querySelector('#priority').value = element.priority
                todoForm.querySelector('#description').value = element.description
                tempName.temp = element.task
            })
            editRemove.appendChild(editTodo)

            todo.appendChild(editRemove)

           
        
            todoContainer.appendChild(todo);
        });

        console.log('ok good')
    }


    static updateTodoInfo (task) {
        
            console.log(tempName.temp)
            console.log(task.task)
            
            task.task =todoForm.title.value
            task.date = todoForm.date.value
            task.description = todoForm.description.value
            task.priority = todoForm.priority.value
            
            project.updateProjects(projectsArray)
            return
    }

    static updateTodoTab(todoName, update) {
        
        todoContainer.childNodes.forEach(node => {
            if(node.querySelector('#taskTitle').textContent == todoName){
                node.querySelector('#taskTitle').textContent = update.task;
                node.querySelector('#taskDate').textContent = update.date;
                node.querySelector('#taskPriority').textContent = update.priority;
                node.querySelector('#taskDescription').textContent = update.description;
            }
        })
    }

    static deleteTodo(todoName) {
        console.log(todoName)
        console.log(todoContainer)

        todoContainer.childNodes.forEach(tab => {
            
            if(tab.querySelector('#taskTitle').textContent == todoName){
                
                /*DELETE FROM STORAGE */

                projectsArray.forEach(proj => {
                    if(proj.name == todoList.id){

                        /* Convert todo prop into array (for some reason it is not an array) */

                        let arr = [...proj.todos]
                        console.log(arr.length)
                        for(let i = 0; i < arr.length ; i++) {

                            if(proj.todos[i].task == todoName) {
                                arr.splice(i, 1)
                                proj.todos = arr;
                                project.updateProjects(projectsArray)
                                return
                            }
                        }
                        return
                    }
                })

                /*DELETE FROM SCREEN */
                todoContainer.removeChild(tab)
                warnWindow.classList.toggle('inactive')
            }

        })

    }


}