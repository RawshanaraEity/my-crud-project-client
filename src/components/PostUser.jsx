

const PostUser = () => {

    const handlePostUser = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,email,password)

        const myData = {
            name,email,password
        }
        console.log(myData)

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })

    }
    return (
        <div>
            <h2>User</h2>

            <form onSubmit={handlePostUser}>
                <input type="text" name="name"  />
                <br />
                <input type="email" name="email"  />
                <br />
                <input type="password" name="password"  />
                <br />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default PostUser;