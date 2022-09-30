import React from 'react';
import Posts from '../../components/Posts/Posts';
import Story from '../../components/Story/Story';

function PostsStoryPage() {
    return(
        <div className='container'>
            <Story />
            <Posts />
        </div>
    )
}

export default PostsStoryPage