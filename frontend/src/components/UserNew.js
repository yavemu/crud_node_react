import React, { Fragment, useState } from 'react'
import axios from 'axios'

import UserForm from './UserForm';
import { URL_API } from './utils'

const UserNew = (props) => {
  const [name,setName] = useState('')
  const [lastname,setLastname] = useState('')
  const [age,setAge] = useState('')
  const [validationError,setValidationError] = useState(false)

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
    if (!name || !lastname || !age ) {
      setValidationError(true)
    } else {
      const user = {
        name,
        lastname,
        age
      }

      axios.post(`${URL_API}/users/create`, user)
        .then(res => {
          ;
          ;
          props.history.push('/')
        })
    }
  }

  return (
    <Fragment>
      <h1 className='text-center'>NEW USER</h1>
      <UserForm
        onSubmit={onSubmit}
        onChange={onChange}
        validationError={validationError}
        name={name}
        lastname={lastname}
        age={age}
      />
    </Fragment>
  );
};

export default UserNew