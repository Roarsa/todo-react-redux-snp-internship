import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Type.scss';

class Type extends React.PureComponent {
  render() {
    const { filterType, changeType } = this.props;
    return (
      <div className={styles.root}>
        <button
          type="button"
          className={classNames(styles.type, {
            [styles.chosen]: filterType === 'all',
          })}
          onClick={() =>
            changeType('all')}
        >
          All
        </button>
        <button
          type="button"
          className={classNames(styles.type, {
            [styles.chosen]: filterType === 'active',
          })}
          onClick={() =>
            changeType('active')}
        >
          Active
        </button>
        <button
          type="button"
          className={classNames(styles.type, {
            [styles.chosen]: filterType === 'complete',
          })}
          onClick={() =>
            changeType('complete')}
        >
          Completed
        </button>
      </div >
    );
  }
}

Type.propTypes = {
  changeType: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
};

export default Type;
