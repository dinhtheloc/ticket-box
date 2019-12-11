import React from 'react';
import './App.css';
import { NavLink, Route, Redirect } from 'react-router-dom';
// Component for routing 
import Home from './views/home/Home';
import BookTicket from './views/book-ticket/BookTicket';

function App() {
  return (
    <div className='nav'>
      <ul>
        <li><NavLink to="/home">Trang chủ</NavLink></li>
        <li><NavLink to="/booking">Đặt vé</NavLink></li>
      </ul>

      <div className="App-intro">
        <Route path='/home' exact component={Home} />
        <Route path='/booking' component={BookTicket} />
        <Redirect to='/booking' />
      </div>
    </div>
  );
}

export default App;
