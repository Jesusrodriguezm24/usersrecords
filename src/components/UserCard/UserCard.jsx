import './UserCard.css';

const UserCard = ({ userData, deleteUser, onEditUser }) => {
  return (
    <section className='card_container'>
        <h2>{`${userData.first_name} ${userData.last_name}`}</h2>
 
        <h3>EMAIL</h3>
        <p>{userData.email}</p>
 
        <h3>BIRTHDAY</h3>
        <p>{userData.birthday}</p>

        <div>
            <button onClick={()=>deleteUser(userData.id)}>Delete</button>
            <button onClick={()=>onEditUser(userData)}>Edit</button>
        </div>
    </section>
  )
}

export default UserCard