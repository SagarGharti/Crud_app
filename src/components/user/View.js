import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const View = () => {
    const [users, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    },[]);
    const loadUser = async () => {
        const result = await axios.get('http://localhost:3002/users/'+ id);
        setUser(result.data)
    };    
    
    return(
        <div className="container py-4">
            <Link className="btn btn-primary" to='/'>Back to Home</Link>

            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul className ="list-group w-50">
                <li className="list-group=item">name: {users.name}</li>
                <li className="list-group=item">name: {users.username}</li>
                <li className="list-group=item">name: {users.email}</li>
                <li className="list-group=item">name: {users.phone}</li>
                <li className="list-group=item">name: {users.website}</li>
            </ul>
        </div>
    )
};
export default View;