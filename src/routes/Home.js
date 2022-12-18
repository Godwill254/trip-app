import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero"
            heroImg="https://images.unsplash.com/photo-1556379092-dca659792591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            title="Your Journey Your Story"
            text="Choose your favorite Destination"
            url="/"
            buttonText="Travel Plan"
            btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )
}

export default Home;