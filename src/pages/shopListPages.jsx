import { useState } from "react"
import Footer from "../component/Footer/footer"
import { ProductItem } from "../component/SectionPageComponant/chooseProductSelling"
import Header from "../component/headerPage/navigation"
import { HeaderTitle } from "./shopPageAction"

function FeatureOptionHeader(props){
    const [listNumberFunction,setListNumberFunction]=useState(props.listNumberFunction);
    const categoryProduct=["Fichier","Contact","Image"];

    const number=listNumberFunction.length;
    return(
        <div className="featureOptionHeader">
            <div className="showProductNumber">
                <span>SHOWING 1-{number} OF {number} RESULTS</span>
                <span>
                    <select name="filterOption" id="">
                        <option value="">--Please choose an option--</option>
                        {
                            categoryProduct.map(index=>{
                                return(
                                    <option value={index}>{index}</option>
                                )
                            })
                        }
                    </select>
                </span>
            </div>
        </div>
    )
}
function NavigationFooter(props){
    const [LinkPage,setLinkPage]=useState(props.listProduct);

    return(
        <nav className="navigationFooter">


            <ul className="navigationListContaint">
                <li className="leftPageProduct">
                    <a href="#"><i class="bi bi-arrow-left"></i></a>
                </li>
                {LinkPage.map(index=>{
                    return(<li>
                                <a href="#">{index}</a>
                            </li>)
                })}

                <li className="rightPageProduct">
                    <a href="#"><i class="bi bi-arrow-right"></i></a>
                </li>
            </ul>

            <span className="rightPageProduct">
                -
            </span>
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
                <FeatureOptionHeader listNumberFunction={ListProduct}/>

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