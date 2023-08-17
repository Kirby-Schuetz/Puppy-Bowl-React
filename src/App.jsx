import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import AllPlayers from "./components/AllPlayers"
import SinglePlayer from "./components/SinglePlayer"


function App() {

  return (
    <>
   <div id="container">
    <h1>Welcome to the Puppy Bowl!</h1>
    <div id="navbar">
    <Link to="/allplayers">View All Player</Link>
    <div></div>
    <Link to="/singleplayer">View Player</Link>
    {/* <Link to="/">Home</Link> */}
    </div>
<div id="main-section">
  <Routes>
    <Route path="/allplayers" element={<AllPlayers />} />
    <Route path="/singleplayer" element={<SinglePlayer />} />
  </Routes>
</div>
   </div>

    </>
  )
}

export default App
