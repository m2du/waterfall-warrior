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

/***/ "./assets/javascript/block.js":
/*!************************************!*\
  !*** ./assets/javascript/block.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Block; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./assets/javascript/constants.js\");\n/* harmony import */ var _util_vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/vector2 */ \"./assets/javascript/util/vector2.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moving_object */ \"./assets/javascript/moving_object.js\");\n\r\n\r\n\r\n\r\nclass Block extends _moving_object__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\r\n    constructor(options) {\r\n        super(options);\r\n    }\r\n\r\n    willCollideWith(player, moveAmount) {\r\n        // bounds\r\n        const top = this.pos.y + this.size.y;\r\n        const bottom = this.pos.y;\r\n        const left = this.pos.x - this.size.x / 2;\r\n        const right = this.pos.x + this.size.x / 2;\r\n\r\n        // player bounds\r\n        const playerTop = player.pos.y + player.size.y;\r\n        const playerBottom = player.pos.y;\r\n        const playerLeft = player.pos.x - player.size.x / 2;\r\n        const playerRight = player.pos.x + player.size.x / 2;\r\n\r\n        // check block top, player bottom\r\n        if ((playerBottom + moveAmount.y < top && playerTop > top) &&\r\n            ((playerLeft > left && playerLeft < right) ||\r\n                (playerRight < right && playerRight > left))) {\r\n            moveAmount.y = top - playerBottom;\r\n            player.controller.collisionFlags.below = true;\r\n            player.vel.y = this.vel.y;\r\n        }\r\n\r\n        // check block bottom, player top\r\n        if ((playerTop + moveAmount.y > bottom && playerBottom < top) &&\r\n            ((playerLeft > left && playerLeft < right) ||\r\n                (playerRight < right && playerRight > left))) {\r\n            moveAmount.y = bottom - playerTop;\r\n            player.controller.collisionFlags.above = true;\r\n            player.vel.y = this.vel.y;\r\n        }\r\n\r\n        // check block left, player right\r\n        if ((playerRight + moveAmount.x > left && playerLeft < left) &&\r\n            ((playerBottom >= bottom && playerBottom <= top) ||\r\n                (playerTop <= top && playerTop >= bottom))) {\r\n            moveAmount.x = left - playerRight;\r\n            player.controller.collisionFlags.right = true;\r\n        }\r\n\r\n        // check block right, player left\r\n        if ((playerLeft + moveAmount.x < right && playerRight > right) &&\r\n            ((playerBottom >= bottom && playerBottom <= top) ||\r\n                (playerTop <= top && playerTop >= bottom))) {\r\n            moveAmount.x = right - playerLeft;\r\n            player.controller.collisionFlags.left = true;\r\n        }\r\n    }\r\n\r\n    draw(ctx) {\r\n        const pos = this.pos;\r\n        const size = this.size;\r\n\r\n        // draw block\r\n        ctx.fillStyle = 'green';\r\n        ctx.fillRect(pos.x - size.x / 2, _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] - pos.y - size.y, size.x, size.y);\r\n        ctx.strokeStyle = 'red';\r\n        ctx.strokeRect(pos.x - size.x / 2, _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] - pos.y - size.y, size.x, size.y);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./assets/javascript/block.js?");

/***/ }),

/***/ "./assets/javascript/constants.js":
/*!****************************************!*\
  !*** ./assets/javascript/constants.js ***!
  \****************************************/
/*! exports provided: GAME_WIDTH, GAME_HEIGHT, PLAYER_SPRITE_WIDTH, PLAYER_SPRITE_HEIGHT, PLAYER_DRAW_WIDTH, PLAYER_DRAW_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT, SKIN_WIDTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_WIDTH\", function() { return GAME_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_HEIGHT\", function() { return GAME_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAYER_SPRITE_WIDTH\", function() { return PLAYER_SPRITE_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAYER_SPRITE_HEIGHT\", function() { return PLAYER_SPRITE_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAYER_DRAW_WIDTH\", function() { return PLAYER_DRAW_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAYER_DRAW_HEIGHT\", function() { return PLAYER_DRAW_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAYER_WIDTH\", function() { return PLAYER_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAYER_HEIGHT\", function() { return PLAYER_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SKIN_WIDTH\", function() { return SKIN_WIDTH; });\nconst GAME_WIDTH = 700;\r\nconst GAME_HEIGHT = 850;\r\n\r\nconst PLAYER_SPRITE_WIDTH = 100;\r\nconst PLAYER_SPRITE_HEIGHT = 74;\r\nconst PLAYER_DRAW_WIDTH = 80;\r\nconst PLAYER_DRAW_HEIGHT = 59;\r\n\r\nconst PLAYER_WIDTH = 32;\r\nconst PLAYER_HEIGHT = 48;\r\nconst SKIN_WIDTH = 10;\n\n//# sourceURL=webpack:///./assets/javascript/constants.js?");

/***/ }),

