import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { addTodo } from '../../redux/reducers/todos'
import { useDispatch } from 'react-redux'
import './index.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [createdContent, setCreatedContent] = useState('')
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setCreatedContent('')
  };
  const handleContentChange = (e) => setCreatedContent(e.target.value)
  const handleSaveTodo = () => {
    dispatch(addTodo(createdContent))
    handleClose()
  }

  return (
    <div className="add-todo-wrapper">
      <Button onClick={handleOpen} variant='outlined' color='secondary'>Create Todo</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='modal'>
          <TextareaAutosize className='create-content' minRows={3} color="primary" variant='outlined' value={createdContent} onChange={handleContentChange} />
          <Button color='primary' onClick={handleSaveTodo}>Save</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal 