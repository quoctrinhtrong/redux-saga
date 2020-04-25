import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import styles from './styles';

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    const { title, description } = task;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <div>{description}</div>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" />
          <Fab color="primary" aria-label="add" size="small">
            <Icon>edit_icon</Icon>
          </Fab>
          <Fab color="secondary" aria-label="edit" size="small">
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
