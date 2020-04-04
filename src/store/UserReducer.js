const initialState ={
    users:[
      {
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
      
    };

  



const UserReducer = (state=initialState , action) => {
    switch (action.type) {
        case "ADD_USER":
            const newUser= {
                name:action.payload.name,
                email:action.payload.email,
                gen:action.payload.gen
              }
              return {...state , users:[...state.users,newUser]};
         default:
            return state;
    }
}



export default UserReducer;
