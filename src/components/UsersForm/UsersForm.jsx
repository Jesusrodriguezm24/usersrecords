
import { useForm } from 'react-hook-form';
import './UsersForm.css';



const UsersForm = ({ onCloseModal, onSubmit, initialData }) => {
  
  const {register, handleSubmit, formState: { errors } } = useForm({defaultValues:initialData});

  const editOrCreate = (data) => {



    if (initialData) onSubmit({id: initialData.id, ...data});
    else onSubmit(data);
  }

  const validatedata = (value) => {
    return /[a-zA-Z]/.test(value) || 'Must have letters';
  };

  return (
    <>
        <form className='user_form' onSubmit={handleSubmit(editOrCreate)}>

          <div className='dv_form_container'>

            <div>
              <h2 className='user_title'>{initialData ? "Edit" : "New"} user</h2>
              <button type='button' className='user_form_btn_close' onClick={()=>onCloseModal()}>
                <i className="fa-solid fa-x"></i>
              </button>
            </div>

            <div className='form_input_container'>
              <label htmlFor="nameId" className='user_form_label'>First Name </label>
              <input type="text" placeholder=' Jesus' id='nameId' name='first_Name' 
              {...register('first_name', { validate: validatedata })}              />
              {errors.first_name && <p style={{color: 'red'}}>{errors.first_name.message}</p>}
            </div>

            <div>
              <label htmlFor="lastNameId" className='user_form_label'>Last Name </label>
              <input type="text" placeholder=' Rodriguez' id='lastNameId' 
              {...register('last_name', { validate: validatedata })}              />
              {errors.last_name && <p style={{color: 'red'}}>{errors.last_name.message}</p>}
            </div>

            <div>
              <label htmlFor="emailId" className='user_form_label'>Email </label>
              <input type="email" placeholder=' example@mail.com' id='emailId' 
                {...register('email', {required: 'required field'})}/>
                {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="passwordId" className='user_form_label'>Password </label>
              <input type="password" placeholder=' ********' id='passwordId' 
              {...register('password', {required: 'required field'})}/>
              {errors.password && <p style={{color: 'red'}}>{errors.password.message}</p>}
            </div>

            <div>
              <label htmlFor="birthdayId" className='user_form_label'>Birthday </label>
              <input type="date" id='birthdayId' 
                {...register('birthday', {required: 'required field'})}/>
                {errors.birthday && <p style={{color: 'red'}}>{errors.birthday.message}</p>}
            </div>

            <div className='btn_submit'>
              <button type="submit">{initialData ? "Save changes" : "Add new user"}</button>
            </div>

          </div>

      </form>
      
    
    </>
    

  )
}

export default UsersForm