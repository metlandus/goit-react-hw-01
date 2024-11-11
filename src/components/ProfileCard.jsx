import React from 'react'

function ProfileCard({ name, tag, location, stats, image }) {
    return (
        <div className='profile-card flex flex-col items-center border-2 rounded-xl border-black w-1/2'>
            <div className="flex flex-col justify-center items-center p-2">
                <img className='rounded-full bg-black/85' width={250} height={250} src={image} alt={`${name}'s avatar`} />
                <p className='text-3xl font-bold  p-2'>{name}</p>
                <p className='text-xl font-semibold text-black/50'>@{tag}</p>
                <p className='text-xl font-semibold text-black/50'>{location}</p>
            </div>
            <div className='w-full'>
                <ul className='flex flex-row bg-black/20 border-t-2 border-black/40 justify-between'>
                    <li className='p-4 flex flex-col items-center border-r-2 border-black/40 w-1/3'>
                        <span className='text-lg font-medium'>Followers </span>
                        <span className='text-lg font-extrabold'>{stats.followers}</span>
                    </li>
                    <li className='p-4 flex flex-col items-center border-r-2 border-black/40 w-1/3'>
                        <span className='text-lg font-medium'>Views </span>
                        <span className='text-lg font-extrabold'>{stats.views}</span>
                    </li>
                    <li className='p-4 flex flex-col items-center w-1/3'>
                        <span className='text-lg font-medium'>Likes </span>
                        <span className='text-lg font-extrabold'>{stats.likes}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileCard;

