import { useParams } from "react-router-dom";
import Footer from "../component/Footer/footer";
import Header from "../component/headerPage/navigation";
import { ButtonCount, HeaderTitle } from "./shopPageAction";
import { cacheListProduct, cacheRecentProduct } from "../component/ActionMethod/contextData";
import dataItem from "../data/dataProduct/dataItem";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProducItemtInfoError=function({idValue}){
    /**
     * Composant Reactrenvoyer si aucun produit n'est trouver
     */
    return (
        <div className="productInfoError">
            <p>la valuer de id = <span className="idProduct">{`${idValue}`}</span></p>
            <p>ce document n'a pas pu etre trouver dans la base de donnée de notre catalogue</p>
            <Link to={"/"}>GO BACK</Link>
        </div>
    )
}
function productItemDetailGet(idObjectInfo){
    /**
     * Fonction Permettant d'avoir les information ratacher à l'id reçu
     */

    return dataItem.products.filter(index=>index.idProductType===idObjectInfo);
}

function ProductInfoImage({imageObjectList}){

    const handleViewImageOnMain=(index)=>{
        /**
         * Fonction Changer la photo Principale de du Produit en le remplacant par celui cliquer
         */

        console.log("ProductItemInfoImage" ,index)

        return (event)=>{
            console.log("ProductItemImageLink")
        }
    }

    console.log("ProductInfoImage",imageObjectList);

    return (
        <div className="imageProduct">
            <div className="sideimage">
                {imageObjectList.map(index=>{
                    return <a href="#" onClick={handleViewImageOnMain(index.img)} className="imgLink"><img src={index.img} alt="" /></a>
                })}
            </div>
            <div className="mainImage">
                <img src={imageObjectList[0].img} />
            </div>
        </div>
    )
}


function ButtonCountChange({value=0,handleChangeValue=(idChoice)=>{console.log(idChoice)}}){
    return(
        <div className="buttonCount">
            <span className="buttonChangeValue"onClick={handleChangeValue(0)}>-</span>
            <span className="currentValue">{value}</span>
            <span className="buttonChangeValue"onClick={handleChangeValue(1)}>+</span>
        </div>
    )
}

function PurchaseLink({idProduct,handleProductShop}){
    const idProductFeature=idProduct;
    return (
        <Link onClick={handleProductShop}>Purchase</Link>
    )
}

function ProductInfoMore(){
    console.log("Bonjour tout le monde je suis je suis le nouveau")
}


function ProductInfoDescr({productDetail}){
    const [numberProduct,setNumberProduct]=useState(0);

    const handleChangeValue=(choiceOperater)=>{
        // const idProduct=idProduct;
        return (event)=>{
            
            if(choiceOperater){
                setNumberProduct(numberProduct-1);
            }
            else{
                setNumberProduct(numberProduct+1);
            }
            
        }
    }

    const handleProductShop=()=>{
        const copyCacheList=[...cacheListProduct];

        copyCacheList.push(productDetail.idProductType)

    }

    return(
        <div className="ProductInfoDescr">
            <div className="productHeader">
                <div className="title">{productDetail.idProductType} {productDetail.nameProduct}</div>
                <div className="price"></div>
                <div className="productDescr">
                    <p>

                    </p>
                </div>

                <div className="productFeatureShop">
                    <ButtonCountChange value={0} handleChangeValue={handleChangeValue}/> 
                    <PurchaseLink idProduct={productDetail.idProductType} handleProductShop={handleProductShop()}/>
                </div>
                <div className="productInfoMore">
                    <ProductInfoMore/>
                </div>
            </div>
        </div>
    )
}

function ProductFeatureInfo({productDetail}){

    const ProductInfoFeaturedescr=({productDetail})=>{
        const description=productDetail.descr.long;
        return (
            <div className="containt productInfoFeature productInfoFeatureDscr">
                <p className="productInfoValue">{description}</p>
            </div>
        )
    }

    const ProductInfoFeatureAddInfo=({productDetail})=>{
        const infoProduct=productDetail.products;
        return(
            <div className="containt productInfoFeature productInfoFeatureDscr">
                <ul className="listAddInfo">
                </ul>
            </div>
        )
    }

    const ProductInfoFeatureReview=({productDetail})=>{


        const countComment=1;
        const nameProduct="Lotion";

        const Comment=({commentInfo})=>{
            <div className="comment">
                <div className="commentContaint">
                    <img src="#" alt="" />
                    <div className="commentDetail">
                        <h3 className="profile"><span className="name">Isabel MIller</span>-<span className="date">August 14, 2019</span></h3>
                        <p className="commentValue">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, aliquid!</p>
                    </div>
                </div>
                <button className="addReview">Add review</button>
            </div>
        }


        return(
            <div className="containt productInfoFeature productInfoFeatureReview">
                <div className="titleFeature">
                    <h2><span className="countComment">{countComment}</span> REVIEW FOR {nameProduct}</h2>
                </div>
                <div className="commentSection">
                    <Comment commentInfo={""}/>
                    <Comment commentInfo={""}/>
                    <Comment commentInfo={""}/>
                    <Comment commentInfo={""}/>
                </div>
            </div>
        )
    }

    const handleChangeViewProduct=(index)=>{
        const idProductList=index;
        return (event)=>{
            console.log("changeViewProduct" ,idProductList)
        }
    }

    const headerControl=[{"link":"Description","container":<ProductInfoFeaturedescr productDetail={productDetail}/>},
    {"link":"Additional Information","container":<ProductInfoFeatureAddInfo productDetail={productDetail}/>},
    {"link":"Review","container":<ProductInfoFeatureReview productDetail={productDetail}/>}];



    return(
        <div className="productFeatureInfo">
            <div className="headerControl">
                <ul className="headerControlList">

                    {headerControl.map((index)=>{
                        return (<li>
                                    <a href="" onClick={handleChangeViewProduct(index)}>{index.link}</a>
                                </li>)
                    })}

                </ul>

                <div className="containtRenderChange">
                    {headerControl.map((index)=>{
                        return (<div className="containt">{index.container}</div>)
                    })}
                </div>
            </div>
        </div>
    )

    
}


const ProductInfoRelated=({})=>{
    
    return (
        <div className="containt productInfoRelated">
            Bonjour tout le monde
        </div>
    )
}
function ProductItemInfo({valueInfoProduct}){
    /**
     * Composant react affiche le differents elements du produit selectionner
     * image 
     * description total du produit 
     * commentaire 
     * Les produits recemement selectionner 
     */

    const productDetail=valueInfoProduct;

    return(
        <div className="productItemInfo">
            <div className="containtInner">
                <div className="productInfoHeader">
                    <ProductInfoImage imageObjectList={productDetail.image}/>
                    <ProductInfoDescr productDetail={productDetail}/>
                </div>
                <div className="productInfoFeatureDescr">
                    <ProductFeatureInfo productDetail={productDetail}/>
                </div>
                
                <ProductInfoRelated/>
            </div>
        </div>
    )
}

function ProductItemDetail({id}){
    const idObjectInfo=productItemDetailGet("#"+id)[0];

    console.log("#"+id);
    console.log(idObjectInfo);

    if(idObjectInfo){
        return <ProductItemInfo valueInfoProduct={idObjectInfo}/>
    }
    return <ProducItemtInfoError idValue={id}/>
}

export default function ProductDetailPage(){
    const {idProductItem}=useParams();
    

    return (
        
        <div className="productDetailPage">
            <Header/>
            <HeaderTitle title={"SHOP"}/>
            <ProductItemDetail id={idProductItem}/>
            <Footer/>
        </div>
    )
}