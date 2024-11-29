import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Products from "./components/Products"
import Shop from "./components/Shop"
import TopBar from "./components/TopBar"
import ProductContextProvider from "./store/product-store"

const App = ()=>{


    return <ProductContextProvider>
            <TopBar></TopBar>
             <NavBar></NavBar>
             {/* <Products></Products>
             <Shop></Shop> */}
             <Outlet></Outlet>
             <Footer></Footer>
            </ProductContextProvider>

}


export default App