import React, {Component} from "react";

class Box extends Component{
	render() {
		return(
            <div style={{ display: "inline-block", backgroundColor: "lightgrey", width : "21.3% ",marginLeft:"3%"}}>
                <img src={this.props.taswira} style={{width : "100%"}} />
				<p>{this.props.name}</p>
				<p>{this.props.des1}</p>
				<p>{this.props.des2}</p>
			</div>
        );
	}
}

export default Box;