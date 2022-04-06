import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Todo from '../Todo/Todo'
import { fetchTodos } from '../../redux/reducers/todos'
import './index.css'

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <Grid className='todos-wrapper' container spacing={3} justifyContent='center'>
      {todos.map((todo) => (
        <Todo key={todo._id} {...todo} />
      ))}
    </Grid>
  )
}

export default Todos