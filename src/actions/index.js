import types from './actionTypes';

export const addTodo = task => ({
  type: types.ADD_TODO,
  task,
});

export const removeTodo = id => ({
  type: types.REMOVE_TODO,
  id,
});

export const completeTodo = id => ({
  type: types.COMPLETE_TODO,
  id,
});

export const editTodo = (id, task) => ({
  type: types.EDIT_TODO,
  id,
  task,
});

export const completeAll = () => ({
  type: types.COMPLETE_ALL,
});

export const deleteCompleted = () => ({
  type: types.DELETE_COMPLETED,
});

export const changeFilter = filterType => ({
  type: types.CHANGE_FILTER,
  filterType,
});

export const changeEditedId = id => ({
  type: types.CHANGE_EDITED_ID,
  id,
});