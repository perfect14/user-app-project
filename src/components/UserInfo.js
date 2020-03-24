import React from 'react'

function UserInfo({name,email,gen}) {
    return (
        <div className="info">
              <h3>Name:{name}</h3>
              <p>Email:{email}</p>
              <h3>Gen{gen}</h3>
        </div>
    )
}


export default UserInfo;