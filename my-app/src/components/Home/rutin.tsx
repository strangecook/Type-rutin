import React, { useState, useEffect } from "react";
import { RutinComponent, RutinTitle } from "../../Styled/HomeStyle/RutinStyled";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { dbService } from "../../firebase";
import RutinList from "./rutinList";

function Rutin() {
  const [rutinData, setRutinData] = useState<
    {
      id: string;
      text: string;
      change: boolean;
      achieve: boolean;
      createdAt: {
        nanoseconds: number;
        seconds: number;
      };
    }[]
  >([]);

  useEffect(() => {
    const queryData = query(
      collection(dbService, "EveryDayList"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(queryData, (snapshot) => {
      const nweetArr: any = snapshot.docs.map((doc) => ({
        // 먼저 any로 타입을 지정해줬는데 더 알아봐야한다. 다시본다면 생각해보자
        id: doc.id,
        text: doc.id,
        change: doc.id,
        achieve: doc.id,
        createdAt: {
          nanoseconds: doc.id,
          seconds: doc.id,
        },
        ...doc.data(),
      }));
      setRutinData(nweetArr); //또 막혔다 어떻게 처리해야하는 걸까..?
      console.log("nweetArr", nweetArr);
    });
  }, []);
  return (
    <RutinComponent>
      <RutinTitle>매일 할 일 리스트</RutinTitle>
      {rutinData.map((eachData, idx) => {
        return <RutinList key={eachData.id} eachData={eachData} idx={idx} />;
      })}
    </RutinComponent>
  );
}

export default Rutin;
