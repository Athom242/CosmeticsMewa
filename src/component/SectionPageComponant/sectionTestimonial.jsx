import {useState} from "react";

function TesimonalItem(props){
    return(
        <div className="testimonialItem">
            <div className="header">
                <h2 className="title">Lorem ipsum dolor sit amet.</h2>

            </div>
            <div className="containtMessage">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam harum corporis optio voluptatem, qui iure ipsam modi quaerat dolorem eligendi dolores soluta incidunt veritatis ipsum? Voluptatem aliquid quia id blanditiis?</p>
            </div>
        </div>
    )
}

function FooterTestimonial({listTestmonialCurrent}){
    return (
      <div className="footerTestimonial">
        <ul className="linkListTestimonial">
          {listTestmonialCurrent.map((index) => {
            <li>
              <a href={index.link} className="href"></a>
            </li>;
          })}
        </ul>
      </div>
    );
}


export default function SectionTestimonial(props){
    const [listTestmonialCurrent,setTestmonialCurrent]=useState([{id:1,link:""},{id:2,link:""},{id:3,link:""}]);
    
    const style={

    }
    return (
      <div className="sectionTestimonial">
        <div className="containt">
          <div className="header">
            <h2 className="title">Temoignage</h2>
          </div>
          <div className="testimonialListInner">
            <div className="containtOuter">
                <div className="containtInner">
                    <div className="buttonCarroucell">
                        <button>
                        <i class="bi bi-arrow-left"></i>
                        </button>
                    </div>

                    <div className="containtTestimonial">
                        {listTestmonialCurrent.map((index) => {
                        return <TesimonalItem />;
                        })}
                    </div>

                    <div className="buttonCarroucell">
                        <button>
                        <i class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <FooterTestimonial listTestmonialCurrent={listTestmonialCurrent}/>
            </div>

          </div>

        </div>
      </div>
    );
}