import React from 'react'
import { StyledDiv } from './StatusBar.styles'
import Clock from "../../assets/clock.svg"
import IndicatorGroup from "../../assets/indicatorGroup.svg"
import Notch from "../../assets/notch.svg"
const StatusBar = () => {
  return (
    <StyledDiv>
        <div><img className='clock' src={Clock} alt="시간" /></div>
        <div><img className='notch' src={Notch} alt="노치" /></div>
        <div><img className='group' src={IndicatorGroup} alt="시그널그룹" /></div>
    </StyledDiv>
  )
}

export default StatusBar