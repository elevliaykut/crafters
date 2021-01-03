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
} from '../FooterCard/FooterCard.styles';
import CustomIcon from "../customIcon/customIcon.component";
import Instagram from "../../images/social-icons/instagram.svg";
import Medium from "../../images/social-icons/medium.svg";
import Twitter from "../../images/social-icons/twitter.svg";
import Github from "../../images/social-icons/github.svg";

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
                            <CustomIcon
                                targetUrl='#'
                                imageSource={Instagram}
                                altDescription='Instagram'
                            />
                        </Item>
                        <Item>
                            <CustomIcon
                                targetUrl='#'
                                imageSource={Medium}
                                altDescription='Medium'
                            />
                        </Item>
                        <Item>
                            <CustomIcon
                                targetUrl='#'
                                imageSource={Twitter}
                                altDescription='Twitter'
                            />
                        </Item>
                        <Item>
                            <CustomIcon
                                targetUrl='https://github.com/CRAFTERSTUDIO'
                                imageSource={Github}
                                altDescription='Github'
                            />
                        </Item>
                    </Social>
                </SocialSection>
            </MainContainer>
        </>
    )
}

export default Footer