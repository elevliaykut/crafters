import React from 'react'
import {
    SectionTitle,
    SectionDate,
    StackList,
    Item,
    FirstCircle,
    SecondCircle,
    ThirdCircle,
    FourthCircle,
    BoldText
} from "../../components/SectionCard/SectionCard.styles";

const TechnologyStackCardComponent = () => {
    return(
        <>
            <SectionDate>January 01, 2021</SectionDate>
            <SectionTitle>What Is Crafterstudio’s Technology Stack ?</SectionTitle>
            <StackList>
                <Item>
                    <FirstCircle/><BoldText>Php</BoldText>, as a framework <BoldText>Laravel</BoldText> to back end.
                </Item>
                <Item>
                    <SecondCircle/><BoldText>React</BoldText> to front end development.
                </Item>
                <Item>
                    <ThirdCircle/><BoldText>React Native</BoldText> to cross platform mobile development.
                </Item>
            </StackList>
            <StackList>
                <Item>
                    <FirstCircle/><BoldText>Docker</BoldText> for containerization.
                </Item>
                <Item>
                    <FourthCircle/><BoldText>MySQL</BoldText> to choose database.
                </Item>
                <Item>
                    <SecondCircle/><BoldText>PostgreSQL</BoldText> to choose database.
                </Item>
            </StackList>
            <StackList>
                <Item>
                    <FirstCircle/><BoldText>Github</BoldText>, <BoldText>Gitlab</BoldText>, <BoldText>Bitbucket</BoldText> to version control.
                </Item>
                <Item>
                    <ThirdCircle/><BoldText>CI</BoldText> / <BoldText>CD</BoldText> to deployment lifeciycle.
                </Item>
            </StackList>
            <StackList>
                <Item>
                    <FourthCircle/><BoldText>Sketch</BoldText>, <BoldText>Figma</BoldText>, <BoldText>Photosop</BoldText> to design frontend and mobile screens.
                </Item>
            </StackList>
        </>
    )
}

export default TechnologyStackCardComponent