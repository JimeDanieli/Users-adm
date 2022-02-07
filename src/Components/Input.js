import './Input.css'

const Input= ({label,...rest})=>{
   return(
    <div className='field'>
        <label>{label} </label>
        <input {...rest} />
    </div>
   )
}

/* const Input= ()=>{
    return(
     <div>
         <input 
         name='name' 
         placeholder='Name' 
         value={form.name}
         onChange={handleChange}/>
         <input 
         name='lastname' 
         placeholder='Last name' 
         value={form.lastname}
         onChange={handleChange} />
         <input 
         name='email' 
         placeholder='E-mail' 
         value={form.email}
         onChange={handleChange} />
     </div>
    )
 } a todas estas propiedaddes, las vamos a pasar por el parametro rest */

 export default Input