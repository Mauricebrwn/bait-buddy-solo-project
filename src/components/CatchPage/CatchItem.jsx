import { useDispatch, useSelector } from "react-redux"

function Catch({fishcatch}) {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()

    const handleCatchDelete = () =>{
        dispatch({
            type: 'DELETE_CATCH',
            payload: fishcatch.id
        })
    }
    return(
        <>
        <div key={fishcatch.id}>
            <p>Fish: {fishcatch.fish_type}</p>
            <p>Length: {fishcatch.fish_length}</p>
            <p>Weight: {fishcatch.fish_weight}</p>
            <p>Lure/Bait used: {fishcatch.lure_bait}</p>
            <p>Date/Time: {fishcatch.time}</p>
            </div>
            <button onClick={handleCatchDelete}>Delete</button>
        </>
    )
}

export default Catch