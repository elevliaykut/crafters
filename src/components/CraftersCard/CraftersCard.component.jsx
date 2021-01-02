import React from 'react'
import {
    SectionTitle,
    SectionDate,
    Description
} from '../SectionCard/SectionCard.styles';
import {
    MainContainer,
    DescriptionContainer,
    ImageContainer,
    CrafterName,
    CrafterTitle
} from '../CraftersCard/CraftersCard.styles';

import PP from '../../images/pp.png';

const CraftersCardComponent = () => {
    return(
        <>
            <SectionDate>January 01, 2021</SectionDate>
            <SectionTitle>Who Are The Crafters ?</SectionTitle>
            <MainContainer>
                <DescriptionContainer>
                    <Description>
                        The time it takes to write and implement code is my
                        greatest passion. In my application development journey,
                        I move forward by researching and using current
                        technologies in the applications I develop.
                    </Description>
                </DescriptionContainer>
                <ImageContainer>
                    <img src={PP} alt="profile"/>
                    <CrafterName>Aykut ELEVLİ</CrafterName>
                    <CrafterTitle>Full Stack Developer @ KAMION</CrafterTitle>
                    <CrafterTitle>Crafter @ CRAFTERSTUDIO</CrafterTitle>
                </ImageContainer>
            </MainContainer>
        </>
    )
}

export default CraftersCardComponent