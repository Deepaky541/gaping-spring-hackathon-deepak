import React from 'react'
import { auth } from '../firebase'
import { Button } from '@material-ui/core'
import { db } from '../firebase';

function SignOut() {
   const handleSignOut = () => {
     db.collection("messages")
       .get()
       .then((res) => {
         res.forEach((element) => {
           element.ref.delete();
         });
       });
     auth.signOut();
   };

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          backgroundColor: "#FAFAFA",
          top: "0",
          marginLeft: "45%",
          marginTop: "30px",
          alignItems: "center",
          borderBottom: "solid 1px lightgray",
          zIndex: "10",
          width: "150px",
          borderRadius: "20px",
          backgroundColor: "rgb(249,212,36)",
        }}
      >
        <Button
          style={{
            padding: "20px",
            fontSize: "15px",
            borderRadius: "0",
            fontWeight: "600",
          }}
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </div>
    );
}

export default SignOut
