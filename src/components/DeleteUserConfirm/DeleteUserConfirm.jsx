import './DeleteUserConfirm.css'

const DeleteUserConfirm = ({ deleteConfirm, onCloseModal, fullUserName }) => {
  return (
    <section className='delete_user_confirm_container'>
        <div>

            <h2 className='delete_user_confirm_title'> Delete User</h2>

            <div className='delete_user_confirm_text'>
                <p>Are you sure you want to delete</p>
                <p><em>{fullUserName}</em></p>
            </div>
            

            <div className='btn_delete_user_confirm_controls'>
               <button className='cls_btn_controls' onClick={()=>onCloseModal()}>Cancel</button>
               <button className='cls_btn_controls cls_btn_controls_delete' onClick={()=>deleteConfirm(true)}>Delete</button>
            </div>

        </div>

    </section>
  )
}

export default DeleteUserConfirm