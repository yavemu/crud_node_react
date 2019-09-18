import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { URL_API } from './utils'
import UserList from './UserList'

const User = (props) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      axios.get(`${URL_API}/users/list`)
        .then(response => setUsers(response.data.user)
        )
      setLoading(false);
    }
  }, [users]);

  const deleteUser = (id) => () => {
    axios.delete(`${URL_API}/users/${id}/delete`, { id })
      .then(res => {
        ;
        setLoading(true)
        setUsers([])
      })
  }

  return (
    <Fragment>
      <UserList loading={loading} users={users} deleteUser={deleteUser} />
    </Fragment>
  )
}

export default User