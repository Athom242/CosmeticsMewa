import { forwardRef, useRef } from "react";
import { BrandCenterItem } from "../brand";
import { Link } from "react-router-dom";
import { PageContainerAction } from "../ActionMethod/pageaction";


export default function Header(props){
    return(
        <header className="container-fluid border border-dark">
            <Navigation/>
           
            {props.headerBrandDisplay?<HeaderBrand/>:false}
        </header>
    )
}


export function HeaderBrand(props){
    return(
        <div className="headerBrand">
            <div className="headerBrandContaint">
                <div className="headerImage">
                    <div className="actionChangeBrand">
                        <div className="leftAction"><i class="bi bi-arrow-left-square"></i></div>
                        <div className="rightAction"><i class="bi bi-arrow-right-square"></i></div>
                    </div>
                    
                    <div className="brandCenter">
                       <BrandCenterItem/>
                       <BrandCenterItem/>
                       <BrandCenterItem/>

                    </div>
                </div>


            </div>

            <div className="headerImageSplash">
                    <img src="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/09/h-6-single-img-10.png" alt="fichier dans le monde" />
                </div>
        </div>
    )
}



export function Navigation(props){
    const subNavigationRef=useRef(null);
    const linkRef=useRef(null);
    const linkPageContainerRef=useRef(null);


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

    return(
        <nav className="navigation">
            <PageContainerAction display={linkRef} ref={linkPageContainerRef}/>
            <div className="navigationContaint">
                <div class="leftRight">
                    <li>
                        <a href="#" onClick={handleDisplaySubNav} id="menuNavigation"><i class="bi bi-list"></i></a>
                        <SubNavigation ref={subNavigationRef}/>
                    </li>

                    <li>
                        <Link to="#" onClick={handleDisplayPageAction} id="login" ref={linkRef}><i class="bi bi-person-fill"></i></Link>
                    </li>
                </div>

                <div className="navBrandHeader">
                    <a href="/">Mewa Cosmetics</a>
                </div>

                <div className="navRight">
                    <li id="searchProduct">
                        <form action="#" className="searchForm">
                            <input type="search" name="" id="" />
                        </form>
                        <a href="#" onClick={handleDisplayPageAction} id="search" ref={linkRef}><i class="bi bi-search"></i></a>
                    </li>

                    <li id="shopListProduct">
                        <Link to="/shopPageAction"  id="shop" ref={linkRef}><i class="bi bi-cart4"></i></Link>
                    </li>
                </div>
            </div>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cupiditate!</p> */}
        </nav>
    )
}

const  SubNavigation=forwardRef((props,ref)=>{
    const ListObjectLink=[{name:"Acceuil",link:"./"},{name:"Shop",link:"./shop"},{name:"Contact-Nous",link:"./contactUs"},{name:"Fichier",link:"./fichier"},{name:"A-props",link:"./aboutUs"}];

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

    return(
        <div className="subNavigation " ref={ref}>
            <div className="containt">
                <div className="menuLink">
                    {ListObjectLink.map(index=>{
                        return(<div className="menuLinkItem"><a href={index.link} id={index.name.toLowerCase()} onMouseEnter={handleLinkDisplay}>{index.name}</a></div>)
                    })}
                </div>

                <div className="menuLinkViewport">
                    <div className="containt">
                    {ListObjectLink.map(index=>{
                        return(<SubNavigationItem forLink={index.name}/>)
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
});

function SubNavigationItem(props){
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
        <div className="subNavigationItem" id={props.forLink.toLowerCase()+"NavigationItem"} onClick={handlePosElement}>
            <div className="containt">
                <h1>{props.forLink}</h1>
            </div>
        </div>
    )
}