/***/ "./assets/javascript/game.js":
/*!***********************************!*\
  !*** ./assets/javascript/game.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./assets/javascript/constants.js\");\n/* harmony import */ var _util_vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/vector2 */ \"./assets/javascript/util/vector2.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./assets/javascript/player.js\");\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block */ \"./assets/javascript/block.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Game {\r\n    constructor() {\r\n        // create player\r\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\r\n            game: this,\r\n            size: new _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_WIDTH\"], _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_HEIGHT\"])\r\n        });\r\n\r\n        // create floor\r\n        const floor = new _block__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\r\n            game: this,\r\n            pos: new _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2, 0),\r\n            size: new _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"], 64),\r\n            vel: new _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, 0)\r\n        });\r\n\r\n        this.blocks = [floor];\r\n        this.lastBlockTime = 0;\r\n        this.blocksPerSecond = 1.5;\r\n\r\n        // create wall - for testing wallslide\r\n        const wall = new _block__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\r\n            game: this,\r\n            pos: new _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, 0),\r\n            size: new _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"](50, _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"]),\r\n            vel: new _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, 0)\r\n        });\r\n        this.blocks.push(wall);\r\n    }\r\n\r\n    checkCollisions(moveAmount) {\r\n        this.blocks.forEach(block => block.willCollideWith(this.player, moveAmount));\r\n    }\r\n\r\n    draw(ctx) {\r\n        this.blocks.forEach(block => block.draw(ctx));\r\n        this.player.draw(ctx);\r\n    }\r\n\r\n    step(deltaTime) {\r\n        if (this.lastBlockTime < 1 / this.blocksPerSecond) {\r\n            this.lastBlockTime += deltaTime;\r\n        } else {\r\n            this._generateBlock();\r\n            this.lastBlockTime = 0;\r\n        }\r\n\r\n        this.player.move(deltaTime);\r\n        this.blocks.forEach(block => block.move(deltaTime));\r\n    }\r\n\r\n    _generateBlock() {\r\n        const unit = 50;\r\n        const size = new _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n            Math.floor(Math.random() * 5 + 1) * unit,\r\n            Math.floor(Math.random() * 3 + 1) * unit\r\n        );\r\n        const pos = new _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n            Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / (unit * 2)) * (unit * 2) + size.x / 2,\r\n            _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] + size.y\r\n        );\r\n        const vel = new _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n            0, -Math.floor(Math.random() * 50 + 100)\r\n        );\r\n        // this.blocks.push(new Block({ game: this, size, pos, vel }));\r\n    }\r\n\r\n    isOffScreen(pos, size) {\r\n        return pos + size < 0;\r\n    }\r\n\r\n    remove(obj) {\r\n        if (obj instanceof _block__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\r\n            this.blocks.splice(this.blocks.indexOf(obj), 1);\r\n        }\r\n    }\r\n\r\n    end() {\r\n        // TODO\r\n    }\r\n}\n\n//# sourceURL=webpack:///./assets/javascript/game.js?");

/***/ }),

/***/ "./assets/javascript/game_view.js":
/*!****************************************!*\
  !*** ./assets/javascript/game_view.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameView; });\nclass GameView {\r\n    constructor(game, ctx) {\r\n        this.ctx = ctx;\r\n        this.game = game;\r\n\r\n        // waterfall animation setup\r\n        this.waterbar = new Image();\r\n        this.waterbar.src = '../assets/images/waterfall_sprite_sheet.png';\r\n        this.waterfallSpeed = .6;\r\n        this.waterfallFrames = 6;\r\n        this.lastFrameTime = 0;\r\n        this.frame = 0;\r\n\r\n        this.animate = this.animate.bind(this);\r\n    }\r\n\r\n    start() {\r\n        this.lastTime = 0;\r\n        requestAnimationFrame(this.animate);\r\n    }\r\n\r\n    animate(time) {\r\n        const deltaTime = (time - this.lastTime) / 1000;\r\n\r\n        this.game.step(deltaTime);\r\n\r\n        // draw next frame\r\n        this.drawBg(deltaTime);\r\n        this.game.draw(this.ctx);\r\n        this.lastTime = time;\r\n\r\n        requestAnimationFrame(this.animate);\r\n    }\r\n\r\n    drawBg(deltaTime) {\r\n        const ctx = this.ctx;\r\n        // let bg = ctx.createLinearGradient(0, 0, 0, ctx.canvas.clientHeight);\r\n        // bg.addColorStop(1, '#66A6FF');\r\n        // bg.addColorStop(0, '#89F7FE');\r\n        ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);\r\n        ctx.fillStyle = '#66A6FF';\r\n        ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);\r\n\r\n        if (this.lastFrameTime < this.waterfallSpeed / this.waterfallFrames) {\r\n            this.lastFrameTime += deltaTime;\r\n        } else {\r\n            this.frame = (this.frame + 1) % this.waterfallFrames;\r\n            this.lastFrameTime = 0;\r\n        }\r\n\r\n        // img, sourceX, sourceY, sourceH, sourceW, canvasX, canvasY, width, height\r\n        ctx.drawImage(this.waterbar, 620 * this.frame, 0, 620, 900,\r\n            -10, 0, 720, 850);\r\n    }\r\n\r\n    bindKeyHandlers() {\r\n        // map player input to game logic\r\n    }\r\n}\n\n//# sourceURL=webpack:///./assets/javascript/game_view.js?");

/***/ }),

