import axios from 'axios';

export const todosAPI = {
  fetchTodos: async (pageNum, type) => await axios.get(`/todos?page=${pageNum}&type=${type}`),
  addTodo: async (content) => await axios.post('/todos/add-todo', { content }),
  editTodo: async (id, content) => await axios.put(`/todos/edit-todo?id=${id}`, { content }),
  delete: async (id) => await axios.delete(`/todos/delete-todo?id=${id}`),
}