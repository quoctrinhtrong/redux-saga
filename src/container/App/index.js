import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import TaskBoard from '../TaskBoard/index';
import theme from '../commons/Theme/index';

class App extends Component {
  render() {
    console.log(this.props);
    let { classes } = this.props;
    return (
      // <div className="App">
      //     <h1>Hello redux-saga</h1>
      //     <Button variant="contained" color="primary">Material Button</Button>
      //     <div className={classes.box}>
      //       <div className={classes.shape}>ReactJS</div>
      //       <div className={classes.shape}>VueJS</div>
      //       <div className={classes.shape}>AngularJS</div>
      //     </div>
      // </div>
      <ThemeProvider theme={theme}>
        <TaskBoard></TaskBoard>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
