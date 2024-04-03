import React, { ReactNode } from 'react'

interface CustomModalProps{
    handleClose:any
    children:ReactNode
}

function CustomModal({handleClose,children}:CustomModalProps) {

  return (
    <div onClick={handleClose} className='backdrop-blur-[2px] z-[9999] w-[100dvw] h-[100dvh] absolute top-0 left-0'>
        <div onClick={(e)=>{e.stopPropagation()}}className='p-5 rounded-xl shadow-xl bg-[#383838]  absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2'>
            {children}
            </div>
    </div>
  )
}

export default CustomModal