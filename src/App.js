import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/NavBar';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {

  const [sidebarOpen, setSideBarOpen] = useState (false)
  const openSidebar = () => {
    setSideBarOpen(true)
  };

  const closedSidebar = () =>{
    sidebarOpen(false);
  }

  return (
    <div className="container">
     <Navbar  sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
     <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closedSidebar}/>
     
    </div>
  );
}

export default App;
