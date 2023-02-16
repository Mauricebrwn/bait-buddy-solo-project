import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

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
            <Button onClick={handleDelete} variant="outlined" startIcon={<DeleteIcon />}>
            Delete
            </Button>
            <Button size= "medium" variant="outlined" onClick={goToEditPage}>Edit</Button>
        </li>
   )
}

export default Trip