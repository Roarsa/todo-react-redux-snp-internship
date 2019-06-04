import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

import AddBlock from '../components/AddBLock/AddBlock';
import Logo from '../components/Logo/Logo';
import Type from '../components/Type/Type';
import ToDoItems from '../components/ToDoItems/ToDoItems';

import styles from './ToDoApp.scss';

const ToDoApp = ({ items, currentEditId, filterType, actions }) => (
  <div className={styles.container}>
    <div className={styles.todoList}>
      <Logo
        items={items}
        actions={actions}
      />
      <AddBlock add={actions.addTodo} />
      {(items.length !== 0) && (
        <Type filterType={filterType} changeType={actions.changeFilter} />
      )}
      <ToDoItems
        items={items}
        filterType={filterType}
        currentEditId={currentEditId}
        actions={actions}
      />
    </div>
  </div>
)

ToDoApp.propTypes = {
  items: PropTypes.array.isRequired,
  currentEditId: PropTypes.number.isRequired,
  filterType: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  items: [...state.items],
  currentEditId: state.currentEditId,
  filterType: state.filterType,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoApp);