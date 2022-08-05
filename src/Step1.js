import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export const Step1 = () => {
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/step2");
  };
  return (
    <div>
      <h2>Step 1</h2>
      <form>
        <input
          {...register("firstName", { required: true })}
          type="text"
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: true })}
          type="text"
          placeholder="Last Name"
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};
