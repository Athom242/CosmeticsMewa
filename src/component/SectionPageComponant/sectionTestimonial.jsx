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


export default function SectionTestimonial(props){
    return(
        <div className="sectionTestimonial">
            <div className="containt">
                <div className="header">
                    <h2 className="title">Temoignage</h2>
                </div>
                <div className="testimonialListInner">
                    {[0,0,0].map(index=>{
                        return(<TesimonalItem/>)
                    })}
                </div>

            </div>
        </div>
    )
}