/***/ "./assets/javascript/index.js":
/*!************************************!*\
  !*** ./assets/javascript/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./assets/javascript/constants.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./assets/javascript/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_view */ \"./assets/javascript/game_view.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const canvas = document.getElementById('game-canvas');\r\n    canvas.width = _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"];\r\n    canvas.height = _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"];\r\n\r\n    const ctx = canvas.getContext('2d');\r\n    ctx.imageSmoothingEnabled = false;\r\n    const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n    new _game_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](game, ctx).start();\r\n});\n\n//# sourceURL=webpack:///./assets/javascript/index.js?");

/***/ }),

/***/ "./assets/javascript/movement/input_manager.js":
/*!*****************************************************!*\
  !*** ./assets/javascript/movement/input_manager.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputManager; });\nclass InputManager {\r\n    constructor(player) {\r\n        this.player = player;\r\n        this.inputFlags = {\r\n            dirX: 0,\r\n            dirY: 0,\r\n            jumpPressed: false,\r\n            newJump: true\r\n        }\r\n\r\n        this.keydown = this.keydown.bind(this);\r\n        this.keyup = this.keyup.bind(this);\r\n        this.addListeners();\r\n    }\r\n\r\n    addListeners() {\r\n        document.addEventListener('keydown', this.keydown);\r\n        document.addEventListener('keyup', this.keyup);\r\n    }\r\n\r\n    keydown(e) {\r\n        const inputFlags = this.inputFlags;\r\n\r\n        if (e.code === 'ArrowLeft') {\r\n            inputFlags.dirX = -1;\r\n        } else if (e.code === 'ArrowRight') {\r\n            inputFlags.dirX = 1;\r\n        }\r\n\r\n        if (e.code === 'ArrowUp') {\r\n            inputFlags.dirY = 1;\r\n        } else if (e.code === 'ArrowDown') {\r\n            inputFlags.dirY = -1;\r\n        }\r\n\r\n        if (e.code === 'Space') {\r\n            inputFlags.newJump = !inputFlags.jumpPressed;\r\n            inputFlags.jumpPressed = true;\r\n        }\r\n    }\r\n\r\n    keyup(e) {\r\n        const inputFlags = this.inputFlags;\r\n\r\n        if (e.code === 'ArrowLeft' && inputFlags.dirX < 0) {\r\n            inputFlags.dirX = 0;\r\n        } else if (e.code === 'ArrowRight' && inputFlags.dirX > 0) {\r\n            inputFlags.dirX = 0;\r\n        }\r\n\r\n        if (e.code === 'ArrowUp' && inputFlags.dirY > 0) {\r\n            inputFlags.dirY = 0;\r\n        } else if (e.code === 'ArrowDown' && inputFlags.dirY < 0) {\r\n            inputFlags.dirY = 0;\r\n        }\r\n\r\n        if (e.code === 'Space') {\r\n            inputFlags.jumpPressed = false;\r\n            inputFlags.newJump = true;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./assets/javascript/movement/input_manager.js?");

/***/ }),

