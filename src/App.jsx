import './App.css'
import ProfileCard from './components/ProfileCard'
import userData from './data/userData.json'
import AnimalList from './components/AnimalList'
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
            </div>
        </>
    );
}

export default App

