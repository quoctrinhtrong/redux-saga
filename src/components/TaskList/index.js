import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import styles from './styles';
import TaskItem from '../TaskItem/index';

class TaskList extends Component {
  render() {
    let { classes, status, tasks } = this.props;
    return (
      <Grid item md={4} xs={12}>
        <Box mb={1} mt={1}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wapperListTask}>
          {tasks.map((task, index) => {
            return (
              <TaskItem key={task.id} task={task} status={status}></TaskItem>
            );
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
