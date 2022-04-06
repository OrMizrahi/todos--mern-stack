import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { todosAPI } from '../../api/todos'

const initialState = {
  todos: [],
  loading: 'idle',
  error: null,
}

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await todosAPI.fetchTodos()
      return data.data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (content, { rejectWithValue }) => {
    try {
      const { data } = await todosAPI.addTodo(content)
      return data.data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const editTodo = createAsyncThunk(
  'todos/editTodo',
  async ({ _id, todoContent }, { rejectWithValue }) => {
    try {
      const { data } = await todosAPI.editTodo(_id, todoContent)
      return data.data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await todosAPI.delete(id)
      return data.data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Fetch todos thunk logic
      .addCase(fetchTodos.pending, (state, action) => {
        state.error = null
        state.loading = 'pending'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.error = null
        state.loading = 'idle'
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = action.payload
        state.loading = 'idle'
      })

      // Add todo thunk logic
      .addCase(addTodo.pending, (state, action) => {
        state.error = null
        state.loading = 'pending'
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.error = null
        state.loading = 'idle'
        state.todos.push(action.payload)
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.error = action.payload
        state.loading = 'idle'
      })

      // Edit todo thunk logic
      .addCase(editTodo.pending, (state, action) => {
        state.error = null
        state.loading = 'pending'
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.error = null
        state.loading = 'idle'
        const { _id, content } = action.payload
        const editedTodoIndex = state.todos.findIndex(({ _id: currId }) => currId === _id)
        if (editedTodoIndex !== -1) {
          state.todos[editedTodoIndex].content = content
        }
      })
      .addCase(editTodo.rejected, (state, action) => {
        state.error = action.payload
        state.loading = 'idle'
      })

      // Delete todo thunk logic
      .addCase(deleteTodo.pending, (state, action) => {
        state.error = null
        state.loading = 'pending'
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.error = null
        state.loading = 'idle'
        state.todos = state.todos.filter(({ _id }) => _id !== action.payload)
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.error = action.payload
        state.loading = 'idle'
      })
  },
})

//export const { } = todosSlice.actions

export default todosSlice.reducer