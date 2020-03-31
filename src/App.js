import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser} from './store/UserActions'
import UsersForm from './components/UsersForm';
import UserInfo from './components/UserInfo'

 class App extends Component {
   




addNewUser=newUser =>{
  this.props.addUser (newUser)
}

   


  render() {
    return (
      <div className="App">
        <UsersForm  addUser ={this.addNewUser}/>
        {this.props.users.map((user, index) => {
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

const mapStateToProps=(state) =>({
  users:state.users
});

const mapDispatchToProps={
  addUser:addUser
}



export default connect(mapStateToProps, mapDispatchToProps)(App);