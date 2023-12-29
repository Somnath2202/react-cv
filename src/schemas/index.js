import * as Yup from "yup";


export const ContactSubmit = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email"),
  mob: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('Phone number is required'),
});