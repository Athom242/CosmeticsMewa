import React, { useRef, useState } from "react";
import Header from "../component/headerPage/navigation";
import Footer from "../component/Footer/footer";
import { Link } from "react-router-dom";


//--------------------data Product----------
import dataProduct from "../data/dataProduct/dataItem.json";

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

function ButtonCount(props){
    // const [value,setValue]=useState(props.value);


    return(
        <span className="buttonCount">
            <span className="left" onClick={props.onChange}>-</span>
            <span className="value">{props.value}</span>
            <span className="right" onClick={props.onChange}>+</span>
        </span>
    )
}
function ContaintTable(props){
    const listHeaderTable=["PRODUCT","PRICE","QUANTITY","SUBTOTAL"];
    const subTotalPriceFunction=(arr)=>{
        let count=0;
        arr.map(index=>{
            count+=index.subTotalPrice;
        })

        return count;
    };
    const ListtemProduct=(()=>{
        let list = [];
        
        list.push((props.itemsProductData.map(index=>{
            // totalPriceInitValue+=index.price;
            return({idProductType:index.idProductType,countProduct:1,price:index.price,subTotalPrice:index.price});
        })));

        return list;
    })()[0];


    const [itemsProducts,setItemsProduct]=useState(ListtemProduct);
    const [totalPrice,setTotalPrice]=useState(subTotalPriceFunction(itemsProducts));
    
    const itemRef=useRef(null);
    // console.log(itemsProducts);
    console.log("----------------------------");
    console.log(itemsProducts);
    console.log(totalPrice)
    console.log("----------------------------");


    // ----------------------fonction de evenement---------------------

    const handleChangeCount=(event)=>{
        const target=event.currentTarget;
        const parentRoot=target.parentElement.parentElement.parentElement; 
        
        
        // const index
        

        const index=itemsProducts.findIndex(index=>index.idProductType==parentRoot.id);

        const copyItemProduct=[...itemsProducts];
        
        const countProduct=copyItemProduct[index].countProduct;

        console.log(index);
        

        switch(target.classList.value){
            
            case "left":
                console.log("la valeur est soustraitre");
                copyItemProduct[index].countProduct-=1;
                if(!(copyItemProduct[index].countProduct)){
                    copyItemProduct[index].countProduct=1;
                }
                // handleProductPrice(event);
            break
            case "right":
                console.log("la valeur additionner ");
                
                copyItemProduct[index].countProduct+=1;
                break
            default:
                console.log("Aucune valuer ne corresponds");
        }

        copyItemProduct[index].subTotalPrice=Math.ceil(copyItemProduct[index].countProduct*copyItemProduct[index].price);
        setItemsProduct(copyItemProduct);
        setTotalPrice(Math.ceil(subTotalPriceFunction(copyItemProduct)));

        console.log(copyItemProduct[index]);
        console.log(copyItemProduct);

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
            <table className="tableProductList">

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
export function HeaderTitle(props){
    return(
        <div className="headerTitle">
            <div className="containt">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}
export default function ShopPageAction(props){
    
    const [itemProduct, setItemProduct] = useState(dataProduct.products);

    const handleListChange=()=>{

    }

    return(
        <div className="shopPageAction">
            <Header/>
            <HeaderTitle title={"card"}/>

            <div className="shopPageContaint">

                <div className="containt">
                    {itemProduct.length?<ContaintTable itemsProductData={itemProduct} onChange={handleListChange}/>:<EmptyShop/>}
                </div>
                
            </div>

            <Footer/>
        </div>
    )
}