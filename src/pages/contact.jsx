import Footer from "../component/Footer/footer";
import SectionFooterContaint from "../component/SectionPageComponant/sectionFooterContaint";
import Header from "../component/headerPage/navigation";
import { HeaderTitle } from "./shopPageAction";
import bcgImage from "../media/backgroundImageMaquillageBosses.jpg";
import { ListProductChoice, cacheListProduct } from "../component/ActionMethod/contextData";
import { useState } from "react";


function SectionListContactLink(props){
    const contactList=[{
        city:"DAKAR",
        address:"Liberté 6 extension",
        email:"moussavou8exause@gmail.com",
        phone:"77 387 17 21"
    },
    {
        city:"DAKAR",
        address:"Liberté 6 extension",
        email:"moussavou8exause@gmail.com",
        phone:"77 387 17 21"
    },
    {
        city:"DAKAR",
        address:"Liberté 6 extension",
        email:"moussavou8exause@gmail.com",
        phone:"77 387 17 21"
    },
    {
        city:"DAKAR",
        address:"Liberté 6 extension",
        email:"moussavou8exause@gmail.com",
        phone:"77 387 17 21"
    }];


    const handleProduct=(event)=>{
        console.log(cacheListProduct);
    }

    return(
        <div className="sectionListContactLink">
            <div className="containt">
                <ul className="listContact">
                    {contactList.map(index=>{
                        return(<li onClick={handleProduct}>
                            <h3 className="title">{index.city}</h3>
                            <div className="containtContact">
                                <div><span>Address : {index.address}</span></div>
                                <div><span>E-mail : {index.email}</span></div>
                                <div><span>Phone : {index.phone}</span></div>
                            </div>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default function ContactPage(props){
    const [productChoiceList,setProductChoiceList]=useState(cacheListProduct.length?cacheListProduct:[]);

    const headerStyleValue={
        // background:"url",
        padding:"7.5rem 0px",
        backgroundImage:`url(${bcgImage})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",


    }
    return (<div className="contactPage">
        <ListProductChoice.Provider value={productChoiceList}>
            <Header/>
            <HeaderTitle title="CONTACT US" headerStyle={headerStyleValue}/>
            <SectionListContactLink/>
            <SectionFooterContaint/>
            <Footer/>
        </ListProductChoice.Provider>
</div>)
}
