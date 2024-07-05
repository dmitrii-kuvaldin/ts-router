import { useFormik } from 'formik';
import { FC } from 'react';
// import cn from 'classnames'
import * as Yup from 'yup';
import styles from './style.module.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const MyForm: FC = () => {

  const schema = Yup.object().shape({
    name: Yup.string().required('Имя обязательно'),
    age: Yup.number().positive('Возраст должен быть положительным числом').integer("Возраст должен быть целым числом"),
    email: Yup.string().email('Некорректный формат email').required('Email обязателен')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    } as FormValues,
    validationSchema: schema,
    onSubmit: (values: FormValues) => {
      console.log(values);
    }
  });


  return (
    <div className={styles.container}>
      <span>MyForm</span>
      <form onSubmit={formik.handleSubmit}>
        <input type="text"
          id='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className={styles.input} />
        <input type="text" id='firstName' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} className={styles.input} />
        <input type="text" id='lastName' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} className={styles.input} />
        <button className={styles.button} type='submit'>print</button>
      </form>
    </div>
  );
};

export default MyForm;