/***/ "./assets/javascript/movement/player_controller.js":
/*!*********************************************************!*\
  !*** ./assets/javascript/movement/player_controller.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlayerController; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./assets/javascript/constants.js\");\n/* harmony import */ var _util_vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/vector2 */ \"./assets/javascript/util/vector2.js\");\n\r\n\r\n\r\nclass PlayerController {\r\n    constructor(player) {\r\n        this.player = player;\r\n        this.pos = player.pos;\r\n        this.vel = player.vel;\r\n\r\n        const walkSpeed = _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] * 0.3;\r\n        const jumpHeight = _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_HEIGHT\"] * 2;\r\n        const jumpDist = _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_WIDTH\"] * 5;\r\n        const jumpVel = (2 * walkSpeed * jumpHeight) / (jumpDist / 2);\r\n        const gravity = (-2 * jumpHeight * Math.pow(walkSpeed, 2)) / Math.pow(jumpDist / 2, 2);\r\n\r\n        this.walkSpeed = walkSpeed;\r\n        this.jumpVel = jumpVel;\r\n        this.gravity = gravity;\r\n        this.jumps = 2;\r\n        this.rolling = false;\r\n\r\n\r\n        this.collisionFlags = {\r\n            above: false,\r\n            below: false,\r\n            left: false,\r\n            right: false\r\n        };\r\n    }\r\n\r\n    idle(inputFlags) {\r\n        this.inputFlags = inputFlags;\r\n        this.vel.x = 0;\r\n    }\r\n\r\n    walk(inputFlags) {\r\n        this.inputFlags = inputFlags;\r\n        this.vel.x = inputFlags.dirX * this.walkSpeed;\r\n    }\r\n\r\n    jump(inputFlags) {\r\n        this.inputFlags = inputFlags;\r\n        inputFlags.newJump = false;\r\n\r\n        if (this.jumps > 0) {\r\n            if (this.jumps === 1) {\r\n                this.rolling = true;\r\n            }\r\n\r\n            this.jumps--;\r\n            this.vel.y = this.jumpVel;\r\n        }\r\n    }\r\n\r\n    wallAction(inputFlags, action) {\r\n        this.inputFlags = inputFlags;\r\n        this.wallsliding = true;\r\n        this.rolling = false;\r\n        console.log(action);\r\n        switch(action) {\r\n            case \"LEAP\":\r\n                this.vel.x = inputFlags.dirX * this.walkSpeed;\r\n                this.vel.y = WALL_LEAP_VEL;\r\n                this.inputFlags.newJump = false;\r\n                this.jumps++;\r\n                break;\r\n            case \"DROP\":\r\n                this.vel.x = -this.wallDirection() * WALL_DROP_SPEED;\r\n                this.inputFlags.newJump = false;\r\n                this.jumps++;\r\n                break;\r\n        }\r\n    }\r\n\r\n    airborne(inputFlags) {\r\n        this.inputFlags = inputFlags;\r\n        this.vel.x = inputFlags.dirX * this.walkSpeed;\r\n    }\r\n\r\n    move(deltaTime) {\r\n\r\n        // apply gravity\r\n        this.vel.y += this.gravity * deltaTime;\r\n        if (this.vel.y < MAX_FALL_SPEED) {\r\n            this.vel.y = MAX_FALL_SPEED;\r\n        }\r\n\r\n        // check if wallsliding\r\n        if (this.wallsliding && this.vel.y < WALLSLIDE_MAX_SPEED) {\r\n            this.vel.y = WALLSLIDE_MAX_SPEED;\r\n        }\r\n\r\n        // calc movement vector\r\n        const moveAmount = new _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.vel.x * deltaTime, this.vel.y * deltaTime);\r\n\r\n        // check collisions\r\n        this._resetCollisionFlags();\r\n        this.player.game.checkCollisions(moveAmount);\r\n\r\n        // apply movement\r\n        this.pos.add(moveAmount);\r\n\r\n        // prevet movement off sides of screen\r\n        if (this.pos.x - _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_WIDTH\"] / 2 <= 0) {\r\n            this.pos.x = _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_WIDTH\"] / 2;\r\n        } else if (this.pos.x + _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_WIDTH\"] / 2 >= _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"]) {\r\n            this.pos.x = _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] - _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_WIDTH\"] / 2;\r\n        }\r\n\r\n        if (this.isGrounded()) {\r\n            this.jumps = 2;\r\n            this.rolling = false;\r\n        }\r\n\r\n        // reset flags\r\n        this.wallsliding = false;\r\n    }\r\n\r\n    wallDirection() {\r\n        if (this.collisionFlags.left) return -1;\r\n        if (this.collisionFlags.right) return 1;\r\n        return 0;\r\n    }\r\n\r\n    isGrounded() {\r\n        return this.collisionFlags.below;\r\n    }\r\n\r\n    isRising() {\r\n        return this.vel.y > 0;\r\n    }\r\n\r\n    isRolling() {\r\n        if (this.vel.y < MAX_FALL_SPEED) {\r\n            this.rolling = false;\r\n        }\r\n\r\n        return this.rolling;\r\n    }\r\n\r\n    shrink() {\r\n        this.player.size.y = _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_HEIGHT\"] * 0.8;\r\n    }\r\n\r\n    grow() {\r\n        this.player.size.y = _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_HEIGHT\"];\r\n    }\r\n\r\n    _resetCollisionFlags() {\r\n        this.collisionFlags.above = false;\r\n        this.collisionFlags.below = false;\r\n        this.collisionFlags.left = false;\r\n        this.collisionFlags.right = false;\r\n    }\r\n}\r\n\r\nconst MAX_FALL_SPEED = -400;\r\nconst WALLSLIDE_MAX_SPEED = -75;\r\nconst WALL_LEAP_VEL = 500;\r\nconst WALL_DROP_SPEED = 50;\n\n//# sourceURL=webpack:///./assets/javascript/movement/player_controller.js?");

/***/ }),

/***/ "./assets/javascript/movement/state/airborne_state.js":
/*!************************************************************!*\
  !*** ./assets/javascript/movement/state/airborne_state.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AirborneState; });\n/* harmony import */ var _player_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player_state */ \"./assets/javascript/movement/state/player_state.js\");\n\r\n\r\nclass AirborneState {\r\n    constructor() {\r\n        this.name = \"AIRBORNE\";\r\n    }\r\n\r\n    handleInput(controller, inputFlags) {\r\n        if (controller.isGrounded()) {\r\n            if (inputFlags.dirX !== 0) {\r\n                return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WALKING;\r\n            }\r\n            return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].IDLE;\r\n        }\r\n\r\n        if (controller.wallDirection() !== 0) {\r\n            return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WALLSLIDING;\r\n        }\r\n\r\n        if ((inputFlags.jumpPressed && inputFlags.newJump && controller.jumps > 0) || controller.isRolling()) {\r\n            debugger;\r\n            return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ROLLING;\r\n        }\r\n\r\n        if (controller.isRising()) {\r\n            return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RISING;\r\n        } else {\r\n            return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].FALLING;\r\n        }\r\n    }\r\n\r\n    handleUpdate(controller, inputFlags) {\r\n        controller.airborne(inputFlags);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./assets/javascript/movement/state/airborne_state.js?");

/***/ }),

/***/ "./assets/javascript/movement/state/falling_state.js":
/*!***********************************************************!*\
  !*** ./assets/javascript/movement/state/falling_state.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FallingState; });\n/* harmony import */ var _airborne_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airborne_state */ \"./assets/javascript/movement/state/airborne_state.js\");\n\r\n\r\nclass FallingState extends _airborne_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super();\r\n        this.name = \"FALLING\";\r\n    }\r\n}\n\n//# sourceURL=webpack:///./assets/javascript/movement/state/falling_state.js?");

/***/ }),

