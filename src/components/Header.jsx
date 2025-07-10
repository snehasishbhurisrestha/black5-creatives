import React from 'react'

const Header = () => {
  return (
    <div className='bg-black'>
      <div className='flex justify-between w-[90%] mx-auto py-5'>
        <div className='flex gap-12'>
            <span className='text-white underline'>Your Account</span>
            <span className='text-white underline'>Your Cart</span>
        </div>
        <div className='flex gap-8'>
            <span className='text-white underline'>Shop Phone Case</span>
            <span className='text-white underline'>Shop Wall Art</span>
            <span className='text-white underline'>Lets Customize</span>
        </div>
      </div>
    </div>
  )
}

export default Header
