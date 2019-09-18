import React, { Fragment } from 'react'
import {Loading} from './Loading'
import { Link } from 'react-router-dom'

const UserList = ({ loading, users}) => {
  return (
    <Fragment>
      <div className="row">
        <h1 className='text-center'>USER LIST</h1>
      </div>

      <div className="row">
        <div className="col">
          {loading && <Loading />}
          {!loading && users.length <= 0 && <p className='alert alert-danger text-center'>No users found.</p>}
          {!loading && users.length > 0 && 
            <ul className="list-group">
              {users.map(item => {
                return (
                  <li key={item._id} className='list-group-item mt-2'>
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-8 d-flex justify-content-between align-items-center">
                        <b>Name:</b> {item.name} {item.lastname} <small>{item.age} years old</small>
                      </div>
                      <div className="col-md-4 d-flex justify-content-end">
                        <Link to={`/user/edit/${item._id}`} className="btn btn-success d-block d-md-inline-block">
                          Edit
                        </Link>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          }
        </div>
      </div>
    </Fragment>
  )
}

export default UserList