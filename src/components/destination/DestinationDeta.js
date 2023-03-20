import { Component } from "react";
import "./destinationStyle.css";

class DestinationDeta extends Component {
    render() {
        return (
          <>
        <div className={this.props.className}>
          <div className="desc__text">
             <h2>{this.props.heading}</h2>
             <p> {this.props.desc} </p>
          </div>
          <div className="destination__image">
              <img alt='img' src={this.props.img1} />
              <img alt='img' src={this.props.img2} />
          </div>
        </div>
          </>
        )
    }
}

export default DestinationDeta;