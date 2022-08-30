import React from 'react';
import { ApproachContainer, ChartDiv } from '../../Styled/HomeStyle/ApproachStyled';
import { useEffect, useState } from 'react';
import * as d3 from "d3";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { dbService } from "../../firebase";
import { getDayOfDiffer } from "../../function/DateCalculate"


function Approach() {
  const [data, setData] = useState(["50%", "30%", "70%"])
  const [todayData, setTodayData] = useState<{
    id: string,
    text: string,
    change: boolean,
    achieve: boolean,
    createdAt: {
      nanoseconds: number,
      seconds: number
    }
  }[]>([])
  
  useEffect(() => {
    const q = query(
      collection(dbService, "todayList"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const nweetArr: any = snapshot.docs.map((doc) => ({ // 먼저 any로 타입을 지정해줬는데 더 알아봐야한다. 다시본다면 생각해보자
        id: doc.id,
        text: doc.id,
        boolean: doc.id,
        ...doc.data(),
      }));
      setTodayData(nweetArr);//또 막혔다 어떻게 처리해야하는 걸까..?
    });
  }, [])

  const filteredTodayData = todayData.filter((data)=>{
    const todayDate = new Date()
    const CreateTextDay = new Date(data.createdAt?.seconds*1000)
    return getDayOfDiffer(todayDate, CreateTextDay)
  })
  const ApproachTodayData = filteredTodayData.filter((data)=>{
    return data.achieve
  })

  console.log("filteredTodayData",filteredTodayData)

  useEffect(() => {
    d3.selectAll(".data")
      .attr("width", 0)
      .attr("height", 30)
      .data(data)
      .transition().duration(1000)
      .attr("height", 30)
      .attr("fill", "green")
      .attr("width", (d) => d)
  }, [data])

  return (
    <ApproachContainer>
      <ChartDiv>
        <div className='todayApproach'>오늘 할당량</div>
        <svg className='todayApproachGraph' width="100%" height="auto">
          <rect rx="10" width="100%" height="30" y="0" fill="#B3C680" ></rect>
          <rect className='data' rx="10" ></rect>
        </svg>
        <div className='weekApproach'>일주일 할당량</div>
        <svg className='weekApproachGraph' width="100%" height="auto">
          <rect rx="10" width="100%" height="30" y="0" fill="#B3C680" ></rect>
          <rect className='data' rx="10" ></rect>
        </svg>
        <div className='everyApproach'>전체 할당량</div>
        <svg className='everyApproachGraph' width="100%" height="auto">
          <rect rx="10" width="100%" height="30" y="0" fill="#B3C680" ></rect>
          <rect className='data' rx="10" ></rect>
        </svg>
      </ChartDiv>
    </ApproachContainer>
  );
}

export default Approach;
