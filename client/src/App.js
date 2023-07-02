// import Menu from './components/Menu'
// import ShowCard from './components/ShowCard';
import './index.css'
import ShowCart from './components/ShowCart'
import GlobalState from './components/GlobalState'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
// import Filter from './components/Header/Filter'
// import TypeProducts from './components/TypeProducts'
// import ShowInforLine from './components/ShowInforLine'
import Payment from './components/Payment/Payment'
import Admin from './Admin'
import Revenue from './Admin/Revenue/Revenue'
import KingOfFilter from './components/Header/KingOfFilter'
import Global_State from './globalstate';

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Global_State/>} />
          <Route path='/payment' component={Payment} />
          <Route path='/admin' component={Admin} />
          <Route path='/revenue' component={Revenue} />
        </Routes>
      </Router>
    </>
  )
}

export default App
