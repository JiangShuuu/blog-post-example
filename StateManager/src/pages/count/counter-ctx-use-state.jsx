import { useState, createContext, useContext } from "react";

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <CounterContext.Provider value={{ counter, addCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

const Container = () => (
  <div>
    <AddOneButton />
  </div>
);

const AddOneButton = () => {
  const { addCounter } = useContext(CounterContext);

  return (
    <div>
      <button onClick={addCounter}>Add One</button>
    </div>
  );
};

const Counter = () => {
  const { counter } = useContext(CounterContext);
  return <div>Counter: {counter}</div>;
};

function CounterUseState() {
  return (
    <CounterContextProvider>
      <Container />
      <Counter />
    </CounterContextProvider>
  );
}

export default function CounterUseStatePage() {
  return (
    <div>
      <CounterUseState />
      <CounterUseState />
      <CounterUseState />
      <CounterUseState />
    </div>
  );
}
