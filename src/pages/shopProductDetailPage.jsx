import Footer from "../component/Footer/footer";
import Header from "../component/headerPage/navigation";
import { HeaderTitle } from "./shopPageAction";



export default function ProductDeatilPage({}){
    return (
        <div className="productDetailPage">
            <Header/>
            <HeaderTitle title={"SHOP"}/>
            <Footer/>
        </div>

    )
}