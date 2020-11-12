import {useState,useEffect} from 'react'
import {Link} from '@reach/router'
import axios from 'axios'
import StatusTable from '../components/StatusTable'

const Status = props =>{
    const gamelinks = [0,1,2]

    return(
        <div>
            <h2><Link to='/players/list'>Manage Player</Link> | Manage Player Status</h2>
            <div className = 'd-flex justify-content-center'>
            {gamelinks.map( (game,idx) =>{
                return(
                    
                <h4 className = 'ml-4' ><Link to={`/players/status/${game}`} style = {game == props.game? {color:'white'}:{color:'gray'}}>Game {game+1} </Link></h4>
                )})}
</div>
            <StatusTable game = {props.game}></StatusTable>
        </div>
    )
}
export default Status