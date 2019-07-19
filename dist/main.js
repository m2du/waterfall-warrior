/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/javascript/game.js":
/*!***********************************!*\
  !*** ./assets/javascript/game.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./assets/javascript/player.js\");\n\n\nclass Game {\n    constructor() {\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({});\n    }\n\n    draw(ctx) {\n        this.player.draw(ctx);\n    }\n\n    step(deltaTime) {\n        this.player.move(deltaTime);\n    }\n\n    end() {\n        // TODO\n    }\n}\n\nGame.WIDTH = 700;\nGame.HEIGHT = 850;\n\n//# sourceURL=webpack:///./assets/javascript/game.js?");

/***/ }),

/***/ "./assets/javascript/game_view.js":
/*!****************************************!*\
  !*** ./assets/javascript/game_view.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameView; });\nclass GameView {\n    constructor(game, ctx) {\n        this.ctx = ctx;\n        this.game = game;\n\n        // waterfall animation setup\n        this.waterbar = new Image();\n        this.waterbar.src = '../assets/images/waterfall_sprite_sheet.png';\n        this.waterfallSpeed = .6;\n        this.waterfallFrames = 6;\n        this.lastFrameTime = 0;\n        this.frame = 0;\n\n        this.animate = this.animate.bind(this);\n    }\n\n    start() {\n        this.lastTime = 0;\n        requestAnimationFrame(this.animate);\n    }\n\n    animate(time) {\n        const deltaTime = (time - this.lastTime) / 1000;\n\n        this.game.step(deltaTime);\n\n        // draw next frame\n        this.drawBg(deltaTime);\n        this.game.draw(this.ctx);\n        this.lastTime = time;\n\n        requestAnimationFrame(this.animate);\n    }\n\n    drawBg(deltaTime) {\n        const ctx = this.ctx;\n        // let bg = ctx.createLinearGradient(0, 0, 0, ctx.canvas.clientHeight);\n        // bg.addColorStop(1, '#66A6FF');\n        // bg.addColorStop(0, '#89F7FE');\n        ctx.fillStyle = '#66A6FF';\n        ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);\n\n        if (this.lastFrameTime < this.waterfallSpeed / this.waterfallFrames) {\n            this.lastFrameTime += deltaTime;\n        } else {\n            this.frame = (this.frame + 1) % this.waterfallFrames;\n            this.lastFrameTime = 0;\n        }\n\n        // img, sourceX, sourceY, sourceH, sourceW, canvasX, canvasY, width, height\n        ctx.drawImage(this.waterbar, 620 * this.frame, 0, 620, 900,\n            -10, 0, 720, 850);\n    }\n\n    bindKeyHandlers() {\n        // map player input to game logic\n    }\n}\n\n//# sourceURL=webpack:///./assets/javascript/game_view.js?");

/***/ }),

/***/ "./assets/javascript/index.js":
/*!************************************!*\
  !*** ./assets/javascript/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./assets/javascript/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./assets/javascript/game_view.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById('game-canvas');\n    canvas.width = _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WIDTH;\n    canvas.height = _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HEIGHT;\n\n    const ctx = canvas.getContext('2d');\n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    new _game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx).start();\n});\n\n//# sourceURL=webpack:///./assets/javascript/index.js?");

/***/ }),

/***/ "./assets/javascript/moving_object.js":
/*!********************************************!*\
  !*** ./assets/javascript/moving_object.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovingObject; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./assets/javascript/game.js\");\n\n\nclass MovingObject {\n    constructor(options) {\n        this.pos = options.pos;\n        this.vel = options.vel;\n        this.size = options.size;\n        this.game = options.game;\n    }\n\n    collideWith(other) {\n        // default\n    }\n\n    draw(ctx) {\n        // default\n    }\n\n    isCollideWith(other) {\n        // default\n    }\n    \n    move(deltaTime) {\n        const offsetX = this.vel.x * deltaTime;\n        const offsetY = this.vel.y * deltaTime;\n\n        if (this.game.isOffScreen(this.pos.y, this.size.y)) {\n            this.remove();\n        }\n    }\n\n    remove() {\n        this.game.remove(this);\n    }\n}\n\n//# sourceURL=webpack:///./assets/javascript/moving_object.js?");

/***/ }),

/***/ "./assets/javascript/player.js":
/*!*************************************!*\
  !*** ./assets/javascript/player.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./assets/javascript/moving_object.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./assets/javascript/game.js\");\n/* harmony import */ var _util_vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/vector2 */ \"./assets/javascript/util/vector2.js\");\n/* harmony import */ var _util_animation_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/animation_manager */ \"./assets/javascript/util/animation_manager.js\");\n\n\n\n\n\nclass Player extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(options) {\n        super(options);\n\n        this.pos = new _util_vector2__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].WIDTH / 2, 0);\n\n        this.image = new Image();\n        this.image.src = '../assets/images/character_sheet.png';\n        this.animationManager = new _util_animation_manager__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    }\n\n    draw(ctx) {\n        // img, sourceX, sourceY, sourceH, sourceW, canvasX, canvasY, width, height\n        ctx.drawImage(this.image, ...this.animationManager.sprite, 100, 74,\n             _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].WIDTH - this.pos.x - Player.DRAW_WIDTH / 2, \n             _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].HEIGHT - this.pos.y - Player.DRAW_HEIGHT, 80, 59);\n    }\n\n    move(deltaTime) {\n        this.animationManager.idle(deltaTime);\n    }\n\n    remove() {\n        this.game.end();\n    }\n}\n\nPlayer.DRAW_WIDTH = 80;\nPlayer.DRAW_HEIGHT = 59;\n\n//# sourceURL=webpack:///./assets/javascript/player.js?");

/***/ }),

/***/ "./assets/javascript/util/animation_manager.js":
/*!*****************************************************!*\
  !*** ./assets/javascript/util/animation_manager.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimationManager; });\nclass AnimationManager {\n    constructor() {\n        this.frame = 0;\n        this.lastFrameTime = 0;\n\n        this.idleBase = [0, 0];\n        this.currentAnim = 'IDLE';\n        this.sprite = [0, 0];\n    }\n\n    idle(deltaTime) {\n        const duration = 0.65;\n        const numFrames = 4;\n        this.step(deltaTime, duration, numFrames);\n\n        this.sprite[0] = this.idleBase[0] + 100 * this.frame;\n        this.sprite[1] = this.idleBase[1];\n    }\n\n    step(deltaTime, duration, numFrames) {\n        if (this.lastFrameTime < duration / numFrames) {\n            this.lastFrameTime += deltaTime;\n        } else {\n            this.frame = (this.frame + 1) % numFrames;\n            this.lastFrameTime = 0;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./assets/javascript/util/animation_manager.js?");

/***/ }),

/***/ "./assets/javascript/util/vector2.js":
/*!*******************************************!*\
  !*** ./assets/javascript/util/vector2.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector2; });\nclass Vector2 {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    add(vector) {\n        this.x += vector.x;\n        this.y += vector.y;\n    }\n\n    magnitude() {\n        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));\n    }\n}\n\nVector2.up = {x: 0, y: 1};\nVector2.down = {x: 0, y: -1};\nVector2.left = {x: -1, y: 0};\nVector2.right = {x: 1, y: 0};\n\n//# sourceURL=webpack:///./assets/javascript/util/vector2.js?");

/***/ })

/******/ });