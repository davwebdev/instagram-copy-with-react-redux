import React from 'react';
import post from '../../images/postImages';
import './Profile.css'
import { AiOutlineInsertRowAbove, AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { delPostInProfile, selectUsers } from '../../store/slices/usersSlice/usersSlice';
import { delPost } from '../../store/slices/postsSlice/postsSlice';


function Profile() {
    const users = useSelector(selectUsers) 
    const dispatch = useDispatch()

    return(
        <div className='profile'>
            <div className='profile-header'>
                <div className='profile-img'>
                    <img src={post.postUserImage} alt=''/>
                </div>
                <div className='profile-name-follow'>
                    <div className='profile-name'>
                        <h2>{users.initialUser.username}</h2>
                    </div>
                    <div className='profile-follow-count'>
                        <span><b>{ users.initialUser.posts.length }</b>публикаций</span>
                        <span><b>434</b>подписчиков</span>
                        <span><b>350</b>подписок</span>
                    </div>
                    <div className='profile-discription'>
                        <b>{users.initialUser.name}</b>
                        <p>{users.initialUser.about}</p>
                    </div>
                </div>
            </div>
            <div className='profile-post-line'>
                <div className='line'></div>
                <div className='line-icon-text'>
                    <AiOutlineInsertRowAbove className='line-icon'/>
                    <b>ПУБЛИКАЦИИ</b>
                </div>
                <div className='line'></div>
            </div>
            <div className='profile-post'>
                {
                    users.initialUser.posts.map(post => <div key={post.id}><AiOutlineDelete className='profile-post-delete-icon' onClick={() => dispatch(delPostInProfile(post.id)) && dispatch(delPost(post.id))} /><img src={post.img} alt=''/></div>)
                }
            </div>
        </div>
    )
}

export default Profile