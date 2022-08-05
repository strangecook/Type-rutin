import React, {useState, useEffect} from 'react';
import { AppContainer } from './Styled/appStyled';
import Home from './Pages/Home';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"

function App() {
  // const [info, setInformation] = useState<Information | null>(null);
  const [init, setInit] = useState<boolean>(false)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userObj, setUserObj] = useState<string | null>(null)
  useEffect(()=>{
    const auth = getAuth();
    console.log("auth",auth)
    onAuthStateChanged(auth,(user)=>{
      console.log("user",user)
      if(user){
        setIsLoggedIn(true);
        setUserObj(user)//어떻게 해야하는거지
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  },[])
  return (
        <AppContainer>
          <Home />
        </AppContainer>
  );
}

export default App;
