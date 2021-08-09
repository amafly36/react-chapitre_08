import React from 'react'



import { useForm,  } from "react-hook-form";


const Login = () => {
    const { register, handleSubmit, } = useForm();
    const onSubmit = data => console.log(data);
   
  return (
      
      
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            <input {...register("username", { required: true, maxLength: 15 })} />
            <input {...register("password", { required: true, minLength: 6 })} />
        </label>
      <button type="submit">S'inscrire</button>
      
    </form>
  );
}



export default Login
