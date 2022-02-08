import './App.css';
import { useState } from 'react';
import useForm from './Hooks/useForm';
import Input from './Components/Input'
import Card from './Components/Card';
import Container from './Components/Container';
import Button from './Components/Button'

function App(){
  const [users, setUsers] = useState([])
  const [form, handleChange, reset]= useForm({
    name:'', 
    lastname:'', 
    email:''
  })
  const submit = e =>{
    e.preventDefault()
    setUsers([
      ...users,
      form,
    ])
    reset()
  }
  return(
    <div style={{marginTop: '15%'}}>
    <Container>
      <Card>  
        <div style={{padding:20}}>
          <form onSubmit={submit}>
            <Input 
                label='Name' 
                name='name' 
                value={form.name} 
                onChange={handleChange} 
                placeholder= 'Name'/>
            <Input 
                label='Last name' 
                name='lastname' 
                value={form.lastname} 
                onChange={handleChange}
                placeholder= 'Last name' />
            <Input 
                label='E-mail' 
                name='email' 
                value={form.email} 
                onChange={handleChange} 
                placeholder= 'E-mail'/>
            <Button>Send</Button>
          </form>
        </div>
        </Card>
        <Card>
          <ul>
            {users.map(e=>
              <li key={e.email}>{`${e.name} ${e.lastname} ${e.email}`} </li>)}
          </ul>
        </Card>
      </Container>
    </div>
  )
}

export default App;
