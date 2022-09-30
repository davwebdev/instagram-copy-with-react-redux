import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { deleteMessage } from '../../store/slices/usersSlice/usersSlice';
import './Message.css'

function Message({ txt, user, id, array}) {
    const dispatch = useDispatch()

    return(
        <div className={`${user} message-box`}>
            <span>
            {
                user === 'me' ? <AiOutlineDelete className='message-box-icon' onClick={() => dispatch(deleteMessage({id: id,array: array}))} /> : ''
            }
            </span>
            <p className='text'>{txt}</p>
            <span>
            {
                user === 'bot' ? <AiOutlineDelete className='message-box-icon' /> : ''
            }
            </span>
        </div>
    )
}

export default Message