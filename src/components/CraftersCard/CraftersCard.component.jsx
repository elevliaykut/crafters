import React from 'react'
import {
    SectionTitle,
    SectionDate,
    Description,
    DescriptionLine
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
                        <DescriptionLine>Hi! I'm Aykut.</DescriptionLine>
                        <DescriptionLine>
                            I'm Full Stack Developer at KAMION. I've been concentrate development of back end and front end
                            for 2 years in professional life. I'am always excited to learn new technologies and write better code.
                        </DescriptionLine>
                        <DescriptionLine>
                            It can be my biggest passion to produce something and bring a product to life.
                        </DescriptionLine>
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