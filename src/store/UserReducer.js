import {v4 as uuid } from 'uuid'
const initialState ={
    users:[
    //   {
    //     id:"1",
    //     name:"Ephya Delma",
    //     email:"ephya@email.com",
    //     gen:2
    //   },
    //   {
    //     id:"2",
    //    name:"John Dumelo",
    //    email:"john@email.com",
    //    gen:5
    //  },
    //  {
    //   id:"3",
    //    name:"Yvonne Nelson",
    //    email:"nelly@email.com",
    //    gen:8
    //  }

      ],
      // name:"",
      // email:"",
      // gen:""
    };

  



const UserReducer = (state=initialState , action) => {
    switch (action.type) {
        case "ADD_USER":
            const newUser= {
                id:uuid(),
                name:action.payload.name,
                email:action.payload.email,
                gen:action.payload.gen
              }
              return {...state , users:[...state.users,newUser]};
              case "DELETE_USER":
                const filteredUsers=state.users.filter(user=>user.id !==action.payload)
                return {...state , users:filteredUsers}
      case "EDIT_USER":
        const editedUsers = state.users.map(user => {
          if (user.id === action.user_id) {
            return { ...user, ...action.updated_info }
          }
          else {
            return user;
          }
        })

        return { ...state, users: editedUsers };
      case "SET_ALL_USERS":
        return { users: action.payload };
         default:
            return state;
    }
}



export default UserReducer;
