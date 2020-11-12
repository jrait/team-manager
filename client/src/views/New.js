import {Link, navigate} from '@reach/router'
import {useState} from 'react'
import axios from 'axios'

const New = props =>{
    const [form,setForm] = useState({
        name:'',
        position:'',
        status:[0,0,0]
    })
    const [errors,setErrors] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/players/create',form)
            .then(res =>{
                if(res.data.results){
                    console.log(res.data.results)
                    navigate('/players/list')
                }
                else{
                    console.log(res.data)
                    setErrors(res.data)
                }
            })
    }
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    return(
        <div>
            <h2>Manage Player | <Link to='/'>Manage Player Status</Link></h2>
            <h3><Link to = '/players/list'>List </Link>| Add Player</h3>
            <form className = 'border p-3 m-4' onSubmit = {handleSubmit}>
                <div className = 'form-group w-50'>
                <label>Name</label>
                {errors? <p className = 'alert alert-danger'>{errors.name.message}</p> :''}
                {form.name? form.name.length<2? <p className ='alert alert-danger'>Name must be at least 2 characters</p>:'':''}
                <input type = 'text' className = 'form-control' name = 'name'value = {form.name} onChange = {handleChange}></input>
                </div>
                <div className = 'form-group w-50'>
                <label>Preferred Position (optional)</label>
                <input type = 'text' className = 'form-control' name = 'position'value = {form.position} onChange = {handleChange}></input>
                </div>
                <input type = 'submit' className = 'btn btn-primary' value = 'Add Player'></input>
            </form>

        </div>
    )
}
export default New