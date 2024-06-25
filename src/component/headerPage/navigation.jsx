import { React,forwardRef, useContext, useRef, useState } from "react";
import { BrandCenterItem } from "../brand";
import { Link, useLocation } from "react-router-dom";
import { PageContainerAction } from "../ActionMethod/pageaction";
import dataHeaderBrandImage from "../../data/dataProduct/dataImage";
import { ListProductChoice, cacheListProduct, handleCacheListProduct } from "../ActionMethod/contextData";


export default function Header({headerBrandDisplay}){
    // {headerBrandDisplay,productChoiceList}
    // const [productChoiceList,setProductList]

    console.log("Header Section");
    return(
        <header className="container-fluid border border-dark">
                <Navigation/>
            {headerBrandDisplay?<HeaderBrand/>:false}
        </header>
    )
}


export function HeaderBrand(props){
    
    // const images = importAll(require.context('../../media', false, /\.(png|jpe?g|svg)$/));
    // console.log(images);

    return(
        <div className="headerBrand">
            <div className="headerBrandContaint">
                <div className="headerImage">
                    <div className="actionChangeBrand">
                        <div className="leftAction"><i class="bi bi-arrow-left-square"></i></div>
                        <div className="rightAction"><i class="bi bi-arrow-right-square"></i></div>
                    </div>
                    <div>
                         
                    </div>
                    <div className="brandCenter">
                        

                        {dataHeaderBrandImage.headerImageProduct.map(index=>{
                            return <BrandCenterItem InfoData={index}/>
                        })}

                    </div>
                </div>


            </div>

            <div className="headerImageSplash">
                    <img src="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/09/h-6-single-img-10.png" alt="fichier dans le monde" />
                </div>
        </div>
    )
}




export function Navigation({handleChangeProductChoiceList}){
    /**
     * productChoiceList -> Liste des produit choisie dans le site internet 
     * {productChoiceList,handleChangeProductChoiceList}
     * 
     */

    // const fichier =useContext(ListProductChoice)
    const productList=useContext(ListProductChoice);
    // const productList
    // const setProductList;

    const subNavigationRef=useRef(null);
    const linkRef=useRef(null);
    const linkPageContainerRef=useRef(null);

    const numberProductChoice=()=>{
        console.log('numberProductChoice',productList)
        return productList.length;
    }


    console.log('Navigation',productList);


    const handleDisplaySubNav=(event)=>{
        const link=event.currentTarget;
        const subNavigation=subNavigationRef.current;
        subNavigation.classList.toggle("active");

        console.log(link.id);
        console.log(subNavigation.classList);
    }


    const handleDisplayPageAction=(event)=>{
        const target=event.currentTarget;
        const pageAction=document.querySelectorAll(".actionPageNavItem."+target.id)[0];


        console.log(target.id);
        console.log(linkPageContainerRef);
        console.log(pageAction);

        pageAction.classList.toggle("active");

        linkPageContainerRef.current.classList.toggle("active");

    }

    const handleHoverShopLink=(check)=>{
        if (check){
            return (event)=>{
                const current=event.currentTarget;
                const target=current.querySelectorAll(".linkItemList")[0];


                current.classList.toggle("active");
                console.log(current,"Entrer ->");
            }
        }
        return (event)=>{
            const current=event.currentTarget;
            const target=current.querySelectorAll(".linkItemList")[0];

            current.classList.toggle("active");
            console.log(current,"Sortie <-");
        }

    }

    const handleCacheProduct=(event)=>{
        console.log("La valeur est bien transmise");
        
        handleCacheListProduct(productList);
        console.log(cacheListProduct);
    }

    return(
        <nav className="navigation">
            <PageContainerAction display={linkRef} ref={linkPageContainerRef}/>

            <div className="navigationContaint">
                <div class="leftRight">
                    <li>
                        <Link href="#" onClick={handleDisplaySubNav} id="menuNavigation"><i class="bi bi-list"></i></Link>
                        <SubNavigation ref={subNavigationRef}/>
                    </li>

                    <li>
                        <Link to="/signPage" onClick={handleDisplayPageAction} id="login" ref={linkRef}><i class="bi bi-person-fill"></i></Link>
                    </li>
                </div>

                <div className="navBrandHeader">
                    <Link to="/">Mewa Cosmetics</Link>
                </div>

                <div className="navRight">
                    <li id="searchProduct">
                        <form action="#" className="searchForm">
                            <input type="search" name="" id="" />
                        </form>
                        <Link to="#" onClick={handleDisplayPageAction} id="search" ref={linkRef}><i class="bi bi-search"></i></Link>
                    </li>

                    <li id="shopListProduct" onMouseEnter={handleHoverShopLink(true)} onMouseLeave={handleHoverShopLink(false)}>
                        <Link to="/shopPageAction"  id="shop" ref={linkRef} onClick={handleCacheProduct}><i class="bi bi-cart4"></i><span className="productNumber">{numberProductChoice()}</span></Link>
                        <div className="linkItemList">
                            {/* Affichage des produit déjà sélectionné */}
                            {productList.map((index,keys)=>{
                                return(<div key={keys} className="productItemChoiceShop"><Link to={""} className="linkProductItemChoice" >{index}</Link></div>)
                            })}

                            
                            <div className="productItemChoiceShop"><Link  className="linkProductItemChoice" to={""}>UPDATE</Link></div>
                        </div>
                        
                    </li>
                </div>
            </div>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cupiditate!</p> */}
        </nav>
    )
}


