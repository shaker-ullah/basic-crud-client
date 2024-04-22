import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUser = useLoaderData()
    const [users, setUsers]= useState(loadedUser )

   
    // console.log(user)

    const handleDeleteUser = id => {
        console.log(id)
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Delete Successfully')
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                }
        })
        
    }

    return (
        <div>
            {loadedUser.length}
            {
                loadedUser.map(user => <p
                    key={user._id}
                >{user.name}
                    {user.email}
                    <Link to={`/update/${user._id}`}>
                        <button>Update</button>
                    </Link>
                    <button
                        onClick={() => handleDeleteUser(user._id)}
                    >X</button>
                </p>)
            }
        </div>
    );
};

export default Users;