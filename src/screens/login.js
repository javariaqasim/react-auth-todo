import { Box, TextField, Typography,  Button } from "@mui/material"
import * as React from 'react';
import { loginUser } from "../config/firebasemethod"
import { useNavigate, Link } from "react-router-dom";
import {useState} from 'react'


function Login() {

  
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()

    let login = () => {
        loginUser({
            email,
            password
        }).then((success) => {
            if (success) {
                navigate('/todo', {
                    state: { success }
                })
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    return (

        <>
            <div className="banner-image-signup">
                <Box sx={{ textAlign: "center" }}>
                    <Box sx={{ textAlign: "center", marginTop: 2 }}>
                        <Typography variant="p" sx={{ fontFamily: 'roboto', fontWeight: "bold", fontSize: "2.6rem", color: "white" }} >LOGIN</Typography>
                    </Box>
                    <Box sx={{ textAlign: "center", marginTop: 2 }}>
                        <TextField label="Email:"
                        onChange={(e)=> setEmail(e.target.value)}
                            sx={{ m: 1, width: "90%" }}
                            variant="standard"
                        />
                    </Box>
                    <Box sx={{ textAlign: "center", marginTop: 2 }}>
                        <TextField label="Password:"
                            type="password"
                            onChange={(e)=> setpassword(e.target.value)}
                            sx={{ m: 1, width: "90%" }}
                            variant="standard"
                        />
                    </Box>

                    <Box sx={{ marginTop: 2, textAlign: "center" }}>
                        <Button onClick={login} sx={{ m: 1, width: "15%" }} variant="contained" color="success">Login</Button>
                    </Box>
                    <Box sx={{ marginTop: 1, textAlign: "center" }}>
                   <Link style={{textDecoration : 'underline', color: "white"}} to="/">SignUp</Link>
                    </Box>

                </Box>
            </div>
        </>
    )
}

export default Login