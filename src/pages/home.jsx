import React, { forwardRef, useEffect, useRef, useState } from "react";


function ProductItem(props){
    const price=Math.ceil(Math.random()*10);
    const priceLast=Math.ceil(Math.random()*10);
    return(
        <div className="productItem">
            <div className="productItemContainer">
                <div className="imgProduct">
                    <div className="state">space</div>
                </div>

                <div className="bottomProductDescr">
                    <div className="headerProduct">
                        <div className="title">
                            <a href="#">Lorem ipsum dolor sit amet.</a>
                        </div>

                        <div className="shortDescr">
                            <a href="#">Lorem, ipsum.</a>
                        </div>
                    </div>

                    <div className="price">
                        <div className="priceLast">
                            <span className="devise">$</span><span className="priceProduct">{priceLast}</span>
                        </div>

                        <div className="priceCurrent">
                            <span className="devise">$</span><span className="priceProduct">{price}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
function ChooseProductSelling(props){
    return(
        <div className="sectionChooseProductSelling">
            <div className="containt">
                <div className="header">
                    <h2 className="title">Find Your Beauty Match</h2>
                    <h4 className="shortDescr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nisi.</h4>
                </div>
                <div className="productContainer">
                    {[0,0,0,0,0,0,0,0,0,0,0,0].map(index=>{
                        return(<ProductItem/>)
                    })}
                </div>

            </div>
        </div>
    )
}
function TesimonalItem(props){
    return(
        <div className="testimonialItem">
            <div className="header">
                <h2 className="title">Lorem ipsum dolor sit amet.</h2>

            </div>
            <div className="containtMessage">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam harum corporis optio voluptatem, qui iure ipsam modi quaerat dolorem eligendi dolores soluta incidunt veritatis ipsum? Voluptatem aliquid quia id blanditiis?</p>
            </div>
        </div>
    )
}
function SectionTestimonial(props){
    return(
        <div className="sectionTestimonial">
            <div className="containt">
                <div className="header">
                    <h2 className="title">Temoignage</h2>
                </div>
                <div className="testimonialListInner">
                    {[0,0,0].map(index=>{
                        return(<TesimonalItem/>)
                    })}
                </div>

            </div>
        </div>
    )
}

function SectionPresProductList(props){
    return (
        <div className="sectionPresProductList">
            <ProductPresItem imgFile="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/h-6-single-img-2.png"/>
            <ProductPresItem imgFile="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/h-6-single-img-3.png" reverse/>
            <ProductPresItem imgFile="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/h-6-single-img-2.png"/>
            <ProductPresItem imgFile="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/h-6-single-img-3.png" reverse/>
        </div>
    )
}
function ProductPresItem({props,imgFile,reverse}){
    return(
        <div className="productPresItem">
            <div className={"productPresContaint"+(reverse?" reverse":"")}>
                <div className="imgProduct">
                    <div className="containt">
                        <img src={imgFile} alt="" />
                    </div>
                </div>

                <div className="descrProduct">
                    <div className="headerProduct">
                        <h2 className="title">Lorem ipsum dolor sit amet.</h2>
                        <h4 className="shortTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus eaque assumenda eum, debitis eos.</h4>
                    </div>
                    
                    <p className="shortDescr">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit, magnam enim sed eum nostrum eligendi distinctio molestiae, doloribus sint aperiam odit accusamus earum voluptatibus est error similique dolorem velit.
                    </p>

                    <div className="linkDiscover">
                        <a href="#" className="linkDiscoverAction">Discover</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function BrandCenterItem(props){
    return(
        <div className="brandCenterItem">
        <div className="brandDescr">
            <h2 className="title">
                SKIN SOLUTION
            </h2>

            <p className="descr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, libero!
            </p>

            <div className="linkButton"><a href="#" className="linkFindBeauty">FIND BEAUTY</a></div>
        </div>

        <div className="brandImage">
            <div className="imgRight"><img src="/assets/img/sliderLeft.png" alt="" /></div>
            <div className="imgLeft"><img src="/assets/img/sliderRight.png" alt="" /></div>
        </div>
    </div>
    )
}
function HeaderBrand(props){
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

const  SubNavigation=forwardRef((props,ref)=>{
    const ListObjectLink=["Acceuil","Shop","Contact-Nous","Fichier","A-props"];

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
                        return(<div className="menuLinkItem"><a href="#" id={index.toLowerCase()} onMouseEnter={handleLinkDisplay}>{index}</a></div>)
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

const PageContainerAction=forwardRef(function PageContainerAction(props,ref){
    const [statePage,setStatePage]=useState({display:props.display})
    // const mainPageRef=useRef(null);

    const handleClose=(event)=>{
        let linkPageAction=document.querySelectorAll(".pageContainerAction .actionPageNavItem.active")[0];
        console.log(linkPageAction);

        ref.current.classList.toggle("active");// on ferme container de la page
        linkPageAction.classList.toggle("active"); //On fait disparaitre le container de fonctionnement 
        console.log(props.display);
    }

    return(
        <div className="pageContainerAction" ref={ref}>
            <div className="navigatePage">
                <div className="closeButton">
                    <span onClick={handleClose}><i class="bi bi-x-square-fill"></i></span>
                </div>
            </div>
            <div className="containt">
                <LoginPage/>
                <SearchProductPageAction/>
                <ShopListPageAction/>:

                {/* <ShopListPageAction/>
                <SearchProductPageAction/>
                <LoginPage/> */}
            </div>
        </div>

    )
})



function LoginPage(props){
    return(
        <div className="loginPageContainer actionPageNavItem login">
            <p>Bonjour tout le monde je suis le Login page</p>
        </div>
    )
}
function ShopListPageAction(props){
    const dataProductSelect=[];//Produit sont formés de la liste des IDProduct->IDCategoryProduct des poduits et le nombre de produit selectionner 
    
    const headerTable=(headerListName)=>{
      return(
        <thead>
            <tr>
                {/* {VoidCel?<tr>{""}</tr>:""*/} {/*si voidcell est true alors une cellule vide est creer */}
                {headerListName.map(index=>{
                    return(<td>{index}</td>)
                })}
            </tr>
        </thead>
      )  
    };

    const ButtonCount=(props)=>{
        return(
            <div className="numberCount">
                <span className="left"></span>
                <span className="containt"><input type="number" min={0} max={100}  placeholder="0"/></span>
                <span className="right"></span>
            </div>
        )
    };

    const bodyTable=(dataTable)=>{
        const checkSize="";
        console.log(dataTable);
        // const keys=Object.dataTable.keys();
        return(
            <tbody>
                {dataTable.map(index=>{
                    let keys=Object.keys(index);
                    return(
                        <tr>
                            {keys.map(indexKey=>{
                                return(<td>
                                    {index[indexKey]}
                                </td>)
                                
                            })}
                            {/* <td className="functionNumber">
                                <ButtonCount value={0}/>
                            </td> */}
                        </tr>
                    )
                })}
            </tbody>
        )
    };
    return(
        <div className="shopListDisplayView actionPageNavItem shop">
            <p>Bonjour tout le monde je suis le Shop page</p>
            <div className="header">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, porro.</p>
            </div>
            <div className="containt">
                <table>
                    {headerTable(["Nom Complet","Price","nimbre de produit"])}
                    {bodyTable([{name:"fichier",price:12,number_File:<ButtonCount/>},
                                {name:"fichier",price:12,number_File:<ButtonCount/>},
                                {name:"fichier",price:12,number_File:<ButtonCount/>},
                                {name:"fichier",price:12,number_File:<ButtonCount/>},
                                {name:"fichier",price:12,number_File:<ButtonCount/>},])}
                    <tfoot>

                    </tfoot>
                </table>
            </div>
        </div>
    )
}

function SearchProductPageAction(props){
    return(
        <div className="searchProductPageAction actionPageNavItem search">
            <p>Bonjour tout le monde je suis le Search page</p>
        </div>
    )
}

function Navigation(props){
    const subNavigationRef=useRef(null);
    const linkRef=useRef(null);
    const linkPageContainerRef=useRef(null);
    // linkRef=linkRef.current;.current
    // const [stateLink,]=useState({
    //     display:props.stateLink,
    // });

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

        // console.log(".actionPageNavItem ."+target.id);

        // console.log(target,linkRef.current);
        console.log(target.id);
        console.log(linkPageContainerRef);
        console.log(pageAction);

        pageAction.classList.toggle("active");
        // console.log(index.classList);

        // pageAction

        

        // for(let index of pageAction){
            // if(index.classList.contains(target.id)){
            //     index.classList.toggle("active");
            // }

            // console.log(index.classList);
        // }
        linkPageContainerRef.current.classList.toggle("active");
        // console.log(linkPageContainerRef.current);
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
                        <a href="#" onClick={handleDisplayPageAction} id="login" ref={linkRef}><i class="bi bi-person-fill"></i></a>
                    </li>
                </div>

                <div className="navBrandHeader">
                    <a href="/">Mewa Cosmetics</a>
                </div>

                <div className="navRight">
                    <li id="searchProduct">
                        <a href="#" onClick={handleDisplayPageAction} id="search" ref={linkRef}><i class="bi bi-search"></i></a>
                    </li>

                    <li id="shopListProduct">
                        <a href="#" onClick={handleDisplayPageAction} id="shop" ref={linkRef}><i class="bi bi-cart4"></i></a>
                    </li>
                </div>
            </div>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cupiditate!</p> */}
        </nav>
    )
}
function Header(props){
    return(
        <header className="container-fluid border border-dark">
            <Navigation/>
           
            <HeaderBrand/>
        </header>
    )
}



function FooterLinkCategory(props){
    return(
        <div className="footerItem footerLinkCategory">
            <div className="head">
                <h4 className="title">Catgerory</h4>
            </div>

            <div className="containt">
                <ul>
                    {[
                        {
                            title:"Acceuil",
                            link:"./"
                        },
                        {
                            title:"Shop",
                            link:"#"
                        },
                        {
                            title:"Fichier dans le film",
                            link:"#"
                        },
                        {
                            title:"Contactez-nous",
                            link:"#"
                        },
                        {
                            title:"Apropos",
                            link:"#"
                        },

                    ].map(index=>{
                        return(
                            <li><a href={index.link}>{index.title}</a></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
function FooterDescr(props){
    return(
        <div className="footerItem footerDescr">
            <div className="head">
                <h2 className="title">{props.title}</h2>
            </div>

            <div className="containt">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum impedit hic quas commodi quidem id voluptate perspiciatis quibusdam asperiores repudiandae!
                </p>
            </div>
        </div>
    )
}
function FooterContact(props){
    return(
        <div className="footerItem footerContact">
            <div className="head">
                <h2 className="title">Contact</h2>
            </div>

            <div className="containt">
                <ul>
                    <li className="address">Address : Seestrasse 21, Zurich</li>
                    <li className="email">E-mail : <a href="mailto:moussavou8exause@gmail.com">moussavou8exause@gmail.com</a></li>
                    <li>Phone : <a href="tel:+221773871721">+221 77 387 17 21</a></li>
                </ul>
            </div>
                <div className="tail">
                    <ul className="bankPaieList">
                        {
                            [
                                {
                                    icon:<i class="bi bi-paypal"></i>,
                                    title:"paypal",
                                    link:"#"
                                },
                                {
                                    icon:<i class="bi bi-credit-card-fill"></i>,
                                    title:"Credit card fill",
                                    link:"#"
                                },
                                {
                                    icon:<i class="bi bi-credit-card-fill"></i>,
                                    title:"Credit card fill",
                                    link:"#"
                                },
                                {
                                    icon:<i class="bi bi-paypal"></i>,
                                    title:"paypal",
                                    link:"#"
                                },
                                {
                                    icon:<i class="bi bi-paypal"></i>,
                                    title:"paypal",
                                    link:"#"
                                },
                            ].map(index=>{
                                return(<li className="iconPaiemenItem"><a href={index.link}>{index.icon}</a></li>)
                            })
                        }
                    </ul>
                </div>
        </div>
    )
}

// window.addEventListener("scroll",()=>{
//     console.log(window.scrollY);
// })
function Footer(props){

    const handleLinkTop=(event)=>{
        const pageHeader=document.querySelectorAll(".headerBrand")[0];
        const linkButtonTop=event.currentTarget;
        const body=document.querySelector("#App");

        window.scroll({
            top: pageHeader.offsetTop,
            left: 0,
            behavior: "smooth"
          });
        // body.scrollTop=pageHeader.offsetTop;


        console.log("PageHeader ",pageHeader.offsetTop);
    };
    return(<footer>
        <div className="footerContaint">


            <div className="footerOuter">

                <div className="footerInner">

                    <FooterContact/>
                    <FooterDescr title="Mewa Cosmetics"/>
                    <FooterLinkCategory/>

                </div>

            </div>
        </div>
        <div className="footerBottom">
            <div className="topPageAction">
                    <span onClick={handleLinkTop}>Link</span>
                </div>
            <ul className="containt">
                {["PRIVACY POLICY","TERMS AND CONDITIONS","ABOUT","SHIPPING INFO","RETURNS/EXCHANGES","CONTACT"].map(index=>{
                    return(
                        <li className="fbItem"><a href="#">{index}</a></li>
                    )
                })}
            </ul>
        </div>
    </footer>)
}

function SectionFooterContaint(props){


    return(
        <div className="sectionfooterContaint">
            <div className="containt">
                <div className="formContact">
                    <div className="formContactContainer">
                    <div className="header">
                        <h2 className="title">ASK US ANYTHING</h2>
                        <p className="shortTitle">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos culpa incidunt porro quo blanditiis.
                        </p>
                    </div>

                    <form action="./" className="formContaint">
                        <div className="email">
                            <input type="email" placeholder="Email" id="email" name="email"/>
                        </div>
                        
                        <div className="comment">
                            <textarea name="comment" id="comment" cols="30" rows="10" placeholder="your Comment"></textarea>
                        </div>
                        
                        <input type="submit" value="submit" />
                    </form>
                    </div>
                    
                </div>

                <div className="mapContact">
                    <div className="containt">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.7142409727076!2d-17.471744723979874!3d14.728741273924836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10d52c7afaee7%3A0x324c3c7430df733b!2sLiberte%206%20Extension%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1716062044884!5m2!1sfr!2ssn" width="800" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Home(props){
    return(
        <div className="homePage border border-2 border-success h-100">
            <div className="container-fuid">
                <Header/>
                <SectionPresProductList/>
                <SectionTestimonial/>
                <ChooseProductSelling/>
                <SectionFooterContaint/>
                <Footer/>
            </div>
        </div>
    )
}