import React, { useState } from "react";
import Header from "../component/headerPage/navigation";
import Footer from "../component/Footer/footer";
import { Link } from "react-router-dom";

// import { Footer, Header } from "./home";
function EmptyShop(props){
    return(
        <div className="emptyShop">

                <h1 className="title">YOUR CART IS CURRENTLY EMPTY</h1>
                <p className="shortDescr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, pariatur.</p>

                <Link to="/" id="actionReturn">GO BACK</Link>
        </div>
    )
}


function ContaintTable(props){
    return(
        <table>
        <thead></thead>
        <tbody>

        </tbody>
        <tfoot>
            Bonjour tout le monde
        </tfoot>
    </table>
    )
}

export default function ShopPageAction(props){
    const [itemProduct,setItemProduct]=useState([]);

    return(
        <div className="shopPageAction">
            <Header/>
            <div className="headerTitle">
                <div className="containt">
                    <h1>Card</h1>
                </div>
            </div>

            <div className="shopPageContaint">

                <div className="containt">
                    {itemProduct.length?<ContaintTable/>:<EmptyShop/>}
                </div>
                
            </div>

            <Footer/>
        </div>
    )
}