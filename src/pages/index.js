import React from 'react'

import HeaderLayout from './../components/header';
import BodyLayout from './../components/body';
import FooterLayout from './../components/footer';
import Header from './../components/HeaderCard/HeaderCard.component';
import TechnologyStackCardComponent from './../components/TechnologyStackCard/TechnologyStackCard.component';
import CraftersCardComponent from './../components/CraftersCard/CraftersCard.component';
import ProductStackCardComponent from './../components/ProductStackCard/ProductStackCard.component';
import Footer from './../components/FooterCard/FooterCard.component';
import { Helmet } from "react-helmet";

export default () => {
    return (
        <>
            <Helmet>
                <title>CRAFTER | STUDIO</title>
            </Helmet>
            <HeaderLayout>
                <Header/>
            </HeaderLayout>
            <BodyLayout>
                <TechnologyStackCardComponent/>
                <CraftersCardComponent/>
                <ProductStackCardComponent/>
            </BodyLayout>
            <FooterLayout>
                <Footer/>
            </FooterLayout>
        </>
    )
}
