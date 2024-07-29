'use client';
import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const override = {
    display : 'block',
    margin :'100px auto'
}

const LoadingPage = ({ loading }) => {
  return (
    <ClipLoader
        color='#3b82f6'
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
      />
  )
}

export default LoadingPage;