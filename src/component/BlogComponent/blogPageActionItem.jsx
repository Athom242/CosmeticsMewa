import { BlogContent, BlogSideBar } from "../../pages/blogPage";
import { HeaderTitle } from "../../pages/shopPageAction";
import Footer from "../Footer/footer";
import Header from "../headerPage/navigation";
import bcgImage from "../../media/HeaderBrand/backgroundImageMaquillageBosses.jpg"; //Image de blog
import bcgImageFichier from "../../media/BackgroundImage/careProductLotion.jpg"
import { Link } from "react-router-dom";
import { AddCommentSection } from "../../pages/shopProductDetailPage";



function BlogHeader(props){
    return(
        <div className="blogHeader">
            <img src={bcgImageFichier} alt="" />
            <div className="data">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, nobis.</p>
            </div>
        </div>
    )
}


function BlogParaphSection({title}){
    return(
        <div className="blogParagraphSection">
            <h3 className="title">{title}</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ex fugit accusamus laboriosam quasi assumenda dicta ab, laborum quidem, hic tenetur. Magnam amet autem reiciendis porro blanditiis, veniam ea quibusdam nisi, voluptatum perspiciatis ratione! Quibusdam placeat libero, sed eaque sequi voluptatum debitis delectus tempora ex laudantium voluptate vitae nulla sint atque porro beatae dicta natus fugit ratione? Possimus optio saepe beatae quis fuga ratione incidunt excepturi sint maiores ipsam earum officia quia minus autem explicabo dignissimos doloribus voluptatem facilis perspiciatis fugiat dolore illo, velit cumque. Porro saepe, mollitia officia aliquam optio quisquam, nesciunt sit corporis cupiditate corrupti voluptatum, eius quasi ex atque quod. Nesciunt, iusto facere. Rerum quis repellat, accusantium nam porro nulla eius a! Laudantium consequuntur quae ea dolores. Eum, animi delectus repellendus eveniet labore excepturi aperiam atque deleniti obcaecati dolorum accusamus, soluta eaque pariatur incidunt. Accusantium quis labore laborum rem quam tempora suscipit dolorem corrupti facere vel tenetur sed, voluptatem, ipsa atque incidunt molestias sunt quisquam modi exercitationem, autem voluptates iure culpa repudiandae nesciunt. Repudiandae deserunt itaque velit nostrum. Praesentium porro libero perspiciatis similique, accusamus rerum obcaecati nesciunt, ea in vel consequuntur molestias at quos cum? Nulla perferendis est iure at quidem corrupti illum voluptates atque. Sapiente eaque modi necessitatibus repellendus, nesciunt qui esse non deleniti in molestias, mollitia atque ad similique ullam possimus, ratione ducimus provident eligendi. Placeat facilis laudantium aperiam ad fugit ea non sint maxime sit nam, architecto reprehenderit harum neque perspiciatis dolorem vitae alias eligendi. Est vel minima eum sint, atque debitis nisi voluptates vero quo maiores, in odit placeat ab nostrum facere? Placeat voluptatem molestias blanditiis, fugiat amet temporibus officia illo beatae perferendis expedita totam doloremque eveniet maiores dolor commodi sequi veritatis a sapiente odio sed quae neque aliquid velit provident. Dolore, obcaecati. Nostrum laboriosam ex iste impedit voluptatum modi ducimus reiciendis nemo rem accusantium, amet porro laborum? Veniam consequuntur ex quisquam odit, quaerat dolorem perferendis deserunt fuga enim non, eaque animi qui distinctio id praesentium velit iure aspernatur quos a architecto. Fuga modi libero pariatur fugiat sapiente excepturi, deleniti repellat quis nihil ducimus cumque molestiae provident debitis distinctio suscipit consequuntur minus laboriosam earum omnis inventore quibusdam at reiciendis? Officia eos a dolorem. Corporis distinctio aliquid praesentium repellat accusamus voluptas atque, vitae iste amet nam tenetur optio officia dignissimos exercitationem dolorum consequuntur autem dolor aut unde. Nostrum non dicta eaque dolor sint optio repellat? Rem nisi tempore, distinctio ducimus fugit porro in dignissimos debitis minima. Iste alias officia laborum aperiam nulla accusamus eaque. Sit asperiores corporis inventore sint corrupti, minus non? Dolores, animi quas mollitia error deserunt iste doloribus vitae voluptatibus, similique nulla necessitatibus omnis laborum minima qui labore molestias eius officia? Saepe fugiat ab placeat, autem quis reiciendis labore magni laudantium rerum ducimus dolorem itaque cum ipsum optio, veritatis eius cumque a earum? Exercitationem quae, ratione accusantium animi non porro sunt fugiat velit sint dolorem doloremque tenetur magni quidem eius, amet esse magnam, sapiente excepturi. Dolor sint voluptates molestias, nam distinctio facilis exercitationem quis adipisci delectus ratione amet nihil, id velit culpa?
            </p>
        </div>
    )
}
function BlogContentItem(props){
    return(
        <div className="blogContentItem">
            <BlogParaphSection title={"fichier dans le monde"}/>
            <BlogParaphSection title={"fichier dans le monde"}/>
            <BlogParaphSection title={"fichier dans le monde"}/>
            <BlogParaphSection title={"fichier dans le monde"}/>
        </div>
    )
}

function BlogFooter(props){
    return(
        <div className="blogFooter">
            
        </div>
    )
}

function BlogItemChoice(props){
    return(
        <div className="blogItemChoice">
            <div className="prev">
                <Link to={"#"}>Prev</Link>
                
            </div>

            <div className="next">
                <Link to={"#"}>Next</Link>
            </div>
        </div>
    )
}
function BlogPageContainerItem(props){
    return(
        <div className="blogPageContainerItem">
            <div className="containt">
                <BlogHeader/>
                <BlogContentItem/>
                {/* <BlogFoottent/> */}
                <BlogFooter/>
                <BlogItemChoice/>
                <AddCommentSection/>
                
            </div>
        </div>
    )
}

export default function BlogPageActionItem(props){

    const headerStyleValue={
        // background:"url",
        padding:"7.5rem 0px",
        backgroundImage:`url(${bcgImage})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",


    }

    
    return(
        <div className="blogPageActionItem">
            <Header/>
            <HeaderTitle title={"BLOG PAGE ITEM"} headerStyle={headerStyleValue}/>

            <div className="blogContainer">
                <BlogPageContainerItem/>
                <BlogSideBar/>
            </div>
            <Footer/>
        </div>
    )
}