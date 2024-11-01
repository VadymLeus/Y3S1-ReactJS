import React, { useState, useEffect, useCallback, useRef } from 'react';

const useSnakeGame = () => {
  const boardSize = 20;
  const initialSnake = [42, 41, 40];
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(generateFood);
  const [direction, setDirection] = useState('RIGHT');
  const [speed, setSpeed] = useState(150);
  const [isGameOver, setIsGameOver] = useState(false);
  const requestRef = useRef();

  function generateFood() {
    let newFood;
    do {
      newFood = Math.floor(Math.random() * boardSize * boardSize);
    } while (snake.includes(newFood));
    return newFood;
  }

  const moveSnake = useCallback((key) => {
    const newDirection = {
      w: 'UP',
      s: 'DOWN',
      a: 'LEFT',
      d: 'RIGHT',
    }[key.toLowerCase()];
    if (newDirection) {
      setDirection((prevDirection) => {
        if (
          (prevDirection === 'UP' && newDirection === 'DOWN') ||
          (prevDirection === 'DOWN' && newDirection === 'UP') ||
          (prevDirection === 'LEFT' && newDirection === 'RIGHT') ||
          (prevDirection === 'RIGHT' && newDirection === 'LEFT')
        ) {
          return prevDirection;
        }
        return newDirection;
      });
    }
  }, []);

  const updateGame = useCallback(() => {
    setSnake((prevSnake) => {
      const head = prevSnake[0];
      const newHead = (() => {
        switch (direction) {
          case 'UP':
            return head - boardSize < 0 ? boardSize * (boardSize - 1) + (head % boardSize) : head - boardSize;
          case 'DOWN':
            return head + boardSize >= boardSize * boardSize ? head % boardSize : head + boardSize;
          case 'LEFT':
            return head % boardSize === 0 ? head + (boardSize - 1) : head - 1;
          case 'RIGHT':
            return (head + 1) % boardSize === 0 ? head - (boardSize - 1) : head + 1;
          default:
            return head;
        }
      })();

      if (prevSnake.includes(newHead)) {
        setIsGameOver(true);
        return initialSnake;
      }

      if (newHead === food) {
        setFood(generateFood());
        return [newHead, ...prevSnake];
      } else {
        return [newHead, ...prevSnake.slice(0, -1)];
      }
    });
  }, [direction, food]);

  useEffect(() => {
    const handleKeyDown = (event) => moveSnake(event.key);
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moveSnake]);

  useEffect(() => {
    if (isGameOver) return;

    const animate = () => {
      updateGame();
      requestRef.current = setTimeout(() => {
        requestAnimationFrame(animate);
      }, speed);
    };
    animate();
    return () => clearTimeout(requestRef.current);
  }, [speed, updateGame, isGameOver]);

  const restartGame = () => {
    setSnake(initialSnake);
    setFood(generateFood());
    setDirection('RIGHT');
    setSpeed(150);
    setIsGameOver(false);
  };

  return { boardSize, snake, food, isGameOver, restartGame };
};

export default useSnakeGame;
