import React, { useState, useEffect } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameMode, setGameMode] = useState('ai'); // 'ai' or 'friend'
  const [gameStarted, setGameStarted] = useState(false);
  const [scores, setScores] = useState({ X: 0, O: 0, ties: 0 });
  const [winner, setWinner] = useState(null);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const isBoardFull = (squares) => {
    return squares.every(square => square !== null);
  };

  const getBestMove = (squares, player) => {
    const opponent = player === 'X' ? 'O' : 'X';
    
    // Check for winning move
    for (let i = 0; i < 9; i++) {
      if (!squares[i]) {
        const newSquares = [...squares];
        newSquares[i] = player;
        if (calculateWinner(newSquares) === player) {
          return i;
        }
      }
    }
    
    // Block opponent's winning move
    for (let i = 0; i < 9; i++) {
      if (!squares[i]) {
        const newSquares = [...squares];
        newSquares[i] = opponent;
        if (calculateWinner(newSquares) === opponent) {
          return i;
        }
      }
    }
    
    // Take center if available
    if (!squares[4]) return 4;
    
    // Take corners
    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter(i => !squares[i]);
    if (availableCorners.length > 0) {
      return availableCorners[Math.floor(Math.random() * availableCorners.length)];
    }
    
    // Take any available edge
    const edges = [1, 3, 5, 7];
    const availableEdges = edges.filter(i => !squares[i]);
    if (availableEdges.length > 0) {
      return availableEdges[Math.floor(Math.random() * availableEdges.length)];
    }
    
    return null;
  };

  const handleClick = (i) => {
    if (!gameStarted || board[i] || winner) return;
    
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    
    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      setScores(prev => ({ ...prev, [newWinner]: prev[newWinner] + 1 }));
    } else if (isBoardFull(newBoard)) {
      setWinner('tie');
      setScores(prev => ({ ...prev, ties: prev.ties + 1 }));
    } else {
      setXIsNext(!xIsNext);
    }
  };

  const makeAIMove = () => {
    if (gameMode === 'ai' && !xIsNext && !winner) {
      setTimeout(() => {
        const aiMove = getBestMove(board, 'O');
        if (aiMove !== null) {
          handleClick(aiMove);
        }
      }, 500);
    }
  };

  useEffect(() => {
    makeAIMove();
  }, [xIsNext, gameMode]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  const resetScores = () => {
    setScores({ X: 0, O: 0, ties: 0 });
  };

  const startGame = (mode) => {
    setGameMode(mode);
    setGameStarted(true);
    resetGame();
  };

  const renderSquare = (i) => {
    return (
      <button
        className={`square ${board[i] ? 'filled' : ''} ${winner && board[i] ? 'winner' : ''}`}
        onClick={() => handleClick(i)}
        disabled={!gameStarted || board[i] || winner}
      >
        {board[i]}
      </button>
    );
  };

  const getStatus = () => {
    if (winner === 'tie') return "It's a tie!";
    if (winner) return `Winner: ${winner}`;
    if (!gameStarted) return "Choose game mode to start";
    return `Next player: ${xIsNext ? 'X' : 'O'}`;
  };

  return (
    <div className="tictactoe-game">
      <div className="game-header">
        <h2>⭕ Tic Tac Toe</h2>
        <div className="game-stats">
          <span>X: {scores.X}</span>
          <span>O: {scores.O}</span>
          <span>Ties: {scores.ties}</span>
        </div>
      </div>

      {!gameStarted && (
        <div className="game-start">
          <h3>Choose Game Mode</h3>
          <div className="mode-buttons">
            <button className="mode-button" onClick={() => startGame('ai')}>
              🖥️ Play vs AI
            </button>
            <button className="mode-button" onClick={() => startGame('friend')}>
              👥 Play vs Friend
            </button>
          </div>
        </div>
      )}

      {gameStarted && (
        <div className="game-board">
          <div className="status">{getStatus()}</div>
          <div className="board">
            <div className="board-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="board-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="board-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
          </div>
          <div className="game-controls">
            <button className="reset-button" onClick={resetGame}>
              New Game
            </button>
            <button className="reset-scores-button" onClick={resetScores}>
              Reset Scores
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicTacToe; 