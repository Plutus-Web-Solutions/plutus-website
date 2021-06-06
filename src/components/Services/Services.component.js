import React from 'react'
import { ServicesCard, ServicesCardDiv, ServicesCardImg, ServicesCardSubtitle, ServicesCardTitle, ServicesDiv, ServicesHeading, ServicesSubtitle } from './Services.styles'
import webd from '../../assets/webd.png'
export default function Services() {
    return (
        <ServicesDiv>
            <ServicesHeading>
                How can we help?
            </ServicesHeading>
            <ServicesSubtitle>
                ONE STOP SOLUTION FOR ALL YOUR NEEDS!
            </ServicesSubtitle>
            <ServicesCardDiv >
                <ServicesCard>
                    <ServicesCardImg src={webd}/>
                    <ServicesCardTitle>Web Development</ServicesCardTitle>
                    <ServicesCardSubtitle>
                    Hi my name is Jpanit and we do web development hello and yes
                    </ServicesCardSubtitle>
                </ServicesCard>
                <ServicesCard className='big'>
                    <ServicesCardImg src={webd}/>
                    <ServicesCardTitle>Web Development</ServicesCardTitle>
                    <ServicesCardSubtitle>
                    Hi my name is Jpanit and we do web development hello and yes
                    </ServicesCardSubtitle>
                </ServicesCard>
                <ServicesCard>
                    <ServicesCardImg src={webd}/>
                    <ServicesCardTitle>Web Development</ServicesCardTitle>
                    <ServicesCardSubtitle>
                    Hi my name is Jpanit and we do web development hello and yes
                    </ServicesCardSubtitle>
                </ServicesCard>
            </ServicesCardDiv>
        </ServicesDiv>
    )
}
