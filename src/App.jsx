import './App.css'
import ProfileCard from './components/ProfileCard'
import userData from './data/userData.json'
import AnimalList from './components/AnimalList'
import friends from './data/friends.json'
import DataTable from './components/DataTable'

function App() {
    return (
        <>
            <div className='app'>
                <ProfileCard
                    name={userData.username}
                    tag={userData.tag}
                    location={userData.location}
                    image={userData.avatar}
                    stats={userData.stats} />
                <div className='friends-list'>
                    <ul>
                        {friends.map((friend, index) => (
                            <AnimalList
                                key={index}
                                name={friend.name}
                                isOnline={friend.isOnline}
                                avatar={friend.avatar}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default App

