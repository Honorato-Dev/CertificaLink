import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Layout from '@/components/Layout';
import { getError } from '@/utils/error';
import { BiArrowBack } from 'react-icons/bi';

type FormValues = {
  name: string;
  slug: string;
  category: string;
  image: File;
  date: string;
  description: string;
  duration:string;
  contact: string;
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return { ...state, loadingUpload: false, errorUpload: '' };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };
    default:
      return state;
  }
}

const AdminCertificalEditScreen = () => {
  const router = useRouter();
  const { query } = useRouter();
  const certificalId: any = query.id;
  const [{loading, error, loadingUpdate, loadingUpload}, dispatch] = useReducer(reducer, {
    loading:true,
    error:''
});

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        dispatch({ type: 'FETCH_RESQUEST' });
        const { data } = await axios.get(
          `/api/admin/certificals/${certificalId}`
        );
        dispatch({ type: 'FETCH_SUCCESS' });
        setValue('name', data.name);
        setValue('slug', data.slug);
        setValue('category', data.category);
        setValue('image', data.image);
        setValue('date', data.date);
        setValue('description', data.description);
        setValue('duration', data.duration);
        setValue('contact', data.contact);
      } catch (err) {
        
        dispatch({ type: 'FETCH_FAIL' });
      }
    };
    fetchData();
  }, [certificalId, setValue]);

  const uploadHandler = async (e: any, imageField: any = 'image') => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const {
        data: { signature, timestamp },
      } = await axios('/api/admin/cloudinary-sign');

      const file = e.target.files[0];
      const formData: any = new FormData();
      formData.append('file', file);
      formData.append('signature', signature);
      formData.append('timestamp', timestamp);
      formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      const { data } = await axios.post(url, formData);

      dispatch({ type: 'UPLOAD_SUCCESS' });
      setValue(imageField, data.secure_url);
      toast.success('File upload successfully');
    } catch (err) {
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };

  const submitHandler = async ({
      

    name,
    
    slug,
    category,
    image,
    date,
    description,
    duration,
    contact,
  }: any) => {
    console.log('erroooooooooooo')
    try {
      console.log('erroooooooooooo')
      dispatch({ type: 'UPDATE_REQUEST' });
      
      await axios.put(`/api/admin/certificals/${certificalId}`, {
        name,
        slug,
        category,
        image,
        date,
        description,
        duration,
        contact,
      });
      dispatch({ type: 'UPDATE_SUCCESS' });
      toast.success('Successful product successfully!');
      router.push('/admin/certificals');
    } catch (err) {
        console.log('erro aqui')
      dispatch({ type: 'UPDATE_FAIL', payload: getError(err) });
    }
  };

  return (
    <Layout title={`Certifical: ${certificalId}`}>
      <div className="flex justify-center   ">
        
        <div className=" md:col-span-3 max-w-3xl ">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <form
              className="mx-auto max-screen-md"
              onSubmit={handleSubmit(submitHandler)}
            >
              <h1 className="mb-4 text-3xl font-semibold pt-8">{` Certifical ${certificalId}`}</h1>
              <div className=" rounded-md bg-opacity-80 m-2 p-2">
                <div className="mb-4">
                  <label className="font-semibold" htmlFor="name">
                    Name{' '}
                    <span className="text-graym ">
                      (Enter the certification name)
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full"
                    id="name"
                    autoFocus
                    {...register('name', {
                      required: 'Insira o nome do certificação',
                    })}
                  />
                  {errors.name && (
                    <div className="text-red">{errors.name.message}</div>
                  )}
                </div>
                <div className="mb-4">
                  <label className="font-semibold" htmlFor="price">
                    Slug{' '}
                    <span className="text-red-500 ">
                      (PERSONALIZED URL)
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full"
                    id="slug"
                    {...register('slug', {
                      required: 'Insira o slug do produto',
                    })}
                  />
                  {errors.slug && (
                    <div className="text-red">{errors.slug.message}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="font-semibold" htmlFor="category">
                    Category{' '}
                    <span className="text-graym ">
                      (Enter the certification category)
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full"
                    id="category"
                    {...register('category', {
                      required: 'Enter the certification category',
                    })}
                  />
                  {errors.category && (
                    <div className="text-red">{errors.category.message}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="font-semibold" htmlFor="image">
                    Image{' '}
                    <span className="text-red-500 ">
                      (Do not type anything in this field, it will be completed when choosing the file on your device)
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full"
                    id="image"
                    {...register('image', {
                      required: 'Insert the certification image',
                    })}
                  />
                  {errors.image && (
                    <div className="text-red">{errors.image.message}</div>
                  )}
                </div>
                <div className="mb-4">
                  <label className="font-semibold" htmlFor="imageFile">
                    Upload image{' '}
                    <span className="text-graym ">
                      (Choose the image on your device )
                    </span>
                  </label>
                  <input
                    type="file"
                    className="w-full"
                    id="imageFile"
                    onChange={uploadHandler}
                  />
                  {loadingUpload && <div></div>}
                </div>

                <div className="mb-4">
                  <label className="font-semibold" htmlFor="image">
                    Description{' '}
                    <span className="text-graym ">
                      (Insira a descrição da certificação!)
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full"
                    id="description"
                    {...register('description', {
                      required: 'Insert the description of the certification',
                    })}
                  />
                  {errors.description && (
                    <div className="text-red">{errors.description.message}</div>
                  )}
                </div>
                <div className="mb-4">
                  <label className="font-semibold" htmlFor="image">
                    Duration{' '}
                    <span className="text-graym ">
                      (Enter the duration of the course!)
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full"
                    id="duration"
                    {...register('duration', {
                      required: 'Insira a duration do curso',
                    })}
                  />
                  {errors.duration && (
                    <div className="text-red">{errors.duration.message}</div>
                  )}
                </div>
                <div className="mb-4">
                  <label className="font-semibold" htmlFor="image">
                    Institution{' '}
                    <span className="text-graym ">
                      (The name of the institution)
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full"
                    id="contact"
                    {...register('contact', {
                      required: 'Insira o contato do produto',
                    })}
                  />
                  {errors.contact && (
                    <div className="text-red">{errors.contact.message}</div>
                  )}
                </div>
                <div className="mb-4">
                  <label className="font-semibold" htmlFor="image">
                    Data{' '}
                    <span className="text-graym ">
                      (Enter the issuance date in format: 00/00/0000)
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full"
                    id="date"
                    {...register('date', {
                      required: 'Enter the issuance date',
                    })}
                  />
                  {errors.contact && (
                    <div className="text-red">{errors.contact.message}</div>
                  )}
                </div>
                <div className="mb-4">
                  <button disabled={loadingUpdate} className="border border-zinc-400 p-3 bg-blue-500 hover:bg-blue-700">
                    {loadingUpdate ? 'Loading' : 'Update'}
                  </button>
                </div>
                <Link
                  className="text-indigo600 font-semibold flex py-2"
                  href="/admin/certificals"
                >
                  <span className="py-1 px-1 ">
                    <BiArrowBack />
                  </span>
                  To go back
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};
AdminCertificalEditScreen.auth = { adminOnly: true };
export default AdminCertificalEditScreen;
