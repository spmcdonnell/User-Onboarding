import React from 'react';

import User from './User';

function UserList({ users }) {
    return (
        <div className="user-list">
            {users.map(user => (
                <User key={user.id} user={user} />
            ))}
        </div>
    );
}

export default UserList;
