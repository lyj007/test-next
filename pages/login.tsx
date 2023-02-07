import { LoginLayout } from '../components/Layout';
const LoginPage = (props: any) => {
  return (
    <div>登录页面</div>
  )
};

LoginPage.getLayout = (page: any) => {
  return (
    <LoginLayout>{page}</LoginLayout>
  )
}

export default LoginPage;