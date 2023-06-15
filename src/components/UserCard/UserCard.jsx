import './UserCard.css';

const UserCard = ({ userData, deleteUser, onEditUser }) => {
  return (
    <section className='card_container'>
        <h2>{`${userData.first_name} ${userData.last_name}`}</h2>
 
        <h3>EMAIL</h3>
        <p>{userData.email}</p>
 
        <h3>BIRTHDAY</h3>
        <p><i className="fa-solid fa-gifts gift_icon"></i> {userData.birthday}</p>

        <div className='dv_btns_delete_edit'>
            <button onClick={()=>deleteUser(userData.id, `${userData.first_name} ${userData.last_name}`)}>
              <i className="fa-solid fa-trash-can btn_delete"></i>
            </button>
            <button onClick={()=>onEditUser(userData)}>
            <i className="fa-regular fa-pen-to-square btn_edit"></i>
            </button>
        </div>
    </section>
  )
}

export default UserCard