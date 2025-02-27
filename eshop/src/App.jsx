import Index from "./components/Index"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Payment from "./components/Payment"
const App = ()=>{
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index></Index>}></Route>
      <Route path="/payment" element={<Payment></Payment>}></Route>
    </Routes>
  </BrowserRouter>
  </>
}

export default App