import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { URL_API } from './utils'
import UserList from './UserList'

const User = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
      axios.get(`${URL_API}/users/list`)
        .then(response => setUsers(response.data.user)
        )
    setLoading(false);
  }, [users]);

  return (
    <Fragment>
      <UserList loading={loading} users={users}/>
    </Fragment>
  )
}

export default User