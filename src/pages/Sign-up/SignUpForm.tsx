import React from 'react';
import './SignUp.styles.scss';
import { Formik } from 'formik';
import { Button, Checkbox, TextInput } from '../../components';

interface SignUpFormProps {
  handleSubmit: Function;
  loading: boolean;
  error: any;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({handleSubmit}) => {

  return (
    <div className='sign-up__form'>
       <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
       >
         {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         setFieldValue
         /* and other goodies */
       }) => (
         <form className='flex-col-fs-fs' onSubmit={handleSubmit}>
          <TextInput 
            className='sign-up__text-input'
            onChange={handleChange}
            name='name'
            label='First Name'
          />
          <TextInput
            className='sign-up__text-input'
            onChange={handleChange}
            name='lastName'
            label='Last Name'
          />
          <TextInput 
            className='sign-up__text-input' 
            onChange={handleChange} name='nickname' 
            label='Nick Name' 
          />
          <TextInput 
            className='sign-up__text-input' 
            onChange={handleChange} 
            name='phone' 
            label='Phone'
          />
          <TextInput 
            className='sign-up__text-input' 
            onChange={handleChange} 
            name='email' 
            label='Email'
            />
          <TextInput 
            className='sign-up__text-input' 
            onChange={handleChange} 
            name='password' 
            label='Password'
          />
          <TextInput 
            className='sign-up__text-input' 
            onChange={handleChange} 
            name='repeatPassword' 
            label='Password Again'
          />
          <Checkbox
            label='Agreement'
            className='sign-up__text-input' 
            onChange={() => setFieldValue('agreement', !values.agreement)}
            value={values.agreement}
          />
          <div className='sign-up__submit-wrapper flex-row-fe-fc'>
            <Button label='Submit Cobras' type='submit' />
          </div>
         </form>
       )}
       </Formik>
    </div>
  )
}

const initialValues = {
  name: '',
  lastName: '',
  nickname: '',
  phone: '',
  email: '',
  password: '',
  repeatPassword: '',
  agreement: false
}