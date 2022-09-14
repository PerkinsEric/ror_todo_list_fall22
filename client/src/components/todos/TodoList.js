import TodoShow from './TodoShow';

const TodoList = ({ todos, updateTodo, deleteTodo }) => (
  <>
    { todos.map( t => 
      <TodoShow 
        key={t.id}
        {...t}
        // id={t.id} title={t.title} complete={t.complete} rating={t.rating} price={t.price} completed_at={t.completed_at}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    )}
  </>
)

export default TodoList;