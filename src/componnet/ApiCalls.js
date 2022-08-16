import React, { Component } from 'react'

export default class ApiCalls extends Component {
    constructor() {
        super();
        this.state = {name:"Dan"}
    }
    componentDidMount() {
        console.log("Hiiii")
    }
  render() {
    return (
      <div>
        <h1>Hello </h1>
      </div>
    )
  }
}
