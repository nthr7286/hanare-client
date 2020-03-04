import React, {
  useReducer,
  createContext,
  useMemo
} from 'react'

import {
  reducer,
  initialState
} from './reducers/reducer'

export const Context = createContext()

export default ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(
    () => ({ state, dispatch }),
    [state, dispatch]
  )
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
