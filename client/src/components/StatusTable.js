import {useState,useEffect} from 'react'
import {Link} from '@reach/router'
import axios from 'axios'

const StatusTable = props =>{
    const[players,setPlayers] = useState([])
    const[update,setUpdate] = useState(false)
    const options = [
        {text:'Play',value:1},
        {text:'Sit',value:-1},
        {text:'Undecided',value:0}
    ]

    useEffect(() =>{
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayers(res.data.results)
                setUpdate(false)
            })
            .catch(err => console.log(err.errors))
    },[update])

    const handleClick =  (id,newstatus) =>{
        var match = {}
        for(let i = 0;i<players.length;i++){
            if(players[i]._id ===id){
                match = {...players[i]}
                match.status[props.game] = newstatus
            }
        }
        axios.put(`http://localhost:8000/api/players/update/${id}`,match)
            .then(res =>{ 
                console.log(res.data.results)
                setUpdate(true)

            })
            .catch(err => console.log(err))
    }
    const style = (player,status) =>{
        if(player == status){
        if(status ==1){
            return({
                background:'green'
            })
        }
        else if(status ==-1){
            return({
                background:'red'
            })
        }
        else{
            return({
                background:'yellow'
            })
        }}
        else{
            return({
                background:'gray'
            })
        }
    }

    return(
        <table className = 'table m-4'>
                <thead>
                    <tr>
                        <th>Players</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            {
                players.map( (player,idx)=>
                <tr key = {idx}>
                    <td>{player.name}</td>
                    <td>
                        {options.map( (option,idx2) =>
                        <button className = 'btn ml-2 text-white' style = {style(player.status[props.game],option.value)} key = {idx2} onClick = {(e) =>handleClick(player._id,option.value)}>{option.text}</button>)}
                    </td>
                </tr>
                )
            }
            </table>
    )
}
export default StatusTable