/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ project),
/* harmony export */   "tempName": () => (/* binding */ tempName)
/* harmony export */ });
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ "./src/createTodo.js");


const projectContainer = document.querySelector('.projectContainer')
const editPwindow = document.querySelector('.editProject')
const editProjForm = document.querySelector('#editP')
const warnWindow = document.querySelector('.warningWindow')

let tempName;
class project {
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
            _createTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderTodos(object);
        })
        projectContainer.appendChild(proj);
    }

}



/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TODO)
/* harmony export */ });


const todoContainer = document.querySelector('.todoContainer')

class TODO {

    constructor(task, date, priority, description = ""){
        this.task = task,
        this.date = date,
        this.description = description,
        this.priority = priority
    }

    static renderTodos (project) {
        todoContainer.innerHTML =""

        project.todos.forEach(element => {
            
            const todo = document.createElement('div')
            todo.classList.add('todo')

            /* CHECK AND EXPAND */

            const checkExpand = document.createElement('div')
            checkExpand.classList.add('checkExpand')

            const checkbox = document.createElement('div')
            checkbox.classList.add('checkbox')
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
            task.classList.add('infoElement')
            task.textContent = element.task
            todoInfo.appendChild(task)

            const date = document.createElement('div')
            date.classList.add('infoElement')
            date.textContent = element.date
            todoInfo.appendChild(date)

            const priority = document.createElement('div')
            priority.classList.add('infoElement')
            priority.textContent = element.priority
            todoInfo.appendChild(priority)


            const description = document.createElement('p')
            description.classList.add('inactive')
            description.textContent = element.description
            todoInfo.appendChild(description)

            todo.appendChild(todoInfo)

            /*EDIT/REMOVE TODO */

            const editRemove = document.createElement('div')
            editRemove.classList.add('editRemove')

            const removeTodo = document.createElement('button')
            removeTodo.textContent = 'x'
            editRemove.appendChild(removeTodo)

            const editTodo = document.createElement('button')
            editTodo.textContent = 'Edit'
            editRemove.appendChild(editTodo)

            todo.appendChild(editRemove)


        
            todoContainer.appendChild(todo);
        });

        console.log('ok good')
    }


}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray)
/* harmony export */ });
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodo.js */ "./src/createTodo.js");





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
        const defProj = new _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Default')

        /* ADDING TODOS FOR TESTING */

        const todo1 = new _createTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('wake up', 'tomorrow', 'urgent', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis est at ornare vulputate. Suspendisse consequat augue eu fringilla tincidunt. Donec hendrerit augue odio. Sed vitae nulla ultricies, imperdiet metus quis, porta nulla. Quisque varius, quam ut egestas euismod, augue eros pretium lectus, quis vulputate velit urna ut nisi. Quisque in arcu viverra, mattis orci sagittis, lacinia neque. Integer laoreet consequat velit a maximus. In porta placerat velit, ut sodales magna venenatis sed. Suspendisse potenti. In ut malesuada risus.")
        const todo2 = new _createTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('breakfast', 'tomorrow', 'urgent', 'xxx')
        const todo3 = new _createTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('brush teeth', 'tomorrow', 'urgent', 'xxx')
        const todo4 = new _createTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('get dressed', 'tomorrow', 'urgent', 'xxx')


        _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTODO(defProj, todo1)
        _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTODO(defProj, todo2)
        _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTODO(defProj, todo3)
        _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTODO(defProj, todo4)

        projectsArray.push(defProj)


        const proj1 = new _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"]('proj1')
        projectsArray.push(proj1)
        
        _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateProjects(projectsArray);
        console.log('no')

    }


    /*RETRIEVE LOCALGROUP OBJECTS */
    
    console.log('...........')

    projectsArray = JSON.parse(localStorage.getItem('projects'))

    console.log(projectsArray)

    /* RENDER ARRAY ELEMENTS */

    console.log(JSON.parse(localStorage.getItem('projects')))

    projectsArray.forEach(element => {
        _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].render(element)
    });

    /*RENDER DEFAULT TODO */
    _createTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderTodos(projectsArray[0])

})

addProj.addEventListener('click', ()=>{
    formWindow.classList.toggle('inactive')
})

projectForm.subm.addEventListener('click', ()=>{

    if(projectForm.title.value) {
        const newProj = new _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectForm.title.value)
        projectsArray.push(newProj)
        _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateProjects(projectsArray)


        console.log(projectsArray)
        console.log(JSON.parse(localStorage.getItem('projects')))

        _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].render(newProj)
        formWindow.classList.toggle('inactive')
    }
})

