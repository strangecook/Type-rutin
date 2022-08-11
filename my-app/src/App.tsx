import React, {useState, useEffect} from 'react';
import { AppContainer } from './Styled/appStyled';
import Home from './Pages/Home';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"

function App() {
  const [init, setInit] = useState(false) // 타입스크립트 다시 공부하기
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null)
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
