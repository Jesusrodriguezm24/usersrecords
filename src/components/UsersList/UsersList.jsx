import './UsersList.css';

const UsersList = ( { users } ) => {
  
    if (!users.length) return <p>No registered users</p>

    return (
        <ul>
            {users.map(user => <li key={user.id}>{user.first_name}</li>)}
        </ul>
    )
}

export default UsersList