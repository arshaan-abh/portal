import { useReducer, useEffect } from "react";

interface Action<T> {
  type: "SET";
  payload: T;
}

function reducer<T>(state: T, action: Action<T>): T {
  switch (action.type) {
    case "SET":
      return action.payload;
    default:
      return state;
  }
}

const useLocalStorageState = <T,>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<Action<T>>] => {
  const [state, dispatch] = useReducer(reducer, initialValue, () => {
    const localStorageValue =
      typeof localStorage === "object" && localStorage.getItem(key);
    return localStorageValue ? JSON.parse(localStorageValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state as T, dispatch];
};

export default useLocalStorageState;

// TODO use cookies instead
