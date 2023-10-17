import { useLoaderData } from "react-router-dom";


const UpdateData = () => {
    const singleData = useLoaderData()
    console.log(singleData)

    const handleUpdate = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,email,password)
        const updateData = {
            name,email,password
        }
        console.log(updateData)

        fetch(`http://localhost:5000/users/${singleData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }


    return (
        <div>
           <h1>update</h1> 
           <form onSubmit={handleUpdate}>
                <input type="text" defaultValue={singleData?.name} name="name"  />
                <br />
                <input type="email" defaultValue={singleData?.email} name="email"  />
                <br />
                <input type="password" defaultValue={singleData?.password} name="password"  />
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateData;