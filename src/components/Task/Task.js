import React from 'react';
import PropTypes from 'prop-types';
import deleteImg from './img/deleteItem.png';
import deleteImgHov from './img/deleteItemHover.png';
import styles from './Task.scss';

class Task extends React.PureComponent {
  render() {
    const {
      isEditing,
      item,
      changeEditId,
      deleteItem,
      rename,
      completeTodo,
    } = this.props;

    return (
      <div key={item.id} className={styles.item}>
        <input
          type="checkbox"
          id={item.id}
          checked={item.isDone}
          onChange={() => completeTodo(item.id)}
        />
        <label htmlFor={item.id} />
        <form
          onSubmit={(event) => {
            if (item.task.trim() === '') {
              deleteItem(item.id);
            }
            changeEditId(item.id);
            event.preventDefault();
          }}
        >
          {isEditing ? (
            <input
              className={styles.task}
              value={item.task}
              onChange={event => rename(item.id, event.target.value)}
              onBlur={() => {
                changeEditId(item.id);
              }}
              onKeyPress={(event) => {
                if (event.keyCode === 13) {
                  changeEditId(item.id);
                }
              }}
            />
          ) : (
              <p className={styles.task} onDoubleClick={() => changeEditId(item.id)}>

                {item.task}
              </p>
            )}
        </form>
        <button
          type="button"
          className={styles.itemMenuDelete}
          onClick={() => deleteItem(item.id)}
        >
          <img className={styles.deleteImg} alt="" src={deleteImg} />
          <img className={styles.deleteImgHov} alt="" src={deleteImgHov} />
        </button>
      </div>
    );
  }
}

Task.propTypes = {
  changeEditId: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  rename: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default Task;
