import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUser } from '../store/UserActions'


class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      gen: this.props.gen
    }
  }



  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }



  handleSubmit = (e) => {
    e.preventDefault();
    const updatedInfo = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen
    }
    this.props.editUser(this.id , updatedInfo)
    this.setState({
      name: "",
      email: "",
      gen: ""
    })
    this.props.history.push('/')
  }


  render() {
    return (
      
      <div>
        <form onSubmit={this.handleSubmit} className="editform" >
          <div className="form-input">
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="form-input">
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-input">
            <label>Gen</label>
            <input type="number" name="gen" value={this.state.gen} onChange={this.handleChange} />
          </div>
          <button type="submit">Update User</button>
        </form>
      </div>
    )
 
  }
}

const mapStateToProps=(state, ownProps) => ({
 
  user:state.users.find(user =>user.id === ownProps.match.params.id),
  
})
const mapDispatchToProps={
  editUser
}



export default connect(mapStateToProps, mapDispatchToProps)(EditForm);