import { useFormik } from "formik";
import * as Yup from 'yup';

import { LoginFormWrapper, LoginFormTitle, InputsContainer } from "./styles";
import { LoginFormValues, LOGIN_FORM_NAMES } from './types'
import InputNew from '../InputNew/InputNew';
import Button from '../button/Button';

function LoginForm() {

  const shema = Yup.object().shape({
    [LOGIN_FORM_NAMES.EMAIL]: Yup.string().required('Field email required').email('Field type email'),
    [LOGIN_FORM_NAMES.PASSWORD]: Yup.number()
      .required('Field password required')
      .typeError('Password must be number')
      .min(10, 'Min 10')
      .max(15, 'Max 15')
  })

  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_NAMES.EMAIL]: '',
      [LOGIN_FORM_NAMES.PASSWORD]: ''
    } as LoginFormValues,
    validationSchema: shema,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: (values: LoginFormValues) => {
      console.log(values)
    }
  })

  // console.log(formik)

  // console.log(formik.errors[LOGIN_FORM_NAMES.PASSWORD])



  return (
    <LoginFormWrapper onSubmit={formik.handleSubmit}>
      <LoginFormTitle>Login form</LoginFormTitle>
      <InputsContainer>
        <InputNew
          name={LOGIN_FORM_NAMES.EMAIL}
          placeholder="Enter your email"
          label="Email"
          value={formik.values[LOGIN_FORM_NAMES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.EMAIL]}
        />
        <InputNew
          name={LOGIN_FORM_NAMES.PASSWORD}
          // type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values[LOGIN_FORM_NAMES.PASSWORD]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.PASSWORD]}
        />
        <Button buttonText="Login" buttonType='submit' />
      </InputsContainer>
    </LoginFormWrapper>
  );
}

export default LoginForm;
