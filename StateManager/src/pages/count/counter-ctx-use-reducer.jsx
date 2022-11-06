import { useReducer, createContext, useContext } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "reduce":
      return state - 1;
    default:
      return state;
  }
};

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => {
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <CounterContext.Provider value={{ counter, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

const Container = () => (
  <div>
    <AddOneButton />
    <ReduceButton />
  </div>
);

const AddOneButton = () => {
  const { dispatch } = useContext(CounterContext);

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "add"
          })
        }
      >
        Add One
      </button>
    </div>
  );
};

const ReduceButton = () => {
  const { dispatch } = useContext(CounterContext);
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "reduce"
          })
        }
      >
        Reduce One
      </button>
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
