import React from 'react';
import FlightForm from './components/FlightForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Форма для бронювання польоту</h1>
      <FlightForm />
    </div>
  );
};

export default App;
