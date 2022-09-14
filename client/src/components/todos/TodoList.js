import TodoShow from './TodoShow';

const TodoList = ({ todos }) => (
  <>
    { todos.map( t => 
      <TodoShow 
        key={t.id}
        {...t}
        // id={t.id} title={t.title} complete={t.complete} rating={t.rating} price={t.price} completed_at={t.completed_at}
      />
    )}
  </>
)

export default TodoList;