import React, { Fragment } from "react";
import Todo from "./Todo"
import Add from "./Add"
import items from "./items"

class App extends React.Component{
    constructor(){
    super()
    this.state = {items : items}
    }
    add = (event) => {
        let newItem = {name: event.target.parentElement.children[0].value, done: false}
        this.setState({items : items.push(newItem)})
        console.log(this.state.items)

    }

    render(){
        return(
            <Fragment>
                <h1>Todo list:</h1>
                <Add additem={this.add}/>
                <Todo items={this.state.items}/>
            </Fragment>
        )
    }
}

export default App