const  SubNavigation=forwardRef((props,ref)=>{
    const ListObjectLink=[{name:"Acceuil",link:"/"},{name:"Shop",link:"/shop"},{name:"Contact-Nous",link:"/contactUs"},{name:"Fichier",link:"/fichier"},{name:"A-props",link:"/aboutUs"}];


    const currentListProductChoice=useContext(ListProductChoice);
    
    
    const handleLinkDisplay=(event)=>{
        //action apres appuyer sur lien du navigateur
        const link=event.currentTarget;

        let linkFeature=document.querySelector("#"+link.id+"NavigationItem");
        let classLinkFeature=document.querySelectorAll(".subNavigationItem");

        for(let index of classLinkFeature){
            index.style.transform="translateX(-"+linkFeature.offsetLeft+"px)";
        }

        // linkFeature.style.transform="translate"
        // linkFeature.style.transform="translateX("+linkFeature.offsetLeft+"px)";

        console.log(link.id);
        console.log(linkFeature);
    };

    const handlePrevValueGloval=(event)=>{
        console.log("fichier dans le monde");
        // console.log(currentListProductChoice);

        handleCacheListProduct(currentListProductChoice);

        console.log(cacheListProduct);
        
    };

    return(
        <div className="subNavigation " ref={ref}>
            <div className="containt">
                <div className="menuLink">
                    {ListObjectLink.map(index=>{
                        return(<div className="menuLinkItem"><Link to={index.link} onClick={handlePrevValueGloval} id={index.name.toLowerCase()} onMouseEnter={handleLinkDisplay}>{index.name}</Link></div>)
                    })}
                </div>

                <div className="menuLinkViewport">
                    <div className="containt">
                    {ListObjectLink.map(index=>{
                        return(<SubNavigationItem forLink={index}/>)
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
});

function SubNavigationItem({props,forLink}){

    const [linkInfo,setLinkInfo]=useState(forLink);
    
    const handlePosElement=(event)=>{
        // const linkPlace=document.getElementsByClassName
        const posElt=event.currentTarget;
        const viewpoLink=document.getElementsByClassName("subNavigationItem");
        // console.log(viewpoLink.style);
        for(let item of viewpoLink){
            item.style.transform="translateX(-"+posElt.offsetWidth+")";
            item.style.background="blue";
            item.querySelectorAll('.containt')[0].innerHTML="<p>"+item.offsetWidth+"</p>";
            console.log(item);

        }
        // viewpoLink.style.transform=`translateX(`+posElt.offsetWidth+`)`;
        console.log(posElt.offsetLeft);
    }
    return(
        <div className="subNavigationItem" id={linkInfo.name.toLowerCase()+"NavigationItem"} onClick={handlePosElement}>
            <div className="containt">
                <h1>{linkInfo.name}</h1>
            </div>
        </div>
    )
}