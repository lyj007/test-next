import Head from 'next/head';
import { useEffect } from 'react';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from './header';
import styles from './styles/layout.module.less';

const inter = Inter({ subsets: ['latin'] })

export default function Home(props: any) {

  return (
    <>
      <Head>
        <title>Create Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <div className={styles['g-content']}>
          {props.children}
        </div>
      </div>
    </>
  )
};

export const NestedLayout = (props: any) => {
  return (
    <div>
      <div>嵌套布局</div>
      {props.children}
    </div>
  )
};

export const LoginLayout = (props: any) => {
  return (
    <>
      <Head>
        <title>next login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>login布局</div>
        {props.children}
      </div>
    </>
  )
}
