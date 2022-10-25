import app from "./firebaseconfig"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";



const auth = getAuth();
const database = getDatabase(app)

let signUpUser =(obj) =>{            
    let {email,password,userName,contact} = obj

 return new Promise((resolve, reject)=> {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        // user success authentication
    const user = userCredential.user
    const refrence = ref(database,`users/${user.uid}`)
    set(refrence, obj)

    // data success database
    .then(()=>{
        resolve("User created successfully and sent to database")
    })
    .catch((err)=>{
        reject(err)
    })

    })
    .catch((err)=>{
        reject(err)
    });

});

};
    

let loginUser = (obj) => {
    let {email,password} = obj
   return new Promise ((resolve, reject)=>{
    signInWithEmailAndPassword(auth, email, password)
   .then((userCredential)=>{
    // user success authentication
const user = userCredential.user
const refrence = ref(database,`users/${user.uid}`)
    onValue(refrence,(e)=>{
    let status =e.exists()
    console.log(status)
    if (status){
        resolve(e.val())
    }else{
        reject('Data not found :(')
    }
   
}) 
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage =error.message;
    console.log(errorMessage)
    reject(errorMessage)
   });

   })

}




export { signUpUser, loginUser }


// signUpUser('abc@gmail.com',"123456").then
