import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { NoContent } from '@/components/features/no-content';

export default NoContent();

export const getServerSideProps: GetServerSideProps = async (
  c: GetServerSidePropsContext,
) => {
  return {
    redirect: {
      destination: '/signin',
      permanent: false,
    },
  };
};
