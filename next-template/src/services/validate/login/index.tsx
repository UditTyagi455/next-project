import * as yup from 'yup';

export const initialValues = {
  username: '',
  password: '',
};
export  const validationSchema = yup.object().shape({
  username: yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(30, 'Password must not exceed 40 characters'),
});