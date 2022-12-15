import './App.css'
import React from 'react';
import NavBar from './Components/Navbar/NavBar'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Footer  from './Components/Footer/Footer';
import {action,originals,comedy,animation,horror} from  './urls'

function App() {
  return(
    <div className='App'>
      <NavBar/>
      <Banner/> 
      <RowPost url = {originals} title="Netflix Originals" />
      <RowPost url = {action} title="Action" isSmall />
      <RowPost url = {comedy} title="Comedy" isSmall />
      <RowPost url = {animation} title="Animation" isSmall />
      <RowPost url = {horror} title="Horror" isSmall />
      <Footer/>
    </div>

  )
}


export default App;
