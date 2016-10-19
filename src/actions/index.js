export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const VisibilityFilters = {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE'

}


// Action creators
export function addTodo(text) {
  return {
    type: ADD_TODO,
    todo: text
  }
}

export function remoteTodo(index) {
  return {
    type: REMOVE_TODO,
    index: index
  }
}

export function toggleTodo(filter) {
  type: SET_VISIBILITY_FILTER,
  filter: filter
}
