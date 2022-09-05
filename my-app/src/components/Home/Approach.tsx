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
      const nweetArr: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.id,
        boolean: doc.id,
        ...doc.data(),
      }));
      console.log("nweetArr",nweetArr)
      setTodayData(nweetArr);
    });
  }, [])

  useEffect(()=>{
    let userApproachData = []
     const filteredTodayData = todayData.filter((data)=>{
       const todayDate = new Date()
       const CreateTextDay = new Date(data.createdAt?.seconds*1000)
       return getDayOfDiffer(todayDate, CreateTextDay)
     })
     const ApproachTodayData = filteredTodayData.filter((data)=>{
       return data.achieve
     })
     const fristData = `${ ApproachTodayData.length / filteredTodayData.length * 100}%`
     userApproachData.push(fristData)
     
     const sevenDays = new Date(new Date().setDate(new Date().getDate()-7))
  
     const filteredSevenDayDate = todayData.filter((data)=>{
      return new Date(data.createdAt?.seconds*1000) > sevenDays
     })
     const ApproachSevenDayDate = filteredSevenDayDate.filter((data)=>{
      return data.achieve
    })

    const SecondData = `${ ApproachSevenDayDate.length / filteredSevenDayDate.length * 100}%`
    userApproachData.push(SecondData)

    const ApproachEveryDayDate = filteredSevenDayDate.filter((data)=>{
      return data.achieve
    })

    const thirdDate = `${ ApproachEveryDayDate.length / todayData.length * 100}%`
    userApproachData.push(thirdDate)

    setData(userApproachData)
  },[todayData])

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

  const confirmData = data.filter((data)=>{
    if(data === "NaN%"){
      return false;
    }else{
      return true;
    }
  })

  return (
    <ApproachContainer>
      <ChartDiv>
        {confirmData.length?<>
        <div className='todayApproach'>오늘 할당량</div>
        <svg className='todayApproachGraph' width="100%">
          <rect rx="10" width="100%" height="30" y="0" fill="#B3C680" ></rect>
          <rect className='data' rx="10" ></rect>
        </svg>
        <div className='weekApproach'>일주일 할당량</div>
        <svg className='weekApproachGraph' width="100%">
          <rect rx="10" width="100%" height="30" y="0" fill="#B3C680" ></rect>
          <rect className='data' rx="10" ></rect>
        </svg>
        <div className='everyApproach'>전체 할당량</div>
        <svg className='everyApproachGraph' width="100%">
          <rect rx="10" width="100%" height="30" y="0" fill="#B3C680" ></rect>
          <rect className='data' rx="10" ></rect>
        </svg>
        </> :<></>}
      </ChartDiv>
    </ApproachContainer>
  );
}

export default Approach;
