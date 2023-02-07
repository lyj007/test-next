import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

// 页面构建时运行
export const getStaticProps: GetStaticProps = async(context) => {
   // params 包含此片博文的 `id` 信息。
  // 如果路由是 /1，那么 params.id 就是 1
  // console.log('==context?', context.params);
  // const res = await fetch(`http://localhost:1337/api/categories`);
  // const post = await res.json();

  const db = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  };
  console.log('==??db', db);

  // 通过 props 参数向页面传递博文的数据
  return { props: { post: [] }, revalidate: 1 }
}

export const getStaticPaths: GetStaticPaths = async()=> {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  }
}

const AnyPage = () => {
  const router = useRouter();
  console.log('=process.env.DB_HOST', process.env.NEXT_PUBLIC_NAME);
  return (
    <div onClick={() => router.back()}>动态路由id{router.query?.id}</div>
  )
};

export default AnyPage;