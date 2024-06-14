import React, { useState,useRef } from "react";
import Header from "../component/headerPage/navigation";
import Footer from "../component/Footer/footer";
import { Link } from "react-router-dom";



//--------------------data Product----------
import dataProduct from "../data/dataProduct/dataItem";
import { ListProductChoice, cacheListProduct } from "../component/ActionMethod/contextData";

// import { Footer, Header } from "./home";
function EmptyShop(props){
    return(
        <div className="emptyShop">

                <h1 className="title">YOUR CART IS CURRENTLY EMPTY</h1>
                <p className="shortDescr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, pariatur.</p>

                <Link to="/" id="actionReturn">GO BACK</Link>
        </div>
    )
}

export function ButtonCount(props){
    // const [value,setValue]=useState(props.value);
    /**
     * Boutton de decompte du nombre de produit selectionner
     */

    return(
        <span className="buttonCount">
            <span className="left" onClick={props.onChange}>-</span>
            <span className="value">{props.value}</span>
            <span className="right" onClick={props.onChange}>+</span>
        </span>
    )
}
function ContaintTable({props,itemsProductData}){
    /**
     * le tableau principal de la page
     * listHeaderTable => list des des elements de l'en tete
     * subTotalPriceFunction => Fonction Calcul somme des courses
     * ListtemProduct => Valeur list 
     */


    
    const listHeaderTable=["PRODUCT","PRICE","QUANTITY","SUBTOTAL"];
    const [productDataItem,setProductDataItem]=useState((()=>{
        const arrayCopy=[...itemsProductData];
        const data=dataProduct.products;

        let listProductShop=[];

        data.map(index=>{
            arrayCopy.map(indexFilter=>{
                if(index.idProductType==indexFilter){
                    listProductShop.push(index)
                }
            })
        })
        // setProductDataItem([...listProductShop]);
        console.log("productDataItem",listProductShop);
        return listProductShop;
    })());
    


    // listRealProductItem();

    const subTotalPriceFunction=(arr)=>{
        let count=0;
        arr.map(index=>{
            count+=index.subTotalPrice;
        })

        return count;
    };

    const ListtemProduct=(()=>{
        let list = [];
        
        list.push((productDataItem.map(index=>{
            // totalPriceInitValue+=index.price.current;
            console.log(index);
            return({idProductType:index.idProductType,countProduct:1,price:index.price.current,subTotalPrice:index.price.current});
        })));

        return list;
    })()[0];


    const [itemsProducts,setItemsProduct]=useState(ListtemProduct);
    const [totalPrice,setTotalPrice]=useState(subTotalPriceFunction(itemsProducts));
    
    const itemRef=useRef(null);
    // console.log(itemsProducts);
    // console.log("----------------------------");
    // console.log(itemsProducts);
    // console.log(totalPrice)
    // console.log("----------------------------");


    // ----------------------fonction de evenement---------------------

    const handleChangeCount=(event)=>{
        const target=event.currentTarget;
        const parentRoot=target.parentElement.parentElement.parentElement; 
        const decimalNumber=3;
        
        
        // const index
        

        const index=itemsProducts.findIndex(index=>index.idProductType==parentRoot.id);

        const copyItemProduct=[...itemsProducts];
        
        const countProduct=copyItemProduct[index].countProduct;

        // console.log(index);
        

        switch(target.classList.value){
            
            case "left":
                // console.log("la valeur est soustraitre");
                copyItemProduct[index].countProduct-=1;
                if(!(copyItemProduct[index].countProduct)){
                    copyItemProduct[index].countProduct=1;
                }
                // handleProductPrice(event);
            break
            case "right":
                // console.log("la valeur additionner ");
                
                copyItemProduct[index].countProduct+=1;
                break
            default:
                console.log("Aucune valuer ne corresponds");
        }

        copyItemProduct[index].subTotalPrice=parseFloat((copyItemProduct[index].countProduct*copyItemProduct[index].price).toFixed(decimalNumber));
        setItemsProduct(copyItemProduct);
        setTotalPrice(parseFloat((subTotalPriceFunction(copyItemProduct)).toFixed(decimalNumber)));

        // console.log(copyItemProduct[index]);
        // console.log(copyItemProduct);

        // if(target.classList.find(index=>index=="left"))
    }

    
    const handleRemoveListProduct=(id)=>{
        const idProductType=id;
        return function (event){
            // const target=event.currentTarget;
            // const parentRoot=target.parentElement.parentElement;
            const copyItemProduct=[...itemsProducts];
            const index=copyItemProduct.findIndex(index=>index.idProductType==idProductType);
            console.log(index);

            // delete copyItemProduct[index];
            // const copyItemProduct=[...itemsProducts];

            // const array = [2, 5, 9];

            // console.log(array);

            // const index = array.indexOf(5);
            if (index > -1) { // only splice array when item is found
                copyItemProduct.splice(index, 1); // 2nd parameter means remove one item only
            }

            // array = [2, 9]
            console.log(copyItemProduct); 


            setItemsProduct(copyItemProduct);
            setTotalPrice(subTotalPriceFunction(copyItemProduct));
            // copyItemProduct.findIndex(index=>)

            
            // itemsProducts.findIndex()
    }}

    return(
        <>
            <table>


                <thead>
                    <tr>
                        {listHeaderTable.map(index=>{
                            return(<td>{index}</td>)
                        })}
                    </tr>
                </thead>

                <tbody>
                    {itemsProducts.map(index=>{
                        return(
                            <tr id={index.idProductType} key={index.idProductType}>
                                <td><span className="removeProduct" onClick={handleRemoveListProduct(index.idProductType)}><i class="bi bi-trash"></i></span> <div className="productProfile"><span>{index.idProductType}</span></div></td>
                                <td><div className="price"><span className="device">$</span><span>{index.price}</span></div></td>
                                <td><ButtonCount value={index.countProduct} onChange={handleChangeCount}/></td>
                                <td><div className="priceSubTotal"><span className="device">$</span><span className="total" ref={itemRef}>{index.subTotalPrice}</span></div></td>
                            </tr>
                        )
                    })}


                </tbody>
                
                <tfoot>
                    <tr>
                        <td colSpan={listHeaderTable.length-1}>Total de facture</td><td colSpan={1}><span className="devise">$</span><span className="mounTotal">{totalPrice}</span></td>
                    </tr>
                </tfoot>

            </table>

            <div className="linkFeature">
                <Link className="linkFeatureAction" to={"./"}>UPDATE CART</Link>
            </div>


            <table className="cartTotals">
                <thead>
                    <tr >
                        <td colSpan={2}>CART TOTALS</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="theaderTitle" >SUBTOTAL</td>
                        <td><span className="device">{dataProduct.device.current}</span><span className="subtotal">{totalPrice}</span></td>
                        
                        
                    </tr>
                    <tr>
                        <td className="tfooterTitle" >TOTAL</td>
                        <td><span className="device">{dataProduct.device.current}</span><span className="subtotal">{totalPrice}</span></td>
                        
                    </tr>

                </tbody>

                <tfoot>
                    <tr>
                        <td>
                            <Link  className="linkFeatureAction" to={"./"}>PROCEED TO CHECKOUT</Link>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}
export function HeaderTitle({title,headerStyle=null}){
    return(
        <div className="headerTitle" style={headerStyle}>
            <div className="containt">
                <h1>{title}</h1>
            </div>
        </div>
    )
}
export default function ShopPageAction({dataProduct}){
    // dataProduct.products
    // const [choiceProductList,setChoiceProductList]=useState(cacheListProduct.length?cacheListProduct:[]);
    // const [itemProduct, setItemProduct] = useState(props.dataProduct);
    const [choiceProductList,setChoiceProductList]=useState(cacheListProduct.length?cacheListProduct:[]);
    const [itemProduct, setItemProduct] = useState(dataProduct);

    console.log("Envoi de choiceProductList shopActionPage",choiceProductList);
    console.log("Envoi de cacheListProduct",cacheListProduct);

    const handleListChange=()=>{

    }

    return(
        <ListProductChoice.Provider value={choiceProductList}>
        <div className="shopPageAction">
            <Header/>
            <div className="headerTitle">
                <div className="containt">
                    <h1>Card</h1>
                </div>
            </div>

            <div className="shopPageContaint">

                <div className="containt">
                    {choiceProductList.length?<ContaintTable itemsProductData={choiceProductList} onChange={handleListChange}/>:<EmptyShop/>}
                </div>
                
            </div>

            <Footer/>
        </div>
        </ListProductChoice.Provider>
    )
}