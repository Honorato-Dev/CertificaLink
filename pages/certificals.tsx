import React, { useState } from 'react';
import Layout from '@/components/Layout';

import db from '@/utils/db';
import Certifical from '@/models/Certifical';
import CertificalItem from '@/components/CertificalItem';
import { useRouter } from 'next/router';


const CertificalScreen = ({ certificals }: any) => {
  const originalArray = certificals;

  

  return (
    <Layout title="Certified page">
      <div className=" m-8 rounded-sm">
        <h1 className="flex justify-center text-sm font-semibold py-12 md:text-2xl lg:text:2xl">
          <span className="  rounded-full uppercase tracking-[20px]">
            Certificates
          </span>
        </h1>
        <div className="grid grid-cols-1 m-4 gap-2 pt-8 md:grid-cols-3 lg:grid-cols-2">
          {/* LastElement */}
          {originalArray.map((certifical: any) => (
            <CertificalItem
              certifical={certifical}
              key={certifical.slug}
            ></CertificalItem>
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
      certificals: certificals.map(db.convertDocToObj),
    },
  };
}

export default CertificalScreen;
