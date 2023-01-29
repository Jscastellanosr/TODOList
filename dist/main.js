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
            todo.textContent = element;
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
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");


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
        const defProj = new _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Default')

        /* ADDING TODOS FOR TESTING */

        _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTODO(defProj, 'do this and do that')
        _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTODO(defProj, 'now do this and do that')
        _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTODO(defProj, 'then do this and do that')
        _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTODO(defProj, 'after do this and do that')
        
        _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(defProj);
        console.log('no')

    }

    const project1 = new _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Project1')
    _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(project1)

    console.log(localStorage)
    /*RETRIEVE LOCALGROUP OBJECTS */
    const projectArray = [];
    console.log('...........')
    for(let i = localStorage.length - 1; i >= 0 ; i--){
        projectArray.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }

    /* RENDER ARRAYS */

    for(let i = 0; i < projectArray.length; i++) {
       _createProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].render(projectArray[i])
    }

})

addProj.addEventListener('click', ()=>{
    formWindow.classList.toggle('inactive')
})

subm.addEventListener('click', ()=>{
    formWindow.classList.toggle('inactive')
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7Ozs7Ozs7VUNwQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ053Qzs7QUFFeEM7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiw0QkFBNEIseURBQU87O0FBRW5DOztBQUVBLFFBQVEsaUVBQWU7QUFDdkIsUUFBUSxpRUFBZTtBQUN2QixRQUFRLGlFQUFlO0FBQ3ZCLFFBQVEsaUVBQWU7QUFDdkI7QUFDQSxRQUFRLG9FQUFrQjtBQUMxQjs7QUFFQTs7QUFFQSx5QkFBeUIseURBQU87QUFDaEMsSUFBSSxvRUFBa0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIseUJBQXlCO0FBQzVDLE9BQU8sZ0VBQWM7QUFDckI7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRhaW5lcicpXG5jb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Db250YWluZXInKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lLFxuICAgICAgICB0aGlzLnRvZG9zID1bXVxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRUT0RPIChvYmplY3QsIHRvZG8pIHtcbiAgICAgICAgb2JqZWN0LnRvZG9zLnB1c2godG9kbylcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkUHJvamVjdCAob2JqZWN0KSB7XG4gICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7b2JqZWN0Lm5hbWV9YCwgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSlcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVuZGVyKG9iamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgcHJvai50ZXh0Q29udGVudCA9IG9iamVjdC5uYW1lO1xuICAgICAgICBwcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclRvZG9zKG9iamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvaik7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmRlclRvZG9zIChvYmplY3QpIHtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPVwiXCJcblxuICAgICAgICBvYmplY3QudG9kb3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdG9kby50ZXh0Q29udGVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnb2sgbmljZScpXG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHJvamVjdCBmcm9tICcuL2NyZWF0ZVByb2plY3QuanMnXG5cbmNvbnN0IGFkZFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdCcpXG5jb25zdCBmb3JtV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1XaW5kb3cnKVxuY29uc3Qgc3VibSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtJylcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpPT57XG5cbiAgICAvKiBMT0FEIFNUT1JBR0UgQ09OVEVOVCAqL1xuXG4gICAgLyogY2hlY2sgaWYgZGVmYXVsdCBleGlzdHMgKi9cbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRGVmYXVsdCcpKXtcbiAgICAgICAgY29uc29sZS5sb2coJ3llcycpXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0RlZmF1bHQnKSkubmFtZSlcbiAgICB9IGVsc2V7XG4gICAgICAgIGNvbnN0IGRlZlByb2ogPSBuZXcgcHJvamVjdCgnRGVmYXVsdCcpXG5cbiAgICAgICAgLyogQURESU5HIFRPRE9TIEZPUiBURVNUSU5HICovXG5cbiAgICAgICAgcHJvamVjdC5hZGRUT0RPKGRlZlByb2osICdkbyB0aGlzIGFuZCBkbyB0aGF0JylcbiAgICAgICAgcHJvamVjdC5hZGRUT0RPKGRlZlByb2osICdub3cgZG8gdGhpcyBhbmQgZG8gdGhhdCcpXG4gICAgICAgIHByb2plY3QuYWRkVE9ETyhkZWZQcm9qLCAndGhlbiBkbyB0aGlzIGFuZCBkbyB0aGF0JylcbiAgICAgICAgcHJvamVjdC5hZGRUT0RPKGRlZlByb2osICdhZnRlciBkbyB0aGlzIGFuZCBkbyB0aGF0JylcbiAgICAgICAgXG4gICAgICAgIHByb2plY3QuYWRkUHJvamVjdChkZWZQcm9qKTtcbiAgICAgICAgY29uc29sZS5sb2coJ25vJylcblxuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3QxID0gbmV3IHByb2plY3QoJ1Byb2plY3QxJylcbiAgICBwcm9qZWN0LmFkZFByb2plY3QocHJvamVjdDEpXG5cbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpXG4gICAgLypSRVRSSUVWRSBMT0NBTEdST1VQIE9CSkVDVFMgKi9cbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBbXTtcbiAgICBjb25zb2xlLmxvZygnLi4uLi4uLi4uLi4nKVxuICAgIGZvcihsZXQgaSA9IGxvY2FsU3RvcmFnZS5sZW5ndGggLSAxOyBpID49IDAgOyBpLS0pe1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKSlcbiAgICB9XG5cbiAgICAvKiBSRU5ERVIgQVJSQVlTICovXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgcHJvamVjdC5yZW5kZXIocHJvamVjdEFycmF5W2ldKVxuICAgIH1cblxufSlcblxuYWRkUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgZm9ybVdpbmRvdy5jbGFzc0xpc3QudG9nZ2xlKCdpbmFjdGl2ZScpXG59KVxuXG5zdWJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBmb3JtV2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9