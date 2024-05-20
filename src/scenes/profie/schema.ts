import * as yup from "yup";

export const schema = yup.object().shape({
    name: yup.string().required('Name is required').min(4),
    age: yup.number().min(18, 'At least 18 years old').integer('should be a number').required('Age is Required')
        .typeError('should be a number'),
    email: yup.string().email().required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    access: yup.string().required('Access type is required'),
});