import { Button, TextField, Box , Typography} from "@mui/material";
import { useState } from "react";
import { signUpUser } from "../config/firebasemethod"
import { useNavigate, Link } from "react-router-dom";


function Signup() {

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [userName, setUsername] = useState("")
    const [lastname, setLastname] = useState("")
    const navigate = useNavigate()

    let signUp = ()=>{

        signUpUser({
            userName, lastname, email, password}).then((success)=> {
                if (success) {
                    navigate('/login', {
                        state: { success }
                    })
                }
                const user = success
                console.log(user);
              }).catch((err)=>{
               const errorMessage = err.message;
               console.log(errorMessage);
              })
         }

    return(
        <>

<div className="banner-image-signup">
<Box sx={{textAlign: "center"}}>

<Box sx={{ textAlign: "center", marginTop: 2 }}> 
<Typography variant="p" sx={{fontFamily : 'roboto', fontWeight : "bold", fontSize : "2.6rem", color: "white"}} >SIGN UP </Typography>
</Box>

    <Box sx={{ textAlign: "center", marginTop: 2 }}>
    <TextField onChange={(e)=>setUsername(e.target.value)} sx={{ m: 1, width: "90%" }} type="text" label="First Name:" variant="standard" id="fullWidth" />
    </Box>

    <Box sx={{ textAlign: "center", marginTop: 2 }}>
    <TextField onChange={(e)=>setLastname(e.target.value)} sx={{m : 1, width: "90%" }} type="text" label="Last Name:" variant="standard" id="fullWidth" />
    </Box>
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
        <TextField label="Email:"
        onChange={(e)=> setEmail(e.target.value)} sx={{m : 1, width: "90%" }}
        variant="standard"
        />
        </Box>
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          <TextField label="Password:"
          type="password"
        onChange={(e)=> setpassword(e.target.value)} sx={{m : 1, width: "90%" }}
        variant="standard"
        />
        </Box>
        </Box>

        <Box sx={{marginTop: 2, textAlign: "center" }}>
        <Button onClick={signUp} sx={{m : 1, width: "15%" }} variant="contained" color="success">Signup</Button>
        </Box>

        <Box sx={{textAlign: "center" }}>
        <Link to="login" style={{textDecoration : 'underline', color: "white"}}> 
        Alerady have an account</Link>
        </Box>


        </div>

      
        </>
    )
}

export default Signup