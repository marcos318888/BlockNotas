/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clases/ListaNotas.ts":
/*!**********************************!*\
  !*** ./src/clases/ListaNotas.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("{\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ListaNotas = void 0;\r\nconst Notas_1 = __webpack_require__(/*! ./Notas */ \"./src/clases/Notas.ts\");\r\nclass ListaNotas {\r\n    static CrearNotaCard(searchText = '', filterType = 'all') {\r\n        const listaNotas = document.querySelector('.notes-list');\r\n        listaNotas.innerHTML = '';\r\n        let notasFiltradas = this.notas;\r\n        if (searchText) {\r\n            notasFiltradas = notasFiltradas.filter(n => n.getTitle().toLowerCase().includes(searchText.toLowerCase()));\r\n        }\r\n        if (filterType === 'completed') {\r\n            notasFiltradas = notasFiltradas.filter(n => n.getIsComplete());\r\n        }\r\n        else if (filterType === 'pending') {\r\n            notasFiltradas = notasFiltradas.filter(n => !n.getIsComplete());\r\n        }\r\n        notasFiltradas.forEach((nota) => {\r\n            const li = document.createElement('li');\r\n            li.className = 'note-item';\r\n            li.innerHTML = `\r\n                <input type=\"text\" class=\"input\" value=\"${nota.getTitle()}\" data-id=\"${nota['id']}\" />\r\n                <input type=\"checkbox\" class=\"checkbox\" ${nota.getIsComplete() ? 'checked' : ''} data-id=\"${nota['id']}\" />\r\n                <button class=\"btn delete-btn\" data-id=\"${nota['id']}\">🗑️</button>\r\n            `;\r\n            listaNotas.appendChild(li);\r\n        });\r\n        this.actualizarEventos();\r\n    }\r\n    ;\r\n    static cargarNotas() {\r\n        const data = localStorage.getItem('blocknotas');\r\n        if (!data)\r\n            return [];\r\n        try {\r\n            const arr = JSON.parse(data);\r\n            return arr.map((n) => new Notas_1.Notas(n.id, n.title, n.isComplete));\r\n        }\r\n        catch (_b) {\r\n            return [];\r\n        }\r\n    }\r\n}\r\nexports.ListaNotas = ListaNotas;\r\n_a = ListaNotas;\r\nListaNotas.notas = ListaNotas.cargarNotas();\r\nListaNotas.CrearNota = (titulo) => {\r\n    // Generar id único\r\n    const id = Date.now() + Math.floor(Math.random() * 1000000);\r\n    const newnota = new Notas_1.Notas(id, titulo);\r\n    _a.notas.unshift(newnota);\r\n    _a.guardarNotas();\r\n    _a.CrearNotaCard();\r\n};\r\nListaNotas.EliminarNota = (index) => {\r\n    _a.notas.splice(index, 1);\r\n    _a.guardarNotas();\r\n    _a.CrearNotaCard();\r\n};\r\nListaNotas.actualizarEventos = () => {\r\n    const notaItems = document.querySelectorAll('.note-item');\r\n    notaItems.forEach((item) => {\r\n        const input = item.querySelector('.input');\r\n        const checkbox = item.querySelector('.checkbox');\r\n        const deleteBtn = item.querySelector('.delete-btn');\r\n        const id = Number(input.getAttribute('data-id'));\r\n        const guardarTitulo = () => {\r\n            const nota = _a.notas.find(n => n['id'] === id);\r\n            if (nota) {\r\n                nota.setTitle(input.value);\r\n                _a.guardarNotas();\r\n                console.log('Nota actualizada:', nota.getTitle());\r\n                input.classList.add('saved');\r\n                setTimeout(() => {\r\n                    input.classList.remove('saved');\r\n                }, 500);\r\n            }\r\n        };\r\n        input.addEventListener('blur', guardarTitulo);\r\n        input.addEventListener('keydown', (e) => {\r\n            if (e.key === 'Enter') {\r\n                e.preventDefault();\r\n                input.blur();\r\n            }\r\n        });\r\n        checkbox.addEventListener('change', () => {\r\n            const nota = _a.notas.find(n => n['id'] === id);\r\n            if (nota) {\r\n                nota.setIsComplete(checkbox.checked);\r\n                _a.guardarNotas();\r\n            }\r\n        });\r\n        deleteBtn.addEventListener('click', () => {\r\n            const idx = _a.notas.findIndex(n => n['id'] === id);\r\n            if (idx !== -1) {\r\n                _a.EliminarNota(idx);\r\n            }\r\n        });\r\n    });\r\n};\r\nListaNotas.guardarNotas = () => {\r\n    localStorage.setItem('blocknotas', JSON.stringify(_a.notas.map(n => ({\r\n        id: n['id'],\r\n        title: n.getTitle(),\r\n        isComplete: n.getIsComplete()\r\n    }))));\r\n};\r\nListaNotas.getContadorNotas = () => {\r\n    return {\r\n        total: _a.notas.length,\r\n        completadas: _a.notas.filter(n => n.getIsComplete()).length\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack://typescript/./src/clases/ListaNotas.ts?\n}");

