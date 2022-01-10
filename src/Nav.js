import React from "react"
import "./Style.css"

class Li extends React.Component{
  render(){
    return <li>{this.props.name}</li>
  }
}
export default class Nav extends React.Component{
  render(){
    return (
    <nav>
      <ul>
        <Li name="home"></Li>
        <Li name="about us"></Li>
        <Li name="contact"></Li>
      </ul>
    </nav>)
  }
}