import React from 'react'
import {
    MainContainer,
    CopyrightSection,
    Copyright,
    Date,
    BoldText,
    NormalText,
    SocialSection,
    Item,
    Social
} from "./../FooterCard/FooterCard.styles";
import Instagram from "./../../images/social-icons/instagram.svg";
import Medium from "./../../images/social-icons/medium.svg";
import Twitter from "./../../images/social-icons/twitter.svg";
import Github from "./../../images/social-icons/github.svg";

const Footer = () => {
    return(
        <>
            <MainContainer>
                <CopyrightSection>
                    <Copyright>
                        <Date>2021</Date>
                        <BoldText>CRAFTERS</BoldText>
                        <NormalText>TUDIO</NormalText>
                    </Copyright>
                </CopyrightSection>
                <SocialSection>
                    <Social>
                        <Item>
                            <img src={Instagram} alt="instagram"/>
                        </Item>
                        <Item>
                            <img src={Medium} alt="medium"/>
                        </Item>
                        <Item>
                            <img src={Twitter} alt="twitter"/>
                        </Item>
                        <Item>
                            <img src={Github} alt="github"/>
                        </Item>
                    </Social>
                </SocialSection>
            </MainContainer>
        </>
    )
}

export default Footer