editProjForm.subm.addEventListener('click', () => {

    if(editProjForm.title.value){

        editPwindow.classList.toggle('inactive')

        for(let i = 0; i < projectsArray.length; i++){

            console.log(projectsArray.length)
    
            if(projectsArray[i].name == _createProject_js__WEBPACK_IMPORTED_MODULE_0__.tempName){
                console.log(editProjForm.title.value)

                projectsArray[i].name = editProjForm.title.value;
                _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateProjects(projectsArray)
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

    
            if(projectsArray[i].name == _createProject_js__WEBPACK_IMPORTED_MODULE_0__.tempName){

                console.log(projectsArray)

                projectsArray.splice(i, 1)

                console.log(projectsArray)

                _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateProjects(projectsArray) 
                projectContainer.removeChild(projectContainer.childNodes[i])
                return
            }
        }
    }
})

warnWindow.querySelector('.no').addEventListener('click', () => {
    warnWindow.classList.toggle('inactive')
})





















/*
    console.log(projectForm.title.value)
    console.log(projectForm.description.value)
    console.log(projectForm.priority.value)
    console.log(projectForm.date.value)

    console.log(format(parseISO(projectForm.date.value), 'dd'))

*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBY3VCOzs7Ozs7OztBQVF4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVE9ETyBmcm9tICcuL2NyZWF0ZVRvZG8uanMnXG5cbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRhaW5lcicpXG5jb25zdCBlZGl0UHdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0UHJvamVjdCcpXG5jb25zdCBlZGl0UHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdFAnKVxuY29uc3Qgd2FybldpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53YXJuaW5nV2luZG93JylcblxubGV0IHRlbXBOYW1lO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lLFxuICAgICAgICB0aGlzLnRvZG9zID1bXVxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRUT0RPIChvYmplY3QsIHRvZG8pIHtcbiAgICAgICAgb2JqZWN0LnRvZG9zLnB1c2godG9kbylcbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlUHJvamVjdHMgKG9iamVjdCkge1xuICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBwcm9qZWN0c2AsIEpTT04uc3RyaW5naWZ5KG9iamVjdCkpXG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmRlcihvYmplY3QpIHtcbiAgICAgICAgY29uc3QgcHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qVGl0bGUudGV4dENvbnRlbnQgPSBvYmplY3QubmFtZTtcbiAgICAgICAgcHJvai5hcHBlbmRDaGlsZChwcm9qVGl0bGUpXG5cbiAgICAgICAgY29uc3QgZWRpdFByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBlZGl0UHJvai50ZXh0Q29udGVudCA9ICdlZGl0J1xuICAgICAgICBlZGl0UHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGVkaXRQcm9qRm9ybS50aXRsZS52YWx1ZSA9IG9iamVjdC5uYW1lO1xuICAgICAgICAgICAgdGVtcE5hbWUgPSBvYmplY3QubmFtZTtcbiAgICAgICAgICAgIGVkaXRQd2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICAgICAgcHJvai5hcHBlbmRDaGlsZChlZGl0UHJvailcblxuICAgICAgICBjb25zdCBkZWxldGVQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZGVsZXRlUHJvai50ZXh0Q29udGVudCA9ICd4J1xuICAgICAgICBkZWxldGVQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICB0ZW1wTmFtZSA9IG9iamVjdC5uYW1lO1xuXG4gICAgICAgICAgICB3YXJuV2luZG93LnF1ZXJ5U2VsZWN0b3IoJ2gzJykudGV4dENvbnRlbnQgPSAnV0FSTklORyc7XG4gICAgICAgICAgICB3YXJuV2luZG93LnF1ZXJ5U2VsZWN0b3IoJ3AnKS50ZXh0Q29udGVudCA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXNzIHByb2plY3Q/J1xuXG4gICAgICAgICAgICB3YXJuV2luZG93LnF1ZXJ5U2VsZWN0b3IoJy55ZXMnKS5pZCA9ICdkZWxldGVQcm9qZWN0WSdcbiAgICAgICAgICAgIHdhcm5XaW5kb3cucXVlcnlTZWxlY3RvcignLm5vJykuaWQgPSAnZGVsZXRlUHJvamVjdE4nXG5cbiAgICAgICAgICAgIHdhcm5XaW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxuICAgICAgICB9KVxuICAgICAgICBwcm9qLmFwcGVuZENoaWxkKGRlbGV0ZVByb2opXG5cblxuICAgICAgICBwcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgICAgICBUT0RPLnJlbmRlclRvZG9zKG9iamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvaik7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IHRlbXBOYW1lIH0iLCJcblxuY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ29udGFpbmVyJylcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9ETyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YXNrLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24gPSBcIlwiKXtcbiAgICAgICAgdGhpcy50YXNrID0gdGFzayxcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSxcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLFxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVuZGVyVG9kb3MgKHByb2plY3QpIHtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPVwiXCJcblxuICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJylcblxuICAgICAgICAgICAgLyogQ0hFQ0sgQU5EIEVYUEFORCAqL1xuXG4gICAgICAgICAgICBjb25zdCBjaGVja0V4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBjaGVja0V4cGFuZC5jbGFzc0xpc3QuYWRkKCdjaGVja0V4cGFuZCcpXG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94JylcbiAgICAgICAgICAgIGNoZWNrRXhwYW5kLmFwcGVuZENoaWxkKGNoZWNrYm94KVxuXG4gICAgICAgICAgICBjb25zdCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgZXhwYW5kLnRleHRDb250ZW50ID0gXCI+XCJcbiAgICAgICAgICAgIGV4cGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdpbmFjdGl2ZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY2hlY2tFeHBhbmQuYXBwZW5kQ2hpbGQoZXhwYW5kKVxuXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGNoZWNrRXhwYW5kKVxuXG5cbiAgICAgICAgICAgIC8qVE9ETyBJTkZPICovXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRvZG9JbmZvLmNsYXNzTGlzdC5hZGQoJ3RvZG9JbmZvJylcblxuICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2luZm9FbGVtZW50JylcbiAgICAgICAgICAgIHRhc2sudGV4dENvbnRlbnQgPSBlbGVtZW50LnRhc2tcbiAgICAgICAgICAgIHRvZG9JbmZvLmFwcGVuZENoaWxkKHRhc2spXG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdpbmZvRWxlbWVudCcpXG4gICAgICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gZWxlbWVudC5kYXRlXG4gICAgICAgICAgICB0b2RvSW5mby5hcHBlbmRDaGlsZChkYXRlKVxuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdpbmZvRWxlbWVudCcpXG4gICAgICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpb3JpdHlcbiAgICAgICAgICAgIHRvZG9JbmZvLmFwcGVuZENoaWxkKHByaW9yaXR5KVxuXG5cbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGVzY3JpcHRpb25cbiAgICAgICAgICAgIHRvZG9JbmZvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9JbmZvKVxuXG4gICAgICAgICAgICAvKkVESVQvUkVNT1ZFIFRPRE8gKi9cblxuICAgICAgICAgICAgY29uc3QgZWRpdFJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBlZGl0UmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ2VkaXRSZW1vdmUnKVxuXG4gICAgICAgICAgICBjb25zdCByZW1vdmVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIHJlbW92ZVRvZG8udGV4dENvbnRlbnQgPSAneCdcbiAgICAgICAgICAgIGVkaXRSZW1vdmUuYXBwZW5kQ2hpbGQocmVtb3ZlVG9kbylcblxuICAgICAgICAgICAgY29uc3QgZWRpdFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICAgICAgZWRpdFRvZG8udGV4dENvbnRlbnQgPSAnRWRpdCdcbiAgICAgICAgICAgIGVkaXRSZW1vdmUuYXBwZW5kQ2hpbGQoZWRpdFRvZG8pXG5cbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZWRpdFJlbW92ZSlcblxuXG4gICAgICAgIFxuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ29rIGdvb2QnKVxuICAgIH1cblxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHJvamVjdCBmcm9tICcuL2NyZWF0ZVByb2plY3QuanMnXG5pbXBvcnQgVE9ETyBmcm9tICcuL2NyZWF0ZVRvZG8uanMnXG5pbXBvcnQgeyB0ZW1wTmFtZSB9IGZyb20gJy4vY3JlYXRlUHJvamVjdC5qcydcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucydcblxuY29uc3QgYWRkUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0JylcbmNvbnN0IGZvcm1XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybVdpbmRvdycpXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250YWluZXInKVxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdCcpXG5jb25zdCBlZGl0UHdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0UHJvamVjdCcpXG5jb25zdCBlZGl0UHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdFAnKVxuY29uc3Qgd2FybldpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53YXJuaW5nV2luZG93JylcblxubGV0IHByb2plY3RzQXJyYXkgPSBbXTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+e1xuXG4gICAgXG5cbiAgICAvKiBMT0FEIFNUT1JBR0UgQ09OVEVOVCAqL1xuXG4gICAgLyogY2hlY2sgaWYgZGVmYXVsdCBleGlzdHMgKi9cbiAgICBpZihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSl7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3llcycpXG5cbiAgICB9IGVsc2V7XG4gICAgICAgIGNvbnN0IGRlZlByb2ogPSBuZXcgcHJvamVjdCgnRGVmYXVsdCcpXG5cbiAgICAgICAgLyogQURESU5HIFRPRE9TIEZPUiBURVNUSU5HICovXG5cbiAgICAgICAgY29uc3QgdG9kbzEgPSBuZXcgVE9ETygnd2FrZSB1cCcsICd0b21vcnJvdycsICd1cmdlbnQnLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEludGVnZXIgdmVuZW5hdGlzIGVzdCBhdCBvcm5hcmUgdnVscHV0YXRlLiBTdXNwZW5kaXNzZSBjb25zZXF1YXQgYXVndWUgZXUgZnJpbmdpbGxhIHRpbmNpZHVudC4gRG9uZWMgaGVuZHJlcml0IGF1Z3VlIG9kaW8uIFNlZCB2aXRhZSBudWxsYSB1bHRyaWNpZXMsIGltcGVyZGlldCBtZXR1cyBxdWlzLCBwb3J0YSBudWxsYS4gUXVpc3F1ZSB2YXJpdXMsIHF1YW0gdXQgZWdlc3RhcyBldWlzbW9kLCBhdWd1ZSBlcm9zIHByZXRpdW0gbGVjdHVzLCBxdWlzIHZ1bHB1dGF0ZSB2ZWxpdCB1cm5hIHV0IG5pc2kuIFF1aXNxdWUgaW4gYXJjdSB2aXZlcnJhLCBtYXR0aXMgb3JjaSBzYWdpdHRpcywgbGFjaW5pYSBuZXF1ZS4gSW50ZWdlciBsYW9yZWV0IGNvbnNlcXVhdCB2ZWxpdCBhIG1heGltdXMuIEluIHBvcnRhIHBsYWNlcmF0IHZlbGl0LCB1dCBzb2RhbGVzIG1hZ25hIHZlbmVuYXRpcyBzZWQuIFN1c3BlbmRpc3NlIHBvdGVudGkuIEluIHV0IG1hbGVzdWFkYSByaXN1cy5cIilcbiAgICAgICAgY29uc3QgdG9kbzIgPSBuZXcgVE9ETygnYnJlYWtmYXN0JywgJ3RvbW9ycm93JywgJ3VyZ2VudCcsICd4eHgnKVxuICAgICAgICBjb25zdCB0b2RvMyA9IG5ldyBUT0RPKCdicnVzaCB0ZWV0aCcsICd0b21vcnJvdycsICd1cmdlbnQnLCAneHh4JylcbiAgICAgICAgY29uc3QgdG9kbzQgPSBuZXcgVE9ETygnZ2V0IGRyZXNzZWQnLCAndG9tb3Jyb3cnLCAndXJnZW50JywgJ3h4eCcpXG5cblxuICAgICAgICBwcm9qZWN0LmFkZFRPRE8oZGVmUHJvaiwgdG9kbzEpXG4gICAgICAgIHByb2plY3QuYWRkVE9ETyhkZWZQcm9qLCB0b2RvMilcbiAgICAgICAgcHJvamVjdC5hZGRUT0RPKGRlZlByb2osIHRvZG8zKVxuICAgICAgICBwcm9qZWN0LmFkZFRPRE8oZGVmUHJvaiwgdG9kbzQpXG5cbiAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKGRlZlByb2opXG5cblxuICAgICAgICBjb25zdCBwcm9qMSA9IG5ldyBwcm9qZWN0KCdwcm9qMScpXG4gICAgICAgIHByb2plY3RzQXJyYXkucHVzaChwcm9qMSlcbiAgICAgICAgXG4gICAgICAgIHByb2plY3QudXBkYXRlUHJvamVjdHMocHJvamVjdHNBcnJheSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdubycpXG5cbiAgICB9XG5cblxuICAgIC8qUkVUUklFVkUgTE9DQUxHUk9VUCBPQkpFQ1RTICovXG4gICAgXG4gICAgY29uc29sZS5sb2coJy4uLi4uLi4uLi4uJylcblxuICAgIHByb2plY3RzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKVxuXG4gICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSlcblxuICAgIC8qIFJFTkRFUiBBUlJBWSBFTEVNRU5UUyAqL1xuXG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpXG5cbiAgICBwcm9qZWN0c0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHByb2plY3QucmVuZGVyKGVsZW1lbnQpXG4gICAgfSk7XG5cbiAgICAvKlJFTkRFUiBERUZBVUxUIFRPRE8gKi9cbiAgICBUT0RPLnJlbmRlclRvZG9zKHByb2plY3RzQXJyYXlbMF0pXG5cbn0pXG5cbmFkZFByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGZvcm1XaW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxufSlcblxucHJvamVjdEZvcm0uc3VibS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG5cbiAgICBpZihwcm9qZWN0Rm9ybS50aXRsZS52YWx1ZSkge1xuICAgICAgICBjb25zdCBuZXdQcm9qID0gbmV3IHByb2plY3QocHJvamVjdEZvcm0udGl0bGUudmFsdWUpXG4gICAgICAgIHByb2plY3RzQXJyYXkucHVzaChuZXdQcm9qKVxuICAgICAgICBwcm9qZWN0LnVwZGF0ZVByb2plY3RzKHByb2plY3RzQXJyYXkpXG5cblxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KVxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSlcblxuICAgICAgICBwcm9qZWN0LnJlbmRlcihuZXdQcm9qKVxuICAgICAgICBmb3JtV2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcbiAgICB9XG59KVxuXG5lZGl0UHJvakZvcm0uc3VibS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIGlmKGVkaXRQcm9qRm9ybS50aXRsZS52YWx1ZSl7XG5cbiAgICAgICAgZWRpdFB3aW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKXtcblxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheS5sZW5ndGgpXG4gICAgXG4gICAgICAgICAgICBpZihwcm9qZWN0c0FycmF5W2ldLm5hbWUgPT0gdGVtcE5hbWUpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVkaXRQcm9qRm9ybS50aXRsZS52YWx1ZSlcblxuICAgICAgICAgICAgICAgIHByb2plY3RzQXJyYXlbaV0ubmFtZSA9IGVkaXRQcm9qRm9ybS50aXRsZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnVwZGF0ZVByb2plY3RzKHByb2plY3RzQXJyYXkpXG4gICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5jaGlsZE5vZGVzW2ldLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLnRleHRDb250ZW50ID0gZWRpdFByb2pGb3JtLnRpdGxlLnZhbHVlXG5cbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pXG5cblxuXG53YXJuV2luZG93LnF1ZXJ5U2VsZWN0b3IoJy55ZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIGlmKHdhcm5XaW5kb3cucXVlcnlTZWxlY3RvcignLnllcycpLmlkID09ICdkZWxldGVQcm9qZWN0WScpe1xuXG4gICAgICAgIHdhcm5XaW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKXtcblxuICAgIFxuICAgICAgICAgICAgaWYocHJvamVjdHNBcnJheVtpXS5uYW1lID09IHRlbXBOYW1lKXtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpXG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0c0FycmF5LnNwbGljZShpLCAxKVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSlcblxuICAgICAgICAgICAgICAgIHByb2plY3QudXBkYXRlUHJvamVjdHMocHJvamVjdHNBcnJheSkgXG4gICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0Q29udGFpbmVyLmNoaWxkTm9kZXNbaV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG53YXJuV2luZG93LnF1ZXJ5U2VsZWN0b3IoJy5ubycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdhcm5XaW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxufSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IHsgcHJvamVjdHNBcnJheSB9XG5cblxuXG5cblxuXG5cbi8qXG4gICAgY29uc29sZS5sb2cocHJvamVjdEZvcm0udGl0bGUudmFsdWUpXG4gICAgY29uc29sZS5sb2cocHJvamVjdEZvcm0uZGVzY3JpcHRpb24udmFsdWUpXG4gICAgY29uc29sZS5sb2cocHJvamVjdEZvcm0ucHJpb3JpdHkudmFsdWUpXG4gICAgY29uc29sZS5sb2cocHJvamVjdEZvcm0uZGF0ZS52YWx1ZSlcblxuICAgIGNvbnNvbGUubG9nKGZvcm1hdChwYXJzZUlTTyhwcm9qZWN0Rm9ybS5kYXRlLnZhbHVlKSwgJ2RkJykpXG5cbiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9