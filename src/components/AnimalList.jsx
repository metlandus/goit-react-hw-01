import React from 'react'

function AnimalList({ friends }) {
    return (
        <ul>
            {friends.map((friend, id) => (
                <li key={id}>
                    <img src={friend.avatar} alt="avatar" />
                    <p>{friend.name}</p>
                    <p>{friend.isOnline ? 'online' : 'offline'}</p>
                </li>
            ))}
        </ul>
    )
}

export default AnimalList;