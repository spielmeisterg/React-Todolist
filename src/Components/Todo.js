import React from "react"
import "./todo.css"
import Item from "./Item"



export default class Todo extends React.Component{
  render(){
    return (
        this.props.items.map(item => {
          return (<Item name={item.name} done={item.done} />)
        })
    )
  }
}