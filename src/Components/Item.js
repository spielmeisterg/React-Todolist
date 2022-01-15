import React from "react"

class Item extends React.Component{
    constructor(props){
    super(props)
    this.state = { name: props.name, done: props.done, classes: "item"}
    this.done = this.done.bind(this)
    this.remove = this.remove.bind(this)
    }
    done(){
    if(!this.state.done){
        this.setState({done: true})
    }
    else{
        this.setState({done: false})
    }
    }
    remove(){
    this.setState({classes: "item hidden"})
    console.log("hidden now?")
    }
    render(){
    return(
        <div className={this.state.classes}>
        
        <p>{this.state.done ? <strike>{this.state.name}</strike> : this.state.name}</p>
        <button onClick={this.done}>{this.state.done ? "undo" : "done"}</button>
        <button onClick={this.remove}>remove</button>
        </div>
    )
    }
}

export default Item