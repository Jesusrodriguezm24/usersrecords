import './UsersList.css';

const UsersList = ( { users, onEditUser, deleteUser } ) => {
  
    if (!users.length) return <p>No registered users</p>

    return (
        <ul>
            {users.map(user => <li key={user.id}>
                    <section>
                        <h2>{`${user.first_name} ${user.last_name}`}</h2>
 
                        <h3>EMAIL</h3>
                        <p>{user.email}</p>
 
                        <h3>BIRTHDAY</h3>
                        <p>{user.birthday}</p>

                        <div>
                            <button onClick={()=>deleteUser(user.id)}>Delete</button>
                            <button onClick={()=>onEditUser(user)}>Edit</button>
                        </div>
                    </section>
                
            </li>)}
        </ul>
    )
}

export default UsersList