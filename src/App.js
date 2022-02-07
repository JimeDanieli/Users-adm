import './App.css';
import useForm from './Hooks/useForm';
import Input from './Components/Input'
import Card from './Components/Card';
import Container from './Components/Container'

function App(){
  const [form, handleChange]= useForm({name:'', lastname:'', email:''})
  return(
    <div>
    <Container>
      <Card>  
          <form>
            <Input 
                label='Name' 
                name='name' 
                value={form.name} 
                onChange={handleChange} />
            <Input 
                label='Last name' 
                name='lastname' 
                value={form.lastname} 
                onChange={handleChange} />
            <Input 
                label='E-mail' 
                name='email' 
                value={form.email} 
                onChange={handleChange} />
          </form>
        </Card>
      </Container>
    </div>
  )
}

export default App;
