import React, { Component } from 'react'

export default class UsersC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {users: ["hello"]}
    }
    componentDidMount() {
        fetch(" https://jsonplaceholder.typicode.com/users").then((res)=>{
            res.json().then((name)=> {
                console.log(name);//getting data
                this.setState({users: name})
            })
        }).catch((error) => {
            console.log(error)
        })
    }
    
  render() {
    return (
      <div>
        {/* <h1>{this.state.users}</h1> */}
        {this.state.users.map((item) => {
            return (
                <div>
                    <h2>Nme {item.name}</h2>
                    <h2>Web {item.name}</h2>
                </div>
            )
        })}
      </div>
    )
  }
}
