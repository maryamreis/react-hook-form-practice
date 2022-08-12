import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MainContainer } from "./components/MainContainer";
import { PrimaryButton } from "./components/PrimaryButton";
import { useData } from "./DataContext";
import { Input } from "./components/Input";
import { Form } from "./components/Form";
import Typography from "@material-ui/core/Typography";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a rquired field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a rquired field"),
});

export const Step1 = () => {
  const { setValues, data } = useData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/step2");
    setValues(data);
  };
  console.log("error", errors);
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("firstName", { required: true })}
          type="text"
          label="First Name"
          error={!!errors?.firstName}
          helperText={errors?.firstName?.message}
        />

        <Input
          {...register("lastName", { required: true })}
          type="text"
          label="Last Name"
          error={!!errors?.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
