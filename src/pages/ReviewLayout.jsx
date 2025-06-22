import React from 'react'
import ProductDetail from './ProductDetail'
import { Outlet } from 'react-router-dom'

const ReviewLayout = () => {
  return (
    <div>
      <ProductDetail /> 
      <Outlet />
    </div>
  )
}

export default ReviewLayout
