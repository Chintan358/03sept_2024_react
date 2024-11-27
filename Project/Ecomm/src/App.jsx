import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Products from "./components/Products"
import Shop from "./components/Shop"
import TopBar from "./components/TopBar"

const App = ()=>{


    return <><TopBar></TopBar>
             <NavBar></NavBar>
             {/* <Products></Products>
             <Shop></Shop> */}
             <Outlet></Outlet>
             <Footer></Footer>
    </> 

}


export default App