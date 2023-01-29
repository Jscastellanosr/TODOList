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
/* harmony export */   "default": () => (/* binding */ project)
/* harmony export */ });
const projectContainer = document.querySelector('.projectContainer')
const todoContainer = document.querySelector('.todoContainer')
class project {
    constructor(name) {
        this.name = name,
        this.todos =[]
    }

    static addTODO (object, todo) {
        object.todos.push(todo)
    }

    static addProject (object) {
       localStorage.setItem(`${object.name}`, JSON.stringify(object))
    }

    static render(object) {
        const proj = document.createElement('li');
        proj.textContent = object.name;
        proj.addEventListener('click', ()=> {
            this.renderTodos(object);
        })
        projectContainer.appendChild(proj);
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



class TODO {

    constructor(task, date, description = "", priority){
        this.task = task,
        this.date = date,
        this.description = description,
        this.priority = priority
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
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodo.js */ "./src/createTodo.js");




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
        
        _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(defProj);
        console.log('no')

    }

    const project1 = new _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Project1')
    _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(project1)

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
       _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].render(projectArray[i])
    }
    /*RENDER DEFAULT TODO */
    _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderTodos(projectArray[0])

})

addProj.addEventListener('click', ()=>{
    formWindow.classList.toggle('inactive')
})

subm.addEventListener('click', ()=>{

    if(projectForm.title.value) {
        const newProj = new _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"](projectForm.title.value)
        _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(newProj)
        _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].render(newProj)
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ053QztBQUNOO0FBQ1M7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiw0QkFBNEIseURBQU87O0FBRW5DOztBQUVBLDBCQUEwQixzREFBSTtBQUM5QiwwQkFBMEIsc0RBQUk7QUFDOUIsMEJBQTBCLHNEQUFJO0FBQzlCLDBCQUEwQixzREFBSTs7O0FBRzlCLFFBQVEsaUVBQWU7QUFDdkIsUUFBUSxpRUFBZTtBQUN2QixRQUFRLGlFQUFlO0FBQ3ZCLFFBQVEsaUVBQWU7QUFDdkI7QUFDQSxRQUFRLG9FQUFrQjtBQUMxQjs7QUFFQTs7QUFFQSx5QkFBeUIseURBQU87QUFDaEMsSUFBSSxvRUFBa0I7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxTQUFTOztBQUVsRDs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIseUJBQXlCO0FBQzVDLE9BQU8sZ0VBQWM7QUFDckI7QUFDQTtBQUNBLElBQUkscUVBQW1COztBQUV2QixDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0EsNEJBQTRCLHlEQUFPO0FBQ25DLFFBQVEsb0VBQWtCO0FBQzFCLFFBQVEsZ0VBQWM7QUFDdEI7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7O0FBT0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVUb2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q29udGFpbmVyJylcbmNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NvbnRhaW5lcicpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUsXG4gICAgICAgIHRoaXMudG9kb3MgPVtdXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFRPRE8gKG9iamVjdCwgdG9kbykge1xuICAgICAgICBvYmplY3QudG9kb3MucHVzaCh0b2RvKVxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRQcm9qZWN0IChvYmplY3QpIHtcbiAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtvYmplY3QubmFtZX1gLCBKU09OLnN0cmluZ2lmeShvYmplY3QpKVxuICAgIH1cblxuICAgIHN0YXRpYyByZW5kZXIob2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBwcm9qLnRleHRDb250ZW50ID0gb2JqZWN0Lm5hbWU7XG4gICAgICAgIHByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVG9kb3Mob2JqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVuZGVyVG9kb3MgKG9iamVjdCkge1xuICAgICAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9XCJcIlxuXG4gICAgICAgIG9iamVjdC50b2Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0b2RvLnRleHRDb250ZW50ID0gZWxlbWVudC50YXNrO1xuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ29rIG5pY2UnKVxuICAgIH1cbn1cbiIsIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPRE8ge1xuXG4gICAgY29uc3RydWN0b3IodGFzaywgZGF0ZSwgZGVzY3JpcHRpb24gPSBcIlwiLCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGFzayA9IHRhc2ssXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUsXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbixcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgfVxuXG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwcm9qZWN0IGZyb20gJy4vY3JlYXRlUHJvamVjdC5qcydcbmltcG9ydCBUT0RPIGZyb20gJy4vY3JlYXRlVG9kby5qcydcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucydcblxuY29uc3QgYWRkUHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0JylcbmNvbnN0IGZvcm1XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybVdpbmRvdycpXG5jb25zdCBzdWJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym0nKVxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdCcpXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+e1xuXG4gICAgLyogTE9BRCBTVE9SQUdFIENPTlRFTlQgKi9cblxuICAgIC8qIGNoZWNrIGlmIGRlZmF1bHQgZXhpc3RzICovXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0RlZmF1bHQnKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKCd5ZXMnKVxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdEZWZhdWx0JykpLm5hbWUpXG4gICAgfSBlbHNle1xuICAgICAgICBjb25zdCBkZWZQcm9qID0gbmV3IHByb2plY3QoJ0RlZmF1bHQnKVxuXG4gICAgICAgIC8qIEFERElORyBUT0RPUyBGT1IgVEVTVElORyAqL1xuXG4gICAgICAgIGNvbnN0IHRvZG8xID0gbmV3IFRPRE8oJ3dha2UgdXAnLCAndG9tb3Jyb3cnLCAndXJnZW50JylcbiAgICAgICAgY29uc3QgdG9kbzIgPSBuZXcgVE9ETygnYnJlYWtmYXN0JywgJ3RvbW9ycm93JywgJ3VyZ2VudCcpXG4gICAgICAgIGNvbnN0IHRvZG8zID0gbmV3IFRPRE8oJ2JydXNoIHRlZXRoJywgJ3RvbW9ycm93JywgJ3VyZ2VudCcpXG4gICAgICAgIGNvbnN0IHRvZG80ID0gbmV3IFRPRE8oJ2dldCBkcmVzc2VkJywgJ3RvbW9ycm93JywgJ3VyZ2VudCcpXG5cblxuICAgICAgICBwcm9qZWN0LmFkZFRPRE8oZGVmUHJvaiwgdG9kbzEpXG4gICAgICAgIHByb2plY3QuYWRkVE9ETyhkZWZQcm9qLCB0b2RvMilcbiAgICAgICAgcHJvamVjdC5hZGRUT0RPKGRlZlByb2osIHRvZG8zKVxuICAgICAgICBwcm9qZWN0LmFkZFRPRE8oZGVmUHJvaiwgdG9kbzQpXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0LmFkZFByb2plY3QoZGVmUHJvaik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdubycpXG5cbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0MSA9IG5ldyBwcm9qZWN0KCdQcm9qZWN0MScpXG4gICAgcHJvamVjdC5hZGRQcm9qZWN0KHByb2plY3QxKVxuXG4gICAgY29uc29sZS5sb2coT2JqZWN0LnZhbHVlcyhsb2NhbFN0b3JhZ2UpKVxuXG4gICAgLypSRVRSSUVWRSBMT0NBTEdST1VQIE9CSkVDVFMgKi9cbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBbXTtcbiAgICBjb25zb2xlLmxvZygnLi4uLi4uLi4uLi4nKVxuICAgIGZvcihsZXQgaSA9IGxvY2FsU3RvcmFnZS5sZW5ndGggLSAxOyBpID49IDAgOyBpLS0pe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5rZXkoaSkpXG5cblxuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKSlcbiAgICB9XG5cbiAgICAvKiBSRU5ERVIgQVJSQVkgRUxFTUVOVFMgKi9cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICBwcm9qZWN0LnJlbmRlcihwcm9qZWN0QXJyYXlbaV0pXG4gICAgfVxuICAgIC8qUkVOREVSIERFRkFVTFQgVE9ETyAqL1xuICAgIHByb2plY3QucmVuZGVyVG9kb3MocHJvamVjdEFycmF5WzBdKVxuXG59KVxuXG5hZGRQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBmb3JtV2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcbn0pXG5cbnN1Ym0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuXG4gICAgaWYocHJvamVjdEZvcm0udGl0bGUudmFsdWUpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvaiA9IG5ldyBwcm9qZWN0KHByb2plY3RGb3JtLnRpdGxlLnZhbHVlKVxuICAgICAgICBwcm9qZWN0LmFkZFByb2plY3QobmV3UHJvailcbiAgICAgICAgcHJvamVjdC5yZW5kZXIobmV3UHJvailcbiAgICAgICAgZm9ybVdpbmRvdy5jbGFzc0xpc3QudG9nZ2xlKCdpbmFjdGl2ZScpXG4gICAgfVxuXG59KVxuXG5cblxuXG5cblxuLypcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0Rm9ybS50aXRsZS52YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0Rm9ybS5kZXNjcmlwdGlvbi52YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0Rm9ybS5wcmlvcml0eS52YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0Rm9ybS5kYXRlLnZhbHVlKVxuXG4gICAgY29uc29sZS5sb2coZm9ybWF0KHBhcnNlSVNPKHByb2plY3RGb3JtLmRhdGUudmFsdWUpLCAnZGQnKSlcblxuKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=