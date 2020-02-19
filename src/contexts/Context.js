import React, {
  useReducer,
  createContext,
  useMemo
} from 'react'

export const Context = createContext()
export const RENDERLINK = 'RENDERLINK'
export const OPENMENU = 'OPENMENU'
export const CLOSEMENU = 'CLOSEMENU'

export default props => {
  const initialState = {
    appBarTitle: 'Home',
    menuOpen: false,
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case RENDERLINK:
        return {
          ...state,
          appBarTitle: action.title,
          menuOpen: false,
        }
      case OPENMENU:
        return {
          ...state,
          menuOpen: true
        }
      case CLOSEMENU:
        return {
          ...state,
          menuOpen: false
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(
    () => ({ state, dispatch }),
    [state, dispatch]
  )
  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  )
}
