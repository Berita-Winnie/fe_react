import React from 'react'

const UserProfile = (props) => {
  return (
    <div style={{ boder: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h1 syle={{ color: 'blue' }}>{props.name}</h1>
      <p>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p>{props.bio}</p>
    </div>
  )
}

export default UserProfile
