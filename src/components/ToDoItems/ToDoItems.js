import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

class ToDoItems extends React.PureComponent {
  render() {
    const {
      items,
      filterType,
      currentEditId,
      actions
    } = this.props;
    const itemList = items.reverse().filter((item) => {
      return (
        filterType === 'all'
        || (filterType === 'active' && item.isDone === false)
        || (filterType === 'complete' && item.isDone === true)
      );
    });
    return (
      <div>
        {itemList.map((item) => {
          return (
            <Task
              isEditing={currentEditId === item.id}
              key={item.id}
              item={item}
              completeTodo={actions.completeTodo}
              deleteItem={actions.removeTodo}
              changeEditId={actions.changeEditedId}
              rename={actions.editTodo}
            />
          );
        })}
      </div>
    );
  }
}

ToDoItems.propTypes = {
  items: PropTypes.array.isRequired,
  filterType: PropTypes.string.isRequired,
  currentEditId: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

export default ToDoItems;
