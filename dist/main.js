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

/***/ "./assets/javascript/constants.js":
/*!****************************************!*\
  !*** ./assets/javascript/constants.js ***!
  \****************************************/
/*! exports provided: GAME_WIDTH, GAME_HEIGHT, PLAYER_SPRITE_WIDTH, PLAYER_SPRITE_HEIGHT, PLAYER_DRAW_WIDTH, PLAYER_DRAW_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_WIDTH\", function() { return GAME_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_HEIGHT\", function() { return GAME_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAYER_SPRITE_WIDTH\", function() { return PLAYER_SPRITE_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAYER_SPRITE_HEIGHT\", function() { return PLAYER_SPRITE_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAYER_DRAW_WIDTH\", function() { return PLAYER_DRAW_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAYER_DRAW_HEIGHT\", function() { return PLAYER_DRAW_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAYER_WIDTH\", function() { return PLAYER_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAYER_HEIGHT\", function() { return PLAYER_HEIGHT; });\nconst GAME_WIDTH = 700;\nconst GAME_HEIGHT = 850;\n\nconst PLAYER_SPRITE_WIDTH = 100;\nconst PLAYER_SPRITE_HEIGHT = 74;\nconst PLAYER_DRAW_WIDTH = 80;\nconst PLAYER_DRAW_HEIGHT = 59;\n\nconst PLAYER_WIDTH = 28;\nconst PLAYER_HEIGHT = 48;\n\n//# sourceURL=webpack:///./assets/javascript/constants.js?");

/***/ }),

/***/ "./assets/javascript/game.js":
/*!***********************************!*\
  !*** ./assets/javascript/game.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./assets/javascript/player.js\");\n\n\nclass Game {\n    constructor() {\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({});\n    }\n\n    draw(ctx) {\n        this.player.draw(ctx);\n    }\n\n    step(deltaTime) {\n        this.player.move(deltaTime);\n    }\n\n    end() {\n        // TODO\n    }\n}\n\n//# sourceURL=webpack:///./assets/javascript/game.js?");

/***/ }),

/***/ "./assets/javascript/game_view.js":
/*!****************************************!*\
  !*** ./assets/javascript/game_view.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameView; });\nclass GameView {\n    constructor(game, ctx) {\n        this.ctx = ctx;\n        this.game = game;\n\n        // waterfall animation setup\n        this.waterbar = new Image();\n        this.waterbar.src = '../assets/images/waterfall_sprite_sheet.png';\n        this.waterfallSpeed = .6;\n        this.waterfallFrames = 6;\n        this.lastFrameTime = 0;\n        this.frame = 0;\n\n        this.animate = this.animate.bind(this);\n    }\n\n    start() {\n        this.lastTime = 0;\n        requestAnimationFrame(this.animate);\n    }\n\n    animate(time) {\n        const deltaTime = (time - this.lastTime) / 1000;\n\n        this.game.step(deltaTime);\n\n        // draw next frame\n        this.drawBg(deltaTime);\n        this.game.draw(this.ctx);\n        this.lastTime = time;\n\n        requestAnimationFrame(this.animate);\n    }\n\n    drawBg(deltaTime) {\n        const ctx = this.ctx;\n        // let bg = ctx.createLinearGradient(0, 0, 0, ctx.canvas.clientHeight);\n        // bg.addColorStop(1, '#66A6FF');\n        // bg.addColorStop(0, '#89F7FE');\n        ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);\n        ctx.fillStyle = '#66A6FF';\n        ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);\n\n        if (this.lastFrameTime < this.waterfallSpeed / this.waterfallFrames) {\n            this.lastFrameTime += deltaTime;\n        } else {\n            this.frame = (this.frame + 1) % this.waterfallFrames;\n            this.lastFrameTime = 0;\n        }\n\n        // img, sourceX, sourceY, sourceH, sourceW, canvasX, canvasY, width, height\n        ctx.drawImage(this.waterbar, 620 * this.frame, 0, 620, 900,\n            -10, 0, 720, 850);\n    }\n\n    bindKeyHandlers() {\n        // map player input to game logic\n    }\n}\n\n//# sourceURL=webpack:///./assets/javascript/game_view.js?");

/***/ }),

