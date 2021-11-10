import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Page = () => {
  const router = useRouter();
  console.log(router)
  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content with the query of {router.query.title}</p>
    </Layout>
  );
};

export default Page;
