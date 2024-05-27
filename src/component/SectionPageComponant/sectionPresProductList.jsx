export default function SectionPresProductList(props){
    return (
        <div className="sectionPresProductList">
            <ProductPresItem imgFile="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/h-6-single-img-2.png"/>
            <ProductPresItem imgFile="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/h-6-single-img-3.png" reverse/>
            <ProductPresItem imgFile="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/h-6-single-img-2.png"/>
            <ProductPresItem imgFile="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/h-6-single-img-3.png" reverse/>
        </div>
    )
}
function ProductPresItem({props,imgFile,reverse}){
    return(
        <div className="productPresItem">
            <div className={"productPresContaint"+(reverse?" reverse":"")}>
                <div className="imgProduct">
                    <div className="containt">
                        <img src={imgFile} alt="" />
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
