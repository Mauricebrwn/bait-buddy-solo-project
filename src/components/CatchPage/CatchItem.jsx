import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

function Catch({fishcatch}) {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleCatchDelete = () =>{
        dispatch({
            type: 'DELETE_CATCH',
            payload: fishcatch.id
        })
    }
    const goToEditPage = () => {
        history.push(`/catch/edit/${fishcatch.id}`)
      }
    return(
        <>
        <div key={fishcatch.id}>
            <p>Fish: {fishcatch.fish_type}</p>
            <p>Length: {fishcatch.fish_length} inches</p>
            <p>Weight: {fishcatch.fish_weight} lbs</p>
            <p>Lure/Bait used: {fishcatch.lure_bait}</p>
            <p>Date/Time: {fishcatch.time}</p>
            </div>
            <button onClick={handleCatchDelete}>Delete</button>
            <button onClick={goToEditPage}>Edit</button>
        </>
    )
}

export default Catch