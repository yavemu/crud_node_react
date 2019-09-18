import React from 'react'

const UserForm = ({
  onSubmit,
  onChange,
  validationError,
  name,
  lastname,
  age,
  id = null,
}) => {
  return (
    <form className="col-md-8 m-3" onSubmit={onSubmit} >
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Name</label>
          <input type="text" name='name' value={name} className="form-control" placeholder="Name" onChange={onChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Lastname</label>
          <input type="text" name='lastname' value={lastname} className="form-control" placeholder="Lastname" onChange={onChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Age</label>
          <input type="number" name='age' value={age} className="form-control" placeholder="Age" onChange={onChange} />
        </div>
      </div>
      {validationError &&
        <p className="alert alert-danger p-3 text-center">
          All fields are required
        </p>
      }
      <button type="submit" className="btn btn-success float-right">
        {id ? 'Edit User' : 'Create User'}
      </button>
    </form>
  )
}

export default UserForm