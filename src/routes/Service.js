import Navbar from "../components/Navbar";
import Hero  from "../components/Hero";
import serviceImg from "../assets/2.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Service (){
    return(
        <>
        <Navbar/>
        <Hero
            cName = "hero-mid"
            heroImg ={serviceImg}
            title= "Service"
            btnClass = "hide"

        />
        <Trip/>
        <Footer/>
        </>
    )
}

export default Service;