import { combineReducers } from 'redux'
import { todos } from './todo_reducer'
import { visibilityFilter } from './visibility_filter'


export default combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});
