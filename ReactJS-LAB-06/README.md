# Snake Game

This project is a simple "Snake Game" implemented using React. 
## Best Practices Implemented

### 1. Component Separation
Each functional element of the game is encapsulated in its own component:
   - **`Board.jsx`**: The main game area.
   - **`Snake.jsx`**: Handles rendering of the snake.
   - **`Food.jsx`**: Manages the food element’s position on the board.
   - **`Modal.jsx`**: Displays game messages for game over and pause.

### 2. Custom Hook for Game Logic
The `useSnakeGame` custom hook is used to handle all game-related logic, such as:
   - Moving the snake
   - Generating food
   - Restarting the game state
This approach keeps components like `Board` cleaner and focused solely on UI, while `useSnakeGame` manages game-specific functionality.

### 3. Event Handling with `useEffect`
Keyboard event handling for snake movement is managed with a `useEffect` hook in `Board.jsx`. This ensures that event listeners are added and removed effectively, preventing memory leaks.

### 4. Performance Optimization with `useCallback`
The `moveSnake` and `updateGame` functions in `useSnakeGame` are wrapped in `useCallback`, which optimizes performance by preventing unnecessary re-creations of these functions on each render.

### 5. Composition of components
The `Modal` component is conventionally displayed in the `Board` to display messages at the end of the game.

### 6. CSS Styling and Classes
All styling is managed in a separate CSS file (`App.css`). Each component uses classes to ensure consistent styling. This approach makes components reusable and independent of specific design details.

### 7. State Management with `useState` and `useRef`
   - **`useState`** manages dynamic game state elements such as the snake's position, food location, and direction.
   - **`useRef`** is used in `useSnakeGame` to store animation references, preventing unnecessary re-renders and boosting performance.

## How to Run
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to launch the game.