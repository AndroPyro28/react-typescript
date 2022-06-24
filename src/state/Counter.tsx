import { useReducer } from "react";

function Counter() {

  interface InitialStateInterface {
    count: number;
  }

  interface UpdateActionInterface {
    payload: number;
    type: 'incremeant' | 'decremeant' | 'reset';
  }

  interface ResetActionInterface {
    type:'reset';
  }

  type CounterAction = UpdateActionInterface | ResetActionInterface

  const initialState: InitialStateInterface = { count: 0 };


  const counterReducer = (
    state:InitialStateInterface,
    action:CounterAction
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

      case 'reset': {
        return initialState
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

      <button onClick={() => countDispatch({ type: "reset" })}>
        reset
      </button>

    </>
  );
}

export default Counter;
