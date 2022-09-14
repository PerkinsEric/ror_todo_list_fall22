import Moment from 'react-moment';

const TodoShow = ({ id, title, complete, price, rating, created_at }) => {
  
  return (
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
      <button>Edit</button>
      <button>Delete</button>
      <button>Notes</button>
    </>
  )
}

export default TodoShow;