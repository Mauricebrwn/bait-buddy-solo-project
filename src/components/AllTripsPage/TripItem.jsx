import { useDispatch, useSelector } from "react-redux"

function TripItem({item}) {
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
         <h1>{trip.} </h1>
          </div>
          {user.id === trip.user_id ? ( <button onClick={handleDelete}>delete</button> ):(<div></div>)}
        </li>
    )
}

export default TripItem