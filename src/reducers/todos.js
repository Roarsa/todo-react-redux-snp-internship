import types from '../actions/actionTypes';

const initialState = {
  currentId: 0,
  currentEditId: -1,
  filterType: 'all',
  items: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        items: state.items.concat({
          id: state.currentId,
          isDone: false,
          task: action.task,
        }),
        currentId: state.currentId + 1,
      };
    case types.REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter(todo =>
          todo.id !== action.id
        )
      };
    case types.COMPLETE_TODO:
      return {
        ...state,
        items: state.items.map(todo =>
          todo.id === action.id ?
            {
              ...todo,
              isDone: !todo.isDone,
            } :
            todo
        )
      };
    case types.EDIT_TODO:
      return {
        ...state,
        items: state.items.map(todo =>
          todo.id === action.id ?
            {
              ...todo,
              task: action.task,
            } :
            todo
        )
      };
    case types.COMPLETE_ALL: {
      const flagOfCompleted = state.items.every(({ isDone }) => isDone);
      return {
        ...state,
        items: state.items.map(todo => ({
          ...todo,
          isDone: !flagOfCompleted
        }))
      };
    }
    case types.DELETE_COMPLETED:
      return {
        ...state,
        items: state.items.filter(todo => todo.isDone === false)
      };
    case types.CHANGE_FILTER:
      return {
        ...state,
        filterType: action.filterType,
      };
    case types.CHANGE_EDITED_ID:
      return {
        ...state,
        currentEditId: state.currentEditId === action.id ? -1 : action.id,
      };
    default:
      return state;
  }
}