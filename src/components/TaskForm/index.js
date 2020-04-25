import React, { Component } from 'react';
import styles from './styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';

class TaskForm extends Component {
  render() {
    let { open, classes, onCloseForm } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onCloseForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Job</DialogTitle>
        <DialogContent>
          <TextField
            id="filled-multiline-flexible"
            label="Name"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            className={classes.textField}
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax={4}
            variant="filled"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseForm} color="primary">
            Cancel
          </Button>
          <Button onClick={onCloseForm} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