/***/ }),

/***/ "./src/clases/Notas.ts":
/*!*****************************!*\
  !*** ./src/clases/Notas.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("{\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Notas = void 0;\r\nclass Notas {\r\n    constructor(id, title, isComplete = false) {\r\n        this.id = id;\r\n        this.title = title;\r\n        this.isComplete = isComplete;\r\n    }\r\n    getTitle() {\r\n        return this.title;\r\n    }\r\n    getIsComplete() {\r\n        return this.isComplete;\r\n    }\r\n    setTitle(title) {\r\n        this.title = title;\r\n    }\r\n    setIsComplete(isComplete) {\r\n        this.isComplete = isComplete;\r\n    }\r\n    getLength() {\r\n        return this.title.length;\r\n    }\r\n    getResumen() {\r\n        return `Nota: ${this.title} | Estado: ${this.isComplete ? 'Completada' : 'Pendiente'}`;\r\n    }\r\n    toggleComplete() {\r\n        this.isComplete = !this.isComplete;\r\n    }\r\n    toJSON() {\r\n        return {\r\n            id: this.id,\r\n            title: this.title,\r\n            isComplete: this.isComplete\r\n        };\r\n    }\r\n    static fromJSON(obj) {\r\n        return new Notas(obj.id, obj.title, obj.isComplete);\r\n    }\r\n}\r\nexports.Notas = Notas;\r\n\n\n//# sourceURL=webpack://typescript/./src/clases/Notas.ts?\n}");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("{\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst ListaNotas_1 = __webpack_require__(/*! ./clases/ListaNotas */ \"./src/clases/ListaNotas.ts\");\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const form = document.querySelector('.note-form');\r\n    const input = document.querySelector('.note-title');\r\n    const mainSection = form.parentElement;\r\n    // Crear input de búsqueda\r\n    const searchInput = document.createElement('input');\r\n    searchInput.type = 'text';\r\n    searchInput.placeholder = 'Buscar nota...';\r\n    searchInput.className = 'search-input';\r\n    searchInput.style.margin = '10px 0';\r\n    mainSection.insertBefore(searchInput, form);\r\n    // Crear select de filtro\r\n    const filterSelect = document.createElement('select');\r\n    filterSelect.className = 'filter-select';\r\n    filterSelect.style.margin = '10px 0 10px 10px';\r\n    filterSelect.innerHTML = `\r\n        <option value=\"all\">Todas</option>\r\n        <option value=\"completed\">Completadas</option>\r\n        <option value=\"pending\">Pendientes</option>\r\n    `;\r\n    mainSection.insertBefore(filterSelect, form);\r\n    // Contador\r\n    const contador = document.createElement('div');\r\n    contador.className = 'contador-notas';\r\n    contador.style.margin = '10px 0';\r\n    mainSection.insertBefore(contador, form.nextSibling);\r\n    let searchText = '';\r\n    let filterType = 'all';\r\n    function actualizarContador() {\r\n        const { total, completadas } = ListaNotas_1.ListaNotas.getContadorNotas();\r\n        contador.textContent = `Notas: ${total} | Completadas: ${completadas}`;\r\n    }\r\n    function render() {\r\n        ListaNotas_1.ListaNotas.CrearNotaCard(searchText, filterType);\r\n        actualizarContador();\r\n    }\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        if (input.value.trim()) {\r\n            ListaNotas_1.ListaNotas.CrearNota(input.value.trim());\r\n            input.value = '';\r\n            render();\r\n        }\r\n    });\r\n    searchInput.addEventListener('input', (e) => {\r\n        searchText = searchInput.value.trim();\r\n        render();\r\n    });\r\n    filterSelect.addEventListener('change', (e) => {\r\n        filterType = filterSelect.value;\r\n        render();\r\n    });\r\n    render();\r\n});\r\n\n\n//# sourceURL=webpack://typescript/./src/main.ts?\n}");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;