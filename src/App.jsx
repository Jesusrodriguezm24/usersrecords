

import Header from './components/Header/Header'

import { useEffect, useState } from 'react';
import { getAllUsers } from './services/getAllUsers';
import UsersList from './components/UsersList/UsersList';



import './App.css'
import Modal from './components/Modal/Modal';
function App() {
  const [users, setUsers] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const handleCreateUser = () => {
    setIsVisibleModal(true);

  }

  useEffect(() => {
    const loadUsers = async () => {
      const usersData = await getAllUsers();
      setUsers(usersData)
    }
    loadUsers();
  }, [])
  
  return (


    <section className='app_container'>

      <Header createUser={handleCreateUser}/>

      <UsersList users={users}/>

      <Modal isVisible={isVisibleModal}>

        <form className='user_form'>
          <div>
            <h2 className='user_title'>New user</h2>
            <button type='button' className='user_form_btn_close'>X</button>
          </div>

          <div className='form_input_container'>
            <label htmlFor="nameId" className='user_form_label'>First Name: </label>
            <input type="text" placeholder=' Jesus' id='nameId'/>
          </div>

          <div>
            <label htmlFor="lastNameId" className='user_form_label'>Last Name: </label>
            <input type="text" placeholder=' Rodriguez' id='LastNameId'/>
          </div>
            <label htmlFor="emailId" className='user_form_label'>Email: </label>
            <input type="email" placeholder=' example@mail.com' id='emailId'/>

          <div>
            <label htmlFor="passwordId" className='user_form_label'>Password: </label>
            <input type="password" placeholder=' ********' id='passwordId'/>
          </div>

          <div>
            <label htmlFor="birthdayId" className='user_form_label'>Birthday: </label>
            <input type="date" id='birthdayId'/>
          </div>

          <div>
            <button type="submit">Add new User</button>
          </div>

        </form>

      </Modal>
      
       



    </section>
  )
}

export default App
