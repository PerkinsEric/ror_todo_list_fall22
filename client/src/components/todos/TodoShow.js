import Moment from 'react-moment';
import { useState } from 'react';
import TodoForm from './TodoForm';

const TodoShow = ({ id, title, complete, price, rating, created_at, updateTodo, deleteTodo }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { editing ?
        <>
          <TodoForm
            id={id}
            title={title}
            complete={complete}
            price={price}
            rating={rating}
            updateTodo={updateTodo}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <>
          <h1>Todo# {id} {title}</h1>
          <p>{ complete ? "Completed" : "Not Completed" }</p>
          <p>
            { price !== 0 ?
              `$${price}`
              : 
              null
            }
          </p>
          <p>{rating}/5</p>
          <p>
            Created At: 
            <Moment format='MM-DD-YYYY'>
              {created_at}
            </Moment>
          </p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteTodo(id)}>
            Delete
          </button>
          <button>Notes</button>
        </>
      } 
    </>
  )
}

export default TodoShow;