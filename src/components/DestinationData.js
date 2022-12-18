import "./DestinationStyles.css";
import {Component} from "react";
import MountainImg from "../assets/5.jpg";
import MountainImg2 from "../assets/6.jpg";
import MountainImg3 from "../assets/7.jpg";
import MountainImg4 from "../assets/8.jpg";



class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className = "des-text">
                    <h2> {this.props.heading} </h2>
                    <p> {this.props.text} </p> 
                </div>

                <div className="image">
                    <img alt="image" src={this.props.img1} />
                    <img alt="image" src={this.props.img2} />
                </div>
            </div> 
        )
    }
}

export default DestinationData;