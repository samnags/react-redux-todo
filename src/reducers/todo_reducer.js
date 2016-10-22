import { VisibilityFilters, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/index'

// const initialState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   todos: []
// }

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

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
