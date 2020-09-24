import React, { useState } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
const AddUser = () => {
    let history = useHistory();
    const [user,setUser] = useState({
        name: '',
        username:'',
        email:'',
        phone:'',
        website:''
    });
    const{name, username, email, phone, website} = user;
    const onInputChange = e =>{
        setUser({...user,[e.target.name]: e.target.value});
    };
    const onsubmit = async e =>{
        e.preventDefault();
        await Axios.post("http://localhost:3002/users",user);
        history.push("/");
     }
    return (
        <div className="container border shadow">
            <div className="user-add">
                <h1>Add a User</h1>
            </div>
            <div>    
                <form onSubmit={e => onsubmit(e)}>
                    <div class="form-group">
                        <input type="text" class="form-control form-control-lg" placeholder='Enter your name' name='name' value={name} onChange={e => onInputChange(e)}/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control form-control-lg" placeholder='Enter your username' name='username' value={username} onChange={e => onInputChange(e)}/>
                    </div>               
                    <div class="form-group">
                        <input type="email" class="form-control form-control-lg" placeholder='Enter your email address' name='email' value={email} onChange={e => onInputChange(e)}/>
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control form-control-lg" placeholder='Enter your phone number' name='phone' value={phone} onChange={e => onInputChange(e)}/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control form-control-lg" placeholder='Enter your wesite' name='website' value={website} onChange={e => onInputChange(e)}/>
                    </div>           
                    <button class="btn btn-primary btn-block">Add user</button>
                </form>
            </div>
       </div>
    )
}
export default AddUser;