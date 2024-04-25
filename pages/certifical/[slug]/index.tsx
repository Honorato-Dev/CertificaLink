import Layout from '@/components/Layout';
import Certifical from '@/models/Certifical';
import { BiArrowBack } from 'react-icons/bi';
import db from '@/utils/db';
import Image from 'next/image';
import Link from 'next/link';
import { BsWhatsapp, BsArrowDownLeft } from 'react-icons/bs';
import React from 'react';
import Alert from '@/components/Alert';

const CertificalScreen = (props: any) => {
  const { certifical } = props;

  if (!certifical) {
    return <div>Produto não encontrado</div>;
  }

  function redirecionarWhatsapp() {
    const phone = certifical.contact; // número de telefone
    const message = 'Olá, estou entrando em contato através do seu site.'; // mensagem que será enviada

    // constrói o link com o número de telefone e a mensagem
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // redireciona para o link do WhatsApp
    window.location.href = url;
  }

  return (
    <Layout title="">
      <div className="py-8">
        <Alert message="The CERTIFICALINK APP doesn't guarantee the information and is not responsible for false information on this platform." />
      </div>
      <div className="  mt-8 mb-8 rounded-md">
        <Link
          className="text-indigo600 font-semibold flex py-3 px-3"
          href="/certificals"
        >
          <span className="py-1 px-1 ">
            <BiArrowBack />
          </span>
          To go back
        </Link>

        <div className="flex justify-center py-6">
          <h1 className="text-3xl font-semibold">
            <span className="  rounded-full p-2 ">{certifical.name}</span>
          </h1>
        </div>

        <div className="grid  md:grid-cols-1 md:gap-1">
          <div className="flex flex-col items-center justify-center p-5 md:col-span-1">
            <Image
              src={certifical.image}
              alt={certifical.title}
              width={840}
              height={640}
            />
          </div>
          <div className="flex justify-between px-3 py-3">
            <div className=" ">
              <p className=" font-semibold   p-2">
                {' '}
                <span className="  text-xs  lg:text-2xl font-semibold ">
                  {certifical.date}
                </span>
              </p>
            </div>
           
            <div className="">
              <p className=" text-xs lg:text-xl font-medium">{certifical.description}</p>
            </div>
            
            <div className="">
          
              <p className="text-xs lg:text-xl ">{certifical.contact}</p>
            </div>
            
          </div>
          <div className="p-4 flex justify-between">
            <h1 className="mb-4 text-base lg:text-3xl font-semibold pt-8">{` CL -  ${certifical._id}`}</h1>
            <h2 className="flex justify-center py-8 ">
              <p className="text-3xl font-semibold   p-2">
                {' '}
                <span className="text-sm lg:text-2xl font-semibold ">
                  {certifical.duration} Hours
                </span>
              </p>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// backend
export async function getServerSideProps(context: any) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const certifical = await Certifical.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      certifical: certifical ? db.convertDocToObj(certifical) : null,
    },
  };
}

export default CertificalScreen;
