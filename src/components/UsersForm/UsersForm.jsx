
import { useForm } from 'react-hook-form';
import './UsersForm.css';


const UsersForm = ({ onCloseModal, onSubmit, initialData }) => {
  
  const {register, handleSubmit} = useForm({defaultValues:initialData});

  const editOrCreate = (data) => {
    if (initialData) onSubmit({id: initialData.id, ...data});
    else onSubmit(data);
  }

  return (
    <form className='user_form' onSubmit={handleSubmit(editOrCreate)}>

          <div className='dv_form_container'>

            <div>
              <h2 className='user_title'>{initialData ? "Edit" : "New"} user</h2>
              <button type='button' className='user_form_btn_close' onClick={()=>onCloseModal()}>X</button>
            </div>

            <div className='form_input_container'>
              <label htmlFor="nameId" className='user_form_label'>First Name: </label>
              <input type="text" placeholder=' Jesus' id='nameId' {...register('first_name')}/>
            </div>

            <div>
              <label htmlFor="lastNameId" className='user_form_label'>Last Name: </label>
              <input type="text" placeholder=' Rodriguez' id='LastNameId'{...register('last_name')}/>
            </div>

            <div>
              <label htmlFor="emailId" className='user_form_label'>Email: </label>
              <input type="email" placeholder=' example@mail.com' id='emailId' {...register('email')}/>
            </div>

            <div>
              <label htmlFor="passwordId" className='user_form_label'>Password: </label>
              <input type="password" placeholder=' ********' id='passwordId' {...register('password')}/>
            </div>

            <div>
              <label htmlFor="birthdayId" className='user_form_label'>Birthday: </label>
              <input type="date" id='birthdayId' {...register('birthday')}/>
            </div>

            <div className='btn_submit'>
              <button type="submit">{initialData ? "Save changes" : "Add new user"}</button>
            </div>

          </div>
          
        </form>
  )
}

export default UsersForm