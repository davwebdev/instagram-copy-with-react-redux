import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewPost } from '../../store/slices/postsSlice/postsSlice';
import { addNewPostInProfile, selectUsers } from '../../store/slices/usersSlice/usersSlice';
import './AddNewPost.css'

function AddNewPost() {
    const formRef = useRef(null)
    const navigate = useNavigate()
    const { initialUser } = useSelector(selectUsers)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (formRef.current[0].value) {
            const newPost = {
                id: new Date().getTime().toString(),
                username: initialUser.username,
                img: formRef.current[0].value,
                disc: formRef.current[1].value,
                likedNumber: Math.floor(Math.random() * 100000),
                comments: [],
            }

            dispatch(addNewPost(newPost))
            dispatch(addNewPostInProfile(newPost))

            formRef.current[0].value = '';
            formRef.current[1].value = '';

            navigate('/inst')
        }

    }
    return (
        <div className='addnewpost'>
            <form ref={formRef} onSubmit={handleSubmit}>
                <h1>Add New Post</h1>
                <input type='text' placeholder='Src'/>
                <input type='text' placeholder='Discription'/>
                <button>Add Post</button>
            </form>
        </div>
    )
}

export default AddNewPost