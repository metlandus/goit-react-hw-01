import React from 'react'

function AnimalList({ name, isOnline, avatar }) {
    return (
                <li>
                    <img src={avatar} alt="avatar" />
                    <p>{name}</p>
                    <p>{isOnline ? 'online' : 'offline'}</p>
                </li>
    )
}

export default AnimalList;