/***/ "./assets/javascript/movement/state/ground_state.js":
/*!**********************************************************!*\
  !*** ./assets/javascript/movement/state/ground_state.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player_state */ \"./assets/javascript/movement/state/player_state.js\");\n\r\n\r\nclass GroundState {\r\n    constructor() {}\r\n\r\n    handleInput(controller, inputFlags) {\r\n        if (!controller.isGrounded()) {\r\n            return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].FALLING;\r\n        }\r\n\r\n        if (inputFlags.jumpPressed) {\r\n            return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].JUMPING;\r\n        }\r\n\r\n        if (inputFlags.dirX !== 0) {\r\n            return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WALKING;\r\n        }\r\n\r\n        return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].IDLE;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroundState);\n\n//# sourceURL=webpack:///./assets/javascript/movement/state/ground_state.js?");

/***/ }),

/***/ "./assets/javascript/movement/state/idle_state.js":
/*!********************************************************!*\
  !*** ./assets/javascript/movement/state/idle_state.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IdleState; });\n/* harmony import */ var _ground_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ground_state */ \"./assets/javascript/movement/state/ground_state.js\");\n\r\n\r\nclass IdleState extends _ground_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super();\r\n        this.name = 'IDLE';\r\n    }\r\n\r\n    handleInput(controller, inputFlags) {\r\n        return super.handleInput(controller, inputFlags);\r\n    }\r\n\r\n    handleUpdate(controller, inputFlags) {\r\n        controller.idle(inputFlags);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./assets/javascript/movement/state/idle_state.js?");

/***/ }),

/***/ "./assets/javascript/movement/state/jumping_state.js":
/*!***********************************************************!*\
  !*** ./assets/javascript/movement/state/jumping_state.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return JumpingState; });\n/* harmony import */ var _player_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player_state */ \"./assets/javascript/movement/state/player_state.js\");\n\r\n\r\nclass JumpingState {\r\n    constructor() {\r\n        this.name = \"JUMPING\";\r\n    }\r\n\r\n    handleInput(controller, inputFlags) {\r\n        return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RISING;\r\n    }\r\n\r\n    handleUpdate(controller, inputFlags) {\r\n        controller.jump(inputFlags);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./assets/javascript/movement/state/jumping_state.js?");

/***/ }),

/***/ "./assets/javascript/movement/state/player_state.js":
/*!**********************************************************!*\
  !*** ./assets/javascript/movement/state/player_state.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlayerState; });\n/* harmony import */ var _idle_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./idle_state */ \"./assets/javascript/movement/state/idle_state.js\");\n/* harmony import */ var _walking_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./walking_state */ \"./assets/javascript/movement/state/walking_state.js\");\n/* harmony import */ var _jumping_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jumping_state */ \"./assets/javascript/movement/state/jumping_state.js\");\n/* harmony import */ var _rising_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rising_state */ \"./assets/javascript/movement/state/rising_state.js\");\n/* harmony import */ var _falling_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./falling_state */ \"./assets/javascript/movement/state/falling_state.js\");\n/* harmony import */ var _rolling_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rolling_state */ \"./assets/javascript/movement/state/rolling_state.js\");\n/* harmony import */ var _wallsliding_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallsliding_state */ \"./assets/javascript/movement/state/wallsliding_state.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction PlayerState() {};\r\n\r\nPlayerState.IDLE = new _idle_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nPlayerState.WALKING = new _walking_state__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nPlayerState.RISING = new _rising_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\nPlayerState.FALLING = new _falling_state__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\nPlayerState.JUMPING = new _jumping_state__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nPlayerState.ROLLING = new _rolling_state__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\r\nPlayerState.WALLSLIDING = new _wallsliding_state__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n\n//# sourceURL=webpack:///./assets/javascript/movement/state/player_state.js?");

/***/ }),

/***/ "./assets/javascript/movement/state/rising_state.js":
/*!**********************************************************!*\
  !*** ./assets/javascript/movement/state/rising_state.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RisingState; });\n/* harmony import */ var _airborne_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airborne_state */ \"./assets/javascript/movement/state/airborne_state.js\");\n\r\n\r\nclass RisingState extends _airborne_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super();\r\n        this.name = \"RISING\";\r\n    }\r\n}\n\n//# sourceURL=webpack:///./assets/javascript/movement/state/rising_state.js?");

/***/ }),

/***/ "./assets/javascript/movement/state/rolling_state.js":
/*!***********************************************************!*\
  !*** ./assets/javascript/movement/state/rolling_state.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RollingState; });\n/* harmony import */ var _airborne_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airborne_state */ \"./assets/javascript/movement/state/airborne_state.js\");\n\r\n\r\nclass RollingState extends _airborne_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super();\r\n        this.name = \"ROLLING\";\r\n    }\r\n\r\n    handleUpdate(controller, inputFlags) {\r\n        if (controller.jumps > 0) {\r\n            controller.jump(inputFlags);\r\n        } else {\r\n            controller.airborne(inputFlags);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./assets/javascript/movement/state/rolling_state.js?");

/***/ }),

