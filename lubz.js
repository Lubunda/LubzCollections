import React, { useContext } from 'react';

// Create a context
const NumberContext = React.createContext();

function NumberIncrementer() {
  // Get the current number value from the context
  const { number, setNumber } = useContext(NumberContext);

  // Function to handle the increment button click
  const handleIncrement = () => {
    setNumber(number + 1);
  }

  return (
    <div>
      <p>{number}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

function App() {
  const [number, setNumber] = React.useState(0);

  return (
    <NumberContext.Provider value={{ number, setNumber }}>
      <NumberIncrementer />
    </NumberContext.Provider>
  );
}

export default App;
