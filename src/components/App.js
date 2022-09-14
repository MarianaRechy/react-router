import {Routes, Route, Link} from "react-router-dom";
import Characters from "../Pages/Characters";
import Episodes from "../Pages/Episodes";
import HomePage from "../Pages/HomePage";
import Location from "../Pages/Location";
import CharactersDetail from "../Pages/CharacterDetail";


function App() {
    return(
        <div>
        <div>
        <nav className= "charactersNav">
        <Link to='/'>Home</Link>
        <Link to='/characters'>Characters</Link>
        <Link to='/locations'>Locations</Link>
        <Link to='/episodes'>Episodes</Link>
        </nav>
        </div>
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="characters" element={<Characters />}></Route>
                <Route path="characters/:characterid" element={<CharactersDetail />}></Route>
                <Route path="locations" element={<Location/>}></Route>
                <Route path="episodes" element={<Episodes/>}></Route>
            </Routes>
        </div>
        </div>
    )
}

export default App;