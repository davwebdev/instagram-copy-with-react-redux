import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectPosts } from '../../store/slices/postsSlice/postsSlice';
import { selectSearch } from '../../store/slices/searchSlice/searchSlice';
import Post from '../Post/Post';

function Posts() {
    const posts = useSelector(selectPosts);
    const search = useSelector(selectSearch);

    const dispatch = useDispatch(); 
    useEffect(() => {
        if(!posts.data.length) {
            dispatch(fetchPosts())
        }
    },[]);

    return(
        <div className='posts'>
            {
                posts.data.filter(el => el.username.includes(search)).map(el => <Post key={el.id} id={el.id} username={el.username} disc={el.disc} img={el.img} likedNumber={el.likedNumber} comments={el.comments} commentId={el.comments.id}/>)
            }
        </div>
    )
}

export default Posts