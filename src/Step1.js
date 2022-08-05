import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "./components/MainContainer";
import { Input } from "./components/Input";
import { Form } from "./components/Form";

export const Step1 = () => {
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/step2");
  };
  return (
    <MainContainer>
      <h2>Step 1</h2>
      <Form>
        <Input
          {...register("firstName", { required: true })}
          type="text"
          label="First Name"
        />
        <Input
          {...register("lastName", { required: true })}
          type="text"
          label="Last Name"
        />
        <button type="submit">Next</button>
      </Form>
    </MainContainer>
  );
};
