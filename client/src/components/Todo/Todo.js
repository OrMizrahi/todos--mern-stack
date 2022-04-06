import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo } from '../../redux/reducers/todos'
import './index.css'

const Todo = ({ content, createdAt, _id }) => {
  const dispatch = useDispatch()
  const [todoContent, setTodoContent] = useState(content)

  const handleContentChange = (e) => setTodoContent(e.target.value)
  const handleEdit = () => dispatch(editTodo({ _id, todoContent }))
  const handleDelete = () => dispatch(deleteTodo(_id))

  return (
    <Grid item xs={10} >
      <Card className='root'>
        <CardContent>
          <TextareaAutosize className='content' minRows={3} color="primary" variant='outlined' value={todoContent} onChange={handleContentChange} />
          <Typography variant="body2" color="textSecondary" component="p">
            Creation Date: {new Date(createdAt).toLocaleDateString()}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color='primary' size="small" onClick={handleEdit}>Save</Button>
          <Button color='secondary' size="small" onClick={handleDelete}>Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Todo