//import Link from 'next/link';
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { getError } from '@/utils/error';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface FormType {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const { data: session } = useSession();
  const router: any = useRouter();
  const { redirect }: any = router.query;
  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  const submitHandler = async ({ email, password }: FormType) => {
    try {
      const result: any = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Login">
      <div className="pt-14">
        <form
          className="mx-auto max-w-screen-md bg-white bg-opacity-80   rounded-lg p-6"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1 className="mb-4 text-xl">Login</h1>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="w-full"
              id="email"
              autoFocus
              {...register('email', {
                required: 'Please enter a valid email',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: 'Por please use a valid email format',
                },
              })}
            />
            {errors.email && (
              <div className="text-red">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="w-full"
              id="password"
              autoFocus
              {...register('password', {
                required: 'Please enter a valid password',
                minLength: {
                  value: 5,
                  message: 'The password must have at least 5 characters',
                },
              })}
            />
            {errors.password && (
              <div className="text-red">{errors.password.message}</div>
            )}
          </div>
          <div className="mb-4">
            <button className="border border-zinc-500 bg-indigo-300 hover:bg-indigo-500 p-3 rounded-sm">Login</button>
          </div>
          <div className="mb-4">
           Havent you registered yet? &nbsp;
            <Link
              className="text-indigo-600  rounded-lg p-1 font-semibold"
              href="/register"
            >
              Sing-up
            </Link>
          </div>
        </form>
        <p>To manage app:</p>
        <p>Admin: admin@certificalink.com</p>
        <p>Password: 123456</p>
      </div>
    </Layout>
  );
};

export default LoginScreen;
