import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Linkedin, Mail } from 'lucide-react';
import MemoryMatch from './components/MemoryMatch';
import TicTacToe from './components/TicTacToe';
import './Games.css';

const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      id: 'memory-match',
      title: "Memory Match",
      description: "Test your memory with this classic card matching game. Find all the pairs to win!",
      icon: "🧠",
      difficulty: "Easy",
      category: "Puzzle",
      status: "Play Now",
      preview: "Classic memory card game with beautiful animations",
      component: MemoryMatch
    },
    {
      id: 'tic-tac-toe',
      title: "Tic Tac Toe",
      description: "Play the timeless game of X's and O's against an AI opponent or challenge a friend!",
      icon: "⭕",
      difficulty: "Easy",
      category: "Strategy",
      status: "Play Now",
      preview: "Interactive Tic Tac Toe with AI opponent",
      component: TicTacToe
    },
    {
      title: "Voice-Controlled Game",
      description: "Control a character using your voice! Say commands like 'jump', 'left', 'right' to move. Uses speech recognition ML to understand your commands.",
      icon: "🎤",
      difficulty: "Medium",
      category: "AI/ML",
      status: "Coming Soon",
      preview: "Voice-controlled game with speech recognition ML",
      tech: "JavaScript + TensorFlow.js, Python + SpeechRecognition"
    },
    {
      title: "Hand Gesture Game",
      description: "Play games using hand gestures captured by your webcam! Rock-paper-scissors against AI or control a Flappy Bird clone with hand movements.",
      icon: "🖐",
      difficulty: "Hard",
      category: "AI/ML",
      status: "Coming Soon",
      preview: "Computer vision game with hand gesture recognition",
      tech: "Python + OpenCV + MediaPipe, JavaScript + TensorFlow.js"
    },
    {
      title: "AI Learns to Play",
      description: "Watch an AI agent learn to play a game through reinforcement learning! The AI improves over time using trial and error, demonstrating machine learning in action.",
      icon: "🧠",
      difficulty: "Expert",
      category: "AI/ML",
      status: "Coming Soon",
      preview: "Reinforcement learning AI that learns to play games",
      tech: "Python + PyGame + Gym, Unity ML-Agents"
    },
    {
      title: "Word Scramble",
      description: "Unscramble the letters to form words. Test your vocabulary and quick thinking!",
      icon: "📝",
      difficulty: "Medium",
      category: "Puzzle",
      status: "Coming Soon",
      preview: "Word puzzle game with multiple difficulty levels"
    },
    {
      title: "Math Challenge",
      description: "Solve math problems against the clock. Perfect for keeping your mind sharp!",
      icon: "🔢",
      difficulty: "Hard",
      category: "Educational",
      status: "Coming Soon",
      preview: "Timed math challenges with increasing difficulty"
    }
  ];

  const handleGameClick = (game) => {
    if (game.component) {
      setSelectedGame(game);
    }
  };

  const closeGame = () => {
    setSelectedGame(null);
  };

  if (selectedGame) {
    const GameComponent = selectedGame.component;
    return (
      <div className="game-page">
        <div className="game-header">
          <div className="container">
            <div className="header-content">
              <button onClick={closeGame} className="back-button">
                <ArrowLeft size={20} />
                Back to Games
              </button>
              <h1 className="page-title">{selectedGame.icon} {selectedGame.title}</h1>
            </div>
          </div>
        </div>
        <div className="game-content">
          <GameComponent />
        </div>
      </div>
    );
  }

  return (
    <div className="games-page">
      {/* Header */}
      <header className="games-header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="back-button">
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
            <h1 className="page-title">🎮 Let's Have Some Fun!</h1>
            <p className="page-subtitle">Take a break and enjoy some games I've created!</p>
          </div>
        </div>
      </header>

      {/* Games Section */}
      <section className="games-content">
        <div className="container">
          <div className="games-intro">
            <p>
              Welcome to my games collection! These are interactive web games built with modern technologies. 
              Each game showcases different programming concepts and provides a fun way to take a break.
            </p>
          </div>
          
          <div className="games-grid">
            {games.map((game, index) => (
              <div 
                key={index} 
                className={`game-card ${game.component ? 'playable' : ''}`}
                onClick={() => handleGameClick(game)}
              >
                <div className="game-header">
                  <div className="game-icon">{game.icon}</div>
                  <div className="game-info">
                    <h3 className="game-title">{game.title}</h3>
                    <div className="game-meta">
                      <span className="game-category">{game.category}</span>
                      <span className={`game-difficulty difficulty-${game.difficulty.toLowerCase()}`}>
                        {game.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="game-preview">{game.preview}</p>
                <p className="game-description">{game.description}</p>
                
                <div className="game-status">
                  <span className={`status-badge ${game.component ? 'playable' : ''}`}>
                    {game.status}
                  </span>
                </div>
                
                <button 
                  className={`play-button ${game.component ? 'enabled' : 'disabled'}`}
                  disabled={!game.component}
                >
                  <span className="play-icon">
                    {game.component ? '▶️' : '⏳'}
                  </span>
                  {game.component ? 'Play Now' : 'Coming Soon'}
                </button>
              </div>
            ))}
          </div>
          
          <div className="games-footer">
            <p className="games-note">
              🚧 More games are under development. Check back soon for more interactive fun! 🚧
            </p>
            <div className="games-tech">
              <h4>Built with:</h4>
              <div className="tech-stack">
                <span className="tech-item">React</span>
                <span className="tech-item">Canvas API</span>
                <span className="tech-item">Game Logic</span>
                <span className="tech-item">Responsive Design</span>
                <span className="tech-item">State Management</span>
                <span className="tech-item">CSS Animations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="games-page-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-social">
              <a href="https://github.com/chedlyklaa" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/chedly-klaa/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:chedlyklaa11@gmail.com">
                <Mail size={20} />
              </a>
            </div>
            <p className="footer-copyright">
              © 2024 Klaa Mohamed Chedly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Games; 