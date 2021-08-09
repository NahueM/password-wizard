/* eslint-disable react/display-name */
import {forwardRef} from 'react'

const Button = forwardRef(({ onClick, href, type, isDisabled, text }, ref) => {
    return (
        <button 
            href={href} 
            onClick={onClick} 
            ref={ref}
            type={type} 
            disabled={isDisabled} 
            className="w-full py-2 px-4 border 
            border-transparent shadow-sm font-medium rounded-md text-white 
            bg-primary disabled:bg-gray-400 hover:bg-red-700 sm:w-40 md:w-52 text-lg "
        >
            {text}
        </button>
    )
  })
  

export default Button
