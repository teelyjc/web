import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { NoContent } from '@/components/features/no-content';
import { RoutePath } from '@/constants/route-paths';

export const getServerSideProps: GetServerSideProps = async (
  c: GetServerSidePropsContext,
) => {
  return {
    props: {},
    redirect: {
      destination: RoutePath.SIGNIN,
      permanent: false,
    },
  };
};

export default NoContent();
