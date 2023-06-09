
import { createUser } from './services/createUser';
import Header from './components/Header/Header'
import { useEffect, useState } from 'react';
import { getAllUsers } from './services/getAllUsers';
import UsersList from './components/UsersList/UsersList';
import Modal from './components/Modal/Modal';
import UsersForm from './components/UsersForm/UsersForm';
import { editUser } from './services/editUser';
import { deleteUser } from './services/deleteUser';
import Footer from './components/Footer/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteUserConfirm from './components/DeleteUserConfirm/DeleteUserConfirm';

import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [editUserData, setEditUserData] = useState(null);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const [onDeleteUser, setOnDeleteUser] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState(0);
  const [fullUserName, setFullUserName] = useState("");

  const loadUsers = async () => {
    const usersData = await getAllUsers();
    setUsers(usersData)
  }

  const handleCreateUser = () => {
    setIsVisibleModal(true);
  }

  const handleSend = async (data) => {
    if (data.id) await editUser(data.id, data);
    else await createUser(data);

    await loadUsers();
    setIsVisibleModal(false);
    setEditUserData(null);
  }

  const handleEditUser = async (dataUser) => {
    setIsVisibleModal(true);
    setEditUserData(dataUser);
  } 

  const handleCloseModal = () => {
    setIsVisibleModal(false);
    setEditUserData(null);
    setOnDeleteUser(false);

  }

  const handleConfirmDelete = async () => {
       await deleteUser(deleteConfirmId);
       await loadUsers();
       setIsVisibleModal(false);
       setOnDeleteUser(false);

  }

  const handleDeleteUser = async (id, nameUser) => {
    setFullUserName(nameUser);
    setOnDeleteUser(true);
    setIsVisibleModal(true);
    setDeleteConfirmId(id);

  }

  useEffect(() => {
   
    loadUsers();
  }, []);


  return (

    <section className='app_container'>
      <ToastContainer />

      <Header createUser={handleCreateUser}/>

      <UsersList users={users} onEditUser={handleEditUser} deleteUser={handleDeleteUser}/>

      <Modal isVisible={isVisibleModal}>

       {!onDeleteUser &&    <UsersForm onCloseModal={handleCloseModal} 
                              onSubmit={handleSend}
                              initialData={editUserData}
                            />}                    
                                    
        {onDeleteUser &&    <DeleteUserConfirm deleteConfirm={handleConfirmDelete}
                              onCloseModal={handleCloseModal}
                              fullUserName={fullUserName}
                            />}
                            
      </Modal>

      <Footer/>
    </section>
  )
}

export default App
