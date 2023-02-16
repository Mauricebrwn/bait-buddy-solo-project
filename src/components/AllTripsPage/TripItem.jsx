import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

function Trip({trip}) {
const user = useSelector(store => store.user)
const dispatch = useDispatch()
const history = useHistory()
const handleDelete = () =>{
    dispatch({
       type: 'DELETE_TRIP',
       payload: trip.id
    })
   }
const goToEditPage = () => {
    history.push(`/trip/edit/${trip.id}`)
  }
   return(
        <li>
        <div key={trip.id}>
            <p>{trip.lake_name}</p>
            <p>{trip.date}</p>
            </div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={goToEditPage}>Edit</button>
        </li>
   )
}

export default Trip