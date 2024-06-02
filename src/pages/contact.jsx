import Footer from "../component/Footer/footer";
import SectionFooterContaint from "../component/SectionPageComponant/sectionFooterContaint";
import Header from "../component/headerPage/navigation";
import { HeaderTitle } from "./shopPageAction";


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

    return(
        <div className="sectionListContactLink">
            <div className="containt">
                <ul className="listContact">
                    {contactList.map(index=>{
                        return(<li>
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
    return (<div className="contactPage">
    <Header/>
    <HeaderTitle title="CONTACT US"/>
    <SectionListContactLink/>
    <SectionFooterContaint/>
    <Footer/>
</div>)
}
