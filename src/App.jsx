import './App.css'
import ProfileCard from './components/ProfileCard'
import AnimalList from './components/AnimalList'
import DataTable from './components/DataTable'

function App() {
    return (
        <>
            <div className='app'>
                <ProfileCard />
                <AnimalList />
                <DataTable />
            </div>
        </>
    );
}

export default App
