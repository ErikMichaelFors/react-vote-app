//import React from 'react';
//import ReactDOM from 'react-dom';
//const { render, useState } = wp.element;
import React, {Component} from 'react';
import './tictactoe.css';

function Square(props) {
      return (
        <button 
            className={'square ' + (props.winningSquare ? props.winningSquare : '')} 
            onClick={props.onClick}
        >
          {props.value}
        </button>
      );
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return (
            <Square 
                key={i} // unique and wont change order
                value={this.props.squares[i]}
                winningSquare={
                    this.props.winningCombination && 
                    this.props.winningCombination.includes(i) ?
                    'winning-square' : null}
                onClick={()=>this.props.onClick(i)}
            />
        );
    }

    renderBoard(){
        let board = [];
        let counter = 0;
        for (let c=0; c<3; c++){
            let row = [];
            for (let r=0; r<3; r++){
                row.push(this.renderSquare(counter++));
            }
            board.push(<div className="board-row">{row}</div>)
        }
        return board;
    }
  
    render() {
      return (
        <div>
            {this.renderBoard()}
        </div>
      );
    }
  }
  
  class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                latestMove: null,
                winningCombination: null,
            }],
            stepNumber: 0,
            xIsNext: true,
            isAscending: true,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber +1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const recordedWin = calculateWinningCombination(squares);
        if (recordedWin || squares[i]) {
            current.winningCombination = recordedWin;
            this.setState({
                history: history,
            });
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                latestMove: getMoveCordinates(i),
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    toggleOrder(){
        this.setState({
            isAscending: !this.state.isAscending,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winningCombo = calculateWinningCombination(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? 
                'Go to move # '+move+', (col: '+step.latestMove[0]+', row: '+step.latestMove[1]+')':
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={()=> this.jumpTo(move)}>
                        {move === this.state.stepNumber ? <b>{desc}</b> : desc}
                    </button>
                </li>
            )
        })

        let status;
        if (winningCombo) {
            status = 'Winner: ' + (!this.state.xIsNext ? 'X' : 'O');
        } else if (this.state.stepNumber === 9) {
            status = "It's a Draw!"
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
                squares={current.squares}
                winningCombination={winningCombo}
                onClick={(i)=>this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <button onClick={()=>this.toggleOrder()}>{this.state.isAscending ? 'Descending' : 'Ascending'}</button>
            <ol className={this.state.isAscending ? 'ascending' :'descending'}>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
//render(<Game />,  document.getElementById('react-tictactoe-app'));

  

  function calculateWinningCombination(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return lines[i];
      }
    }
    return null;
  }

  function getMoveCordinates(square){
    const columns = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ];
    const rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ];
    let column, row;
    for (let i=0; i<3; i++){
        if (columns[i].includes(square)) column = i
        if (rows[i].includes(square)) row = i
    }
    return [column, row];
  }

  export default Game;