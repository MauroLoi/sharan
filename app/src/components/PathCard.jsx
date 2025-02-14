import React from 'react'

const PathCard = ({ title, description, image }) => {
    return (
        <>
            <div className='border-solid border-2 rounded-md w-2/6'>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </>

    )
}

export default PathCard