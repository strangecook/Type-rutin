import React from 'react';
import { ApproachContainer, ChartDiv } from '../../Styled/HomeStyle/ApproachStyled';
import { useEffect, useState } from 'react';
import * as d3 from "d3";

function Approach() {
  const [data, setData] = useState(["50%", 250, 70])
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
