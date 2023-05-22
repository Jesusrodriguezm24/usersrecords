import './Header.css';

const Header = ({createUser}) => {
  return (
    <header className='header_container'>
        <div>
            <h1>Users Records</h1>
        </div>
        <div>
            <button onClick={() => createUser()}>Create new User</button>
        </div>
    </header>
  )
}

export default Header