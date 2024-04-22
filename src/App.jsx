
import './App.css'

function App() {

  const handleAdd = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email)
    const user = { name, email }
    console.log(user)
    fetch('http://localhost:5000/user/', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('Users Added Success')
          e.target.reset()
        }
      })
  }
  return (
    <>

      <h1>Simple Curd</h1>
      <form onSubmit={handleAdd}>

        <input type="text" name='name' placeholder='name' />
        <br />
        <input type="email" name="email" id="" placeholder='email' />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
