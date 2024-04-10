import toast from 'react-hot-toast';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SpriteIcon from '../../images/sprite.svg';
import {
  Title,
  StyledInput,
  StyledForm,
  BtnSubmit,
  EyeBtn,
  ErrMsg,
  PasswordLabel,
} from './Auth.styled';
import { auth } from '../../firebase';
import { AuthProvider } from './Auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const Registration = Yup.object({
  name: Yup.string()
    .min(4, `Minimum 4 letter`)
    .max(20, `Maximum 20 letter`)
    .required(`This ia a required field`),
  email: Yup.string()
    .email(`Invalis email adress`)
    .required(`This is a required field`),
  password: Yup.string()
    .min(4, `Must least 4 symbols`)
    .max(64, `At most 64 symbols`)
    .required(`This is a required field`),
});

export const SignUp = ({ onRequestclose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      toast.success(`Welcome, ${name}`, {
        duration: 5000,
        position: 'top-right',
        icon: '👋',
      })
    );
    resetForm();
    onRequestclose().catch((error) => {
      toast.error(`Have a problem, ${error}`, {
        duration: 5000,
        position: 'top-right',
      });
    });
  };

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <Formik
        initialValues={{ user: '', email: '', password: '' }}
        validationSchema={Registration}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <Title>Registration</Title>
          <p>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </p>

          <label aria-label="Name for registration">
            <StyledInput type="text" name="name" placeholder="Name" />
            <ErrMsg name="name" component="div" />
          </label>

          <label aria-label="Email for registration">
            <StyledInput type="email" name="email" placeholder="Email" />
            <ErrMsg name="email" component="div" />
          </label>

          <PasswordLabel aria-label="Password for registration">
            <StyledInput
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
            />
            <ErrMsg name="password" component="div" />
            <EyeBtn onClick={() => handleTogglePassword()} type="button">
              <svg width="20" height="20">
                <use
                  xlinkHref={
                    showPassword
                      ? `${SpriteIcon}#icon-eye`
                      : `${SpriteIcon}#icon-eye-off`
                  }
                />
              </svg>
            </EyeBtn>
          </PasswordLabel>

          <BtnSubmit type="submit">
            <span>Sign Up</span>
          </BtnSubmit>
        </StyledForm>
      </Formik>
      <AuthProvider onRequestClose={onRequestclose} />
    </>
  );
};
