import Footer from "../component/Footer/footer";
import Header from "../component/headerPage/navigation";
import { HeaderTitle } from "./shopPageAction";
import bcgImage from "../media/HeaderBrand/backgroundImageMaquillageBosses.jpg"; //Image de blog
import bcgImageBlog from "../media/blogImage/articleBgcImg1.jpg";


function BlogArticleItem(props){
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

     */
    return(
        <article className="blogArticleItem">
            <div className="blogHeader">

                <a href="#" className="blogImgLink"><img src={bcgImageBlog} alt="Image De Blog de article"/></a>
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
                    <p className="textDescr">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis quisquam sequi praesentium eveniet? Unde illo quidem cum enim facere fugiat voluptatem voluptatibus, aspernatur modi molestiae quaerat voluptatum? Ea, facere.
                    </p>
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
                <BlogArticleItem/>
                <BlogArticleItem/>
                <BlogArticleItem/>
                <BlogArticleItem/>
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