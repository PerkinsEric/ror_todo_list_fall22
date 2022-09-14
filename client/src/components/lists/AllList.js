import ListShow from './ListShow';

const AllList = ({ lists, updateList, deleteList }) => (
  <>
    {
      lists.map( l => 
        <ListShow
          key={l.id}
          // id={l.id} title={l.title} desc={l.desc}
          {...l}
          updateList={updateList}
          deleteList={deleteList}
        />
      )
    }
  </>
)

export default AllList;