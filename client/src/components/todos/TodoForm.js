import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({ title: '', complete: false, price: 0.0, rating: 0 })
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const { rating } = todo 
    if ( rating <= 0 || rating > 5) {
      alert('Hey rating has to be within 1-5')
    } else {
      addTodo(todo)
      setTodo({ title: '', complete: false, price: 0.0, rating: 0 })
    }
  }

  return(
    <>
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name='title'
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          required
        />
        <label>Completed?</label>
        <input
          type='checkbox'
          name='complete'
          checked={todo.complete}
          onChange={(e) => setTodo({ ...todo, complete: e.target.checked })}
        />
        <label>Price</label>
        <input
          type='number'
          step="0.01"
          name='price'
          value={todo.price}
          onChange={(e) => setTodo({ ...todo, price: parseFloat(e.target.value) })}
        />
        <label>Rating</label>
        <input
          type='number'
          name='rating'
          value={todo.rating}
          onChange={(e) => setTodo({ ...todo, rating: parseInt(e.target.value) })}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TodoForm;