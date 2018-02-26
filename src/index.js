import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {

    return user.firstName + " " + user.lastName;
}

const user = {
    firstName: 'Talha',
    lastName: 'Sahin'
}

const element = (
    <h1>Welcome, {formatName(user)}!</h1>
);
ReactDOM.render(
    element, document.getElementById('root')

);