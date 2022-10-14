import { useEffect } from 'react';
import data from '../../mock/data.json';
import {addPositions} from '../positions/position-slice';
import { useDispatch } from 'react-redux';

export const useFetchPositions = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(addPositions(data));
    }, [dispatch])
}
