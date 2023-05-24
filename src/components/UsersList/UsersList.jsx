import UserCard from "../UserCard/UserCard";

import './UsersList.css';



const UsersList = ( { users, onEditUser, deleteUser } ) => {
  
    if (!users.length) return <p>No registered users</p>

    return (
        <section className="list_container">
            <ul className="list_card_container">
                {users.map((user) => <li key={user.id} className="list_card_item">
                        <UserCard userData={user} onEditUser={onEditUser} deleteUser={deleteUser}/>
                                </li>)}
            </ul>
        </section>
    )
}

export default UsersList