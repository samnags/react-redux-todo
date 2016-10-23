import { ADD_TODO, TOGGLE_TODO } from '../actions/index'

export function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, { text: action.text, id: action.id, completed: false}
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.id) {
          return Object.assign({}, todo, {
          completed: !state.completed})
        }
          return todo
      })
    default:
      return state
  }
}
