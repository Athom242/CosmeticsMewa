import { useState } from "react"
import Footer from "../component/Footer/footer"
import { ProductItem } from "../component/SectionPageComponant/chooseProductSelling"
import Header from "../component/headerPage/navigation"
import { HeaderTitle } from "./shopPageAction"

function NavigationFooter(props){
    const [linkPage,setLinkPage]=useState(props.listLinkPage);

    return(
        <nav className="navigationFooter">
            <ul className="navigationListContaint">

            </ul>
        </nav>
    )
}
function FeatureListProduct(props){
    const category=[{name:"fichier",idCategory:"#01#"},{name:"Dossier",idCategory:"#02#"},{name:"Classeur",idCategory:"#03#"}];
    const [ListCategorie,setListCategorie]=useState(category);
    const [valueRange,setValueRange]=useState({min:0,max:100});
    

    // ----------------------function handle click
    const handleFeatureCategory=(idCategory)=>{
        const id=idCategory;
        return ((event)=>{
            console.log(id);
        })
    }

    return(
        <div className="featureListProduct">
            <div className="containt">
                <div className="featureFilter">
                    <h1 className="titleFeature">FILTER BY PRICE</h1>
                    <div className="filterRange">
                        <input type="range" name="minValueRange" id="" />
                        <input type="range" name="maxValueRange" id="" />
                    </div>
                    <div className="filterPriceAction">
                        <div className="filterPrice"><span>{valueRange.min}-{valueRange.max}</span></div>
                        <div className="filterAction"><span className="reset">RESET</span><span className="action">APPLY</span></div>
                    </div>
                </div>

                <div className="featureCategory">
                    <h1 className="titleFeature">PRODUCT CATEGORIES</h1>

                    <ul className="categoryProduct">
                        {ListCategorie.map((index,value)=>{
                            return(
                                <li key={value} ><a href="/" onClick={handleFeatureCategory(index.idCategory)}>{index.name}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

function ListItemProductContainer(props){
    const [ListProduct,setListProduct]=useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const countProduct=10;
    return(
        <div className="listItemProductContainer">
            <div className="containt">
                <ul className="listProduct">
                    {ListProduct.map(index=>{
                        return(<ProductItem/>);
                        
                    })}
                </ul>

                <NavigationFooter listProduct={ListProduct}/>
            </div>
        </div>
    )
}
export default function ShopListPage(props){
    return(
        <div className="shopListPage">
            <Header/>
            <HeaderTitle title={"Shop List Page"}/>

            <div className="shopListPageContaint">
                <div className="containt">
                    <ListItemProductContainer/>
                    <FeatureListProduct/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}