import React from 'react';
import './App.css';
import { NavLink, Route, Redirect } from 'react-router-dom';
// Component for routing 
import Home from './views/home/Home';
import BookTicket from './views/book-ticket/BookTicket';

function App() {
  return (
    <div>
      <div className="App-intro">
        <Route path='/booking' component={BookTicket} />
        <Redirect to='/booking' />
      </div>
      <div className="footer">
      </div>
    </div>
  );
}

export default App;
