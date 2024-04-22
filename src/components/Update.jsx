import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loaderUser= useLoaderData()
    // console.log(loaderUser)

    const handleUpdate = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email)
        const updated = {
            name,
            email
        }
        fetch(`http://localhost:5000/users/${loaderUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Successfully Updated')
                }
        })
    }


    return (
        <div>
            <h3>Update information {loaderUser.name} </h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loaderUser?.name} />
                <br />
                <input type="text" name="email" id="" defaultValue={loaderUser?.email}/>
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;