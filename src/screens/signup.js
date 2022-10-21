import { TextField, Box } from "@mui/material";
import { useState } from "react";
import { signUpUser } from "../config/firebasemethod"


function Signup() {

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    let signUp = ()=>{

        signUpUser({
         email,
         password,
         userName:"javaria",
         contact:"qasim"
    })
        .then((success) => {
            console.log(success)
          })
          .catch((error) => {
           console.log(error)
          });

    }

    return(
        <>
       <h1>SIGN UP</h1>
       <Box>

        <Box>
        <TextField label="Email"
        onChange={(e)=> setEmail(e.target.value)}
        variant="standard"
        />
        </Box>
        <Box>
          <TextField label="Password"
          type="password"
        onChange={(e)=> setpassword(e.target.value)}
        variant="standard"
        />
        </Box>
        </Box>


        <button onClick={signUp}>Signup</button>

      
        </>
    )
}

export default Signup