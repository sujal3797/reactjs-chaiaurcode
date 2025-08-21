import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError('');
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center py-10">
      <div className="mx-auto w-full max-w-lg bg-white rounded-xl p-10 shadow-lg border border-gray-200">
        <div className="mb-2 flex justify-center">
          <Logo />
        </div>
        <h2 className="text-center text-2xl font-bold font-heading leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-secondary-text">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-accent hover:text-accent-hover transition-all duration-200"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5 mt-8">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register('name', {
                required: true,
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register('email', {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    'Email address must be a valid address',
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: true,
              })}
            />
            <Button type="submit">Create Account</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;