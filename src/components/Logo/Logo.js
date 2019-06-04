import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import deleteAllimg from './img/deleteAll.png';
import deleteAllimgHov from './img/deleteAllHover.png';
import completeAllimg from './img/completeAll.png';
import completeAllimgHov from './img/completeAllHover.png';
import completeAllimgAct from './img/completeAll-2.png';
import styles from './Logo.scss';

class Logo extends React.PureComponent {
  render() {
    const { items, actions } = this.props;
    const flagOfCompleted = items.length !== 0 && items.every(({ completed }) => completed);
    return (
      <div className={styles.todoListLogo}>
        <h1> Todos</h1>
        <div
          role="button"
          tabIndex="-1"
          className={classNames(styles.checkedItems, {
            [styles.checkedItemsComplete]: flagOfCompleted,
          })}
          onClick={actions.completeAll}
          onKeyDown={actions.completeAll}
        >
          <img alt="" className={styles.completeImg} src={completeAllimg} />
          <img alt="" className={styles.completeImgHov} src={completeAllimgHov} />
          <img alt="" className={styles.completeImgAct} src={completeAllimgAct} />
        </div>
        <div
          role="button"
          tabIndex="-1"
          className={styles.clearItems}
          onClick={actions.deleteCompleted}
          onKeyDown={actions.deleteCompleted}
        >
          <img alt="" className={styles.deleteImg} src={deleteAllimg} />
          <img alt="" className={styles.deleteImgHov} src={deleteAllimgHov} />
        </div>
      </div>
    );
  }
}

Logo.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Logo;
