export default function ChooseProductSelling(props){
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


function FeatureProduct(props){
    return(
        <div className="featureProductItem">
            <ul className="listFeature">
                <li className="addShop"><a href="#">add</a></li>
                <li className="viewMore"><a href="#">view</a></li>
                <li className="wishList"><a href="#">wishList</a></li>
            </ul>
        </div>
    )
}
export function ProductItem(props){
    const price=Math.ceil(Math.random()*10);
    const priceLast=Math.ceil(Math.random()*10);
    return(
        <div className="productItem">
            <div className="productItemContainer">
                <div className="imgProduct">
                    <div className="state">space</div>
                    <FeatureProduct/>

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
