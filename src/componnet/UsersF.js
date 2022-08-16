import React, {useEffect, useState} from 'react'

const UsersF = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("").then((response) => {
            response.json.then((data)=> {
                setUsers(data)
                console.log(date)
            })
        })
    }, [])

  return (
    <div>
      {users.map((iteem, id) => {
        return (
            <div key={id}>
                <h1>Title :{iteem.title}</h1>
            </div>
        )
      })}
    </div>
  )
}

export default UsersF
