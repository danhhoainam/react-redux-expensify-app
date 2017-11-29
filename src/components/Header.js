import React from 'react';
import { NavLink } from 'react-router-dom';

// Header is on every pages
const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;