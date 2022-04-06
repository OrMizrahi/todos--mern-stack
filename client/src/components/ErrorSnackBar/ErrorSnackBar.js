import React, { forwardRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ErrorSnackBar = () => {
  const [open, setOpen] = useState(false);
  const error = useSelector(state => state.todos.error)
  useEffect(() => {
    setOpen(error != null)
  }, [error])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        Error: {error}
      </Alert>
    </Snackbar>
  );
}

export default ErrorSnackBar
