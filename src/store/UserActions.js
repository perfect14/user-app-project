/** @format */

export const addUser = (user) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("user")
      .add(...user)
      .then((doc) => {});
  };
};

export const deleteUser = (user_id) => {
  return {
    type: "DELETE_USER",
    payload: user_id,
  };
};

export const editUser = (user_id, updated_info) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore.collection("users").doc(user_id).set(updated_info);
  };
};

export const getAllUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .onSnapshot(
        (snapshot) => {
          let users = [];
          snapshot.forEach((doc) => {
            users.push(doc.data());
          });
          console.log(users);
          dispatch({
            type: "SET_ALL_USERS",
            PAYLOAD: users,
          });
        },
        (err) => {}
      );
  };
};
