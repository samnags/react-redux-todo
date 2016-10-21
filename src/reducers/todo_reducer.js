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
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

// function todoApp(state = initialState, action) {
//   return Object.assign({}, state, {
//         visibilityFilter: action.filter
//       })
// }
