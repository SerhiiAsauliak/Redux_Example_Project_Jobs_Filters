import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { clearFilter, removeFilter, selectFilters} from './filter-slice';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currFilters = useSelector(selectFilters);
  if(currFilters.length === 0){
    return null
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currFilters.map(el => {  
            return <Badge onClear={() => dispatch(removeFilter(el))}
                          key={el} 
                          variant="clearable">{el}
                    </Badge>
          })}
        </Stack>
        <button onClick={() => dispatch(clearFilter())} className='link'>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};