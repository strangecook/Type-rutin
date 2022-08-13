import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    if(e.target.name === "email"){
      setEmail(e.target.value)
    }else{
      setPassword(e.target.value)
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const auth = getAuth();
    console.log(auth)
    let data;
    try{
      if(newAccount){
        //계정만들기
       data= await createUserWithEmailAndPassword(auth,email,password)
      }else{
        //로그인하기
        data = await signInWithEmailAndPassword(auth, email, password)
      }
      console.log(data)
    }catch(err){
      console.log(err)
    }
  }
  const ChangeClick = ()=>{
    setNewAccount((cur)=>!cur)
  }
  const onSocialClick = async () =>{
    let auth = getAuth();
    let provider = new GoogleAuthProvider();
    let data = await signInWithPopup(auth,provider)
    console.log(data)
  }

  return (
    <div>
        <form onSubmit={(e)=>onSubmit(e)}>
          <input name="email" type="text" placeholder="Email" required value={email} onChange={(e)=>onChange(e)} ></input>
          <input name="password" type="password" placeholder="password" required value={password} onChange={(e)=>onChange(e)} ></input>
          <input type="submit" value={newAccount? "create new count" : "Log in!"}></input>
        </form>
        <div>
          <button onClick={onSocialClick}>Continue with Google</button>
        </div>
        <div>
          <button onClick={ChangeClick}>Change Mode</button>
        </div>
    </div>
  );
}

export default Login;
