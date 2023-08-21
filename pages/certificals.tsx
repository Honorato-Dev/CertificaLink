import React, { useState } from 'react';
import Layout from '@/components/Layout';

import { BiSearch } from 'react-icons/bi';
import db from '@/utils/db';
import Certifical from '@/models/Certifical';
import CertificalItem from '@/components/CertificalItem';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CertificalScreen = ({ products }: any) => {
  const lastElement = [products[products.length - 1]];
  const penultimateElement = [products[products.length - 2]];
  function returnListWithoutTheLastTwo(array: any) {
    return array.slice(0, -2);
  }
  const originalArray = products;
  const listWithoutTheLastTwo = returnListWithoutTheLastTwo(originalArray);
  const reverseArr = listWithoutTheLastTwo.slice().reverse();

  const [query, setQuery] = useState('');
  const router = useRouter();
  const submitHandler = (e: any) => {
    e.preventDefault();
    router.push(`/searchproduct?query=${query}`);
  };
  return (
    <Layout title="Página Certificados">
      <div className='bg-white bg-opacity-80 m-8 rounded-md'>

        <div className="flex justify-center md:hidden absolute   lg:hidden absolute ">
        <Link
          href="/searchproduct"
          className="rounded  bg-green500 p-1 text-sm dark:text-black"
        >
          <BiSearch className="h-10 w-10" />
        </Link>
      </div>
      <div className="py-10">
        <form
          onSubmit={submitHandler}
          className="mx-auto hidden w-full justify-center md:flex"
        >
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            className="rounded-tr-none rounded-br-none p-1 text-sm focus:ring-0"
            placeholder="Procurar produtos"
          />
          <button
            className="rounded rounded-tl-none rounded-bl-none bg-green500 p-1 text-sm dark:text-black"
            type="submit"
            id="button-addon2"
          >
            <BiSearch className="h-5 w-5" />
          </button>
        </form>
      </div>

      <h1 className="flex justify-center text-sm font-semibold py-12 md:text-2xl lg:text:2xl">
        <span className="  rounded-full uppercase tracking-[20px]">Vendas</span>
      </h1>
      <div className="grid grid-cols-1 gap-2 pt-8 md:grid-cols-3 lg:grid-cols-2">
        {/* LastElement */}
        {lastElement.map((certifical: any) => (
          <CertificalItem certifical={certifical} key={certifical.slug}></CertificalItem>
        ))}

        {/* penultimateElemnt */}
        {penultimateElement.map((certifical: any) => (
          <CertificalItem certifical={certifical} key={certifical.slug}></CertificalItem>
        ))}
      </div>

      {/*ALL Elements*/}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {reverseArr.map((certifical: any) => (
          <CertificalItem certifical={certifical} key={certifical.slug}></CertificalItem>
        ))}
      </div>
      </div>
      
    </Layout>
  );
};

export async function getServerSideProps() {
  await db.connect();
  const certificals: any = await Certifical.find().lean();
  return {
    props: {
      certifical: certificals.map(db.convertDocToObj),
    },
  };
}
CertificalScreen.auth = true;
export default CertificalScreen;
