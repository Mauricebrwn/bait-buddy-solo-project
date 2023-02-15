import { useDispatch, useSelector } from "react-redux"

function Trip({trip}) {
const user = useSelector(store => store.user)
const dispatch = useDispatch()

const handleDelete = () =>{
    dispatch({
       type: 'DELETE_TRIP',
       payload: trip.id
    })
   }
   return(
        <li>
        <div key={trip.id}>
            <p>{trip.lake_name}</p>
            <p>{trip.date}</p>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </li>
   )
}

export default Trip