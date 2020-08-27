//the action below is for email authentication which involves registration
export const registerWithEmail = (email, password) => {
  return (dispatch, state, { getFirebase }) => {

    getFirebase()
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log( response);
      }) //accept user and return success message
      .catch((error) => {
        console.log(error);
      });
  };
};
//NB: .then() and .catch are javascript promises

//the action below is for login into an existing   email

export const logInWithEmail = (email, password) => {
  return (dispatch, state, { getFirebase }) => {
    getFirebase()
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
      }) //accept user and return success message
      .catch((error) => {
        console.log(error);
      });
  };
};
// NB: .then() and .catch are javascript promises

// Google Authentication

export const loginWithGoogle = () => {
  return (dispatch, state, { getFirebase }) => {
    let firebase = getFirebase();
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {})
      .catch((error) => {
        console.log("login failed");
      });
  };
};

export const logout = () => {
  return (dispatch, state, { getFirebase }) => {
    getFirebase()
      .auth()
      .signOut()
      .then(function () {
        "Sign-out successful.";
      })
      .catch(function (error) {
        "An error happened.";
      });
  };
}; 