/***/ "./assets/javascript/index.js":
/*!************************************!*\
  !*** ./assets/javascript/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./assets/javascript/constants.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./assets/javascript/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_view */ \"./assets/javascript/game_view.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById('game-canvas');\n    canvas.width = _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"];\n    canvas.height = _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"];\n\n    const ctx = canvas.getContext('2d');\n    ctx.imageSmoothingEnabled = false;\n    const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    new _game_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](game, ctx).start();\n});\n\n//# sourceURL=webpack:///./assets/javascript/index.js?");

/***/ }),

/***/ "./assets/javascript/movement/input_manager.js":
/*!*****************************************************!*\
  !*** ./assets/javascript/movement/input_manager.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputManager; });\nclass InputManager {\n    constructor(player) {\n        this.player = player;\n        this.inputFlags = {\n            dirX: 0,\n            dirY: 0,\n            jumpPressed: false,\n            jumpHeld: false\n        }\n\n        this.keydown = this.keydown.bind(this);\n        this.keyup = this.keyup.bind(this);\n        this.addListeners();\n    }\n\n    addListeners() {\n        document.addEventListener('keydown', this.keydown);\n        document.addEventListener('keyup', this.keyup);\n    }\n\n    keydown(e) {\n        const inputFlags = this.inputFlags;\n\n        if (e.code === 'ArrowLeft') {\n            inputFlags.dirX = -1;\n        } else if (e.code === 'ArrowRight') {\n            inputFlags.dirX = 1;\n        }\n\n        if (e.code === 'ArrowUp') {\n            inputFlags.dirY = 1;\n        } else if (e.code === 'ArrowDown') {\n            inputFlags.dirY = -1;\n        }\n\n        if (e.code === 'Space') {\n            inputFlags.jumpPressed = true;\n            inputFlags.jumpHeld = true;\n        }\n    }\n\n    keyup(e) {\n        const inputFlags = this.inputFlags;\n\n        if (e.code === 'ArrowLeft' && inputFlags.dirX < 0) {\n            inputFlags.dirX = 0;\n        } else if (e.code === 'ArrowRight' && inputFlags.dirX > 0) {\n            inputFlags.dirX = 0;\n        }\n\n        if (e.code === 'ArrowUp' && inputFlags.dirY > 0) {\n            inputFlags.dirY = 0;\n        } else if (e.code === 'ArrowDown' && inputFlags.dirY < 0) {\n            inputFlags.dirY = 0;\n        }\n\n        if (e.code === 'Space') {\n            inputFlags.jumpHeld = false;\n            inputFlags.jumpPressed = false;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./assets/javascript/movement/input_manager.js?");

/***/ }),

/***/ "./assets/javascript/movement/player_controller.js":
/*!*********************************************************!*\
  !*** ./assets/javascript/movement/player_controller.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlayerController; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./assets/javascript/constants.js\");\n/* harmony import */ var _util_vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/vector2 */ \"./assets/javascript/util/vector2.js\");\n\n\n\nclass PlayerController {\n    constructor(player) {\n        this.player = player;\n        this.pos = player.pos;\n        this.vel = player.vel;\n\n        const walkSpeed = _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] * 0.3;\n        const jumpHeight = _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_HEIGHT\"] * 1.25;\n        const jumpDist = _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_WIDTH\"] * 3;\n        const jumpVel = (2 * walkSpeed * jumpHeight) / (jumpDist / 2);\n        const gravity = (-2 * jumpHeight * Math.pow(walkSpeed, 2)) / Math.pow(jumpDist / 2, 2);\n\n        this.walkSpeed = walkSpeed;\n        this.jumpVel = jumpVel;\n        this.gravity = gravity;\n    }\n\n    idle() {\n        this.vel.x = 0;\n    }\n\n    walk(inputFlags) {\n        this.vel.x = inputFlags.dirX * this.walkSpeed;\n    }\n\n    jump() {\n        this.grounded = false;\n        this.vel.y = this.jumpVel;\n    }\n\n    airborne(inputFlags) {\n        this.vel.x = inputFlags.dirX * this.walkSpeed;\n    }\n\n    move(deltaTime) {\n        // apply gravity\n        this.vel.y += this.gravity * deltaTime;\n        if (this.vel.y < MAX_FALL_SPEED) {\n            this.vel.y = MAX_FALL_SPEED;\n        }\n\n        // calc movement vector\n        const moveAmount = new _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.vel.x * deltaTime, this.vel.y * deltaTime);\n\n        // check collisions\n        // TODO\n\n        // apply movement\n        this.pos.add(moveAmount);\n\n        // reset vertical velocity if grounded\n        if (this.pos.y <= 0) {\n            this.grounded = true;\n            this.pos.y = 0;\n            this.vel.y = 0;\n        }\n    }\n}\n\nconst MAX_FALL_SPEED = -200;\n\n//# sourceURL=webpack:///./assets/javascript/movement/player_controller.js?");

