import {useSelector} from 'react-redux';
import {selectVisiblePositions} from '../positions/position-slice';
import { selectFilters } from 'features/filter/filter-slice';

export const usePositions = () => {
    const currFilters = useSelector(selectFilters);
    const positions = useSelector(state => 
        selectVisiblePositions(state, currFilters));
        
    return positions;
}
