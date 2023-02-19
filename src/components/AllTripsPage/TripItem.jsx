import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from "moment";

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
  console.log(trip.date)
   return(
        <div>
        <div key={trip.id}>
            <p>{trip.lake_name}</p>
            <p>{moment(trip.date).format("MMM Do YY")}</p>
            </div>
            <Button onClick={handleDelete} variant="outlined" startIcon={<DeleteIcon />}>
            Delete
            </Button>
            <Button size= "medium" variant="outlined" onClick={goToEditPage}>Edit</Button>
        </div>
   )
}

export default Trip