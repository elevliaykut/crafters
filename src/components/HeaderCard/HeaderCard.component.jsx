import React from 'react'
import {
    MainContainer,
    LogoSection,
    BoldLogoText,
    NormalLogoText,
    Description,
    HeaderText,
    SubDescription,
    SubText,
    TopSection,
    LanguageSection,
    BoldText
} from "../HeaderCard/HeaderCard.styles";
const Header = () => {
    return (
        <MainContainer>
            <TopSection>
                <LogoSection>
                    <BoldLogoText>CRAFTERS</BoldLogoText>
                    <NormalLogoText>TUDIO</NormalLogoText>
                </LogoSection>
                <LanguageSection>
                    <BoldText>/en.</BoldText>
                </LanguageSection>
            </TopSection>
            <Description>
                <HeaderText>Crafterstudio is a software product market. It focuses on the development of products</HeaderText>
                <HeaderText>on the journey from Friday evening to Sunday evening.</HeaderText>
            </Description>
            <SubDescription>
                <SubText>“Crafterstudio is a design studio that brings ideas to life.”</SubText>
            </SubDescription>
        </MainContainer>
    )
}

export default Header