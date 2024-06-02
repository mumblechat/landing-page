"use client"
import { Box, Typography, styled } from "@mui/material";
import Header from "../shared/Header";
import Bnr from "./bnr";
import Countribution from "./countribution";
import AutoSlider from "./autoSlider";
import Platform from "./platform";
import Conduct from "./conduct";
import Roadmap from "./roadmap";
import Faqs from "./faqs";
import Footer from "../shared/footer";











const Homecmp = () => {


    return (

        <>
            <Box
                sx={{
                    backgroundColor: '#080808'
                }}
            >
                <Header />
                <Bnr />
                <Countribution />
                <Platform />
                <Box component={'section'} id="private"> <AutoSlider /></Box>
                <Box component={'section'} id="roadmap"> <Roadmap /></Box>
                <Box component={'section'} id="tokenomics"> <Conduct /></Box>
                <Box component={'section'} id="faq"> <Faqs /></Box>
                <Footer />
            </Box>
        </>

    );
}


export default Homecmp