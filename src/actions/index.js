let nextTodoId = 0

export const ADD_TODO = 'ADD_TODO'
// export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'

}

// Action creators
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text: text,
    // completed: false
  }
}

// export function removeTodo(index) {
//   return {
//     type: REMOVE_TODO,
//     index: index
//   }
// }

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id: id
  }
}
