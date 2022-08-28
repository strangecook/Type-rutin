import React from 'react';
import { ApproachContainer, ChartDiv } from '../../Styled/HomeStyle/ApproachStyled';
import { useEffect, useState } from 'react';
import * as d3 from "d3";

function Approach() {
  const [data, setData] = useState(["50%", 250, 70])
  useEffect(() => {

    d3.selectAll(".data")
      .attr("width", 10)
      .data(data)
      .transition().duration(1000)
      .attr("height", 40)
      .attr("fill", "green")
      
      .attr("y", (d, i) => i * 50)
      .attr("width", (d) => d)

  }, [data])
  return (
    <ApproachContainer>
      <svg width="500" height="300">
        <rect rx="10" width="100%" height="40" y="0" fill="#B3C680" ></rect>
        <rect className='data' rx="10" ></rect>
        <rect rx="10" width="100%" height="40" y="50" fill="#B3C680" ></rect>
        <rect className='data' rx="10" ></rect>
        <rect rx="10" width="100%" height="40" y="100" fill="#B3C680" ></rect>
        <rect className='data' rx="10" ></rect>
          </svg>
    </ApproachContainer>
  );
}

export default Approach;
