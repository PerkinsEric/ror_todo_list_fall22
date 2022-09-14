import ListShow from './ListShow';

const AllList = ({ lists, updateList }) => (
  <>
    {
      lists.map( l => 
        <ListShow
          key={l.id}
          // id={l.id} title={l.title} desc={l.desc}
          {...l}
          updateList={updateList}
        />
      )
    }
  </>
)

export default AllList;