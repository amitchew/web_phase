import React from 'react';
import { connect } from 'react-redux';
import TaskList from './TaskList';

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (task) => dispatch({ type: 'UPDATE_TASK', payload: task }),
    deleteTask: (taskId) => dispatch({ type: 'DELETE_TASK', payload: taskId }),
  };
};

const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default ConnectedTaskList;
