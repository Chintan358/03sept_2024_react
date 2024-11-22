import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import "./App.css"
import CreatePost from "./components/CreatePost"
import ListPost from "./components/ListPost"
import { useState } from "react"
import PostListContextProvider from "./store/postlist-store"
import { Outlet } from "react-router-dom"

const App = ()=>{


  const [selectedTab , setSelectedTab] = useState("Home")

  return <div className="item-container">
  <PostListContextProvider>
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
      <div className="content">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
  </PostListContextProvider>
  </div>
}


export default App