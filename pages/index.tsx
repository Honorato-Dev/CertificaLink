import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { Bowlby_One } from 'next/font/google';
import slides from '@/mock.json';
import Slider from '@/components/Slider';


const inter = Inter({ subsets: ['latin'] });

const bowlby = Bowlby_One({weight:'400' ,subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-col text-center  space-y-16 h-screen ">
          <div className={bowlby.className}>
            <h1 className='text-4xl  lg:text-6xl bg-gradient-to-r from-blue-200 via-blue-400 to-blue-500 text-transparent bg-clip-text'>CertificaLink</h1>
          </div>
          <div className=''>
            <Slider  slides={slides}/>
          </div>
          <div>
          <Link className='' href='/'>Get Started</Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
