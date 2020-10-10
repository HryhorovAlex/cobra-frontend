import React from 'react';
import { Button, TextInput } from '../../components';
import './Login.styles.scss';
import Cobras from '../../assets/images/cobra-main.png';

interface LoginProps {
  history: any;
};

export const Login: React.FC<LoginProps> = ({history}) => {
  return (
    <div className='page login flex-col-fs-fc'>
      <div className='flex-row-fc-fc login-logo-block'>
        <img src={Cobras} width='100px' height='100px' alt="snake cobra"/>
        <span className='login-title'>
          Login With Cobras
        </span>
      </div>
      <TextInput className='login__input' label='Your Nickname'/>
      <TextInput className='login__input' label='Your Password'/>
      <div className='login__submit-block flex-row-sb-fc'>
        <Button label='Login' onClick={() => history.push('/main/home')} />
        <span>Or Sign Up With Cobras</span>
        <Button label='Sign Up' onClick={() => history.push('/sign-up')} />
      </div>
    </div>
  )
}
