import "./TripStyles.css";
import TripData from "./TripData";
import fImage from "../assets/2.jpg";
import sImage from "../assets/5.jpg";
import tImage from "../assets/8.jpg";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover new destinations using google maps.</p>
            <div className="tripcard">
                <TripData
                    image={fImage}
                    heading="Tour Indonesia"
                    text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian
                    and Pacific oceans. It consists of over 17,000 Islands, including Sumatra, Java, Sulawest and ports of Barneo and
                    New Guinea." 
                />
                <TripData
                    image={sImage}
                    heading="Tour Malaysia"
                    text="Malaysia is a Southest asian country occupying parts of the Malay Peninsula and the island of Borneo. It's
                     known for its beaches, rainforests and mix of Maly Chinese, Indian and European cultural influences." 
                />
                <TripData
                    image={tImage}
                    heading="Tour France"
                    text="France, in Western Europe, encompasses medieval cities, alpine villages and Meditetrranean beaches. Paris,its
                    capital is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower" 
                />
            </div>
        </div>
    )
}

export default Trip;