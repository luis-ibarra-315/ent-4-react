import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './styles/userForm.css';


const UserForm = ({createUser, updateUser, editUser, setUpdateUser, isOpen, setIsOpen}) => {
    const{handleSubmit, register, reset } = useForm();

    useEffect(() => {
        if (updateUser){
            reset(updateUser);
            setIsOpen(true);
        }
    },[updateUser]);

    const submit = data => {
        if(updateUser){
          editUser('users', data, updateUser.id);
          setUpdateUser();
        } else {
            createUser('users',data);
        }
        setIsOpen(false);
        reset({
            'feirst_name ': '',
            'last_name'  : '',
            email        : '',
            password     : '',
            birthday     : '',
        });
    }

const hendleClose = ()=>{
   setIsOpen(false);
   setUpdateUser();
   reset({
    'feirst_name ': '',
    'last-name'  : '',
    email        : '',
    password     : '',
    birthday     : '',
});
}

    return (
        <div className={`form--back ${isOpen && 'active'}`}>
            <form className='form' onSubmit={handleSubmit(submit)}>

                <button onClick={hendleClose} type= 'button'className='form--close'>x</button>
                <h2 className='form--title'>user form </h2>
                <div className='form--item'>
                 <label htmlFor='first_name'>First-Name</label> 
                <input {...register('first_name')} id='feirst_name'type='text'/>
                </div> 
                <div className='form--item'>
                 <label htmlFor='last_name'>Last-Name</label> 
                <input {...register('last_name')}  id='last_name'type='text'/>
                </div>
                <div className='form--item'>
                 <label htmlFor='email'>Email</label> 
                <input {...register('email')} 
                id='email'type='text'/>
                </div>
                <div className='form--item'>
                 <label htmlFor='password'>Password</label> 
                <input {...register('password')}  id='password'type='password'/>
                </div>
                <div className='form--item'>
                 <label htmlFor='birthday'>Birthday</label> 
                <input {...register('birthday')}  id='birthday'type='date'/>
                </div>
                <button className='form--btn'>submit</button>
            </form>
        </div>
    );
}

export default UserForm;
