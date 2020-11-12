

const Delete = props => {


    return(
        <div className = 'modal'>
            <h3>Are you sure you want to delete this player?</h3>
            <button className = 'btn btn-danger' onClick = {(e) => props.handleDelete()}>Delete</button>
            <button className = 'btn btn-secondary' onClick = {(e) =>props.handleCancel()}>Cancel</button>
        </div>
    )
}
export default Delete