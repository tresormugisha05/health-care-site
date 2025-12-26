import logo from "./photos/logo.jpg"
 function Header(){
    return(
        <main className="HeaderC">
            <div>
            <img src={logo} alt="logo"></img>
            <p>pro health</p>
            </div>
        <a href="index.html">Home</a>
        <a href="about.html">about</a>
        <a href="products.html">Appointments & products</a>
        <a href="contact.html">contacts</a>
        <a href="map.html">site map</a>
        <button onClick={()=>window.location.href="registerForm.html"}>Register</button>
        </main>
    )
}
export default Header;