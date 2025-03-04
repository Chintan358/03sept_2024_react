import Index from "./components/Index"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Payment from "./components/Payment"
import Mail from "./components/Mail"
const App = ()=>{
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index></Index>}></Route>
      <Route path="/payment" element={<Payment></Payment>}></Route>
      <Route path="/mail" element={<Mail></Mail>}></Route>
    </Routes>
  </BrowserRouter>
  </>
}

export default App