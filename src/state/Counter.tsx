import { useReducer } from "react";

function Counter() {

  interface InitialStateInterface {
    count: number;
  }

  interface ActionInterface {
    payload: number;
    type: string;
  }

  const initialState: InitialStateInterface = { count: 0 };


  const counterReducer = (
    state:InitialStateInterface,
    action: ActionInterface
  ) => {
    switch (action.type) {
      case "incremeant": {
        return {
           count:  state.count + action.payload
        }
      }

      case "decremeant": {
        return {
           count: state.count - action.payload
        }
      }

      default: {
        return state;
      }
    }
  };

  const [state, countDispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => countDispatch({ type: "incremeant", payload: 1 })}>
        Incremeant by 1
      </button>
      <button onClick={() => countDispatch({ type: "decremeant", payload: 1 })}>
        decremeant by 1
      </button>
    </>
  );
}

export default Counter;
