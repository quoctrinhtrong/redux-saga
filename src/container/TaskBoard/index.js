import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskForm from '../../components/TaskForm/index';
import TaskList from '../../components/TaskList/index';
import { STATUS } from '../../constants';
import styles from './styles';

const listTask = [
  {
    id: 1,
    title: 'Read Book',
    description: 'Read material ui book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play Football',
    description: 'Play football with my friend',
    status: 2,
  },
  {
    id: 1,
    title: 'Play Game',
    description: 'Play Game with my friend',
    status: 1,
  },
];

class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  renderBoard = () => {
    // let {classes} = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUS.map((status) => {
          const filterTask = listTask.filter((task) => {
            return task.status === status.value;
          });
          return (
            <TaskList key={status.value} status={status} tasks={filterTask} />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  renderForm = () => {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onCloseForm={this.handleClose} />;
    return xhtml;
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          onClick={this.openForm}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          <AddIcon />
          Add New Job
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(TaskBoard);
