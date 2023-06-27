import React from 'react'

const ProfileHome = (props:any) => {
  return (
    <div className="p-4">
      <h1 className="m-2 py-2 px-4 bg-gray-200 text-xl rounded-xl">Name: {props.user.name}</h1>
      <h1 className="m-2 py-2 px-4 bg-gray-200 text-xl rounded-xl">Email: {props.user.email}</h1>
      <h1 className="m-2 py-2 px-4 bg-gray-200 text-xl rounded-xl">Address: {props.user.address}</h1>
      <h1 className="m-2 py-2 px-4 bg-gray-200 text-xl rounded-xl">City: {props.user.city}</h1>
      <h1 className="m-2 py-2 px-4 bg-gray-200 text-xl rounded-xl">Owner: {props.user.owner}</h1>
      <h1 className="m-2 py-2 px-4 bg-gray-200 text-xl rounded-xl">Phone: {props.user.phone}</h1>
    </div>
  )
}

export default ProfileHome