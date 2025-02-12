import Create from "./components/Create"
import Display from "./components/Display"
import Edit from "./components/Edit"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return <div>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Create></Create>}></Route>
        <Route path="/display" element={<Display></Display>}></Route>
        <Route path="/edit" element={<Edit></Edit>}></Route>
      </Routes>

    </BrowserRouter>
  </div>
}

export default App