/***/ }),

/***/ "./assets/javascript/movement/state/airborne_state.js":
/*!************************************************************!*\
  !*** ./assets/javascript/movement/state/airborne_state.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AirborneState; });\n/* harmony import */ var _player_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player_state */ \"./assets/javascript/movement/state/player_state.js\");\n\n\nclass AirborneState {\n    constructor() {\n        this.name = \"AIRBORNE\";\n    }\n\n    handleInput(controller, inputFlags) {\n        if (controller.grounded) {\n            if (inputFlags.dirX !== 0) {\n                return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WALKING;\n            }\n            return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].IDLE;\n        }\n\n        return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].AIRBORNE;\n    }\n\n    handleUpdate(controller, inputFlags) {\n        controller.airborne(inputFlags);\n    }\n}\n\n//# sourceURL=webpack:///./assets/javascript/movement/state/airborne_state.js?");

/***/ }),

/***/ "./assets/javascript/movement/state/ground_state.js":
/*!**********************************************************!*\
  !*** ./assets/javascript/movement/state/ground_state.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player_state */ \"./assets/javascript/movement/state/player_state.js\");\n\n\nclass GroundState {\n    constructor() {}\n\n    handleInput(controller, inputFlags) {\n        // if (!controller.isGrounded()) {\n        //     return PlayerState.airborne;\n        // }\n\n        if (inputFlags.jumpHeld) {\n            inputFlags.jumpPressed = false;\n            return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].JUMPING;\n        }\n\n        console.log(inputFlags);\n\n        if (inputFlags.dirX !== 0) {\n            return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WALKING;\n        }\n\n        return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].IDLE;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroundState);\n\n//# sourceURL=webpack:///./assets/javascript/movement/state/ground_state.js?");

/***/ }),

/***/ "./assets/javascript/movement/state/idle_state.js":
/*!********************************************************!*\
  !*** ./assets/javascript/movement/state/idle_state.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IdleState; });\n/* harmony import */ var _ground_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ground_state */ \"./assets/javascript/movement/state/ground_state.js\");\n\n\nclass IdleState extends _ground_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n        this.name = 'IDLE';\n    }\n\n    handleInput(controller, inputFlags) {\n        return super.handleInput(controller, inputFlags);\n    }\n\n    handleUpdate(controller, inputFlags) {\n        controller.idle();\n    }\n}\n\n//# sourceURL=webpack:///./assets/javascript/movement/state/idle_state.js?");

/***/ }),

/***/ "./assets/javascript/movement/state/jumping_state.js":
/*!***********************************************************!*\
  !*** ./assets/javascript/movement/state/jumping_state.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return JumpingState; });\n/* harmony import */ var _player_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player_state */ \"./assets/javascript/movement/state/player_state.js\");\n\n\nclass JumpingState {\n    constructor() {\n        this.name = \"JUMPING\";\n    }\n\n    handleInput(controller, inputFlags) {\n        return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].AIRBORNE;\n    }\n\n    handleUpdate(controller, inputFlags) {\n        controller.jump();\n    }\n}\n\n//# sourceURL=webpack:///./assets/javascript/movement/state/jumping_state.js?");

/***/ }),

