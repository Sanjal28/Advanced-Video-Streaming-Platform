import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex shadow-sm p-2'>
        <img
          className="h-8 ml-2"
          alt="user-icon"
          src="https://banner2.cleanpng.com/20180622/tqt/aazen4lhc.webp"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage