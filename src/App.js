import React, { useState } from 'react';

import LoginForm from './LoginForm';
import UserList from './UserList';

import './App.css';

function App() {
    const [users, setUsers] = useState([]);

    function addUser(user) {
        setUsers([...users, user]);
    }

    return (
        <div className="App">
            <LoginForm addUser={addUser} />
            <UserList users={users} />
        </div>
    );
}

export default App;
