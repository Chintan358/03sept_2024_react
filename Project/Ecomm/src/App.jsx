import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Products from "./components/Products"
import Shop from "./components/Shop"
import TopBar from "./components/TopBar"
import ProductContextProvider from "./store/product-store"
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/style.min.css'
import 'font-awesome/css/font-awesome.min.css';

const App = () => {


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