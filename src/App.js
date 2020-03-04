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
        name:"Yvonne Nelson",
        email:"nelly@email.com",
        gen:8
      }

       ],
       name:"",
       email:"",
       gen:""
     };

   }




   handleSubmit=(e) => {
     e.preventDefault();
     const newUser= {
       name:this.state.name,
       email:this.state.email,
       gen:this.state.gen
     }
     this.setState({
       users:[...this.state.users,newUser],
       name:"",
       email:"",
       gen:""
     })
   }

   handleChange=(e) =>{
     this.setState({
       [e.target.name]:e.target.value
     });
   }


  render() {
    return (
      <div className="App">
        <form onSubmit ={this.handleSubmit}className="form" >
          <div className="form-input">
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="form-input">
            <label>Email</label>
            <input type="email" name="email"value={this.state.email} onChange={this.handleChange}/>
          </div>
          <div className="form-input">
            <label>Gen</label>
            <input type="number" name="gen" value={this.state.gen}onChange={this.handleChange}/>
          </div>
            <button type="submit">Add User</button>
        </form>
        {this.state.users.map(user=>{
          return(
            <div className="info">
              <h3>Name:{user.name}</h3>
              <p>Email:{user.email}</p>
              <h3>Gen{user.gen}</h3>
            </div>
          );
        })}
      </div>
    )
  }
}
export default App;