import './App.css';
import React, { Component } from 'react'
import UsersForm from './components/UsersForm';
import UserInfo from './components/UserInfo'

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




addNewUser=(newUser) => {
     this.setState({
       users:[...this.state.users,newUser],
       
     })
   }

   


  render() {
    return (
      <div className="App">
        <UsersForm  addUser ={this.addNewUser}/>
        {this.state.users.map((user, index) => {
          return(
            <UserInfo 
              key={index}
              name={user.name}
              email={user.email}
              gen={user.gen}
            
            />
          );
        })}
      </div>
    )
  }
}
export default App;