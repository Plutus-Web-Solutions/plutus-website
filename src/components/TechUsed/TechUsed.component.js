import React from 'react'
import { TechDivs, TechImg, TechUsedDiv, TechUsedText } from './TechUsed.styles'
import react from '../../assets/react.png'
export default function TechUsed() {
    return (
        <TechUsedDiv>
            <TechUsedText>
                Technologies Used
            </TechUsedText>
            <TechDivs>
                <TechImg src={react} />
                <TechImg src={react} />
                <TechImg src={react} />
                <TechImg src={react} />
                <TechImg src={react} />
            </TechDivs>
        </TechUsedDiv>
    )
}
