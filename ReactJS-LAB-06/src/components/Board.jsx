import React from 'react';
import useSnakeGame from '../hooks/useSnakeGame';
import Snake from './Snake';
import Food from './Food';
import Modal from './Modal';

const Board = () => {
  const { boardSize, snake, food, moveSnake, isPaused, isGameOver, restartGame } = useSnakeGame();

  React.useEffect(() => {
    const handleKeyDown = (event) => moveSnake(event.key);
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moveSnake]);

  return (
    <div className="App">
      <h1>Snake Game</h1>
      {(isPaused || isGameOver) && (
        <Modal 
          message={isGameOver ? 'Game Over' : 'Game Paused'} 
          onRestart={restartGame} 
        />
      )}
      <div className="board">
        {Array.from({ length: boardSize * boardSize }).map((_, index) => (
          <div
            key={index}
            className={`cell ${
              snake.some((segment) => segment === index) ? 'snake' : 
              food === index ? 'food' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
