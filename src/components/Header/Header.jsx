import './Header.css';

const Header = ({createUser}) => {
  return (
    <header className='header_container'>
        <div className='header_title'>
            <h1>Users Records</h1>
        </div>
        <div className='btn_create'>
            <button onClick={() => createUser()}>
              <i className="fa-solid fa-plus"></i><p>Create new User</p>
            </button>
        </div>
    </header>
  )
}

export default Header