/***/ "./assets/javascript/movement/state/walking_state.js":
/*!***********************************************************!*\
  !*** ./assets/javascript/movement/state/walking_state.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WalkingState; });\n/* harmony import */ var _ground_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ground_state */ \"./assets/javascript/movement/state/ground_state.js\");\n\r\n\r\nclass WalkingState extends _ground_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super();\r\n        this.name = \"WALKING\";\r\n    }\r\n\r\n    handleInput(controller, inputFlags) {\r\n        return super.handleInput(controller, inputFlags);\r\n    }\r\n\r\n    handleUpdate(controller, inputFlags) {\r\n        controller.walk(inputFlags);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./assets/javascript/movement/state/walking_state.js?");

/***/ }),

/***/ "./assets/javascript/movement/state/wallsliding_state.js":
/*!***************************************************************!*\
  !*** ./assets/javascript/movement/state/wallsliding_state.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WallslidingState; });\n/* harmony import */ var _player_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player_state */ \"./assets/javascript/movement/state/player_state.js\");\n\r\n\r\nclass WallslidingState {\r\n    constructor() {\r\n        this.name = \"WALLSLIDING\";\r\n    }\r\n\r\n    handleInput(controller, inputFlags) {\r\n        if (controller.isGrounded()) {\r\n            return (inputFlags.dirX === 0) ? _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].IDLE : _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WALKING;\r\n        }\r\n\r\n        if (controller.wallDirection() === 0) {\r\n            return (controller.vel.y > 0) ? _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RISING : _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].FALLING;\r\n        }\r\n\r\n        return _player_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WALLSLIDING;\r\n    }\r\n\r\n    handleUpdate(controller, inputFlags) {\r\n        let action = WallSlideAction.None;\r\n        let jump = inputFlags.jumpPressed && inputFlags.newJump;\r\n\r\n        if (jump && inputFlags.dirX === -controller.wallDirection()) {\r\n            action = WallSlideAction.Leap;\r\n        } else if (jump && inputFlags.dirX === 0) {\r\n            action = WallSlideAction.Drop;\r\n        }\r\n\r\n        controller.wallAction(inputFlags, action);\r\n    }\r\n}\r\n\r\nconst WallSlideAction = {\r\n    Leap: \"LEAP\",\r\n    Drop: \"DROP\",\r\n    None: \"NONE\"\r\n};\n\n//# sourceURL=webpack:///./assets/javascript/movement/state/wallsliding_state.js?");

/***/ }),

/***/ "./assets/javascript/moving_object.js":
/*!********************************************!*\
  !*** ./assets/javascript/moving_object.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovingObject; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./assets/javascript/game.js\");\n/* harmony import */ var _util_vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/vector2 */ \"./assets/javascript/util/vector2.js\");\n\r\n\r\n\r\nclass MovingObject {\r\n    constructor(options) {\r\n        this.pos = options.pos;\r\n        this.vel = options.vel;\r\n        this.size = options.size;\r\n        this.game = options.game;\r\n    }\r\n\r\n    collideWith(other) {\r\n        // default\r\n    }\r\n\r\n    draw(ctx) {\r\n        // default\r\n    }\r\n\r\n    willCollideWith(other, moveAmount) {\r\n        // default\r\n    }\r\n    \r\n    move(deltaTime) {\r\n        const offset = new _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.vel.x * deltaTime, this.vel.y * deltaTime);\r\n        this.pos.add(offset);\r\n\r\n        if (this.game.isOffScreen(this.pos.y, this.size.y)) {\r\n            this.remove();\r\n        }\r\n    }\r\n\r\n    remove() {\r\n        this.game.remove(this);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./assets/javascript/moving_object.js?");

/***/ }),

