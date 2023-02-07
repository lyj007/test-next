

import { Inter } from '@next/font/google'
import Layout, { NestedLayout } from '../components/Layout';
import HomePage from './home';

const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  return (
    <HomePage />
  )
};

(HomePage as any).getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {/* <NestedLayout>{page}</NestedLayout> */}
      {page}
    </Layout>
  )
}
