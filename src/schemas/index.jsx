//yupSchema
import * as yup from "yup";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
export const basicSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email").required("Required"),
  name: yup.string().min(3).required("Required"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRegex, { message: "Create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

//oneOf = ilk parametresi dizi. is of the same value as the pass
// age: yup
//   .number("Please enter a valid number")
//   .positive("Please enter a valid number")
//   .integer("Please enter a valid number")
//   .required("Required"),
