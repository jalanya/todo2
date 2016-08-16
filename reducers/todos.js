import Immutable from 'immutable';

const todosList = ['Item 1', 'Item 2']

export default (state = Immutable.List(todosList), action) => {
  switch (action.type) {
    case 'addTodo':
      return state.push(action.todo)
      break;
    default:
      return state
  }
}
