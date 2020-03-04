import {
  RENDERLINK,
  OPENMENU,
  CLOSEMENU,
} from '../types'

export const initialState = {
  appBarTitle: 'Home',
  menuOpen: false,
}
export const reducer = (state, action) => {
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
