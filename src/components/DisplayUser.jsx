import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const DisplayUser = () => {
    const users = useLoaderData()

    const [updatedUser, setUpdatedUser] = useState(users)
    // console.log(users)

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/users/${id}`, {

            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('deleted successfully')
            }
            const filterData = updatedUser.filter(item => item._id !== id)
            setUpdatedUser(filterData)

        })
    }

    return (
        <div>
            <h1>users: {updatedUser.length}</h1>
            {
                updatedUser.map(user => (
                    <div key={user._id}>
                        <h2>{user.name}</h2>
                        <h4>{user.email} </h4>
                        <button onClick={() => handleDelete(user._id)} type="submit">Delete</button>
                        <Link to={`/users/${user._id}`}>
                        <button type="submit">Update</button>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default DisplayUser;