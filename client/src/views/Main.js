import { Link } from '@reach/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Delete from '../components/DeleteModal'


const Main = () => {
    const [players, setPlayers] = useState([{
        name: '',
        position: ''
    }])
    const [toggleDelete,setToggleDelete] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data.results))
            .catch(err => console.log(err))
    }, [])
    // const clickDelete = () =>{
    //     console.log(toggleDelete)
    //     setToggleDelete(true)
    // }
    // const handleCancel = () =>{
    //     setToggleDelete(false)
    // }
    
    const deletePlayer = (id) =>{
        setToggleDelete(false)
        axios.delete('http://localhost:8000/api/players/delete/'+id)
            .then( res =>{
                console.log(res)
                setPlayers(players.filter(player => player._id != id))
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h2>Manage Player | <Link to='/players/status/0'>Manage Player Status</Link></h2>
            <h3>List | <Link to = '/players/new'>Add Player</Link></h3>
            {/* {toggleDelete? <Delete handleDelete ={deletePlayer} handleCancel={handleCancel}></Delete> : null} */}
            <table className='table m-4'>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, idx) =>
                        <tr key = {idx}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td><button className = 'btn btn-danger' onClick = {(e) => deletePlayer(player._id)}>Delete</button></td>
                            
                        </tr>
                        
                        )
                        
                    }
                    
                </tbody>
            </table>
            
        </div>

    )
}
export default Main