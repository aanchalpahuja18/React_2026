import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {register, handleSubmit, formState: { errors, isSubmitting }, watch} = useForm();

  async function onSubmit(data) {
    //Creating API like setup
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("Submitting the form data:", data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input type="text" className={errors.firstName ? "input-error" : ""} {...register("firstName", {required: "First name is required", minLength: { value: 3, message: "Minimum Length is atleast 3 characters" } })} />
      {errors.firstName &&  <p className='error-msg'>{errors.firstName.message}</p>}
      <br /> <br />

      <label>Middle Name</label>
      <input type="text" {...register("middleName")} />
      <br /> <br />

      <label>Last Name</label>
      <input type="text" className={errors.lastName ? "input-error": ""} {...register("lastName", {required: "Last name is required", maxLength: {value:6, message: "Maximum Length is atmost 6 characters"}})} />
      {errors.lastName &&  <p className='error-msg'>{errors.lastName.message}</p>}
      <br /> <br />
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting": "Submit"}/>
    </form>
  )
}

export default App