/***/ "./assets/javascript/movement/state/player_state.js":
/*!**********************************************************!*\
  !*** ./assets/javascript/movement/state/player_state.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlayerState; });\n/* harmony import */ var _idle_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./idle_state */ \"./assets/javascript/movement/state/idle_state.js\");\n/* harmony import */ var _walking_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./walking_state */ \"./assets/javascript/movement/state/walking_state.js\");\n/* harmony import */ var _airborne_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airborne_state */ \"./assets/javascript/movement/state/airborne_state.js\");\n/* harmony import */ var _jumping_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jumping_state */ \"./assets/javascript/movement/state/jumping_state.js\");\n\n\n\n\n\nfunction PlayerState() {};\n\nPlayerState.IDLE = new _idle_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nPlayerState.WALKING = new _walking_state__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nPlayerState.AIRBORNE = new _airborne_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nPlayerState.JUMPING = new _jumping_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n//# sourceURL=webpack:///./assets/javascript/movement/state/player_state.js?");

/***/ }),

/***/ "./assets/javascript/movement/state/walking_state.js":
/*!***********************************************************!*\
  !*** ./assets/javascript/movement/state/walking_state.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WalkingState; });\n/* harmony import */ var _ground_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ground_state */ \"./assets/javascript/movement/state/ground_state.js\");\n\n\nclass WalkingState extends _ground_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n        this.name = \"WALKING\";\n    }\n\n    handleInput(controller, inputFlags) {\n        return super.handleInput(controller, inputFlags);\n    }\n\n    handleUpdate(controller, inputFlags) {\n        controller.walk(inputFlags);\n    }\n}\n\n//# sourceURL=webpack:///./assets/javascript/movement/state/walking_state.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./assets/javascript/constants.js\");\n/* harmony import */ var _util_vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/vector2 */ \"./assets/javascript/util/vector2.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moving_object */ \"./assets/javascript/moving_object.js\");\n/* harmony import */ var _movement_state_player_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movement/state/player_state */ \"./assets/javascript/movement/state/player_state.js\");\n/* harmony import */ var _movement_player_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movement/player_controller */ \"./assets/javascript/movement/player_controller.js\");\n/* harmony import */ var _movement_input_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movement/input_manager */ \"./assets/javascript/movement/input_manager.js\");\n/* harmony import */ var _util_animation_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/animation_manager */ \"./assets/javascript/util/animation_manager.js\");\n\n\n\n\n\n\n\n\n\n\nclass Player extends _moving_object__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    constructor(options) {\n        super(options);\n        this.pos = new _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2, 100);\n        this.vel = _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"].zero;\n\n        this.initMovementAndState();\n        this.initDrawAndAnimation();\n    }\n\n    draw(ctx) {\n        const drawX = this.pos.x - _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_DRAW_WIDTH\"] / 2;\n        const drawY = _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] - this.pos.y - _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_DRAW_HEIGHT\"];\n\n        // img, sourceX, sourceY, sourceH, sourceW, canvasX, canvasY, width, height\n        if (this.facing === 1) {\n            ctx.drawImage(this.imageRight, ...this.animationManager.sprite, 100, 74,\n                drawX, drawY, 80, 59);\n        } else {\n            ctx.drawImage(this.imageLeft, ...this.animationManager.sprite, 100, 74,\n                drawX, drawY, 80, 59);\n        }\n\n\n        // draw player hitbox\n        // ctx.strokeStyle = 'red';\n        // ctx.rect(GAME_WIDTH - this.pos.x - PLAYER_WIDTH / 2,\n        //     GAME_HEIGHT - this.pos.y - PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT);\n        // ctx.stroke();\n    }\n\n    move(deltaTime) {\n        const inputFlags = this.inputManager.inputFlags;\n        this.currentState = this.currentState.handleInput(this.controller, inputFlags);\n\n        // process state with current inputs\n        this.currentState.handleUpdate(this.controller, inputFlags);\n\n        // move player with controller\n        this.controller.move(deltaTime);\n        console.log(this.pos);\n        console.log(this.vel);\n\n        // update animation\n        this.updateAnimation(deltaTime, inputFlags.dirX);\n    }\n\n    updateAnimation(deltaTime, dirX) {\n        this.facing = (dirX != 0) ? dirX : this.facing;\n\n        switch (this.currentState.name) {\n            case \"WALKING\":\n                this.animationManager.walk(deltaTime, this.facing);\n                break;\n            default: \n                this.animationManager.idle(deltaTime, this.facing);\n        }\n    }\n\n    remove() {\n        this.game.end();\n    }\n\n    initMovementAndState() {\n        this.inputManager = new _movement_input_manager__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this);\n        this.controller = new _movement_player_controller__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this);\n        this.currentState = _movement_state_player_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].IDLE;\n        this.facing = 1;\n    }\n\n    initDrawAndAnimation() {\n        this.imageRight = new Image();\n        this.imageRight.src = '../assets/images/character_sheet_right.png';\n        this.imageLeft = new Image();\n        this.imageLeft.src = '../assets/images/character_sheet_left.png';\n        this.animationManager = new _util_animation_manager__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n        _movement_state_player_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].animator = this.animationManager;\n    }\n}\n\n//# sourceURL=webpack:///./assets/javascript/player.js?");

