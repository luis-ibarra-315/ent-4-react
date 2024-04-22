
import { useEffect, useState } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';
import UserForm from './components/UserForm';
import  UserCard from './components/UserCard';

function App() {

  const urlBase = 'https://users-crud.academlo.tech/';

  const [isOpen,setIsOpen] = useState(false);
  const [updateUser, setUpdateUser] = useState();
  const [users, getUsers, createUser, deleteUser, editUser] = useCrud(urlBase);

  useEffect(() => {
    const path = 'users';
    getUsers(path);
  }, [])

   console.log (users);

   const handleOpen = () =>{
    setIsOpen(true);
   }

  return (
    <div className='app'>
      <header className='app--header'>
        <h1 className='app--title'>Crud Users</h1> 
        <button onClick={handleOpen}>create user</button>
      </header>
     
      <UserForm
        createUser={createUser}
        updateUser={updateUser}
        editUser={editUser}
        setUpdateUser={setUpdateUser}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className='app--container'>
        {
          users?.map((user) => (
            <UserCard
              Key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUpdateUser={setUpdateUser}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App;
