import * as Yup from "yup";
 export const LoginSchema = Yup.object().shape({
    name:Yup.string().required('Name is required'),
    email: Yup.string().required('email is required').email("Invalid email"),
    password:Yup.string().required('Password is required')
    .min(8,"Minimum length of password 8").max(20,"Minimum length of password 20"),
    gender:Yup.string().required('Gender is required'),
    profession:Yup.string().required(" profession is required"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match')
  });