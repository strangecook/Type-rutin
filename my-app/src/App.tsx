import React, {useState, useEffect} from 'react';
import { AppContainer } from './Styled/appStyled';
import Home from './Pages/Home';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Unsubscribe } from "@firebase/auth";// @으로 임포트 해오면 해당 타입들이 적혀져 있다.

function App() {
  const [init, setInit] = useState(false) // 타입스크립트 다시 공부하기
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState<Unsubscribe | {} >({})
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth,(user)=>{
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
          {init ? <Home isLoggedIn={isLoggedIn} userObj={userObj} /> : "...initializing!"}
        </AppContainer>
  );
}

export default App;
