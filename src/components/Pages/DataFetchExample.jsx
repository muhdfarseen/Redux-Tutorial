import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/Slice/dataSlice';

import { LoadingScreen } from './LoadingScreen';

export const DataFetchExample = () => {
    const dispatch = useDispatch();
    
    const { items, loading, error } = useSelector((state) => state.postdata);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) {
        return <LoadingScreen />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h2>Fetched Data</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};
