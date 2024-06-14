import { useEffect, useState } from "react";
import Footer from "../component/Footer/footer";
import { ProductItem } from "../component/SectionPageComponant/chooseProductSelling";
import Header from "../component/headerPage/navigation";
import { HeaderTitle } from "./shopPageAction";
import bcgImage from "../media/backgroundImageBeauty.jpg";
import { ListProductChoice, cacheListProduct } from "../component/ActionMethod/contextData";

// ----------------Information data 

import dataProduct from "../data/dataProduct/dataItem";

function FeatureOptionHeader(props){
    const [listNumberFunction,setListNumberFunction]=useState(props.listNumberFunction);
    const categoryProduct=["Fichier","Contact","Image"];
    const [numberPerPage,setNumberPerPage]=useState(10);

    const listNumber=() => {
        let pageArray=[];
        for (let start = 10; start <= numberPerPage**2; start+=numberPerPage) {
            pageArray.push(<option value={start}>{start}</option>);
        }

        return pageArray;
    }

    const [counterProduct,setCounterProduct]=useState(listNumberFunction.length);


    // function handleDisplayPerPage(event){
    //     const target=event.currentTarget;
    //     const counter=listNumberFunction.length;

        
    //     props.onChangePerPage(event);
    //     setCounterProduct(counter);
    // }


    return(
        <div className="featureOptionHeader">
            <div className="showProductNumber">
                <span>SHOWING 1-{counterProduct} OF {counterProduct} RESULTS</span>
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

                    <select name="filterProductPerPage" id="">
                        {listNumber().map(index=>{
                            return(index);
                            })}
                    </select>
                </span>
            </div>
        </div>
    )
}
function NavigationFooter({props,listProduct}){
    const [LinkPage,setLinkPage]=useState(listProduct);
    const [currentPage,setCurrentPage]=useState({current:LinkPage[0],index:0})
    const handleForward=()=>{
        
    }

    return(
        <nav className="navigationFooter">


            <ul className="navigationListContaint">
                <li className="leftPageProduct">
                    <a href="#"><i class="bi bi-arrow-left"></i></a>
                </li>
                {LinkPage.map(index=>{
                    return(<li><a href="#">{index}</a></li>)
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
    // const input=document.querySelectorAll("input[type=range]");
    
    const category=[{name:"fichier",idCategory:"#01#"},{name:"Dossier",idCategory:"#02#"},{name:"Classeur",idCategory:"#03#"}];
    const [ListCategorie,setListCategorie]=useState(category);
    const [valueRange,setValueRange]=useState({min:0,max:100});
    // input[0].value=valueRange.min;
    // input[1].value=valueRange.max;
    // console.log(input)
    

    // ----------------------function handle click
    const handleFeatureCategory=(idCategory)=>{
        const id=idCategory;
        return ((event)=>{
            console.log(id);
        })
    };

    const handleRange=(event)=>{
        const target=event.currentTarget;
        const parent=target.parentElement;
        const valueRangeCopy=valueRange;

        console.log(valueRangeCopy);
        // console.log(typeof(parseInt(target.value)));
        

        switch(target.name){
            case "minValueRange":
                valueRangeCopy.min=parseInt(target.value);
                if(valueRangeCopy.min>=valueRangeCopy.max){
                    const bro=parent.querySelector("input[name=maxValueRange]");
                    bro.value=valueRangeCopy.min;
                    console.log(bro);
                    // valueRangeCopy.max
                }
                // console.log(valueRangeCopy.min)
                // setValueRange(valueRange.min=parseInt(target.value));
            break
            case "maxValueRange":
                if(valueRangeCopy.max<=valueRangeCopy.min){
                    const bro=parent.querySelector("input[name=minValueRange]");
                    bro.value=valueRangeCopy.max;
                    console.log(bro);
                    // valueRangeCopy.max
                }
                valueRangeCopy.max=parseInt(target.value);
                
                // console.log(valueRangeCopy.max)
                // setValueRange(valueRange.max=parseInt(target.value));
            break
            default:
                console.log("Une Erreur s'est produite");
        }

        // setValueRange(valueRangeCopy);
        setValueRange(valueRangeCopy);
        console.log(valueRange);
    }

    const handleResetButton=(event)=>{
        const valueRangeCopy=valueRange;
        const targetAction=document.querySelectorAll(".filterRange input");

        valueRangeCopy.min=0;
        valueRangeCopy.max=100;

        targetAction.forEach((value,index)=>{
            value.value=Object.keys(valueRangeCopy)[index];
        })

        setValueRange(valueRangeCopy);
        console.log(valueRange);
    };

    const handleApplySearhProduit=(event)=>{
        console.log("Bonjour tout le monde je suis le nouveau dans la liste");
    }

    return(
        <div className="featureListProduct">
            <div className="containt">
                <div className="featureFilter">
                    <h1 className="titleFeature">FILTER BY PRICE</h1>
                    <div className="filterRange">

                        <input type="range" name="minValueRange" id="" onChange={handleRange}/>
                        <input type="range" name="maxValueRange" id="" onChange={handleRange}/>
                        
                    </div>
                    <div className="filterPriceAction">
                        <div className="filterPrice"><span>{valueRange.min}-{valueRange.max}</span></div>
                        <div className="filterAction">{((valueRange.max-valueRange.min)==valueRange.max)?"":<span className="reset" onClick={handleResetButton}>RESET</span>}<span className="action" onClick={handleApplySearhProduit}>APPLY</span></div>
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

function ListItemProductContainer({handleAddProductItem}){
    console.log("Bonjour tout le monde",dataProduct);
    const [listProduct,setListProduct]=useState([...dataProduct.products]);
    const listIndexProduct=useState([0,0,0,0,0,0,0,0,0]);
    const countProduct=10;

    console.log("ListItemProductContainer",handleAddProductItem);
    return(
        <div className="listItemProductContainer">
            <div className="containt">
                <FeatureOptionHeader listNumberFunction={listProduct}/>

                <ul className="listProduct">
                    {listProduct.map(index=>{
                        return(<ProductItem productData={index} handleAddProduct={handleAddProductItem} />);
                        
                    })}
                </ul>

                <NavigationFooter listProduct={listIndexProduct}/>
            </div>
        </div>
    )
}
export default function ShopListPage(props){
    const headerStyleValue={
        // background:"url",
        padding:"7.5rem 0px",
        backgroundImage:`url(${bcgImage})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",


    };

    const [choiceProductList,setChoiceProductList]=useState(cacheListProduct.length?cacheListProduct:[]);
    // const 
    
    const handleAddProductFeature=(id)=>{
        return (event)=>{
            event.preventDefault();
            const arrayCopyListProduct=[...choiceProductList];
            
            if(!arrayCopyListProduct.find(index=>index==id)){
                arrayCopyListProduct.push(id);
            }
            // arrayCopy.push(id);


            setChoiceProductList(arrayCopyListProduct);
            console.log(arrayCopyListProduct);
        }
    };

    console.log("ShopListPage",handleAddProductFeature);
    console.log("ShopListPage",choiceProductList);

    useEffect(()=>{
        console.log("La variable de fichier dans le monde ",choiceProductList);
    },[choiceProductList]);

    // const 
    return(
        <ListProductChoice.Provider value={choiceProductList}>
        <div className="shopListPage">
            <Header/>
            <HeaderTitle title={"Shop List Page"} headerStyle={headerStyleValue} />

            {/* <ListProductChoice.Provider value */}
            <div className="shopListPageContaint">
                <div className="containt">
                    <ListItemProductContainer handleAddProductItem={handleAddProductFeature}/>
                    <FeatureListProduct/>
                </div>
            </div>
            <Footer/>
        </div>
        </ListProductChoice.Provider>
    )
}