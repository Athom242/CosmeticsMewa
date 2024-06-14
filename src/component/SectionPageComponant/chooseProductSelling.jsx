import { useState } from "react";
import dataProduct from "../../data/dataProduct/dataItem";
import { ButtonCount } from "../../pages/shopPageAction";
import { Link } from "react-router-dom";



function FeatureProduct({handleAddListShop,handleViewDetail}){
    
    // const handleViewDetail=(event)

    return(
        <div className="featureProductItem">
            <ul className="listFeature">
                <li className="addShop"><a href="#" onClick={handleAddListShop}><i class="bi bi-plus"></i></a></li>
                <li className="viewMore"><a href="#" onClick={handleViewDetail}><i class="bi bi-eye"></i></a></li>
                <li className="wishList"><a href="#"><i class="bi bi-list"></i></a></li>
            </ul>
        </div>
    )
}


export function ProductItem({productData,handleAddProduct}){
    // const price=Math.ceil(Math.random()*10);
    // const priceLast=Math.ceil(Math.random()*10);

    // const idProductItem=
    

    // const category="Fichier dans le noir";

    const [productItemData,setProductItemData]=useState(productData);


    const clickEvent=(event)=>{
        console.log("Bonjour tout le monde");
    };
    console.log('ProductItem',handleAddProduct);

    const handleViewDetail=(id)=>{
        /**
         * Permet de voir les details du produits dans la page courante
         * affiche un Message PopUp pour voir les details du produits
         */

        return (event)=>{
            const target=event.currentTarget;
            console.log(`Bonjour tout dle monde vous etes sur le lien ${target}`);
            // alert(`le lien que vous avez cliquez est celui là => ${target}`);
        }
    }

// >>>>>>> Stashed changes
    return(
        <div className="productItem" onClick={clickEvent} style={{cursor:"pointer"}}>
            <div className="productItemContainer">
                <div className="imgProduct">
                    <div className="state"><span>space</span></div>
                    <img src={productItemData.image[0]} alt="" />
                    <FeatureProduct handleViewDetail={handleViewDetail(productItemData.idProductType)} handleAddListShop={handleAddProduct(productItemData.idProductType)}/>

                </div>

                <div className="bottomProductDescr">
                    <div className="headerProduct">
                        <div className="title">
                            <a href="#">Lorem ipsum dolor sit amet.</a>
                        </div>

                        <div className="shortDescr">
                            <a href="#">{productItemData.idCategory}</a>
                        </div>
                    </div>

                    <div className="price">
                        <div className="priceLast">
                            <span className="devise">$</span><span className="priceProduct">{productItemData.price.last}</span>
                        </div>

                        <div className="priceCurrent">
                            <span className="devise">$</span><span className="priceProduct">{productItemData.price.current}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

function WishList({handleWishList,descrButton}){
    return (
        <>
            <button className="wishList" onClick={handleWishList}>
                <i class="bi bi-heart"></i>
            </button>
            <p className="descrButton">{descrButton}</p>
        </>
    )
}


function ViewDetailProduct({infoDataProduct}){
    const handleWishList=(idProduct)=>{
        return (event)=>{
            
        }
    }
    
    return (
        <div className="viewDetailProduct">
            <div className="containt">
                
                <div className="imageWrapper">
                    <img src={infoDataProduct.image[0]} alt="" />
                </div>

                <div className="descrProductDetail">
                    <div className="headerDetailProduct">
                        <p className="nameProduct">
                            {infoDataProduct.name}
                        </p>
                        <p className="priceProduct">
                            <span>{infoDataProduct.device}</span><span>{infoDataProduct.price.current}</span>
                        </p>

                        <p className="descrProduct">
                            {infoDataProduct.descr.long}
                        </p>
                    </div>
                    <div className="featureDetailProduct">
                        <div className="featureProductShop">
                            <ButtonCount/>
                            <Link className="featureLink" to={""}>PURCHASE</Link>
                        </div>
                        <div className="wishList">
                            <WishList handleWishList={handleWishList} descrButton={"Add to wishList"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ChooseProductSelling({handleAddProduct}){
    // const [productItemData,setProductItemData]=useState(productData);
    const [listProduct,setListProduct]=useState([...dataProduct.products]);

    return(
        <div className="sectionChooseProductSelling">
            <div className="containt">
                <div className="header">
                    <h2 className="title">Find Your Beauty Match</h2>
                    <h4 className="shortDescr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nisi.</h4>
                </div>
                <div className="productContainer">
                    {listProduct.map(index=>{
                        return(<ProductItem productData={index} handleAddProduct={handleAddProduct}/>)
                    })}
                </div>

            </div>
        </div>
    )
};