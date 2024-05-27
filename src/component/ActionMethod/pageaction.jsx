import { forwardRef, useState } from "react";

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



export const PageContainerAction=forwardRef(function PageContainerAction(props,ref){
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
});