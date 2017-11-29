import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ExpenseListItem = ({id, description, amount, createAt, note}) => (
    <div>
        <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
        <p>{amount} -  {createAt}</p>
        
    </div>
);

export default ExpenseListItem;