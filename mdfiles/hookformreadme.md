//➡️1
import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}

//➡️Apply validation
// email reg =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}
//➡️Handle errors
import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      {errors.firstName?.type === 'required' && "First name is required"}
      
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required</p>}

      <input {...register("mail", { required: "Email Address is required" })} />
      <p>{errors.mail?.message}</p>
      
      <input type="submit" />
    </form>
  );
}