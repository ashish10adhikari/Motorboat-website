import React from 'react'
import { useParams } from 'react-router-dom'

const EditPackage = () => {
    const {id} = useParams();

  return (
    <div>EditPackage</div>
  )
}

export default EditPackage