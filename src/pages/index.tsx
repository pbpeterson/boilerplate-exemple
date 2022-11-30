import { GetStaticProps } from 'next';
import { HomeTemplate } from '@/templates/Home/index';

export type HomeProps = {
  textInfo: string;
};

export default function Home({ textInfo }: HomeProps) {
  return <HomeTemplate textInfo={textInfo} />;
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      textInfo: 'We will change your life with technology',
    },
  };
};
