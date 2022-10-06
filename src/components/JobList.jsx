// import data from '../mock/data.json';
import { JobPosition } from './JobPosition';
import {useSelector} from 'react-redux';
import {selectVisiblePositions} from '../store/positions/position-selectors';
import {selectFilters} from '../store/filters/filters-selectors';
import { useDispatch } from 'react-redux';
import {addFilter} from '../store/filters/filters-actions';

const JobList = () => {
  const dispatch = useDispatch();
  const currFilters = useSelector(selectFilters);
  const positions = useSelector(state => 
    selectVisiblePositions(state, currFilters));
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition handleAddFilter={handleAddFilter}
                     key={item.id}
                     {...item} />
      ))}
    </div>
  )
}

export {JobList};