import { useState } from 'react';
import ListForm from './ListForm';
import { Link } from 'react-router-dom';

const ListShow = ({ id, title, desc, updateList, deleteList }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { editing ?
        <>
          <ListForm 
            updateList={updateList}
            id={id}
            title={title}
            desc={desc}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <div>
          <h1> {title} {desc}</h1>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteList(id)}>
            Delete
          </button>
          <Link
            to={`/${id}/todos`} //path of where its going to 
            // id the list id
            state={{ ListTitle: title }}
            // state only read only value to pass to the page
          >
            <button>Todos</button>
          </Link>
        </div>
      }
      <hr />
    </>
  )
}

export default ListShow;