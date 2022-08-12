import {createContext, useReducer} from 'react';

import store from './store';
import reducer from './reducer';

export const GlobalContext = createContext();

export default function GlobalProvider({children}) {
  const [state, dispatch] = useReducer(reducer, store);
  return (
    <GlobalContext.Provider
      values={{
        state,
        dispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