/***/ }),

/***/ "./assets/javascript/util/animation_manager.js":
/*!*****************************************************!*\
  !*** ./assets/javascript/util/animation_manager.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimationManager; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./assets/javascript/constants.js\");\n\n\nclass AnimationManager {\n    constructor() {\n        this.direction = 1;\n        this.frame = 0;\n        this.lastFrameTime = 0;\n\n        // idle animation start frames\n        this.idleBaseRight = [this._framesFromLeft(0), this._framesFromTop(0)];\n        this.idleBaseLeft = [this._framesFromRight(0), this._framesFromTop(0)];\n\n        // walk animation start frames\n        this.walkBaseRight = [this._framesFromLeft(1), this._framesFromTop(1)];\n        this.walkBaseLeft = [this._framesFromRight(1), this._framesFromTop(1)];\n\n        // set start animation frame\n        this.sprite = [0, 0];\n    }\n\n    idle(deltaTime, direction) {\n        const duration = 0.65;\n        const numFrames = 4;\n        this._step(deltaTime, duration, numFrames);\n\n        if (direction === 1) {\n            this.sprite[0] = this.idleBaseRight[0] + _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * this.frame;\n            this.sprite[1] = this.idleBaseRight[1];\n        } else {\n            this.sprite[0] = this.idleBaseLeft[0] - _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * this.frame;\n            this.sprite[1] = this.idleBaseLeft[1];\n        }\n    }\n\n    walk(deltaTime, direction) {\n        const duration = 0.65;\n        const numFrames = 6;\n        this._step(deltaTime, duration, numFrames);\n\n        if (direction === 1) {\n            this.sprite[0] = this.walkBaseRight[0] + _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * this.frame;\n            this.sprite[1] = this.walkBaseRight[1];\n        } else {\n            this.sprite[0] = this.walkBaseLeft[0] - _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * this.frame;\n            this.sprite[1] = this.walkBaseLeft[1];\n        }\n    }\n\n    _step(deltaTime, duration, numFrames) {\n        if (this.lastFrameTime < duration / numFrames) {\n            this.lastFrameTime += deltaTime;\n        } else {\n            this.frame = (this.frame + 1) % numFrames;\n            this.lastFrameTime = 0;\n        }\n    }\n\n    resetFrame() {\n        this.frame = 0;\n    }\n\n    _framesFromLeft(n) {\n        return _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * n;\n    }\n\n    _framesFromRight(n) {\n        return 770 - _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * (n + 1);\n    }\n\n    _framesFromTop(n) {\n        return _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_HEIGHT\"] * n;\n    }\n}\n\n//# sourceURL=webpack:///./assets/javascript/util/animation_manager.js?");

/***/ }),

/***/ "./assets/javascript/util/vector2.js":
/*!*******************************************!*\
  !*** ./assets/javascript/util/vector2.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector2; });\nclass Vector2 {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    add(vector) {\n        this.x += vector.x;\n        this.y += vector.y;\n    }\n\n    magnitude() {\n        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));\n    }\n}\n\nVector2.up = { x: 0, y: 1 };\nVector2.down = { x: 0, y: -1 };\nVector2.left = { x: -1, y: 0 };\nVector2.right = { x: 1, y: 0 };\nVector2.zero = { x: 0, y: 0 };\n\n//# sourceURL=webpack:///./assets/javascript/util/vector2.js?");

/***/ })

/******/ });