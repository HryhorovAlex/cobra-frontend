import React from 'react';
import './SignUp.styles.scss';
import Cobras from '../../assets/images/cobra-main.png';
import { SignUpForm } from './SignUpForm';
import { useSignUpHooks } from './use-sign-up-hooks';

interface SignUpProps {
  history: any
};

export const SignUp: React.FC<SignUpProps> = ({history}) => {
  const { loading, error, signUp } = useSignUpHooks();
  return (
    <div className='page sign-up flex-row-fs-fs'>
      <div className='sign-up__info-block'>
        <div className='info-block__img-wrapper flex-row-fs-fe'>
          <span className='sign-up__cobra-title'>Project Cobra Registration</span>
          <img src={Cobras} width='100px' height='100px' alt="snake cobra"/>
        </div>
        <span className='sign-up__agreement'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Veniam porro numquam quis odit voluptatem commodi rerum ipsa 
          totam suscipit excepturi. Nulla, vel. Odio eaque minima quidem, harum labore doloribus incidunt?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Veniam porro numquam quis odit voluptatem commodi rerum ipsa 
          totam suscipit excepturi. Nulla, vel. Odio eaque minima quidem, harum labore doloribus incidunt?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Veniam porro numquam quis odit voluptatem commodi rerum ipsa 
          totam suscipit excepturi. Nulla, vel. Odio eaque minima quidem, harum labore doloribus incidunt?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Veniam porro numquam quis odit voluptatem commodi rerum ipsa 
          totam suscipit excepturi. Nulla, vel. Odio eaque minima quidem, harum labore doloribus incidunt?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Veniam porro numquam quis odit voluptatem commodi rerum ipsa 
          totam suscipit excepturi. Nulla, vel. Odio eaque minima quidem, harum labore doloribus incidunt?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Veniam porro numquam quis odit voluptatem commodi rerum ipsa 
          totam suscipit excepturi. Nulla, vel. Odio eaque minima quidem, harum labore doloribus incidunt?
        </span>
      </div>
      <div className='sign-up__form-wrapper'>
        <SignUpForm
          loading={loading}
          error={error}
          handleSubmit={signUp}
        />
      </div>
    </div>
  )
}

{/* handleSubmit={(values: any) => {
          console.log('Cobras Submit', values)
          history.push('/main/home')
        }}/</div> */}