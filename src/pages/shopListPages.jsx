import { useState } from "react"
import Footer from "../component/Footer/footer"
import { ProductItem } from "../component/SectionPageComponant/chooseProductSelling"
import Header from "../component/headerPage/navigation"
import { HeaderTitle } from "./shopPageAction"

function FeatureOptionHeader(props){
    const [listNumberFunction,setListNumberFunction]=useState(props.listNumberFunction);
    const categoryProduct=["Fichier","Contact","Image"];

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
                <div className="filterDisplayInfo">
                    <span>SHOWING 1-{counterProduct} OF {counterProduct} RESULTS</span>
                </div>
                <div className="filterFeature">
                    <span className="filterDisplayNumberProduct">
                        <label htmlFor="filterDisplayNumberProduct">Nombre de voyage</label>
                        <select name="filterDisplayNumberProduct" id="filterDisplayNumberProduct" onChange={props.onChangePerPage}>
                            {[10,20,30,40,50,60,70,80,90,100].map(index=>{
                                return(<option value={index}>{index}</option>)
                            })}
                            
                        </select>
                    </span>
                    <span>
                        <select name="filterCategoryOption" id="" >
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
        </div>
    )
}
function NavigationFooter({listProduct,nbrepageRender}){
    // const [LinkPage,setLinkPage]=useState(props.listProduct);
    

    return(
        <nav className="navigationFooter">


            <ul className="navigationListContaint">
                <li className="leftPageProduct">
                    <a href="#"><i class="bi bi-arrow-left"></i></a>
                </li>
                {listProduct.map(index=>{
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

function ListItemProductContainer(props){
    const [ListProduct,setListProduct]=useState(props.listProduct);
    const [countProduct,setCountProduct]=useState(10);
    const [pageRender,setPageRender]=useState({count:Math.ceil(ListProduct.length/countProduct),current:1});
    const [indexPage,setIndexPage]=useState({start:0,end:countProduct})

    const handleChangeOptionRender=(event)=>{

    };

    function handleDisplayPerPage(event){
        const target=event.currentTarget;
        const listProductCopy=[...ListProduct];

        listProductCopy.slice(indexPage.start,indexPage.end);
        console.log(indexPage.end);



        // setCountProduct(target.value);
        // console.log();


        setCountProduct(parseInt(target.value));
        setListProduct([...listProductCopy]);
      

        console.log(countProduct,pageRender,indexPage,listProductCopy);
    }

    return(
        <div className="listItemProductContainer">
            <div className="containt">
                <FeatureOptionHeader listNumberFunction={ListProduct} onChangePerPage={handleDisplayPerPage}/>

                <ul className="listProduct">
                    {ListProduct.map((value,index)=>{
                        // console.log(value,index)
                        return(<ProductItem/>)
                        
                        
                    })}
                </ul>

                <NavigationFooter listProduct={ListProduct} nbrepageRender={pageRender}/>
            </div>
        </div>
    )
}
export default function ShopListPage(props){
    const [listItemProductContainer,setListItemProductContainer]=useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);//Contenant list des produits en stock
    const [listDisplayProduct,setListDisplayProduct]=useState([...listItemProductContainer]);
    const [listCategoryData,setListCategoryData]=useState([]); //Tableau contentant list objet category avec nom et identifiant de la category



    const handleChangeListFeatureOption=(event)=>{
        const target=event.currentTarget;
        console.log(target);
    }
    return(
        <div className="shopListPage">
            <Header/>
            <HeaderTitle title={"Shop List Page"}/>

            <div className="shopListPageContaint">
                <div className="containt">
                    <ListItemProductContainer listProduct={listDisplayProduct}/>
                    <FeatureListProduct onChange={handleChangeListFeatureOption}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}