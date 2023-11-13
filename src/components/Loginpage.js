import React from 'react';
import Input from '../components/input/Input';
import ButtonForm from './ButtonForm';

const Loginpage = () => {
  return (
    <div>
      <form>
        <Input label="Email" type="email" required/>
        <Input label="Senha" type="password" required/>
        <ButtonForm text="Entrar"/>
      </form>
    </div>
  );
};

export default Loginpage;
