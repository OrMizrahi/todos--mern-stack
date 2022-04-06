import React from 'react'
import { useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'
import './index.css'

const Loader = () => {
  const loading = useSelector(state => state.todos.loading)

  return (
    loading === 'pending' ?
      <Box className='loader'>
        <CircularProgress />
      </Box > : null

  )
}

export default Loader