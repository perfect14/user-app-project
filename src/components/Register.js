import React from 'react'

export default function Register() {
    return (
      <div>
        <h1>Register Now</h1>
        <form>
          <div>
            <label for="email">Email</label>
            <input type="text" name="email" placeholder="Email" />
          </div>
          <div>
            <label for="email">Password</label>
            <input type="text" name="email" placeholder="Password" />
          </div>
        </form>
      </div>
    );
}
