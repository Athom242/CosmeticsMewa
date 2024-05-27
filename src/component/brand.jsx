export function BrandCenterItem(props){
    return(
        <div className="brandCenterItem">
        <div className="brandDescr">
            <h2 className="title">
                SKIN SOLUTION
            </h2>

            <p className="descr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, libero!
            </p>

            <div className="linkButton"><a href="#" className="linkFindBeauty">FIND BEAUTY</a></div>
        </div>

        <div className="brandImage">
            <div className="imgRight"><img src="/assets/img/sliderLeft.png" alt="" /></div>
            <div className="imgLeft"><img src="/assets/img/sliderRight.png" alt="" /></div>
        </div>
    </div>
    )
}