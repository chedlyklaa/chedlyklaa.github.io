import React, { useState, useEffect } from 'react';
import './MemoryMatch.css';

const MemoryMatch = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

  const initializeGame = () => {
    const gameCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false
      }));
    
    setCards(gameCards);
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
    setGameWon(false);
    setGameStarted(true);
  };

  const handleCardClick = (cardId) => {
    if (!gameStarted) return;
    
    const card = cards.find(c => c.id === cardId);
    if (card.isFlipped || card.isMatched || flippedCards.length >= 2) return;

    const newCards = cards.map(c => 
      c.id === cardId ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      
      const [firstId, secondId] = newFlippedCards;
      const firstCard = newCards.find(c => c.id === firstId);
      const secondCard = newCards.find(c => c.id === secondId);

      if (firstCard.emoji === secondCard.emoji) {
        // Match found
        setTimeout(() => {
          const updatedCards = newCards.map(c => 
            c.id === firstId || c.id === secondId 
              ? { ...c, isMatched: true }
              : c
          );
          setCards(updatedCards);
          setMatchedPairs(prev => [...prev, firstCard.emoji]);
          setFlippedCards([]);
          
          // Check if game is won
          if (matchedPairs.length + 1 === emojis.length) {
            setTimeout(() => setGameWon(true), 500);
          }
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          const updatedCards = newCards.map(c => 
            c.id === firstId || c.id === secondId 
              ? { ...c, isFlipped: false }
              : c
          );
          setCards(updatedCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setCards([]);
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
    setGameWon(false);
  };

  return (
    <div className="memory-game">
      <div className="game-header">
        <h2>🧠 Memory Match</h2>
        <div className="game-stats">
          <span>Moves: {moves}</span>
          <span>Pairs: {matchedPairs.length}/{emojis.length}</span>
        </div>
      </div>

      {!gameStarted && !gameWon && (
        <div className="game-start">
          <h3>Find all the matching pairs!</h3>
          <p>Click on cards to flip them and find matching emojis.</p>
          <button className="start-button" onClick={initializeGame}>
            Start Game
          </button>
        </div>
      )}

      {gameWon && (
        <div className="game-won">
          <h3>🎉 Congratulations!</h3>
          <p>You found all pairs in {moves} moves!</p>
          <button className="reset-button" onClick={resetGame}>
            Play Again
          </button>
        </div>
      )}

      {gameStarted && !gameWon && (
        <div className="game-board">
          <div className="cards-grid">
            {cards.map(card => (
              <div
                key={card.id}
                className={`card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="card-inner">
                  <div className="card-front">❓</div>
                  <div className="card-back">{card.emoji}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="reset-button" onClick={resetGame}>
            Reset Game
          </button>
        </div>
      )}
    </div>
  );
};

export default MemoryMatch; 