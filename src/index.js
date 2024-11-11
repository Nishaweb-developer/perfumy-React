import ReactDOM from "react-dom/client"
import "./style.css"
import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'
const root = ReactDOM.createRoot(document.getElementById("root"))


function Navbar(){
    return(
        <nav>
        <h1>Perfumy</h1>
        <ul>
            <li>
              <a> Home | </a></li>
            <li><a>Products | </a></li>
            <li><a>About |</a> </li>
            <li><a>Contact |</a> </li>
        </ul>
        </nav>
    )
}

function Search(){
    return(
        <div className="searchbar">
            <input type="text" placeholder="Search"/>
        </div>

    )
}

function Product(){
    return(
        <div className="products">
        <div className="box">
                    <img src= {one} ></img>
                    <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
        </div>
        <div className="box">
        <img src= {two}></img>
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
        </div>
        <div className="box">
        <img src= {three}></img>
            <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
        </div>

    )
}

function AboutUs()
{
    return(
        <div style={{textAlign:"center"}}>
    <div className="about" style={{marginTop: "10px",textAlign:"center"}}>
        <h1>About Us</h1>
        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
    </div>
    </div>

    )
}

function Footer(){
    return(
        <footer>
       
        <div class="contact">
            

            
            <h3>Contact</h3>
            <p style={{marginTop: "5px"}}>+91 3478631928 
                perfumy@gmail.com
            </p>

        </div>
       
       <p style={{fontSize:"small", padding:"20px" ,color:"grey"}}>
        W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.

        Copyright 1999-2023 by Refsnes Data. All Rights Reserved.
        W3Schools is Powered by W3.CSS.
       </p>
    </footer>

    )
}
root.render(<div><Navbar></Navbar>
<Search></Search>
<Product></Product>
<AboutUs></AboutUs>
<Footer></Footer>
</div>);