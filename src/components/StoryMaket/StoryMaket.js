import React from 'react';

function StoryMaket(props) {
    return(
        <div>
            <img src={props.img} alt='' />
            <p>{props.name}</p>
        </div>
    )
}

export default StoryMaket