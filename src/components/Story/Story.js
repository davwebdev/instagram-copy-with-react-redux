import React, { useState } from 'react';
import story from '../../images/storyImages';
import StoryMaket from '../StoryMaket/StoryMaket';
import './Story.css'

function Story() {
    const storyInf = [
        {
            id: 0,
            img: story.storyImage1,
            name: 'Joe',
        },
        {
            id: 1,
            img: story.storyImage2,
            name: 'Mike',
        },
        {
            id: 2,
            img: story.storyImage3,
            name: 'Mark',
        },
        {
            id: 3,
            img: story.storyImage4,
            name: 'Donald',
        },
        {
            id: 4,
            img: story.storyImage5,
            name: 'Michael',
        },
        {
            id: 5,
            img: story.storyImage6,
            name: 'Bell',
        }
    ]
    return(
        <div className='story'>
            {
                storyInf.map(user => <StoryMaket name={user.name} img={user.img} key={user.id} />)
            }
        </div>
    )
}

export default Story