export default function SectionFooterContaint(props){


    return(
        <div className="sectionfooterContaint">
            <div className="containt">
                <div className="formContact">
                    <div className="formContactContainer">
                    <div className="header">
                        <h2 className="title">ASK US ANYTHING</h2>
                        <p className="shortTitle">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos culpa incidunt porro quo blanditiis.
                        </p>
                    </div>

                    <form action="./" className="formContaint">
                        <div className="email">
                            <input type="email" placeholder="Email" id="email" name="email"/>
                        </div>
                        
                        <div className="comment">
                            <textarea name="comment" id="comment" cols="30" rows="10" placeholder="your Comment"></textarea>
                        </div>
                        
                        <input type="submit" value="submit" />
                    </form>
                    </div>
                    
                </div>

                <div className="mapContact">
                    <div className="containt">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.7142409727076!2d-17.471744723979874!3d14.728741273924836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10d52c7afaee7%3A0x324c3c7430df733b!2sLiberte%206%20Extension%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1716062044884!5m2!1sfr!2ssn" width="800" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
