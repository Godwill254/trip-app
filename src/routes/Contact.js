import Navbar from "../components/Navbar";
import contactImg from "../assets/4.jpg";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Contact () {
    return (
        <>
        < Navbar />
        < Hero 
            cName="hero-mid"
            heroImg = {contactImg} 
            title = "Contact"
            btnClass = "hide"
        />
        < Footer />
        </>
    )
}

export default Contact;