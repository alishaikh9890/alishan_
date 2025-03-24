import React, { use, useContext } from 'react'
import {UserContext} from '../context/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)

  return (
    <div>this is {user}</div>
  )
}

export default Profile