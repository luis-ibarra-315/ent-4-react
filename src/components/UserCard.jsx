import React from "react";
import './styles/userCard.css';

const  UserCard = ({ user, deleteUser, setUpdateUser }) => {

    const handleDelete = () => {
        deleteUser('users', user.id );
    }

    const handleEdit = () => {
     setUpdateUser(user);
    }

    return (
        <section className="user">
            <h2 className="user--name">{user.first_name} {user.last_name}</h2>
            <hr className="user--line"/>
                <ul className="user--lidt">
                    <li className="user--item"><span>Email: </span><span>{user.email}</span></li>
                    <li className="user--item"><span>Birthday: </span><span><ion-icon name="gift-outline"></ion-icon>{user.birthday}</span></li>
                </ul>
            <hr className="user--line"/>
            <div className="user--buttons">
                <button  className='user--btn' onClick={handleDelete}>delete</button>
                <button  className='user--btn' onClick={handleEdit}>edit</button>
            </div>
        </section>
    )
}
 
export default UserCard;