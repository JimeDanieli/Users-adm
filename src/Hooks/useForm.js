import { useState } from "react"

const useForm =(initial)=>{
     //para declarar un estado, se declara una constante que tiene un array, ese array tiene una constante donde se almacena el valor del estado y el segundo es la funcion que se ocupa de actualizar el estado
  const [form, setForm] =useState(initial)
  //se encarga de guardar todos los valores que tengan los campos de form en nuestro form
  //si dejabamos eso en app, funcionaba igual
  const handleChange=(e)=>{
      setForm({
        ...form,
        [e.target.name] : e.target.value
      })
  } 
  const reset=()=>{
      setForm(initial)
  }
  return [ form, handleChange, reset]
}

export default useForm