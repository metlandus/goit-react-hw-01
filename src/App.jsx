import './App.css'
import ProfileCard from './components/ProfileCard'
import userData from './data/userData.json'
import AnimalList from './components/AnimalList'
import friends from './data/friends.json'
import DataTable from './components/DataTable'
import transactions from './data/transactions.json'

function App() {
    return (
        <>
            <ProfileCard
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats} />
            <AnimalList friends={friends} />
            <DataTable transactions={transactions} />
        </>
    );
}

export default App

