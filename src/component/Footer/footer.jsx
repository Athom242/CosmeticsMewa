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


export default function Footer(props){

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
    return(
    <footer>
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
    </footer>
    )
}