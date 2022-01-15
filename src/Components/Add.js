import React from "react";

export default class Add extends React.Component{
    render(){
        return(
            <div className="input">
                <input type="text" />
                <button onClick={this.props.additem}>Add</button>
            </div>
        )
    }
}