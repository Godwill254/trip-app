import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../assets/1.jpg";
import AboutUs from "../components/AboutUs"; 
import Footer from "../components/Footer";

function  About(){
    return(
        <>
        <Navbar/>        
        <Hero
            cName="hero-mid"
            heroImg={aboutImg}
            title="About"           
            btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About;