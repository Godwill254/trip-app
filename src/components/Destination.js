import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
import MountainImg from "../assets/5.jpg";
import MountainImg2 from "../assets/6.jpg";
import MountainImg3 from "../assets/7.jpg";
import MountainImg4 from "../assets/8.jpg";



const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you an opportunity to see a lot, within a time frame</p>
            <DestinationData
                className = "first-des"
                heading="Taal Volcanos, Batangas"
                text ="One of the most iconic views in Luzon, Mt.Taal boasts a volcano inside a lake inside an island.
                If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners.
                Guides will assist you most of the way, and you'll see the spectacular environment found on an active volcano, 
                including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and
                then unwind with some bulalo before heading back home!"
                img1={MountainImg}   
                img2={MountainImg2}  
            />

            <DestinationData
                className = "first-des-reverse"
                heading="Mt. Daguldul, Batangas"
                text ="If you are looking for a hike that's a little more challenging but still good for a beginner mountaineer, 
                check out Mt. Daguldul in San Juan, Batangas. You'll start your hike from the beach and pass though the tropical forest,
                different rock formations, and samll streams. There's a small store halfway up thetrail where you can take a break and drink
                buko juice, and through the summit itself may not have the best view, the breeze is fantastic. Once you've made it back down, 
                head straight to the beach for a refreshing well-deserved swim."
                img1={MountainImg3}   
                img2={MountainImg4}  
            />
                    

        </div>
    )
}

export default Destination;