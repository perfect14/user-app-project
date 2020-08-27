import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const UserInfo = ({name,email,gen,id, removeUser})=> {
    const handleClick = () =>{
        removeUser(id)

    }
    return (
        <div className="info">
              <h3>Name:{name}</h3>
              <p>Email:{email}</p>
              <h3>Gen{gen}</h3>
              <button onClick={handleClick} className="remove-user">Remove User</button>
              <Link to= { `/edit/${id}` } className="edit-user">Edit User</Link>
        </div>
    )
}


export default UserInfo;