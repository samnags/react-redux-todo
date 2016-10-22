import { combineReducers } from 'redux'
import { todos } from './todo_reducer'
import { visibilityFilter } from './todo_reducer'


export const todosReducers = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
})
