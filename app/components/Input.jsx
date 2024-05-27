import React from 'react'


const Input = ({type , placeholder , value , onChange , className ,disabled}) => {
  return (
    <>
          <input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className={`px-6 border rounded-lg h-[56px] ${className}`}
              disabled={disabled}
          />
    </>
  )
}

export default Input
