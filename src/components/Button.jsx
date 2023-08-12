import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`w-[fit-content] py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-xl ${styles}`}>
      Get Started
    </button>
  )
}

export default Button