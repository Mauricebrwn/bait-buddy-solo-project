import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import React, { useEffect } from 'react';

function CurrentTripItem({currenttrip}) {
const trip = useSelector(store => store.trip);
const dispatch = useDispatch()
const history = useHistory()
useEffect(() => {
    dispatch({ type: 'FETCH_TRIP' });
}, []);

  console.log(trip)
   return(
        <li>
        <div key={trip}>
        <p></p>
        {/* <p>{trip.date}</p> */}
            </div>
        </li>
   )
}
export default CurrentTripItem