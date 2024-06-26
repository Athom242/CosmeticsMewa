import { Link } from "react-router-dom";

const SocialContainer=()=>{
    const listSocial=[{
        link:"#",
        icon:<i class="bi bi-facebook"></i>},
        {
            link:"#",
            icon:<i class="bi bi-google"></i>
        },
        {
            link:"#",
            icon:<i class="bi bi-linkedin"></i>
        }
    ];


    return(
        <div className="social-Container">
            {listSocial.map(index=>{
                return(<a href={index.link} className="social">{index.icon}</a>)
            })}
        </div>
    )
}

const SignInContainer=()=>{
    const handleSign=()=>{
        
    }
    return(
        <form action="#" className="signFormContainer signInContainer">
            <h1>Sign In</h1>
            <SocialContainer/>
            <span>Or Use Your account</span>

            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password" />

            <div className="formBottom">
                <p><a href="#">Forgot your password ?</a></p>
                <button>Sign In</button>
            </div>

        </form>
    )
}

const SignUpContainer=()=>{
    return(
        <form action="#" className="signFormContainer signUpContainer">
            <h1>create Account</h1>
            <SocialContainer/>
            <span>or use your email for registration</span>

            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password" />

            <div className="formBottom">
                <p><a href="#">Forgot your password ?</a></p>
                <button>Sign Up</button>
            </div>


        </form>
    )
}

const OverlayContainer=()=>{
    return(
        <div className="overlay">

            <div className="overlayContainer">
                <div className="overleyPanel overlayLeft">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>

                <div className="overleyPanel overlayRight">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>

        </div>
    )
}


const ButtonHome=()=>{
    return(

        <div className="buttonHomeSection">
            <Link className="buttonHome" to={"/"}>GO HOME</Link>
        </div>
        
    )
}
export default function SignPage({}){

    return(
        <div className="signPage">

            <div className="signPageContainer">
                <h2 className="title">Weekly Coding Challenge #1: Sign in/up Form</h2>

                <div className="signPageFeature">
                    <div className="formSignContainer">
                        <SignInContainer/>
                        <SignUpContainer/>
                    </div>

                    <OverlayContainer/>

                    
                </div>

                <ButtonHome />

            </div>

            
        </div>
    )
}