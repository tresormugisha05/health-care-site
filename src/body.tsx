import logo from "./photos/logo.jpg"
import Card from "./Card"
import Questions from "./Questions"
import photo4 from "./photos/photo4.jpg"
import photo12 from "./photos/photo12.jpg"
import photo5 from "./photos/photo5.jpg"
import photo9 from "./photos/photo9.jpg"
import photo17 from "./photos/photo17.jpg"
import photo19 from "./photos/photo19.jpg"
import photo20 from "./photos/photo20.jpg"
import Header from "./header"
import photo18 from "./photos/photo18.jpg"
import map from "./photos/map.jpg"
import ig from "./photos/instagram.jpg"
import tsap from "./photos/whatsapp.jpg"
import gmail from "./photos/gmail.jpg"
import linkedin from "./photos/linkedin.jpg"
import phone from "./photos/phone.jpg"
import tiktok from "./photos/tiktok.jpg"
import neurology from "./photos/neurology.jpg"
import cardiology from "./photos/cardiology.jpg"
import emergency from "./photos/emergency.jpg"
import pediatric from "./photos/pediatric.jpg"
import gynecology from "./photos/gynecology.jpg"
import physciatry from "./photos/physciatry.jpg"
 function Body(){
    return(
         <div>
            <main className="main0">
            <Header/>
            <div className="div1">
        <h1>Medical verification,<br/>
        your gateway<br/>
        to genuine</h1>
        <main className="main1">
        <p className="prohealth">pro health</p>
        <p className="prohealth1">welcome to our medical verification platform
            ,where we <br/>ensure the authenticity of your pharmaceutical purchases
           <br/> stay safe from counterfeit drugs
        </p>
        </main>
        <div className="Div2">
            <ul>
                <li>20+
                    <p>years of experience</p>
                </li>
                <li>
                    95%
                    <p>patient satisification rating</p>
                </li>
                <li>
                    5000%
                    <p>patient served yearly</p>
                </li>
            <li>
                +10
                <p>health care providers on staff</p>
            </li>
            </ul>
            </div>
        </div>
        </main>
            <main className="main2">
                <main>
                    <h2>ABOUT US</h2>
            <h1>PRO HEALTH IS A TEAM OF <br/>EXPERIENCED MEDICAL <br/>PROFESSIONALS</h1>
            <p>dedicated to providing top-quality healthcare services we <br/>believe in a holistic 
            approach to health care that focuses on <br/>treating the whole person, not just the illness or symptoms</p>
                </main>
                <img src={photo4}/>
        </main>
        <div className="div3">
            <img src={photo12}/>
            <main>
            <main>
                <p>our departments</p>
            <h1>FOR YOUR HEALTH</h1>
            </main>
            <div>
                <div>
                    <button><img src={emergency}/>
            Emergency Department
            </button>
            <button><img src={pediatric}/>
            pediatric Department
            </button>
            <button><img src={gynecology}/>
            Obatetric and gynecology Department
            </button>
                </div>
            <div>
            <button><img src={cardiology}/>
            Cardiology Department
            </button>
            <button><img src={neurology}/>
            Neurology Department
            </button>
            <button><img src={physciatry}/>
            Psychiatry Department
            </button>
            </div>
            </div>
            </main>
        </div>
        <div className="div4">
            <main>
            <h1>Don't let Your Health<br/> Take a Backseat</h1>
            <p>schedule an appointment with one of our<br/> experienced medical professionals today!</p>
            </main>
            </div>
        <div className="div5">
            <main>
            <p>BLOG POSTS</p>
            <h1>LATEST UPDATE</h1>
            </main>
            <div>
                <main>
            <Card
             image ={photo5}
             date ={new Date()}
             text="The Benefits of consulting with our doctors  before rushing to get medecines."
            />
            <Card
            image ={photo9}
             date ={new Date()}
             text="the Do's and Don't's before surgery or other intensive operations"
            />
            <Card
            image ={photo18}
             date ={new Date()}
             text="Healthy Eating on a Budget: Tips and strategies"
            />
            </main>
            <main>
            <Card
            image ={photo20}
             date ={new Date()}
             text="Listening to specific sound frequencies can reduce stress and improve focus"
            />
            <Card
            image ={photo17}
             date ={new Date()}
             text="The importance of Regular meditation and stress relief actvities"
            />
            <Card
            image ={photo19}
             date ={new Date()}
             text="Spending time in nature lowers blood pressure and stress hormones"
            />
            </main>
            </div>
        </div>
        <div className="div6">
            <h1>Frequently Asked Questions.</h1>
            <Questions/>
        </div>
        <div className="div7">
            <h1>All Kinds of Diagonistics</h1>
            <p>welcome to our medical verification platform,
                 where <br/>we ensure the authenticity of your pharmaceutical <br/>purchases</p>
                 <button onClick={()=>window.location.href="products.html"}>verify now</button>
        </div>
        <div className="div8">
            <main>
                <ul>
                <li>
                    <img src={logo} />
                    <p>ProHealth</p>
                </li>
                <li>ProHealth Medical & Healthcare center</li>
                <li>
                    <img src={map}/>
                    <p> kk01Ave</p>
                </li>
                <li><img src={phone}/>
                <p>+250 785 220 022</p></li>
                <li>
                    <img src={gmail}/>
                    <p>tresormugisha07@gmail.com</p>
                </li>
            </ul>
            </main>
            <main>
            <ul>
                <li>About us</li>
                <li>Departments</li>
                <li>Doctors</li>
                <li>TimeTable</li>
                <li>Appointments</li>
            </ul>
            </main>
            <main>
                <ul>
                <li>Testimonials</li>
                <li>Blog</li>
                <li>contact us</li>
                <li>FAQ</li>
            </ul>
            </main>
            <main>
                <ul>
                <li>privacy policy</li>
                <li> terms and conditions</li>
                <li></li>
                <li></li>
                <li></li>
                <li>follow us
                <img src={ig}/>
                <img src={tsap}/>
                <img src={linkedin}/>
                <img src={gmail}/>
                <img src={tiktok}/>
                </li>
            </ul>
            </main>
        </div>
        <footer id="foot">copyright @ 2025 pro health all rights reserved</footer>
        </div>
    )
}
export default Body;