import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

import UserForm from './UserForm';
import { URL_API } from './utils'
import { Loading } from './Loading';

const UserEdit = (props) => {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [age, setAge] = useState('')
  const [validationError, setValidationError] = useState(false)

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState('')

  const { id } = props.match.params;

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios.get(`${URL_API}/users/${id}`)
        .then(response => { setUser(response.data.user) })
        .catch(err => props.history.push('/'))
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (user) {
      setLoading(true);
      if (user) {
        setName(user.name)
        setLastname(user.lastname)
        setAge(user.age)
      }
      setLoading(false);
    }
  }, [user]);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'name') setName(value)
    else if (name === 'lastname') setLastname(value)
    else if (name === 'age') setAge(value)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    setValidationError(false)
    if (!name || !lastname || !age) {
      setValidationError(true)
    } else {
      const user = {
        name,
        lastname,
        age,
        id
      }

      axios.put(`${URL_API}/users/${id}/update`, user)
        .then(res => {
          ;
          ;
          props.history.push('/')
        })
    }
  }
  return (
    <Fragment>
      <h1 className='text-center'>EDIT USER</h1>
      {loading && <Loading/>}
      {!loading && user &&
        <UserForm
          onSubmit={onSubmit}
          onChange={onChange}
          validationError={validationError}
          name={name}
          lastname={lastname}
          age={age}
          id={id}
        />}
    </Fragment>
  );
};

export default UserEdit