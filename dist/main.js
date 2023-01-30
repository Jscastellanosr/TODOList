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

    constructor(task, date, description = "", priority){
        this.task = task,
        this.date = date,
        this.description = description,
        this.priority = priority
    }

    static renderTodos (object) {
        todoContainer.innerHTML =""

        object.todos.forEach(element => {
            const todo = document.createElement('div')
            todo.textContent = element.task;
            todoContainer.appendChild(todo);
        });

        console.log('ok nice')
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

        const todo1 = new _createTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('wake up', 'tomorrow', 'urgent')
        const todo2 = new _createTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('breakfast', 'tomorrow', 'urgent')
        const todo3 = new _createTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('brush teeth', 'tomorrow', 'urgent')
        const todo4 = new _createTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('get dressed', 'tomorrow', 'urgent')


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQSxZQUFZLGtFQUFnQjtBQUM1QixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBOztBQUVlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOzs7QUFHQTs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ047QUFDVztBQUNGOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLE1BQU07QUFDTiw0QkFBNEIseURBQU87O0FBRW5DOztBQUVBLDBCQUEwQixzREFBSTtBQUM5QiwwQkFBMEIsc0RBQUk7QUFDOUIsMEJBQTBCLHNEQUFJO0FBQzlCLDBCQUEwQixzREFBSTs7O0FBRzlCLFFBQVEsaUVBQWU7QUFDdkIsUUFBUSxpRUFBZTtBQUN2QixRQUFRLGlFQUFlO0FBQ3ZCLFFBQVEsaUVBQWU7O0FBRXZCOzs7QUFHQSwwQkFBMEIseURBQU87QUFDakM7QUFDQTtBQUNBLFFBQVEsd0VBQXNCO0FBQzlCOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLGdFQUFjO0FBQ3RCLEtBQUs7O0FBRUw7QUFDQSxJQUFJLGtFQUFnQjs7QUFFcEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBLDRCQUE0Qix5REFBTztBQUNuQztBQUNBLFFBQVEsd0VBQXNCOzs7QUFHOUI7QUFDQTs7QUFFQSxRQUFRLGdFQUFjO0FBQ3RCO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBLHVCQUF1QiwwQkFBMEI7O0FBRWpEO0FBQ0E7QUFDQSx3Q0FBd0MsdURBQVE7QUFDaEQ7O0FBRUE7QUFDQSxnQkFBZ0Isd0VBQXNCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOztBQUVBOztBQUVBOztBQUVBLHVCQUF1QiwwQkFBMEI7O0FBRWpEO0FBQ0Esd0NBQXdDLHVEQUFROztBQUVoRDs7QUFFQTs7QUFFQTs7QUFFQSxnQkFBZ0Isd0VBQXNCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQWN1Qjs7Ozs7Ozs7QUFReEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRPRE8gZnJvbSAnLi9jcmVhdGVUb2RvLmpzJ1xuXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250YWluZXInKVxuY29uc3QgZWRpdFB3aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3QnKVxuY29uc3QgZWRpdFByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRQJylcbmNvbnN0IHdhcm5XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2FybmluZ1dpbmRvdycpXG5cbmxldCB0ZW1wTmFtZTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZSxcbiAgICAgICAgdGhpcy50b2RvcyA9W11cbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVE9ETyAob2JqZWN0LCB0b2RvKSB7XG4gICAgICAgIG9iamVjdC50b2Rvcy5wdXNoKHRvZG8pXG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVByb2plY3RzIChvYmplY3QpIHtcbiAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcHJvamVjdHNgLCBKU09OLnN0cmluZ2lmeShvYmplY3QpKVxuICAgIH1cblxuICAgIHN0YXRpYyByZW5kZXIob2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvalRpdGxlLnRleHRDb250ZW50ID0gb2JqZWN0Lm5hbWU7XG4gICAgICAgIHByb2ouYXBwZW5kQ2hpbGQocHJvalRpdGxlKVxuXG4gICAgICAgIGNvbnN0IGVkaXRQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZWRpdFByb2oudGV4dENvbnRlbnQgPSAnZWRpdCdcbiAgICAgICAgZWRpdFByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBlZGl0UHJvakZvcm0udGl0bGUudmFsdWUgPSBvYmplY3QubmFtZTtcbiAgICAgICAgICAgIHRlbXBOYW1lID0gb2JqZWN0Lm5hbWU7XG4gICAgICAgICAgICBlZGl0UHdpbmRvdy5jbGFzc0xpc3QudG9nZ2xlKCdpbmFjdGl2ZScpXG4gICAgICAgIH0pXG4gICAgICAgIHByb2ouYXBwZW5kQ2hpbGQoZWRpdFByb2opXG5cbiAgICAgICAgY29uc3QgZGVsZXRlUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGRlbGV0ZVByb2oudGV4dENvbnRlbnQgPSAneCdcbiAgICAgICAgZGVsZXRlUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgdGVtcE5hbWUgPSBvYmplY3QubmFtZTtcblxuICAgICAgICAgICAgd2FybldpbmRvdy5xdWVyeVNlbGVjdG9yKCdoMycpLnRleHRDb250ZW50ID0gJ1dBUk5JTkcnO1xuICAgICAgICAgICAgd2FybldpbmRvdy5xdWVyeVNlbGVjdG9yKCdwJykudGV4dENvbnRlbnQgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzcyBwcm9qZWN0PydcblxuICAgICAgICAgICAgd2FybldpbmRvdy5xdWVyeVNlbGVjdG9yKCcueWVzJykuaWQgPSAnZGVsZXRlUHJvamVjdFknXG4gICAgICAgICAgICB3YXJuV2luZG93LnF1ZXJ5U2VsZWN0b3IoJy5ubycpLmlkID0gJ2RlbGV0ZVByb2plY3ROJ1xuXG4gICAgICAgICAgICB3YXJuV2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICAgICAgcHJvai5hcHBlbmRDaGlsZChkZWxldGVQcm9qKVxuXG5cbiAgICAgICAgcHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICAgICAgVE9ETy5yZW5kZXJUb2RvcyhvYmplY3QpO1xuICAgICAgICB9KVxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2opO1xuICAgIH1cblxufVxuXG5leHBvcnQgeyB0ZW1wTmFtZSB9IiwiXG5cbmNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NvbnRhaW5lcicpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPRE8ge1xuXG4gICAgY29uc3RydWN0b3IodGFzaywgZGF0ZSwgZGVzY3JpcHRpb24gPSBcIlwiLCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGFzayA9IHRhc2ssXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUsXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbixcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmRlclRvZG9zIChvYmplY3QpIHtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPVwiXCJcblxuICAgICAgICBvYmplY3QudG9kb3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdG9kby50ZXh0Q29udGVudCA9IGVsZW1lbnQudGFzaztcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kbyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdvayBuaWNlJylcbiAgICB9XG5cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHByb2plY3QgZnJvbSAnLi9jcmVhdGVQcm9qZWN0LmpzJ1xuaW1wb3J0IFRPRE8gZnJvbSAnLi9jcmVhdGVUb2RvLmpzJ1xuaW1wb3J0IHsgdGVtcE5hbWUgfSBmcm9tICcuL2NyZWF0ZVByb2plY3QuanMnXG5pbXBvcnQgeyBmb3JtYXQsIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmNvbnN0IGFkZFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdCcpXG5jb25zdCBmb3JtV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1XaW5kb3cnKVxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q29udGFpbmVyJylcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Byb2plY3QnKVxuY29uc3QgZWRpdFB3aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3QnKVxuY29uc3QgZWRpdFByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRQJylcbmNvbnN0IHdhcm5XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2FybmluZ1dpbmRvdycpXG5cbmxldCBwcm9qZWN0c0FycmF5ID0gW107XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PntcblxuICAgIFxuXG4gICAgLyogTE9BRCBTVE9SQUdFIENPTlRFTlQgKi9cblxuICAgIC8qIGNoZWNrIGlmIGRlZmF1bHQgZXhpc3RzICovXG4gICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCd5ZXMnKVxuXG4gICAgfSBlbHNle1xuICAgICAgICBjb25zdCBkZWZQcm9qID0gbmV3IHByb2plY3QoJ0RlZmF1bHQnKVxuXG4gICAgICAgIC8qIEFERElORyBUT0RPUyBGT1IgVEVTVElORyAqL1xuXG4gICAgICAgIGNvbnN0IHRvZG8xID0gbmV3IFRPRE8oJ3dha2UgdXAnLCAndG9tb3Jyb3cnLCAndXJnZW50JylcbiAgICAgICAgY29uc3QgdG9kbzIgPSBuZXcgVE9ETygnYnJlYWtmYXN0JywgJ3RvbW9ycm93JywgJ3VyZ2VudCcpXG4gICAgICAgIGNvbnN0IHRvZG8zID0gbmV3IFRPRE8oJ2JydXNoIHRlZXRoJywgJ3RvbW9ycm93JywgJ3VyZ2VudCcpXG4gICAgICAgIGNvbnN0IHRvZG80ID0gbmV3IFRPRE8oJ2dldCBkcmVzc2VkJywgJ3RvbW9ycm93JywgJ3VyZ2VudCcpXG5cblxuICAgICAgICBwcm9qZWN0LmFkZFRPRE8oZGVmUHJvaiwgdG9kbzEpXG4gICAgICAgIHByb2plY3QuYWRkVE9ETyhkZWZQcm9qLCB0b2RvMilcbiAgICAgICAgcHJvamVjdC5hZGRUT0RPKGRlZlByb2osIHRvZG8zKVxuICAgICAgICBwcm9qZWN0LmFkZFRPRE8oZGVmUHJvaiwgdG9kbzQpXG5cbiAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKGRlZlByb2opXG5cblxuICAgICAgICBjb25zdCBwcm9qMSA9IG5ldyBwcm9qZWN0KCdwcm9qMScpXG4gICAgICAgIHByb2plY3RzQXJyYXkucHVzaChwcm9qMSlcbiAgICAgICAgXG4gICAgICAgIHByb2plY3QudXBkYXRlUHJvamVjdHMocHJvamVjdHNBcnJheSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdubycpXG5cbiAgICB9XG5cblxuICAgIC8qUkVUUklFVkUgTE9DQUxHUk9VUCBPQkpFQ1RTICovXG4gICAgXG4gICAgY29uc29sZS5sb2coJy4uLi4uLi4uLi4uJylcblxuICAgIHByb2plY3RzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKVxuXG4gICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSlcblxuICAgIC8qIFJFTkRFUiBBUlJBWSBFTEVNRU5UUyAqL1xuXG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkpXG5cbiAgICBwcm9qZWN0c0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHByb2plY3QucmVuZGVyKGVsZW1lbnQpXG4gICAgfSk7XG5cbiAgICAvKlJFTkRFUiBERUZBVUxUIFRPRE8gKi9cbiAgICBUT0RPLnJlbmRlclRvZG9zKHByb2plY3RzQXJyYXlbMF0pXG5cbn0pXG5cbmFkZFByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGZvcm1XaW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxufSlcblxucHJvamVjdEZvcm0uc3VibS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG5cbiAgICBpZihwcm9qZWN0Rm9ybS50aXRsZS52YWx1ZSkge1xuICAgICAgICBjb25zdCBuZXdQcm9qID0gbmV3IHByb2plY3QocHJvamVjdEZvcm0udGl0bGUudmFsdWUpXG4gICAgICAgIHByb2plY3RzQXJyYXkucHVzaChuZXdQcm9qKVxuICAgICAgICBwcm9qZWN0LnVwZGF0ZVByb2plY3RzKHByb2plY3RzQXJyYXkpXG5cblxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KVxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSlcblxuICAgICAgICBwcm9qZWN0LnJlbmRlcihuZXdQcm9qKVxuICAgICAgICBmb3JtV2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcbiAgICB9XG59KVxuXG5lZGl0UHJvakZvcm0uc3VibS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIGlmKGVkaXRQcm9qRm9ybS50aXRsZS52YWx1ZSl7XG5cbiAgICAgICAgZWRpdFB3aW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKXtcblxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheS5sZW5ndGgpXG4gICAgXG4gICAgICAgICAgICBpZihwcm9qZWN0c0FycmF5W2ldLm5hbWUgPT0gdGVtcE5hbWUpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVkaXRQcm9qRm9ybS50aXRsZS52YWx1ZSlcblxuICAgICAgICAgICAgICAgIHByb2plY3RzQXJyYXlbaV0ubmFtZSA9IGVkaXRQcm9qRm9ybS50aXRsZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnVwZGF0ZVByb2plY3RzKHByb2plY3RzQXJyYXkpXG4gICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5jaGlsZE5vZGVzW2ldLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLnRleHRDb250ZW50ID0gZWRpdFByb2pGb3JtLnRpdGxlLnZhbHVlXG5cbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pXG5cblxuXG53YXJuV2luZG93LnF1ZXJ5U2VsZWN0b3IoJy55ZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIGlmKHdhcm5XaW5kb3cucXVlcnlTZWxlY3RvcignLnllcycpLmlkID09ICdkZWxldGVQcm9qZWN0WScpe1xuXG4gICAgICAgIHdhcm5XaW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKXtcblxuICAgIFxuICAgICAgICAgICAgaWYocHJvamVjdHNBcnJheVtpXS5uYW1lID09IHRlbXBOYW1lKXtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpXG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0c0FycmF5LnNwbGljZShpLCAxKVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSlcblxuICAgICAgICAgICAgICAgIHByb2plY3QudXBkYXRlUHJvamVjdHMocHJvamVjdHNBcnJheSkgXG4gICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0Q29udGFpbmVyLmNoaWxkTm9kZXNbaV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG53YXJuV2luZG93LnF1ZXJ5U2VsZWN0b3IoJy5ubycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdhcm5XaW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxufSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IHsgcHJvamVjdHNBcnJheSB9XG5cblxuXG5cblxuXG5cbi8qXG4gICAgY29uc29sZS5sb2cocHJvamVjdEZvcm0udGl0bGUudmFsdWUpXG4gICAgY29uc29sZS5sb2cocHJvamVjdEZvcm0uZGVzY3JpcHRpb24udmFsdWUpXG4gICAgY29uc29sZS5sb2cocHJvamVjdEZvcm0ucHJpb3JpdHkudmFsdWUpXG4gICAgY29uc29sZS5sb2cocHJvamVjdEZvcm0uZGF0ZS52YWx1ZSlcblxuICAgIGNvbnNvbGUubG9nKGZvcm1hdChwYXJzZUlTTyhwcm9qZWN0Rm9ybS5kYXRlLnZhbHVlKSwgJ2RkJykpXG5cbiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9