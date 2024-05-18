import React from "react";


function chooseProductSelling(props){
    return(
        <div className="sectionChoosePoductSelling">
            <div className="containt">
                <div className="containt">
                    
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
            <ProductPresItem/>
            <ProductPresItem reverse/>
            <ProductPresItem/>
            <ProductPresItem reverse/>
        </div>
    )
}
function ProductPresItem({props,reverse}){
    return(
        <div className="productPresItem">
            <div className={"productPresContaint"+(reverse?" reverse":"")}>
                <div className="imgProduct">
                    <div className="containt">

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
function HeaderBrand(props){
    return(
        <div className="headerBrand">
            <div className="headerBrandContaint">
                <div className="headerImage">
                    <div className="leftAction"></div>
                    <div className="brandCenter">
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
                    <div className="rightAction"></div>
                </div>
            </div>
        </div>
    )
}
function Navigation(props){
    return(
        <nav className="navigation">

            <div className="navigationContaint">
                <div class="leftRight">
                    <li>
                        <a href="#"><i class="bi bi-list"></i></a>
                    </li>

                    <li>
                        <a href="#"><i class="bi bi-person-fill"></i></a>
                    </li>
                </div>

                <div className="navBrandHeader">
                    <a href="/">Mewa Cosmetics</a>
                </div>

                <div className="navRight">
                    <li>
                        <a href="#"><i class="bi bi-search"></i></a>
                    </li>

                    <li>
                        <a href="#"><i class="bi bi-cart4"></i></a>
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
        <div className="footerLinkCategory">
            <div className="head">
                <h4 className="title">Catgerory</h4>
            </div>

            <div className="containt">
                <ul>
                    {[
                        {
                            title:"Moussavou",
                            link:"#"
                        },
                        {
                            title:"Moussavou",
                            link:"#"
                        },
                        {
                            title:"Moussavou",
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
        <div className="footerDescr">
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
                                    icon:<i class="bi bi-paypal"></i>,
                                    title:"paypal",
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
function Footer(props){
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
                <SectionFooterContaint/>
                <Footer/>
            </div>
        </div>
    )
}