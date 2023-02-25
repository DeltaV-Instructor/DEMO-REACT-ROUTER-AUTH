import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


class NavLayout extends React.Component {





  render(){
    return(
      <section>
        <header>
          <nav>
            <h1>React Router</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About Us</NavLink>
            <NavLink to="faq">FAQ</NavLink>
          </nav>
        </header>



        <main>
          <Outlet />
        </main>
      </section>
    );
  }
}

export default NavLayout;