import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';

// 页面构建时运行
export const getStaticProps: GetStaticProps = async(context) => {
  const postsDirectory = path.join(process.cwd(), 'pages');
  const filenames = fs.readdirSync(postsDirectory);
  console.log('==filenames', filenames);
  // const res = await fetch(`http://localhost:1337/api/liao-yjs`);
  // const post = await res.json();

  // 通过 props 参数向页面传递博文的数据
  return { props: { post: [], filenames } }
}

const AboutPage = (props: any) => {
  console.log('==props', props);
  return (
    <div>about</div>
  )
};

export default AboutPage;