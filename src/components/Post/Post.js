import React, { useRef } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { TbSend } from 'react-icons/tb';
import { BsSave, BsEmojiSmile } from 'react-icons/bs';
import post from '../../images/postImages';
import './Post.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, sendComment } from '../../store/slices/postsSlice/postsSlice';
import { selectUsers } from '../../store/slices/usersSlice/usersSlice';
import withLessMore from "../../hoc/withLessMore"

function Post({ id, disc, username, img, likedNumber, comments, show, toggleShow}) {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const { initialUser } = useSelector(selectUsers)
    const formRef = useRef(null)
     
    const handleSubmit = (e) => {
        e.preventDefault()
        if(formRef.current[0].value) {
            dispatch(sendComment({id: id,text: formRef.current[0].value,user: initialUser.username}))
        }
        formRef.current[0].value = ''
    }
    return(
        <div className='post'>
            <div className='postHeader'>
                <div className='postHeader-item1'>
                    <img src={post.postUserImage} alt=''/>
                    <h3>{username}</h3>
                </div>
                <div className='postHeader-item2'>
                    <a href=''><BsThreeDots /></a>
                </div>
            </div>
            <div className='postImage'>
                <img src={img} alt=''/>
            </div>
            <div className='postIcon'>
                <div className='postIcon-item1'>
                    <a href=''><FiHeart /></a>
                    <a href=''><FaRegComment /></a>
                    <a href=''><TbSend /></a>
                </div>
                <div className='postIcon-item2'>
                    <a href=''><BsSave /></a>
                </div>
            </div>
            <div className='postLikes'>
                <h3>{likedNumber} Like</h3>
                <p>Hour Ago</p>
            </div>
            <div className='postDiscription'>
                <b>{username}</b>
                <span>{disc}</span>
            </div>
            <h4
                style={{
                cursor: 'pointer',
                marginLeft: '10px', 
                }}
                onClick={toggleShow}
            >
                {!show ? 'Open Comments' : 'Close Comments'}
            </h4>
            <div className='comments' style={{display: !show ? 'none' : 'block'}}>
                {
                    comments.map(comment => (
                        <div className='postDiscription' key={comment.id}>
                            <b>{comment.username}</b>
                            <span>{comment.body}</span>
                        </div>
                    ))
                }
            </div>
            <div className='postComment'>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <a href=''><BsEmojiSmile /></a>
                    <input type='text' placeholder='Comment...' />
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default withLessMore(Post)