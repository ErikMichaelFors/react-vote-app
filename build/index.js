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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tictactoe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tictactoe */ "./src/tictactoe.js");
/* harmony import */ var _react_vote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react-vote */ "./src/react-vote.js");

const {
  render,
  useState
} = wp.element;


const game = document.getElementById('react-tictactoe-app');
const votes = document.getElementById(`react-vote-app`);

if (game) {
  render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_tictactoe__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById('react-tictactoe-app'));
} else if (votes && _react_vote__WEBPACK_IMPORTED_MODULE_2__["Votes"]) {
  console.log("VOTES");
  render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_react_vote__WEBPACK_IMPORTED_MODULE_2__["Votes"], null), document.getElementById(`react-vote-app`));
}

/***/ }),

/***/ "./src/react-vote.js":
/*!***************************!*\
  !*** ./src/react-vote.js ***!
  \***************************/
/*! exports provided: Votes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Votes", function() { return Votes; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const {
  useState
} = wp.element;
const Votes = () => {
  const [votes, setVotes] = useState(0);

  const addVote = () => {
    setVotes(votes + 1);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, votes, " Votes by Michael"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "testing",
    onClick: addVote
  }, "Vote!")));
};

/***/ }),

/***/ "./src/tictactoe.css":
/*!***************************!*\
  !*** ./src/tictactoe.css ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/tictactoe.js":
/*!**************************!*\
  !*** ./src/tictactoe.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tictactoe_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tictactoe.css */ "./src/tictactoe.css");

//import React from 'react';
//import ReactDOM from 'react-dom';
//const { render, useState } = wp.element;



function Square(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: 'square ' + (props.winningSquare ? props.winningSquare : ''),
    onClick: props.onClick
  }, props.value);
}

class Board extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  renderSquare(i) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Square, {
      key: i // unique and wont change order
      ,
      value: this.props.squares[i],
      winningSquare: this.props.winningCombination && this.props.winningCombination.includes(i) ? 'winning-square' : null,
      onClick: () => this.props.onClick(i)
    });
  }

  renderBoard() {
    let board = [];
    let counter = 0;

    for (let c = 0; c < 3; c++) {
      let row = [];

      for (let r = 0; r < 3; r++) {
        row.push(this.renderSquare(counter++));
      }

      board.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "board-row"
      }, row));
    }

    return board;
  }

  render() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, this.renderBoard());
  }

}

class Game extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        latestMove: null,
        winningCombination: null
      }],
      stepNumber: 0,
      xIsNext: true,
      isAscending: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const recordedWin = calculateWinningCombination(squares);

    if (recordedWin || squares[i]) {
      current.winningCombination = recordedWin;
      this.setState({
        history: history
      });
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        latestMove: getMoveCordinates(i)
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  toggleOrder() {
    this.setState({
      isAscending: !this.state.isAscending
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winningCombo = calculateWinningCombination(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move # ' + move + ', (col: ' + step.latestMove[0] + ', row: ' + step.latestMove[1] + ')' : 'Go to game start';
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
        key: move
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
        onClick: () => this.jumpTo(move)
      }, move === this.state.stepNumber ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("b", null, desc) : desc));
    });
    let status;

    if (winningCombo) {
      status = 'Winner: ' + (!this.state.xIsNext ? 'X' : 'O');
    } else if (this.state.stepNumber === 9) {
      status = "It's a Draw!";
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "game"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "game-board"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Board, {
      squares: current.squares,
      winningCombination: winningCombo,
      onClick: i => this.handleClick(i)
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "game-info"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, status), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      onClick: () => this.toggleOrder()
    }, this.state.isAscending ? 'Descending' : 'Ascending'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ol", {
      className: this.state.isAscending ? 'ascending' : 'descending'
    }, moves)));
  }

} // ========================================
//render(<Game />,  document.getElementById('react-tictactoe-app'));


function calculateWinningCombination(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }

  return null;
}

function getMoveCordinates(square) {
  const columns = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
  const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  let column, row;

  for (let i = 0; i < 3; i++) {
    if (columns[i].includes(square)) column = i;
    if (rows[i].includes(square)) row = i;
  }

  return [column, row];
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map