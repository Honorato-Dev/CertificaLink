import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signIn, useSession } from 'next-auth/react';
import * as Yup from 'yup';
import { getError } from '@/utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '@/components/Layout';

interface LoginFormValues {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, 'The username needs to have at least 4 characters')
    .required('The username is mandatory'),
  email: Yup.string()
    .email('Invalid email format')
    .required('The email is mandatory'),
  password: Yup.string()
    .min(6, 'The password needs to have at least 6 characters')
    .required('The password is mandatory'),
  confirmpassword: Yup.string()
    .min(6, 'Password confirmation needs to have at least 4 characters')
    .required('Password confirmation is mandatory')
    .oneOf([Yup.ref('password')], 'Password need to combine'),
});

const initialValues: LoginFormValues = {
  name: '',
  email: '',
  password: '',
  confirmpassword: '',
};

const RegisterScreen = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect }: any = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const handleSubmit = async ({ name, email, password }: LoginFormValues) => {
    // Submit login data to the server

    try {
      await axios.post('/api/auth/signup', { name, email, password });

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
    <Layout title="Registrar">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mx-auto max-w-screen-md">
          <h1 className="mb-4 text-3xl font-semibold">Create New Account</h1>
          <div className="bg-white p-3 rounded-md bg-opacity-80">
            <div className="mb-4">
              <label htmlFor="email" className="text-lg font-semibold">
                User name
              </label>
              <Field
                autoFocus
                className="w-full"
                type="name"
                id="name"
                name="name"
              />
              <div className="text-red-600">
                <ErrorMessage name="name" />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <Field
                autoFocus
                className="w-full"
                type="email"
                id="email"
                name="email"
              />
              <div className="text-red-600">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-lg font-semibold">
                Password
              </label>
              <Field
                autoFocus
                className="w-full"
                type="password"
                id="password"
                name="password"
              />
              <div className="text-red-600">
                <ErrorMessage name="password" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-lg font-semibold">
                Confirm password
              </label>
              <Field
                autoFocus
                className="w-full"
                type="password"
                id="confirmpassword"
                name="confirmpassword"
              />
              <div className="text-red-600">
                <ErrorMessage name="confirmpassword" />
              </div>
            </div>
            <div className="mb-4">
              <button type="submit" className="border border-zinc-600 p-2 rounded-sm bg-green-300 hover:bg-green-500">
                Register
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </Layout>
  );
};
export default RegisterScreen;
