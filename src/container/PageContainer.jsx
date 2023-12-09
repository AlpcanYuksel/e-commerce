import React from 'react'

//Sayfanın kenarlarına sarmalama işlemi yapılacak
const PageContainer = ({children}) => {
  return (
    <div className='w-10/12 m-auto'>{children}</div>
  )
}

export default PageContainer