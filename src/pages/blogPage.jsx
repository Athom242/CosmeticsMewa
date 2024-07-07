import Footer from "../component/Footer/footer";
import Header from "../component/headerPage/navigation";
import { HeaderTitle } from "./shopPageAction";
import bcgImage from "../media/HeaderBrand/backgroundImageMaquillageBosses.jpg"; //Image de blog
import bcgImageBlog from "../media/blogImage/articleBgcImg1.jpg";
import { Link } from "react-router-dom";



function BlogCategorie(){
    const categoryList=[];


    return(
        <div className="blogListCategory">
            {/* {categoryList.} */}
        </div>
    )
}
function BlogArticleItem({containtPos="center",listImage=[]}){
    const posContaint=["center","left","right"];
    // const containtPos={containtPos};
    
    // console.log(containtPos);
    const classNameContaint=(()=>{
        for (const key of posContaint) {
            if ((containtPos?containtPos.toLowerCase:containtPos) == key.toLowerCase) {
                return containtPos;
            }

        }
        return containtPos;
        })();
    

    const listImageLink=(()=>{
        let imageLinkComponent=[];

        for (const index of listImage){
            if(index){
                console.log(index)
                imageLinkComponent.push(<div className="blogImgLink"><a href="#" className="link"><img src={index} alt="Image De Blog de article"/></a></div>);
            }
            
        }
        return imageLinkComponent;
    })();

    console.log(listImageLink);
    /**
     *  Paramettre image dans l'article
     *  Soit une seule image Illustratif pour tout l'article 
        Soit deux images illustrative
        Soit Une Image à gauche 
        Soit une image à droite
    *   
        Information du lier à l'article
        Auteur
        Date de publication
        Sujet
        Theme
        Titre 
        Courte description

        containtPos:Pour le positionnement des Interne de la árticle

     */
    return(
        <article className={"blogArticleItem "+classNameContaint} >
            <div className={"blogHeader "+((listImageLink.length>1)?"imgMore":"")}>

                {/* <a href="#" className="blogImgLink"><img src={bcgImageBlog} alt="Image De Blog de article"/></a> */}
                {listImageLink.map(index=>{
                    return index;
                })}
            </div>
            <div className="blogDescr">
                <div className="containt">
                    <div className="infoDetail"><p>
                        <span className="date">Apr 24</span>-
                        <span className="topic">Body Oil</span>-
                        <span className="author">By Janny Joe</span>-
                        <span className="theme">Cosmetic</span>
                        </p>
                    </div>

                    <h2 className="title">HOW DID WE GET HERE</h2>
                    <p className="textDescr" style={{padding:"1rem"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis quisquam sequi praesentium eveniet? Unde illo quidem cum enim facere fugiat voluptatem voluptatibus, aspernatur modi molestiae quaerat voluptatum? Ea, facere.
                    </p>

                    <div className="BlogFeature">
                        <Link className="featureMoreOption" to={""}>View More</Link>
                    </div>
                </div>
            </div>
            <div className="blogFooter">

            </div>
        </article>
    )
}

function BlogSideBar(props){
    return(
        <div className="blogSideBar">
            
        </div>
    )
}
function BlogContent(props){
    return(
        <div className="blogContent">
            <ul className="blogListArticle">
                <BlogArticleItem listImage={[bcgImageBlog,bcgImageBlog]}/>
                <BlogArticleItem listImage={[bcgImageBlog,bcgImageBlog]}/>
                <BlogArticleItem listImage={[bcgImageBlog,bcgImageBlog]}/>
                <BlogArticleItem listImage={[bcgImageBlog,bcgImageBlog]}/>

                <BlogArticleItem containtPos={"right"} listImage={[bcgImageBlog]}/>
                <BlogArticleItem containtPos={"left"} listImage={[bcgImageBlog]}/>
                <BlogArticleItem containtPos={"right"} listImage={[bcgImageBlog]}/>
                <BlogArticleItem containtPos={"left"} listImage={[bcgImageBlog]}/>
                <BlogArticleItem listImage={[bcgImageBlog]}/>
                <BlogArticleItem listImage={[bcgImageBlog,bcgImageBlog]}/>
                <BlogArticleItem listImage={[bcgImageBlog,bcgImageBlog]}/>
            </ul>
        </div>
    )
}
export default function BlogPage(props){

    const headerStyleValue={
        // background:"url",
        padding:"7.5rem 0px",
        backgroundImage:`url(${bcgImage})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",


    }

    return(
        <div className="blogPage">
            <Header/>
            <HeaderTitle title={"BLOG PAGE"} headerStyle={headerStyleValue}/>

            <div className="blogContainer">
                <BlogContent/>
                <BlogSideBar/>
            </div>
            <Footer/>
        </div>
    )
}