import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import NewCatchForm from './CatchForm';
import Catch from './CatchItem';

export default function CatchList(){
    const dispatch = useDispatch();
    const store = useReduxStore();
    const fishcatch = useSelector(store => store.catchReducer);
    console.log(fishcatch)

    useEffect(() => {
        dispatch({ type: 'FETCH_CATCH' });
    }, []);

    return (
        <div className="catches">
        <NewCatchForm/>
        <div>
            {fishcatch.map((fishcatch) =>{
                return (
                    <ul key={fishcatch.id}><Catch fishcatch={fishcatch}/></ul>
                )
            })}
        </div>
        </div>
    )
}