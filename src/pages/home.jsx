import React from "react";
// import { Link } from "react-router-dom";
// import { Header } from "../component/headerPage/navigation";
import Footer from "../component/Footer/footer";
import SectionPresProductList from "../component/SectionPageComponant/sectionPresProductList";
import SectionTestimonial from "../component/SectionPageComponant/sectionTestimonial";
import ChooseProductSelling from "../component/SectionPageComponant/chooseProductSelling";
import SectionFooterContaint from "../component/SectionPageComponant/sectionFooterContaint";
import Header from "../component/headerPage/navigation";







export default function Home(props){
    return(
        <div className="homePage border border-2 border-success h-100">
            <div className="container-fuid">
                <Header headerBrandDisplay={true}/>
                <SectionPresProductList/>
                <SectionTestimonial/>
                <ChooseProductSelling/>
                <SectionFooterContaint/>
                <Footer/>
            </div>
        </div>
    )
}