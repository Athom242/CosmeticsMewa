import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Header } from "../component/headerPage/navigation";
import Footer from "../component/Footer/footer";
import SectionPresProductList from "../component/SectionPageComponant/sectionPresProductList";
import SectionTestimonial from "../component/SectionPageComponant/sectionTestimonial";
import ChooseProductSelling from "../component/SectionPageComponant/chooseProductSelling";
import SectionFooterContaint from "../component/SectionPageComponant/sectionFooterContaint";
import Header from "../component/headerPage/navigation";
import { ListProductChoice, cacheListProduct } from "../component/ActionMethod/contextData";







export default function Home(props){
    // const [productChoiceList,setProductChoiceList]=useState([]);
    const [productChoiceList,setProductChoiceList]=useState(cacheListProduct.length?cacheListProduct:[]);

    const handleAddProduct=(id)=>{
        return (event)=>{
            event.preventDefault();
            const arrayCopy=[...productChoiceList];

            if(!arrayCopy.find(index=>index==id)){
                arrayCopy.push(id);
            }
            // arrayCopy.push(id);

            setProductChoiceList(arrayCopy);
        }
    }
    
    return(
        <ListProductChoice.Provider value={productChoiceList}>
            <div className="homePage border border-2 border-success h-100">
                
                <div className="container-fuid">
                    <Header headerBrandDisplay={true}/>
                    <SectionPresProductList/>
                    <SectionTestimonial/>
                    <ChooseProductSelling handleAddProduct={handleAddProduct}/>
                    <SectionFooterContaint/>
                    <Footer/>
                </div>
            </div>
        </ListProductChoice.Provider>
    )
}