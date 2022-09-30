import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import post from '../../images/postImages';
import { deleteAllMessage, selectUsers, sendMessage } from '../../store/slices/usersSlice/usersSlice';
import Message from '../Message/Message';
import './Chat.css'

function Chat() {
    const formRef = useRef()
    const { initialUser } = useSelector(selectUsers)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (formRef.current[0].value) {
            dispatch(sendMessage(formRef.current[0].value))
        }

        formRef.current[0].value = '';
    }
    return(
        <div className='chat'>
            <div className='chat-header'>
                <div className='chat-header-item1'>
                    <img src={post.postUserImage} alt=''/>
                    <b>{initialUser.username}</b>
                </div>
                <div className='chat-header-item2'>
                    <b onClick={() => dispatch(deleteAllMessage())}>Delete All Message</b>
                </div> 

            </div>
            <div className='chat-messages'>
                {
                    initialUser.chat.map((message) => (
                        <Message key={message.id} id={message.id} txt={message.txt} user={message.user} />
                    ))
                }
            </div>
            <div className='chat-form'>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type='text' placeholder='Send Message'/>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Chat