import './App.css';
import React, { Component } from 'react'

 class App extends Component {
   constructor(props){
     super(props);
     this.state={
       users:[{
         name:"Ephya Delma",
         email:"ephya@email.com",
         gen:2
       },
       {
        name:"John Dumelo",
        email:"john@email.com",
        gen:5
      },
      {
        name:"yvonne Nelson",
        email:"nelly@email.com",
        gen:8
      }

       ]
     }

   }
  render() {
    return (
      <div>
        <form>
          <div>
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Gen</label>
            <input type="number" name="gen" />
          </div>
            <button type="submit">Add User</button>
        </form>
        {this.state.users.map(user)=>{
          return(
            <div>
              <h3>Name</h3>
              <p>Email</p>
              <h3>Gen</h3>
            </div>
          )
        }}
      </div>
    )
  }
}
export default App;