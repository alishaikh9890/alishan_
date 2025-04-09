import React from 'react'

const InputBox = ({changeAmount, placeholder, amount}) => {
  return (
    <div>
        <input type="number"
        placeholder={placeholder}

        value={amount}
        className='dark:bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500'
        onChange={changeAmount} />
    </div>
  )
}

export default InputBox