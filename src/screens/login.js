import { Box, TextField } from "@mui/material"
import { useState } from 'react';
import { loginUser } from "../config/firebasemethod"



function login(){

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    let login = ()=>{
        loginUser({
            email,
            password
        })
    }

    return (
    
    <>

    <h1>Login</h1>
    < Box>
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
    <button variant="contained"  onClick={login}>Login</button>
    
    </>
    )
}

export default login