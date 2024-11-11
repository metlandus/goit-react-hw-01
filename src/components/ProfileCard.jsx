import React from 'react'

function ProfileCard({ name, tag, location, stats, image }) {
    return (
        <div className='profile-card flex flex-col items-center'>
            <div>
                <img src={image} alt={`${name}'s avatar`} />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <ul>
                <li>
                    <span>Followers: </span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views: </span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes: </span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default ProfileCard;

