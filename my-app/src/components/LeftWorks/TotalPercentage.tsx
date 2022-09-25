import React from 'react';
import { TotalPercentageContainer, TotalPercentageChartDiv } from '../../Styled/LeftWorkStyled/TotalPercentageStyled';
import { useEffect, useState } from 'react';
import * as d3 from "d3";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { dbService } from "../../firebase";
import { getDayOfDiffer } from "../../function/DateCalculate"


function TotalPercentage() {
  const [data, setData] = useState(["50%"])
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
    const today = query(
      collection(dbService, "todayList"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(today, (snapshot) => {
      const todayArr: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.id,
        boolean: doc.id,
        ...doc.data(),
      }));
      setTodayData(todayArr);
    });
  }, [])

  useEffect(()=>{
    let userApproachData = []

    const ApproachEveryDayDate = todayData.filter((data)=>{
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
    <TotalPercentageContainer>
      <TotalPercentageChartDiv>
        {confirmData.length?<>
        <div className='everyApproach'>전체 할당량</div>
        <svg className='everyApproachGraph' width="100%">
          <rect rx="10" width="100%" height="30" y="0" fill="#B3C680" ></rect>
          <rect className='data' rx="10" ></rect>
        </svg>
        </> :<></>}
      </TotalPercentageChartDiv>
    </TotalPercentageContainer>
  );
}

export default TotalPercentage;