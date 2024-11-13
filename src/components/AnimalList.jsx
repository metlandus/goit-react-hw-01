import React from 'react'

function AnimalList({ friends }) {
    return (
        <ul className='flex flex-row items-center justify-center'>
            {friends.map((friend, id) => (
                <li key={id} className='py-4 m-4 w-36 flex flex-col items-center justify-center border-4 border-black/80 rounded-xl'>
                    <img width={100} height={100} src={friend.avatar} alt="avatar" />
                    <p className='text-3xl font-medium'>{friend.name}</p>
                    <p className={`${friend.isOnline ? "text-green-600" : "text-red-600"} font-medium font-xl`}>{friend.isOnline ? 'Online' : 'Offline'}</p>
                </li>
            ))}
        </ul>
    )
}

export default AnimalList;