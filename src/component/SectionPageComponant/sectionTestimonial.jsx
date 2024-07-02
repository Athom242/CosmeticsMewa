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
    const [listTestmonialCurrent,setTestmonialCurrent]=useState({currentId:0,listTestmonial:[{id:1,link:""},{id:2,link:""},{id:3,link:""}]});
    
    const style={

    }

    const handleSliderChange=(option)=>{
      return (event)=>{
        const target=document.querySelectorAll(".testimonialItem");
        const copyListItem={...listTestmonialCurrent};
        let currentIdRelease=0;
        
        
        if(option){
          currentIdRelease=((copyListItem.currentId+1)<=(copyListItem.listTestmonial.length-1))?copyListItem.currentId+1:0;
        }else{
          currentIdRelease=((copyListItem.currentId-1)>=0)?(copyListItem.currentId-1):(copyListItem.listTestmonial.length-1);
        }
        
        console.log(currentIdRelease);
        const realTarget=target[currentIdRelease];

        const currentPos=realTarget.offsetWidth*currentIdRelease; //Position

        const parent=realTarget.parentElement; //parent

        parent.scroll(currentPos,0);
        console.log(currentPos);


        setTestmonialCurrent({...copyListItem,currentId:currentIdRelease});
        console.log(listTestmonialCurrent.currentId);
        }
      
    }

    function handleChangeScroll(event){
      console.log(event.currentTarget.scrollLeft)
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
                        <button onClick={handleSliderChange(0)}>
                          <i class="bi bi-arrow-left"></i>
                        </button>
                    </div>

                    <div className="containtTestimonial" onScroll={handleChangeScroll}>
                        {listTestmonialCurrent.listTestmonial.map((index) => {
                        return <TesimonalItem key={index.id}/>;
                        })}
                    </div>

                    <div className="buttonCarroucell">
                        <button onClick={handleSliderChange(1)}>
                          <i class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <FooterTestimonial listTestmonialCurrent={listTestmonialCurrent.listTestmonial}/>
            </div>

          </div>

        </div>
      </div>
    );
}