/***/ "./assets/javascript/player.js":
/*!*************************************!*\
  !*** ./assets/javascript/player.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./assets/javascript/constants.js\");\n/* harmony import */ var _util_vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/vector2 */ \"./assets/javascript/util/vector2.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moving_object */ \"./assets/javascript/moving_object.js\");\n/* harmony import */ var _movement_state_player_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movement/state/player_state */ \"./assets/javascript/movement/state/player_state.js\");\n/* harmony import */ var _movement_player_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movement/player_controller */ \"./assets/javascript/movement/player_controller.js\");\n/* harmony import */ var _movement_input_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movement/input_manager */ \"./assets/javascript/movement/input_manager.js\");\n/* harmony import */ var _util_animation_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/animation_manager */ \"./assets/javascript/util/animation_manager.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Player extends _moving_object__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\r\n    constructor(options) {\r\n        super(options);\r\n        this.pos = new _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"] / 2, 100);\r\n        this.vel = new _util_vector2__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, 0);\r\n\r\n        this.initMovementAndState();\r\n        this.initDrawAndAnimation();\r\n    }\r\n\r\n    draw(ctx) {\r\n        const drawX = this.pos.x - _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_DRAW_WIDTH\"] / 2;\r\n        const drawY = _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] - this.pos.y - _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_DRAW_HEIGHT\"];\r\n\r\n        // img, sourceX, sourceY, sourceH, sourceW, canvasX, canvasY, width, height\r\n        if (this.facing === 1) {\r\n            ctx.drawImage(this.imageRight, ...this.animationManager.sprite, 100, 74,\r\n                drawX, drawY, 80, 59);\r\n        } else {\r\n            ctx.drawImage(this.imageLeft, ...this.animationManager.sprite, 100, 74,\r\n                drawX, drawY, 80, 59);\r\n        }\r\n\r\n\r\n        // draw player hitbox\r\n        ctx.strokeStyle = 'red';\r\n        ctx.strokeRect(this.pos.x - this.size.x / 2,\r\n            _constants__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"] - this.pos.y - this.size.y, this.size.x, this.size.y);\r\n    }\r\n\r\n    move(deltaTime) {\r\n        const inputFlags = this.inputManager.inputFlags;\r\n        this.currentState = this.currentState.handleInput(this.controller, inputFlags);\r\n\r\n        // process state with current inputs\r\n        this.currentState.handleUpdate(this.controller, inputFlags);\r\n\r\n        // move player with controller\r\n        this.controller.move(deltaTime);\r\n\r\n        // update animation\r\n        this.updateAnimation(deltaTime, inputFlags.dirX);\r\n    }\r\n\r\n    updateAnimation(deltaTime, dirX) {\r\n        this.facing = (dirX != 0) ? dirX : this.facing;\r\n\r\n        switch (this.currentState.name) {\r\n            case \"WALKING\":\r\n                this.animationManager.walk(deltaTime, this.facing);\r\n                break;\r\n            case \"RISING\":\r\n                this.animationManager.jump(deltaTime, this.facing);\r\n                break;\r\n            case \"FALLING\":\r\n                this.animationManager.fall(deltaTime, this.facing);\r\n                break;\r\n            case \"ROLLING\":\r\n                this.animationManager.roll(deltaTime, this.facing);\r\n                break;\r\n            case \"WALLSLIDING\":\r\n                this.facing = this.controller.wallDirection();\r\n                this.animationManager.wallslide(deltaTime, this.facing);\r\n                break;\r\n            default:\r\n                this.animationManager.idle(deltaTime, this.facing);\r\n        }\r\n    }\r\n\r\n    remove() {\r\n        this.game.end();\r\n    }\r\n\r\n    initMovementAndState() {\r\n        this.inputManager = new _movement_input_manager__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this);\r\n        this.controller = new _movement_player_controller__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this);\r\n        this.currentState = _movement_state_player_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].IDLE;\r\n        this.facing = 1;\r\n    }\r\n\r\n    initDrawAndAnimation() {\r\n        this.imageRight = new Image();\r\n        this.imageRight.src = '../assets/images/character_sheet_right.png';\r\n        this.imageLeft = new Image();\r\n        this.imageLeft.src = '../assets/images/character_sheet_left.png';\r\n        this.animationManager = new _util_animation_manager__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\r\n        _movement_state_player_state__WEBPACK_IMPORTED_MODULE_3__[\"default\"].animator = this.animationManager;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./assets/javascript/player.js?");

/***/ }),

