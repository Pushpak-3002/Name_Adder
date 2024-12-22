import React from 'react'
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"




const List = ({ text, updateMode, deleteName }) => {

    return (
        <div className='name'>
            <div className='text'>{text}</div>
            <div className='icons'>
                <BiEdit className='icon' onClick={updateMode} />
                <AiFillDelete className='icon' onClick={deleteName} />
            </div>
        </div>
    )
}

export default List


