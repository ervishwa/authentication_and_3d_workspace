import * as Yup from "yup";

export const signupSchema = Yup.object({
  username: Yup.string().min(5).max(25).required("Please Enter your name"),
  email: Yup.string().email().required("Please Enter your email"),
  password : Yup.string().required("Password is required").matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
  ),
  confirmpassword: Yup.string()
  .required('Confirm Password is required')
  .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});