/***/ "./assets/javascript/util/animation_manager.js":
/*!*****************************************************!*\
  !*** ./assets/javascript/util/animation_manager.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimationManager; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./assets/javascript/constants.js\");\n\r\n\r\nclass AnimationManager {\r\n    constructor() {\r\n        this.direction = 1;\r\n        this.frame = 0;\r\n        this.lastFrameTime = 0;\r\n\r\n        // idle animation start frames\r\n        this.idleBaseRight = [this._framesFromLeft(0), this._framesFromTop(0)];\r\n        this.idleBaseLeft = [this._framesFromRight(0), this._framesFromTop(0)];\r\n\r\n        // walk animation start frames\r\n        this.walkBaseRight = [this._framesFromLeft(1), this._framesFromTop(1)];\r\n        this.walkBaseLeft = [this._framesFromRight(1), this._framesFromTop(1)];\r\n\r\n        // jump animation start frames\r\n        this.jumpBaseRight = [this._framesFromLeft(2), this._framesFromTop(2)];\r\n        this.jumpBaseLeft = [this._framesFromRight(2), this._framesFromTop(2)];\r\n\r\n        // fall animation start frames\r\n        this.fallBaseRight = [this._framesFromLeft(1), this._framesFromTop(3)];\r\n        this.fallBaseLeft = [this._framesFromRight(1), this._framesFromTop(3)];\r\n\r\n        // roll animation start frames\r\n        this.rollBaseRight = [this._framesFromLeft(4), this._framesFromTop(2)];\r\n        this.rollBaseLeft = [this._framesFromRight(4), this._framesFromTop(2)];\r\n\r\n        // wallslide animation start frames\r\n        this.wallslideBaseRight = [this._framesFromLeft(2), this._framesFromTop(11)];\r\n        this.wallslideBaseLeft = [this._framesFromRight(2), this._framesFromTop(11)];\r\n\r\n        // set start animation frame\r\n        this.sprite = [0, 0];\r\n        this.currentAnim = \"IDLE\";\r\n    }\r\n\r\n    idle(deltaTime, direction) {\r\n        const name = \"IDLE\";\r\n        const duration = 0.65;\r\n        const numFrames = 4;\r\n        this._step(deltaTime, duration, numFrames, name);\r\n\r\n        if (direction === 1) {\r\n            this.sprite[0] = this.idleBaseRight[0] + _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * this.frame;\r\n            this.sprite[1] = this.idleBaseRight[1];\r\n        } else {\r\n            this.sprite[0] = this.idleBaseLeft[0] - _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * this.frame;\r\n            this.sprite[1] = this.idleBaseLeft[1];\r\n        }\r\n    }\r\n\r\n    walk(deltaTime, direction) {\r\n        const name = \"WALK\";\r\n        const duration = 0.65;\r\n        const numFrames = 6;\r\n        this._step(deltaTime, duration, numFrames, name);\r\n\r\n        if (direction === 1) {\r\n            this.sprite[0] = this.walkBaseRight[0] + _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * this.frame;\r\n            this.sprite[1] = this.walkBaseRight[1];\r\n        } else {\r\n            this.sprite[0] = this.walkBaseLeft[0] - _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * this.frame;\r\n            this.sprite[1] = this.walkBaseLeft[1];\r\n        }\r\n    }\r\n\r\n    jump(deltaTime, direction) {\r\n        const name = \"JUMP\";\r\n        const duration = .4;\r\n        const numFrames = 2;\r\n        this._step(deltaTime, duration, numFrames, name);\r\n\r\n        if (direction === 1) {\r\n            this.sprite[0] = this.jumpBaseRight[0] + _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * this.frame;\r\n            this.sprite[1] = this.jumpBaseRight[1];\r\n        } else {\r\n            this.sprite[0] = this.jumpBaseLeft[0] - _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * this.frame;\r\n            this.sprite[1] = this.jumpBaseLeft[1];\r\n        }\r\n    }\r\n\r\n    fall(deltaTime, direction) {\r\n        const name = \"FALL\";\r\n        const duration = .2;\r\n        const numFrames = 2;\r\n        this._step(deltaTime, duration, numFrames, name);\r\n\r\n        if (direction === 1) {\r\n            this.sprite[0] = this.fallBaseRight[0] + _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * this.frame;\r\n            this.sprite[1] = this.fallBaseRight[1];\r\n        } else {\r\n            this.sprite[0] = this.fallBaseLeft[0] - _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * this.frame;\r\n            this.sprite[1] = this.fallBaseLeft[1];\r\n        }\r\n    }\r\n\r\n    roll(deltaTime, direction) {\r\n        const name = \"ROLL\";\r\n        const duration = .4;\r\n        const numFrames = 4;\r\n        this._step(deltaTime, duration, numFrames, name);\r\n\r\n        if (direction === 1) {\r\n            this.sprite[0] = this.rollBaseRight[0] + _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * this.frame;\r\n            this.sprite[1] = this.rollBaseRight[1];\r\n\r\n            if (this.sprite[0] >= this._framesFromLeft(7)) {\r\n                this.sprite[0] = 0;\r\n                this.sprite[1] += _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_HEIGHT\"];\r\n            }\r\n        } else {\r\n            this.sprite[0] = this.rollBaseLeft[0] - _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * this.frame;\r\n            this.sprite[1] = this.rollBaseLeft[1];\r\n\r\n            if (this.sprite[0] <= this._framesFromRight(7)) {\r\n                this.sprite[0] = this._framesFromRight(0);\r\n                this.sprite[1] += _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_HEIGHT\"];\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    wallslide(deltaTime, direction) {\r\n        const name = \"WALLSLIDE\";\r\n        const duration = .2;\r\n        const numFrames = 2;\r\n        this._step(deltaTime, duration, numFrames, name);\r\n\r\n        if (direction === 1) {\r\n            this.sprite[0] = this.wallslideBaseRight[0] + _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * this.frame;\r\n            this.sprite[1] = this.wallslideBaseRight[1];\r\n        } else {\r\n            this.sprite[0] = this.wallslideBaseLeft[0] - _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * this.frame;\r\n            this.sprite[1] = this.wallslideBaseLeft[1];\r\n        }\r\n    }\r\n\r\n    _step(deltaTime, duration, numFrames, name) {\r\n        if (name !== this.currentAnim) {\r\n            this.frame = 0;\r\n            this.lastFrameTime = 0;\r\n            this.currentAnim = name;\r\n        }\r\n\r\n        if (this.lastFrameTime < duration / numFrames) {\r\n            this.lastFrameTime += deltaTime;\r\n        } else {\r\n            this.frame = (this.frame + 1) % numFrames;\r\n            this.lastFrameTime = 0;\r\n        }\r\n    }\r\n\r\n    _framesFromLeft(n) {\r\n        return _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * n;\r\n    }\r\n\r\n    _framesFromRight(n) {\r\n        return 770 - _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_WIDTH\"] * (n + 1);\r\n    }\r\n\r\n    _framesFromTop(n) {\r\n        return _constants__WEBPACK_IMPORTED_MODULE_0__[\"PLAYER_SPRITE_HEIGHT\"] * n;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./assets/javascript/util/animation_manager.js?");

/***/ }),

/***/ "./assets/javascript/util/vector2.js":
/*!*******************************************!*\
  !*** ./assets/javascript/util/vector2.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector2; });\nclass Vector2 {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n\r\n    add(vector) {\r\n        this.x += vector.x;\r\n        this.y += vector.y;\r\n    }\r\n\r\n    magnitude() {\r\n        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));\r\n    }\r\n}\r\n\r\nVector2.up = { x: 0, y: 1 };\r\nVector2.down = { x: 0, y: -1 };\r\nVector2.left = { x: -1, y: 0 };\r\nVector2.right = { x: 1, y: 0 };\r\nVector2.zero = { x: 0, y: 0 };\n\n//# sourceURL=webpack:///./assets/javascript/util/vector2.js?");

/***/ })

/******/ });