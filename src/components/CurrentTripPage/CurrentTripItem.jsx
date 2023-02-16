import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

function CurrentTripItem({currenttrip}) {
const user = useSelector(store => store.user)
const dispatch = useDispatch()
const history = useHistory()
const handleDelete = () =>{
    dispatch({
       type: 'DELETE_TRIP',
       payload: currenttrip.id
    })
   }
   console.log(idOfTripToGet)
  
   return(
        <li>
        <div key={currenttrip.id}>
        <p>{currenttrip.lake_name}</p>
        <p>{currenttrip.date}</p>
            </div>
        </li>
   )
}
export default CurrentTripItem